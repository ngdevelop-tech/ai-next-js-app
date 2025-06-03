#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const PACKAGES_DIR = './packages';
const TYPES_OUTPUT_DIR = './types/packages';
const TEMP_TS_DIR = './temp-ts';

// Ensure output directory exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Clean directory
function cleanDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

// Convert JS/JSX files to TS/TSX with type annotations
function convertJSToTS(content, filePath) {
  const isReactComponent = content.includes('import React') || 
                          content.includes('from "react"') || 
                          content.includes('from \'react\'') ||
                          content.includes('jsx') ||
                          content.includes('<') && content.includes('>');
  
  let converted = content;
  
  // Add React import if it's a component and doesn't have it
  if (isReactComponent && !content.includes('import React')) {
    converted = `import React from 'react';\n${converted}`;
  }
  
  // Add basic type annotations for common patterns
  converted = converted
    // Function components
    .replace(/export\s+default\s+function\s+(\w+)\s*\(([^)]*)\)\s*{/g, (match, name, params) => {
      const typedParams = params.split(',').map(param => {
        const trimmed = param.trim();
        if (!trimmed) return trimmed;
        if (trimmed.includes(':')) return trimmed; // Already typed
        if (trimmed.includes('props') || trimmed.includes('...')) {
          return `${trimmed}: any`;
        }
        return `${trimmed}: any`;
      }).join(', ');
      return `export default function ${name}(${typedParams}): React.ReactElement {`;
    })
    // Arrow function components
    .replace(/const\s+(\w+)\s*=\s*\(([^)]*)\)\s*=>/g, (match, name, params) => {
      const typedParams = params.split(',').map(param => {
        const trimmed = param.trim();
        if (!trimmed) return trimmed;
        if (trimmed.includes(':')) return trimmed;
        if (trimmed.includes('props') || trimmed.includes('...')) {
          return `${trimmed}: any`;
        }
        return `${trimmed}: any`;
      }).join(', ');
      return `const ${name} = (${typedParams}): React.ReactElement =>`;
    })
    // Hook functions
    .replace(/export\s+default\s+function\s+(use\w+)\s*\(([^)]*)\)\s*{/g, (match, name, params) => {
      const typedParams = params.split(',').map(param => {
        const trimmed = param.trim();
        if (!trimmed) return trimmed;
        if (trimmed.includes(':')) return trimmed;
        return `${trimmed}: any`;
      }).join(', ');
      return `export default function ${name}(${typedParams}): any {`;
    })
    // Regular exported functions
    .replace(/export\s+function\s+(\w+)\s*\(([^)]*)\)\s*{/g, (match, name, params) => {
      const typedParams = params.split(',').map(param => {
        const trimmed = param.trim();
        if (!trimmed) return trimmed;
        if (trimmed.includes(':')) return trimmed;
        return `${trimmed}: any`;
      }).join(', ');
      return `export function ${name}(${typedParams}): any {`;
    });
  
  return converted;
}

// Copy and convert package files
function processPackage(packageName) {
  const srcDir = path.join(PACKAGES_DIR, packageName);
  const tempDir = path.join(TEMP_TS_DIR, packageName);
  
  console.log(`Processing package: ${packageName}`);
  
  // Create temp directory
  ensureDir(tempDir);
  
  // Copy and convert files
  function copyFiles(dir, targetDir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const targetPath = path.join(targetDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        ensureDir(targetPath);
        copyFiles(filePath, targetPath);
      } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
        const content = fs.readFileSync(filePath, 'utf8');
        const converted = convertJSToTS(content, filePath);
        const newFileName = file.replace(/\.jsx?$/, file.endsWith('.jsx') ? '.tsx' : '.ts');
        fs.writeFileSync(path.join(targetDir, newFileName), converted);
      } else {
        fs.copyFileSync(filePath, targetPath);
      }
    });
  }
  
  copyFiles(srcDir, tempDir);
}

// Generate TypeScript declarations
function generateDeclarations() {
  console.log('Generating TypeScript declarations...');
  
  // Create a temporary tsconfig for type generation
  const tempTsConfig = {
    compilerOptions: {
      target: "es2020",
      module: "esnext",
      moduleResolution: "bundler",
      lib: ["dom", "es2020"],
      jsx: "react-jsx",
      allowJs: true,
      declaration: true,
      emitDeclarationOnly: true,
      outDir: TYPES_OUTPUT_DIR,
      skipLibCheck: true,
      esModuleInterop: true,
      allowSyntheticDefaultImports: true,
      strict: false
    },
    include: [`${TEMP_TS_DIR}/**/*`],
    exclude: ["node_modules"]
  };
  
  fs.writeFileSync('./temp-tsconfig.json', JSON.stringify(tempTsConfig, null, 2));
  
  try {
    execSync('npx tsc --project temp-tsconfig.json', { stdio: 'inherit' });
    console.log('✅ TypeScript declarations generated successfully!');
  } catch (error) {
    console.error('❌ Error generating TypeScript declarations:', error.message);
  } finally {
    // Cleanup
    if (fs.existsSync('./temp-tsconfig.json')) {
      fs.unlinkSync('./temp-tsconfig.json');
    }
  }
}

// Generate index.d.ts files for each package
function generateIndexFiles() {
  console.log('Generating index.d.ts files...');
  
  const packages = ['design-stack', 'design-stack-icons', 'hooks', 'utils'];
  
  packages.forEach(packageName => {
    const packageTypesDir = path.join(TYPES_OUTPUT_DIR, packageName);
    
    if (fs.existsSync(packageTypesDir)) {
      // Read the generated index.d.ts or create one
      const indexPath = path.join(packageTypesDir, 'index.d.ts');
      
      if (!fs.existsSync(indexPath)) {
        // Generate a basic index.d.ts
        let indexContent = '';
        
        if (packageName === 'design-stack') {
          indexContent = `// Auto-generated types for design-stack package
export * from './modules';
declare module '@/packages/design-stack' {
  export * from './index';
}`;
        } else if (packageName === 'design-stack-icons') {
          indexContent = `// Auto-generated types for design-stack-icons package
export * from './src';
declare module '@/packages/design-stack-icons' {
  export * from './index';
}`;
        } else if (packageName === 'hooks') {
          indexContent = `// Auto-generated types for hooks package
export * from './src';
declare module '@/packages/hooks' {
  export * from './index';
}`;
        } else if (packageName === 'utils') {
          indexContent = `// Auto-generated types for utils package
export * from './constants';
export * from './makeDebounce';
export * from './tailwindUtils';
export * from './throttleFn';
declare module '@/packages/utils' {
  export * from './index';
}`;
        }
        
        fs.writeFileSync(indexPath, indexContent);
      }
    }
  });
}

// Create master types index
function createMasterIndex() {
  console.log('Creating master types index...');
  
  const masterIndexContent = `// Auto-generated master types index for packages
export * as DesignStack from './packages/design-stack';
export * as DesignStackIcons from './packages/design-stack-icons';
export * as Hooks from './packages/hooks';
export * as Utils from './packages/utils';

// Re-export everything for convenience
export * from './packages/design-stack';
export * from './packages/design-stack-icons';
export * from './packages/hooks';
export * from './packages/utils';
`;
  
  fs.writeFileSync(path.join('./types', 'index.d.ts'), masterIndexContent);
}

// Main function
function main() {
  console.log('🚀 Starting type generation for packages...');
  
  // Clean previous builds
  cleanDir(TEMP_TS_DIR);
  cleanDir(TYPES_OUTPUT_DIR);
  
  // Ensure directories exist
  ensureDir(TYPES_OUTPUT_DIR);
  ensureDir('./types');
  
  // Get all packages
  const packages = fs.readdirSync(PACKAGES_DIR).filter(item => {
    return fs.statSync(path.join(PACKAGES_DIR, item)).isDirectory();
  });
  
  // Process each package
  packages.forEach(processPackage);
  
  // Generate TypeScript declarations
  generateDeclarations();
  
  // Generate index files
  generateIndexFiles();
  
  // Create master index
  createMasterIndex();
  
  // Cleanup temp directory
  cleanDir(TEMP_TS_DIR);
  
  console.log('✨ Type generation completed!');
  console.log(`📁 Types generated in: ${TYPES_OUTPUT_DIR}`);
  console.log('📄 Master index created at: ./types/index.d.ts');
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main };
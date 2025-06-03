// Global type declarations for packages
declare module "@/packages/design-stack" {
  import { ReactElement, ReactNode } from "react";

  // Common component props
  interface BaseComponentProps {
    children?: ReactNode;
    className?: string;
    id?: string;
  }

  // Export all components with basic typing
  export const Accordion: React.ComponentType<BaseComponentProps>;
  export const Button: React.ComponentType<BaseComponentProps>;
  export const Modal: React.ComponentType<BaseComponentProps>;
  export const Alert: React.ComponentType<BaseComponentProps>;
  export const Badge: React.ComponentType<BaseComponentProps>;
  export const Avatar: React.ComponentType<BaseComponentProps>;
  export const Checkbox: React.ComponentType<BaseComponentProps>;
  export const InputField: React.ComponentType<BaseComponentProps>;
  export const Loader: React.ComponentType<BaseComponentProps>;
  export const Table: React.ComponentType<BaseComponentProps>;
  export const Tabs: React.ComponentType<BaseComponentProps>;
  export const Tooltip: React.ComponentType<BaseComponentProps>;
  export const Card: React.ComponentType<BaseComponentProps>;
  export const Dropdown: React.ComponentType<BaseComponentProps>;
  export const Sidebar: React.ComponentType<BaseComponentProps>;
  export const Header: React.ComponentType<BaseComponentProps>;
  export const Footer: React.ComponentType<BaseComponentProps>;
  export const Navigation: React.ComponentType<BaseComponentProps>;
  export const Form: React.ComponentType<BaseComponentProps>;
  export const TextArea: React.ComponentType<BaseComponentProps>;
  export const Select: React.ComponentType<BaseComponentProps>;
  export const Radio: React.ComponentType<BaseComponentProps>;
  export const Toggle: React.ComponentType<BaseComponentProps>;
  export const Switch: React.ComponentType<BaseComponentProps>;
  export const Slider: React.ComponentType<BaseComponentProps>;
  export const Progress: React.ComponentType<BaseComponentProps>;
  export const Spinner: React.ComponentType<BaseComponentProps>;
  export const Skeleton: React.ComponentType<BaseComponentProps>;
  export const Divider: React.ComponentType<BaseComponentProps>;
  export const Breadcrumb: React.ComponentType<BaseComponentProps>;
  export const Pagination: React.ComponentType<BaseComponentProps>;
  export const Toast: React.ComponentType<BaseComponentProps>;
  export const Notification: React.ComponentType<BaseComponentProps>;
  export const Popover: React.ComponentType<BaseComponentProps>;
  export const Dialog: React.ComponentType<BaseComponentProps>;
  export const Drawer: React.ComponentType<BaseComponentProps>;
  export const Menu: React.ComponentType<BaseComponentProps>;
  export const List: React.ComponentType<BaseComponentProps>;
  export const Grid: React.ComponentType<BaseComponentProps>;
  export const Container: React.ComponentType<BaseComponentProps>;
  export const Layout: React.ComponentType<BaseComponentProps>;
  export const Text: React.ComponentType<BaseComponentProps>;
  export const Heading: React.ComponentType<BaseComponentProps>;
  export const Link: React.ComponentType<BaseComponentProps>;
  export const Image: React.ComponentType<BaseComponentProps>;
  export const Icon: React.ComponentType<BaseComponentProps>;
}

declare module "@/packages/design-stack-icons" {
  import { ComponentType, SVGProps } from "react";

  type IconProps = SVGProps<SVGSVGElement>;

  // Custom icons
  export const AutomationIcon: ComponentType<IconProps>;
  export const DowntimeIcon: ComponentType<IconProps>;
  export const DragFolderIcon: ComponentType<IconProps>;

  // Hero icons (re-exported)
  export const ArrowDownIcon: ComponentType<IconProps>;
  export const CheckIcon: ComponentType<IconProps>;
  export const HomeIcon: ComponentType<IconProps>;
  export const UserIcon: ComponentType<IconProps>;
  export const ArrowUpIcon: ComponentType<IconProps>;
  export const ArrowLeftIcon: ComponentType<IconProps>;
  export const ArrowRightIcon: ComponentType<IconProps>;
  export const PlusIcon: ComponentType<IconProps>;
  export const MinusIcon: ComponentType<IconProps>;
  export const XMarkIcon: ComponentType<IconProps>;
  export const PencilIcon: ComponentType<IconProps>;
  export const TrashIcon: ComponentType<IconProps>;
  export const EyeIcon: ComponentType<IconProps>;
  export const EyeSlashIcon: ComponentType<IconProps>;
  export const HeartIcon: ComponentType<IconProps>;
  export const StarIcon: ComponentType<IconProps>;
  export const ShareIcon: ComponentType<IconProps>;
  export const CopyIcon: ComponentType<IconProps>;
  export const DocumentIcon: ComponentType<IconProps>;
  export const FolderIcon: ComponentType<IconProps>;
  export const DownloadIcon: ComponentType<IconProps>;
  export const UploadIcon: ComponentType<IconProps>;
  export const CloudIcon: ComponentType<IconProps>;
  export const DevicePhoneMobileIcon: ComponentType<IconProps>;
  export const ComputerDesktopIcon: ComponentType<IconProps>;
  export const GlobeAltIcon: ComponentType<IconProps>;
  export const MagnifyingGlassIcon: ComponentType<IconProps>;
  export const AdjustmentsHorizontalIcon: ComponentType<IconProps>;
  export const Cog6ToothIcon: ComponentType<IconProps>;
  export const BellIcon: ComponentType<IconProps>;
  export const EnvelopeIcon: ComponentType<IconProps>;
  export const ChatBubbleLeftIcon: ComponentType<IconProps>;
  export const PhoneIcon: ComponentType<IconProps>;
  export const CalendarIcon: ComponentType<IconProps>;
  export const ClockIcon: ComponentType<IconProps>;
  export const MapPinIcon: ComponentType<IconProps>;
  export const ShoppingCartIcon: ComponentType<IconProps>;
  export const CreditCardIcon: ComponentType<IconProps>;
  export const BanknotesIcon: ComponentType<IconProps>;
  export const ChartBarIcon: ComponentType<IconProps>;
  export const PresentationChartLineIcon: ComponentType<IconProps>;
  export const TableCellsIcon: ComponentType<IconProps>;
  export const ListBulletIcon: ComponentType<IconProps>;
  export const Squares2X2Icon: ComponentType<IconProps>;
  export const PlayIcon: ComponentType<IconProps>;
  export const PauseIcon: ComponentType<IconProps>;
  export const StopIcon: ComponentType<IconProps>;
  export const ForwardIcon: ComponentType<IconProps>;
  export const BackwardIcon: ComponentType<IconProps>;
  export const SpeakerWaveIcon: ComponentType<IconProps>;
  export const SpeakerXMarkIcon: ComponentType<IconProps>;
  export const PhotoIcon: ComponentType<IconProps>;
  export const VideoCameraIcon: ComponentType<IconProps>;
  export const MicrophoneIcon: ComponentType<IconProps>;
  export const LockClosedIcon: ComponentType<IconProps>;
  export const LockOpenIcon: ComponentType<IconProps>;
  export const ShieldCheckIcon: ComponentType<IconProps>;
  export const ExclamationTriangleIcon: ComponentType<IconProps>;
  export const InformationCircleIcon: ComponentType<IconProps>;
  export const QuestionMarkCircleIcon: ComponentType<IconProps>;
  export const CheckCircleIcon: ComponentType<IconProps>;
  export const XCircleIcon: ComponentType<IconProps>;
  export const SunIcon: ComponentType<IconProps>;
  export const MoonIcon: ComponentType<IconProps>;
  export const FireIcon: ComponentType<IconProps>;
  export const BoltIcon: ComponentType<IconProps>;
}

declare module "@/packages/hooks" {
  // Custom hooks
  export function useIsDarkMode(): boolean;
  export function useLatestRef<T>(value: T): React.MutableRefObject<T>;
  export function useMountEffect(callback: () => void): void;
  export function useWindowSize(): { width: number; height: number };
  export function useYearpicker(initialYear?: number): any;
}

declare module "@/packages/utils" {
  // Constants
  export const rateLimitError: string;
  export const EMAIL_VALIDATION_REGEX: RegExp;
  export const INACTIVITY_TIME_LIMIT: number;
  export const ICON_TOKENS: Record<string, string>;
  export const TEXT_TOKENS: Record<string, string>;
  export const BG_TOKENS: Record<string, string>;

  // Utility functions
  export function makeDebounce<T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void;

  export function throttleFn<T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void;
}

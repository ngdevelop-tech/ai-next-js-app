import React from 'react';
/**
 * Custom hook to manage the floating element's placement using Floating UI.
 * It automatically updates the position and handles flipping and shifting
 * based on the available space.
 *
 * @param {('top'|'bottom'|'left'|'right'|'top-start'|'top-end'|'bottom-start'|'bottom-end'|'left-start'|'left-end'|'right-start'|'right-end')} placementSide - The desired initial placement of the floating element relative to the reference element.
 * @returns {{ refs: import('@floating-ui/react').UseFloatingReturn['refs'], placement: import('@floating-ui/react').Placement }} An object containing:
 *  - `refs`: An object containing `reference` and `floating` refs to be assigned to the respective elements.
 *  - `placement`: The final computed placement after applying middleware.
 *
 * @example
 * const MyComponent = (): React.ReactElement => {
 *   const { refs, placement } = useFloatingPlacement('bottom-start');
 *
 *   return (
 *     <>
 *       <button ref={refs.setReference}>Reference Element</button>
 *       <div ref={refs.setFloating} style={{ position: 'absolute', top: 0, left: 0 }}>
 *         Floating Element (Placement: {placement})
 *       </div>
 *     </>
 *   );
 * }
 */
export declare const useFloatingPlacement: (placementSide: any) => React.ReactElement;

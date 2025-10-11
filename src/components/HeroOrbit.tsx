import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({ children, size, rotation, spin = false, spinDuration, orbit = false, orbitDuration }: PropsWithChildren<{ size: number; rotation: number; spin?: boolean; spinDuration?: string; orbit?: boolean; orbitDuration: string; }>) => {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20'>
      <div className={twMerge(orbit === true && "animate-spin")} style={{ animationDuration: orbitDuration, }}>
        <div className="flex items-start justify-start" style={{ height: `${size}px`, width: `${size}px`, transform: `rotate(${rotation}deg)`, }}>
          <div className={twMerge(spin === true && "animate-spin")} style={{ animationDuration: spinDuration, }}>
            <div className='inline-flex' style={{ transform: `rotate(${rotation * -1})`, }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
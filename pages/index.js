"use client";

import { Button } from "@/packages/design-stack";
import { MdSpeed } from "react-icons/md";

export default function Home() {
  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <Button
        aria-label="Test on App Live"
        colors="brand"
        icon={
          <div className="text-xl">
            <MdSpeed />
          </div>
        }
        onClick={() => {
          console.log("Test on App Live clicked");
        }}
        type="button"
        variant="primary"
      >
        Sample Button created from Design Stack
      </Button>
    </div>
  );
}

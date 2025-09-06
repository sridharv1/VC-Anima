import React from "react";
import { Button } from "../../components/ui/button";
import { HeaderSection } from "./sections/HeaderSection";
import { MainContent } from "./sections/MainContent";
import { SidebarSection } from "./sections/SidebarSection";

export const ElementDefault = (): JSX.Element => {
  return (
    <div className="relative bg-white w-full h-screen" data-model-id="4:495">
      {/* Header */}
      <HeaderSection />

      <div className="flex h-[calc(100vh-48px)]">
        {/* Sidebar */}
        <SidebarSection />

        {/* Main content */}
        <MainContent />
      </div>

      {/* Help & support button */}
      <div className="absolute bottom-[96px] right-[23px]">
        <div className="relative">
          <div className="absolute w-[25px] h-[25px] top-0 right-0 bg-[#696969] flex items-center justify-center">
            <img
              className="w-[13px] h-3.5"
              alt="Close"
              src="https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-35.svg"
            />
          </div>

          <Button className="mt-[25px] w-[168px] h-12 bg-[#00838c] rounded-none hover:bg-[#00737f] text-white">
            <div className="flex items-center">
              <img
                className="w-2.5 h-[13px] mr-3.5"
                alt="Help icon"
                src="https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-19.svg"
              />
              <span className="font-normal text-sm">Help &amp; support</span>
            </div>
          </Button>
        </div>
      </div>

      {/* Feedback button (fixed position) */}
      <div className="fixed bottom-[50px] right-[23px]">
        <Button className="w-[168px] h-[50px] bg-[#605e5c] hover:bg-[#504e4c] rounded-sm text-white">
          <div className="flex items-center">
            <img
              className="w-4 h-[15px] mr-3"
              alt="Feedback icon"
              src="https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-30.svg"
            />
            <span className="font-normal text-sm">Give Feedback</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

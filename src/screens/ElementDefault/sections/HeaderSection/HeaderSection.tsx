import { SearchIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const HeaderSection = (): JSX.Element => {
  // Define header icons data for mapping
  const headerIcons = [
    {
      src: "https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-29.svg",
      alt: "Notifications",
      width: "w-4",
      height: "h-[13px]",
      position: "top-px left-0",
    },
    {
      src: "https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-36.svg",
      alt: "Help",
      width: "w-3.5",
      height: "h-4",
      position: "top-4 left-px",
    },
    {
      src: "https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-20.svg",
      alt: "Settings",
      width: "w-3",
      height: "h-3.5",
      position: "top-px left-0.5",
    },
    {
      src: "https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-23.svg",
      alt: "Option 1",
      width: "w-2",
      height: "h-[11px]",
      position: "top-[5px] left-1",
    },
    {
      src: "https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-23.svg",
      alt: "Option 2",
      width: "w-2",
      height: "h-[11px]",
      position: "top-[5px] left-1",
    },
  ];

  return (
    <header className="w-full h-12 bg-[#484644] flex items-center justify-between">
      {/* Hamburger menu */}
      <div className="flex items-center">
        <Button
          variant="ghost"
          className="w-12 h-12 p-0 rounded-none bg-[#484644] hover:bg-[#5a5856]"
        >
          <div className="w-4 h-4 flex items-center justify-center">
            <img
              className="w-[15px] h-[15px]"
              alt="Menu"
              src="https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-37.svg"
            />
          </div>
        </Button>

        {/* Admin center link */}
        <a
          className="h-12 px-2 [font-family:'Segoe_UI-SemiBold',Helvetica] font-semibold text-white text-base leading-[48px] whitespace-nowrap"
          href="https://admin.microsoft.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Microsoft 365 admin center
        </a>
      </div>

      {/* SearchIcon bar */}
      <div className="relative w-[468px] h-8">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <SearchIcon className="h-4 w-4 text-[#616161]" />
        </div>
        <Input
          className="h-8 pl-11 bg-neutral-50 rounded shadow-[0px_0px_2px_#0000001f,0px_1px_2px_#00000024] text-[#616161] text-sm"
          placeholder="Search"
        />
      </div>

      {/* Action icons */}
      <div className="flex">
        {headerIcons.map((icon, index) => (
          <Button
            key={`header-icon-${index}`}
            variant="ghost"
            className="w-12 h-12 p-0 rounded-none bg-[#484644] hover:bg-[#5a5856]"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <img
                className={`${icon.width} ${icon.height} absolute ${icon.position}`}
                alt={icon.alt}
                src={icon.src}
              />
            </div>
          </Button>
        ))}

        {/* User avatar */}
        <Button
          variant="ghost"
          className="w-12 h-12 p-0 rounded-none bg-[#484644] hover:bg-[#5a5856]"
        >
          <Avatar className="w-8 h-8 rounded-2xl border border-solid border-white">
            <AvatarFallback className="text-white text-[13px] [font-family:'Segoe_UI-Regular',Helvetica]">
              R
            </AvatarFallback>
          </Avatar>
        </Button>
      </div>
    </header>
  );
};

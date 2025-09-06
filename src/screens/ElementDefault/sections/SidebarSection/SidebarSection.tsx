import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import { Separator } from "../../../../components/ui/separator";

export const SidebarSection = (): JSX.Element => {
  // Define navigation items for main sections
  const mainNavItems = [
    {
      icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-8.svg",
      label: "Home",
      href: "https://admin.microsoft.com/#/homepage",
      isExternal: true,
    },
  ];

  // Define Copilot section items
  const copilotItems = [
    {
      label: "Overview",
      href: "https://admin.microsoft.com/#/copilot/overview",
      isExternal: true,
    },
    {
      label: "Agents & connectors",
      href: "https://admin.microsoft.com/#/copilot/agents",
      isExternal: true,
    },
    {
      label: "Connectors",
      href: "https://admin.microsoft.com/#/copilot/connectors",
      isExternal: true,
    },
    {
      label: "Search",
      href: "https://admin.microsoft.com/#/copilot/search",
      isExternal: true,
    },
    {
      label: "Billing & usage",
      href: "https://admin.microsoft.com/#/copilot/managecost",
      isExternal: true,
    },
    {
      label: "Settings",
      href: "https://admin.microsoft.com/#/copilot/settings",
      isExternal: true,
      isActive: true,
    },
  ];

  // Define collapsible sections
  const collapsibleSections = [
    {
      icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-27.svg",
      label: "Users",
    },
    {
      icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-18.svg",
      label: "Teams & groups",
    },
    {
      icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-25.svg",
      label: "Roles",
      isBackgroundImage: true,
    },
    {
      icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-3.svg",
      label: "Resources",
    },
    {
      icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-2.svg",
      label: "Billing",
    },
    {
      icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-24.svg",
      label: "Settings",
      isBackgroundImage: true,
    },
  ];

  // Define direct links
  const directLinks = [
    {
      icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-10.svg",
      label: "Setup",
      href: "https://admin.microsoft.com/#/featureexplorer",
      isBackgroundImage: true,
      isExternal: true,
    },
  ];

  // Define more collapsible sections
  const moreCollapsibleSections = [
    {
      icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-4.svg",
      label: "Reports",
    },
    {
      icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-15.svg",
      label: "Health",
    },
  ];

  // Define admin centers
  const adminCenters = [
    {
      icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-13.svg",
      label: "Exchange",
      href: "https://admin.exchange.microsoft.com/",
      isExternal: true,
    },
    {
      icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-6.svg",
      label: "All admin centers",
      href: "https://admin.microsoft.com/#/alladmincenters",
      isExternal: true,
    },
  ];

  // Define bottom links
  const bottomLinks = [
    {
      icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-5.svg",
      label: "Customize navigation",
      isBackgroundImage: true,
    },
    {
      icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-26.svg",
      label: "Show all",
    },
  ];

  return (
    <nav className="w-[280px] h-full bg-white">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="h-10 bg-[#e9e9e9] flex items-center">
          <div className="relative w-4 h-4 ml-4">
            <img
              className="absolute w-4 h-[9px] top-1 left-0"
              alt="Vector"
              src="https://c.animaapp.com/mdofyy1qJhBGHg/img/vector.svg"
            />
          </div>
        </div>

        {/* Scrollable content */}
        <ScrollArea className="flex-1 bg-[#e9e9e9]">
          <div className="w-[265px]">
            {/* Main nav items */}
            {mainNavItems.map((item, index) => (
              <div key={`main-nav-${index}`} className="h-10">
                <div className="relative h-10 flex items-center">
                  <div className="w-4 h-4 ml-4">
                    <img
                      className="absolute w-[15px] h-3.5 top-px left-px"
                      alt="Vector"
                      src={item.icon}
                    />
                  </div>
                  <div className="ml-8 overflow-y-scroll">
                    {item.isExternal ? (
                      <a
                        className="font-normal text-[#323130] text-sm"
                        href={item.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="font-normal text-[#323130] text-sm">
                        {item.label}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Copilot section */}
            <Accordion type="single" collapsible defaultValue="copilot">
              <AccordionItem value="copilot" className="border-none">
                <AccordionTrigger className="h-10 px-0 py-0 hover:no-underline">
                  <div className="flex items-center w-full">
                    <img
                      className="w-4 h-12 -mt-1 ml-4"
                      alt="Copilot"
                      src="https://c.animaapp.com/mdofyy1qJhBGHg/img/copilot.svg"
                    />
                    <span className="ml-4 font-normal text-[#323130] text-sm">
                      Copilot
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-0">
                  {copilotItems.map((item, index) => (
                    <div key={`copilot-${index}`} className="h-8 relative">
                      <div className="flex items-center h-full">
                        <div className="ml-12 overflow-y-scroll">
                          {item.isActive && (
                            <div className="absolute w-1 h-4 top-[7px] left-[34px] bg-[#0078d4]" />
                          )}
                          <a
                            className="font-normal text-[#323130] text-sm"
                            href={item.href}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {item.label}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Collapsible sections */}
            {collapsibleSections.map((section, index) => (
              <Accordion key={`section-${index}`} type="single" collapsible>
                <AccordionItem value="item-1" className="border-none">
                  <AccordionTrigger className="h-10 px-0 py-0 hover:no-underline">
                    <div className="flex items-center w-full">
                      {section.isBackgroundImage ? (
                        <div
                          className="w-4 h-4 ml-4"
                          style={{
                            backgroundImage: `url(${section.icon})`,
                            backgroundSize: "100% 100%",
                          }}
                        />
                      ) : (
                        <div className="w-4 h-4 ml-4">
                          <img
                            className="absolute w-4 h-4"
                            alt="Vector"
                            src={section.icon}
                          />
                        </div>
                      )}
                      <span className="ml-4 font-normal text-[#323130] text-sm">
                        {section.label}
                      </span>
                    </div>
                  </AccordionTrigger>
                </AccordionItem>
              </Accordion>
            ))}

            {/* Direct links */}
            {directLinks.map((item, index) => (
              <div key={`direct-${index}`} className="h-10">
                <div className="relative h-10 flex items-center">
                  {item.isBackgroundImage ? (
                    <div
                      className="w-4 h-4 ml-4"
                      style={{
                        backgroundImage: `url(${item.icon})`,
                        backgroundSize: "100% 100%",
                      }}
                    />
                  ) : (
                    <div className="w-4 h-4 ml-4">
                      <img
                        className="absolute w-4 h-4"
                        alt="Vector"
                        src={item.icon}
                      />
                    </div>
                  )}
                  <div className="ml-8 overflow-y-scroll">
                    {item.isExternal ? (
                      <a
                        className="font-normal text-[#323130] text-sm"
                        href={item.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="font-normal text-[#323130] text-sm">
                        {item.label}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* More collapsible sections */}
            {moreCollapsibleSections.map((section, index) => (
              <Accordion
                key={`more-section-${index}`}
                type="single"
                collapsible
              >
                <AccordionItem value="item-1" className="border-none">
                  <AccordionTrigger className="h-10 px-0 py-0 hover:no-underline">
                    <div className="flex items-center w-full">
                      <div className="w-4 h-4 ml-4">
                        <img
                          className="absolute w-4 h-4"
                          alt="Vector"
                          src={section.icon}
                        />
                      </div>
                      <span className="ml-4 font-normal text-[#323130] text-sm">
                        {section.label}
                      </span>
                    </div>
                  </AccordionTrigger>
                </AccordionItem>
              </Accordion>
            ))}

            {/* Separator */}
            <div className="h-4 flex items-center">
              <Separator className="w-[233px] ml-4" />
            </div>

            {/* Admin centers section */}
            <div className="h-10">
              <div className="h-10 flex items-center">
                <span className="ml-4 font-semibold text-[#323130] text-sm">
                  Admin centers
                </span>
              </div>
            </div>

            {/* Admin center links */}
            {adminCenters.map((item, index) => (
              <div key={`admin-${index}`} className="h-10">
                <div className="relative h-10 flex items-center">
                  <div className="w-4 h-4 ml-4">
                    <img
                      className="absolute w-4 h-4"
                      alt="Vector"
                      src={item.icon}
                    />
                  </div>
                  <div className="ml-8 overflow-y-scroll">
                    <a
                      className="font-normal text-[#323130] text-sm"
                      href={item.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.label}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Separator */}
            <div className="h-4 flex items-center">
              <Separator className="w-[233px] ml-4" />
            </div>

            {/* Bottom links */}
            {bottomLinks.map((item, index) => (
              <div key={`bottom-${index}`} className="h-10">
                <div className="relative h-10 flex items-center">
                  {item.isBackgroundImage ? (
                    <div
                      className="w-4 h-4 ml-4"
                      style={{
                        backgroundImage: `url(${item.icon})`,
                        backgroundSize: "100% 100%",
                      }}
                    />
                  ) : (
                    <div className="w-4 h-4 ml-4">
                      <img
                        className="absolute w-4 h-4"
                        alt="Vector"
                        src={item.icon}
                      />
                    </div>
                  )}
                  <div className="ml-8 overflow-y-scroll">
                    <span className="font-normal text-[#323130] text-sm">
                      {item.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </nav>
  );
};

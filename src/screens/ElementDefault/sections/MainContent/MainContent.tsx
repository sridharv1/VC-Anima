import React from "react";
import { SearchIcon } from "lucide-react";
import { Input } from "../../../../components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const MainContent = (): JSX.Element => {
  // Data for the settings table
  const settingsData = [
    {
      name: "Copilot in Bing, Edge, and Windows",
      description:
        "Manage how your organization uses Copilot, your AI-powered chat for the web.",
      appliesTo: [
        {
          icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/-bing-.svg",
          name: "Bing",
        },
        {
          icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/-microsoft-edge-.svg",
          name: "Microsoft Edge",
        },
        {
          icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/-windows-.svg",
          name: "Windows",
        },
      ],
      icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/copilot-for-sales-2.svg",
    },
    {
      name: "Copilot in Edge",
      description:
        "Copilot in Edge gives your organization AI-powered chat for work with enterprise data protection.",
      appliesTo: [
        {
          icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/-microsoft-edge-.svg",
          name: "Microsoft Edge",
        },
      ],
      icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/copilot-for-sales-2.svg",
    },
    {
      name: "Copilot pay-as-you-go billing",
      description:
        "Set up pay-as-you-go billing for Copilot and related agents to pay only for what people in your organization use.",
      appliesTo: [
        {
          icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/-microsoft-365-copilot-.svg",
          name: "Microsoft 365 Copilot Chat",
        },
      ],
      icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/copilot-for-sales.svg",
    },
    {
      name: "Microsoft 365 Copilot self-service purchases",
      description:
        "Control product trials and purchases to enable for end users in your organization.",
      appliesTo: [
        {
          icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/-microsoft-365-copilot-.svg",
          name: "Microsoft 365 Copilot",
        },
      ],
      icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/copilot-for-sales.svg",
    },
    {
      name: "Pin Microsoft 365 Copilot Chat",
      description:
        "Choose whether users have Microsoft 365 Copilot Chat pinned across their experiences.",
      appliesTo: [
        {
          icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/-microsoft-365-copilot-.svg",
          name: "Microsoft 365 Copilot Chat",
        },
        {
          icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/-microsoft-365-copilot--app.svg",
          name: "Microsoft 365 Copilot app",
        },
        {
          icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/-microsoft-365-.svg",
          name: "Microsoft 365",
        },
        {
          icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/-windows--1.svg",
          name: "Windows",
        },
      ],
      icon: "https://c.animaapp.com/mdofyy1qJhBGHg/img/pin--microsoft-365-copilot-chat-.svg",
    },
  ];

  return (
    <section className="flex-1 overflow-auto p-12">
      {/* Breadcrumb navigation */}
      <div className="flex items-center mb-4">
        <a
          href="https://admin.microsoft.com/#/homepage"
          rel="noopener noreferrer"
          target="_blank"
          className="font-normal text-[#484644] text-sm"
        >
          Home
        </a>
        <span className="mx-2">
          <img
            className="w-[5px] h-2.5"
            alt="Breadcrumb separator"
            src="https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-16.svg"
          />
        </span>
        <a
          href="https://admin.microsoft.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="font-normal text-[#323130] text-sm"
        >
          Settings
        </a>

        {/* Dark mode toggle */}
        <div className="ml-auto flex items-center">
          <img
            className="w-[15px] h-4 mr-2"
            alt="Dark mode icon"
            src="https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-7.svg"
          />
          <span className="font-normal text-[#323130] text-sm">
            Enable Dark mode
          </span>
        </div>
      </div>

      {/* Page title */}
      <div className="mb-4">
        <h1 className="font-bold text-black text-[28px]">Settings</h1>
      </div>

      {/* Page description */}
      <div className="mb-8">
        <p className="font-normal text-[#323130] text-sm">
          Manage everything related to Copilot. Review a range of settings and
          integrations for various
          <br />
          applications, along with data security and compliance.
        </p>
      </div>

      {/* Tabs navigation */}
      <div className="mb-8">
        <Tabs defaultValue="user-access">
          <TabsList className="bg-transparent border-b w-full justify-start h-11 p-0">
            <TabsTrigger
              value="user-access"
              className="data-[state=active]:border-b-2 data-[state=active]:border-[#0078d4] data-[state=active]:font-semibold rounded-none h-11 px-4"
            >
              User access
            </TabsTrigger>
            <TabsTrigger
              value="data-access"
              className="data-[state=active]:border-b-2 data-[state=active]:border-[#0078d4] data-[state=active]:font-semibold rounded-none h-11 px-4"
            >
              Data access
            </TabsTrigger>
            <TabsTrigger
              value="copilot-actions"
              className="data-[state=active]:border-b-2 data-[state=active]:border-[#0078d4] data-[state=active]:font-semibold rounded-none h-11 px-4"
            >
              Copilot actions
            </TabsTrigger>
            <TabsTrigger
              value="other-settings"
              className="data-[state=active]:border-b-2 data-[state=active]:border-[#0078d4] data-[state=active]:font-semibold rounded-none h-11 px-4"
            >
              Other settings
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Search bar */}
        <div className="flex justify-end mt-4">
          <div className="relative">
            <div className="absolute left-3 top-2">
              <SearchIcon className="h-4 w-4 text-[#323130]" />
            </div>
            <Input
              className="w-60 h-8 pl-10 border-[#323130] rounded-sm text-sm"
              placeholder="Search all Copilot settings"
            />
          </div>
        </div>
      </div>

      {/* User access description */}
      <div className="mb-4">
        <p className="font-normal text-[#323130] text-sm">
          Manage user access to Copilot in different products and services.
        </p>
      </div>

      {/* Settings table */}
      <div className="w-full bg-white">
        {/* Table header */}
        <div className="flex border-b border-[#e8e8e8] h-[43px] items-center">
          <div className="w-[450px] flex items-center">
            <div className="ml-3 font-semibold text-[#323130] text-xs flex items-center">
              Name
              <img
                className="ml-1 w-1.5 h-3"
                alt="Sort indicator"
                src="https://c.animaapp.com/mdofyy1qJhBGHg/img/vector-22.svg"
              />
            </div>
          </div>
          <div className="w-[550px]">
            <div className="ml-3 font-normal text-[#323130] text-xs">
              Description
            </div>
          </div>
          <div className="w-[452px]">
            <div className="ml-3 font-normal text-[#323130] text-xs">
              Applies to
            </div>
          </div>
        </div>

        {/* Table rows */}
        {settingsData.map((setting, index) => (
          <div
            key={index}
            className="flex border-b border-[#ededed] h-[38px] items-center hover:bg-[#f3f2f1] cursor-pointer"
          >
            <div className="w-[450px] flex items-center">
              <img
                className="w-6 h-6 ml-3"
                alt={setting.name}
                src={setting.icon}
              />
              <div className="ml-2 font-semibold text-[#323130] text-xs">
                {setting.name}
              </div>
            </div>
            <div className="w-[550px]">
              <div className="ml-3 font-normal text-[#323130] text-xs">
                {setting.description}
              </div>
            </div>
            <div className="w-[452px] flex items-center">
              <div className="ml-3 flex items-center">
                {setting.appliesTo.map((app, appIndex) => (
                  <React.Fragment key={appIndex}>
                    <img className="w-4 h-4" alt={app.name} src={app.icon} />
                    <span className="ml-1 mr-4 font-normal text-[#323130] text-xs">
                      {app.name}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

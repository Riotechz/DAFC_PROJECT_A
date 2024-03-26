import { useState, createContext, useContext, PropsWithChildren } from "react";
import SidebarDashboard from "./dashboardSidebar";
import { Box } from "@mui/material";

const SidebarContext = createContext({});

export const SidebarProvider = ({ children }: PropsWithChildren) => {
  const [sidebarBackgroundColor, setSidebarBackgroundColor] =
    useState(undefined);
  return (
    <Box>
      <SidebarContext.Provider
        value={{
          sidebarBackgroundColor,
          setSidebarBackgroundColor,
        }}
      >
        <Box
        display={"flex"}
        flexDirection={"row"}
        >
          <SidebarDashboard />
          {children}
        </Box>
      </SidebarContext.Provider>
    </Box>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);
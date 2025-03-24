import { useMediaQuery, Box, Drawer } from "@mui/material";
import SidebarItems from "./SidebarItems";
import { Sidebar, Logo } from "react-mui-sidebar";
import { useRef } from "react";

interface ItemType {
  isMobileSidebarOpen: boolean;
  onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void;
  isSidebarOpen: boolean;
}

const MSidebar = ({
                    isMobileSidebarOpen,
                    onSidebarClose,
                    isSidebarOpen,
                  }: ItemType) => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  const drawerRef = useRef<HTMLElement | null>(null);

  const sidebarWidth = "270px";

  // Custom CSS for short scrollbar
  const scrollbarStyles = {
    "&::-webkit-scrollbar": {
      width: "7px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#eff2f7",
      borderRadius: "15px",
    },
  };

  if (lgUp) {
    return (
        <Box
            sx={{
              width: sidebarWidth,
              flexShrink: 0,
            }}
        >
          <Drawer
              anchor="left"
              open={isSidebarOpen}
              variant="permanent"
              PaperProps={{
                ref: drawerRef, // Используем useRef
                sx: {
                  boxSizing: "border-box",
                  ...scrollbarStyles,
                },
              }}
          >
            <Box sx={{ height: "100%" }}>
              <Sidebar
                  width="270px"
                  collapsewidth="80px"
                  open={isSidebarOpen}
                  themeColor="#5d87ff"
                  themeSecondaryColor="#49beff"
                  showProfile={false}
              >
                <Logo img="/images/logos/dark-logo.svg" />
                <Box>
                  <SidebarItems />
                </Box>
              </Sidebar>
            </Box>
          </Drawer>
        </Box>
    );
  }

  return (
      <Drawer
          anchor="left"
          open={isMobileSidebarOpen}
          onClose={onSidebarClose}
          variant="temporary"
          PaperProps={{
            ref: drawerRef, // Используем useRef
            sx: {
              boxShadow: (theme) => theme.shadows[8],
              ...scrollbarStyles,
            },
          }}
      >
        <Box px={2}>
          <Sidebar
              width="270px"
              collapsewidth="80px"
              isCollapse={false}
              mode="light"
              direction="ltr"
              themeColor="#5d87ff"
              themeSecondaryColor="#49beff"
              showProfile={false}
          >
            <Logo img="/images/logos/dark-logo.svg" />
            <SidebarItems />
          </Sidebar>
        </Box>
      </Drawer>
  );
};

export default MSidebar;

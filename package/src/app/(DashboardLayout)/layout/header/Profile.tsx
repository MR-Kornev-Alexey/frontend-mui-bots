import React, { useState } from "react";
import Link from "next/link";
import {
  Avatar,
  Box,
  Menu,
  Button,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { IconListCheck, IconMail, IconUser } from "@tabler/icons-react";

const Profile = () => {
  // Правильный тип HTMLElement или null
  const [anchorEl2, setAnchorEl2] = useState<HTMLElement | null>(null);

  // Типизируем event
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget); // Всегда HTML-элемент
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
      <Box>
        <IconButton
            size="large"
            aria-label="show 11 new notifications"
            color="inherit"
            aria-controls="msgs-menu"
            aria-haspopup="true"
            sx={{
              ...(anchorEl2 && { color: "primary.main" }), // Проверяем корректно
            }}
            onClick={handleClick2} // Передаем событие
        >
          <Avatar
              src="/images/profile/user-1.jpg"
              alt="image"
              sx={{
                width: 35,
                height: 35,
              }}
          />
        </IconButton>

        {/* ------------------------------------------- */}
        {/* Message Dropdown */}
        {/* ------------------------------------------- */}
        <Menu
            id="msgs-menu"
            anchorEl={anchorEl2}
            open={Boolean(anchorEl2)} // Логичное открытие
            onClose={handleClose2}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            sx={{
              "& .MuiMenu-paper": {
                width: "200px",
              },
            }}
        >
          <MenuItem>
            <ListItemIcon>
              <IconUser width={20} />
            </ListItemIcon>
            <ListItemText>My Profile</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <IconMail width={20} />
            </ListItemIcon>
            <ListItemText>My Account</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <IconListCheck width={20} />
            </ListItemIcon>
            <ListItemText>My Tasks</ListItemText>
          </MenuItem>
          <Box mt={1} py={1} px={2}>
            <Button
                href="/authentication/login"
                variant="outlined"
                color="primary"
                component={Link}
                fullWidth
            >
              Logout
            </Button>
          </Box>
        </Menu>
      </Box>
  );
};

export default Profile;

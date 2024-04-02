"use client";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIcon,
  Typography,
} from "@mui/material";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { ReturnSvg } from "@/utils/ReturnCategorySvg";
import BorderAllIcon from "@mui/icons-material/BorderAll";

interface HomeSidebarProps {
  categories: any;
}

const HomeSidebar: React.FC<HomeSidebarProps> = ({ categories }) => {
  return (
    <Grid
      item
      container
      flexDirection="column"
      alignItems="start"
      md={3}
      lg={2}
      xs={0}
      display={{ xs: "none", md: "flex" }}
      sx={{
        minHeight: "calc(100vh - 68px)",
        color: "#000",
        borderRadius: "8px",
      }}
    >
      <Typography component="h5" sx={{ marginBottom: "5px", fontSize: "16px" }}>
        دسته ها
      </Typography>
      <nav aria-label="main mailbox folders" style={{ width: "100%" }}>
        <List sx={{ width: "100%" }}>
          <ListItem
            disablePadding
            sx={{
              paddingRight: "4px",
              "&:hover": {
                background: "#E5E7EB",
                borderRadius: "6px",
              },
            }}
          >
            <ListItemButton
              href="/"
              LinkComponent={Link}
              sx={{
                textAlign: "right",
                paddingRight: "0",
              }}
            >
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <BorderAllIcon />
              </ListItemIcon>
              <ListItemText primary="همه" />
            </ListItemButton>
          </ListItem>
          {categories?.map((item: any) => (
            <ListItem
              key={item._id}
              disablePadding
              sx={{
                paddingRight: "4px",
                "&:hover": {
                  background: "#E5E7EB",
                  borderRadius: "6px",
                },
              }}
            >
              <ListItemButton
                href={`/?category=${item.icon}`}
                LinkComponent={Link}
                sx={{
                  textAlign: "right",
                  paddingRight: "0",
                }}
              >
                <ListItemIcon sx={{ minWidth: "35px" }}>
                  <SvgIcon>{ReturnSvg(item.icon)}</SvgIcon>
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Grid>
  );
};

export default HomeSidebar;

"use client";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';

const DashboardSidebar: React.FC = () => {
  const router = useRouter();
  const logOut = () => {
    document.cookie =
      "DivarAccessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "DivarRefreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    router.push("/");
  };
  return (
    <Grid
      item
      container
      display="flex"
      flexDirection="column"
      alignItems="center"
      md={4}
      lg={2}
      xs={12}
      sm={5}
      sx={{
        minHeight: "calc(100vh - 68px)",
        backgroundColor: "#1F2937",
        color: "#fff",
        borderRadius: "8px",
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        sx={{ fontWeight: "bold", marginBottom: "5px" }}
      >
        پنل کاربری
      </Typography>
      <nav
        aria-label="main mailbox folders"
        style={{ width: "100%", paddingRight: "20px" }}
      >
        <List sx={{ width: "100%" }}>
          <ListItem
            disablePadding
            sx={{
              "&:hover": {
                background: "#374151",
              },
            }}
          >
            <ListItemButton
              href="/dashboard"
              LinkComponent={Link}
              sx={{
                textAlign: "right",
              }}
            >
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <MapsHomeWorkOutlinedIcon sx={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="آگهی های شما" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              "&:hover": {
                background: "#374151",
              },
            }}
          >
            <ListItemButton
              href="/dashboard/create"
              LinkComponent={Link}
              sx={{ textAlign: "right" }}
            >
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <AddCircleIcon sx={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="افزودن آگهی" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              "&:hover": {
                background: "#374151",
              },
            }}
          >
            <ListItemButton onClick={logOut} sx={{ textAlign: "right" }}>
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <ExitToAppIcon sx={{ color: "red" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "red" }} primary="خروج" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Grid>
  );
};

export default DashboardSidebar;

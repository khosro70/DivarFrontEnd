"use client";
import DivarIcon from "@/ImsgesAndSvgs/DivarIcon";
import {
  AppBar,
  AppBarProps,
  Box,
  Button,
  ButtonProps,
  Grid,
  IconButton,
  Toolbar,
  styled,
} from "@mui/material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

const MainAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  boxShadow: "none",
  position: "sticky",
  height: "64px",
  paddingLeft: "10px",
  paddingRight: "10px",
  marginBottom: "20px",
  backgroundColor: "#F9FAFB",
  borderBottom: "2px solid #D1D5DB",
}));

const ButtonWithIcon: React.ComponentType<ButtonProps> = styled(
  Button
)<ButtonProps>(({ theme }) => ({
  color: "#111827",
  "& .MuiButton-icon": {
    marginRight: "0",
  },
  "& .MuiSvgIcon-root": {
    marginLeft: "10px",
    color: "#111827",
  },
  "&:hover": {
    backgroundColor: "#E5E7EB",
  },
}));

const Header: React.FC = () => {
  const role = useSelector((state: any) => state?.auth?.userData.role);
  console.log(role);
  return (
    <MainAppBar>
      <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid
            container
            item
            xs={6}
            md={4}
            lg={2}
            display="flex"
            direction="row"
            justifyContent="start"
            alignItems="center"
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, marginRight: "-10px" }}
              href="/"
              LinkComponent={Link}
            >
              <DivarIcon />
            </IconButton>
            <Box
              sx={{
                backgroundColor: "#D1D5DB",
                width: "3px",
                height: "25px",
                margin: "0 20px",
              }}
            ></Box>
            <ButtonWithIcon startIcon={<FmdGoodOutlinedIcon />}>
              تهران
            </ButtonWithIcon>
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            lg={2}
            display="flex"
            justifyContent="end"
            gap={2}
          >
            <ButtonWithIcon
              startIcon={<Person2OutlinedIcon />}
              href="/auth/signin"
              LinkComponent={Link}
            >
              دیوار من
            </ButtonWithIcon>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#BE123C",
                "&:hover": {
                  backgroundColor: "#E11D48",
                },
              }}
            >
              ثبت آگهی
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </MainAppBar>
  );
};

export default Header;

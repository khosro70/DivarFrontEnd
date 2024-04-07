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
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { ReturnSvg } from "@/utils/ReturnCategorySvg";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/sheared/Loader";
import { getCategories } from "@/reactQuery/Queries";
import { signInErrorTost } from "@/utils/tostErrors";
import { useSearchParams } from "next/navigation";

const CategorySidebar: React.FC = () => {
  const [category_id, setCategory_id] = useState<null | string>();
  const searchParams = useSearchParams();
  useEffect(() => {
    let categoryId: string | null = searchParams.get("category");
    setCategory_id(categoryId);
  }, []);
  
  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  const categories = data?.data;
  if (isError) return signInErrorTost();
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
      {isLoading ? (
        <Loader width="40" height="40" color="#374151" />
      ) : (
        <nav aria-label="main mailbox folders" style={{ width: "100%" }}>
          <List sx={{ width: "100%" }}>
            <ListItem
              onClick={() => setCategory_id(null)}
              disablePadding
              sx={{
                paddingRight: "4px",
                "&:hover": {
                  background: "#E5E7EB",
                  borderRadius: "6px",
                },
                ...(category_id === null && {
                  background: "#E5E7EB",
                  borderRadius: "6px",
                }),
              }}
            >
              <ListItemButton
                href="/category"
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
                onClick={() => setCategory_id(item._id)}
                key={item._id}
                disablePadding
                sx={{
                  paddingRight: "4px",
                  "&:hover": {
                    background: "#E5E7EB",
                    borderRadius: "6px",
                  },
                  ...(category_id === item._id && {
                    background: "#E5E7EB",
                    borderRadius: "6px",
                  }),
                }}
              >
                <ListItemButton
                  href={`/category?category=${item._id}`}
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
      )}
    </Grid>
  );
};

export default CategorySidebar;

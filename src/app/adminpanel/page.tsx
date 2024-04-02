"use client";
import Loader from "@/components/sheared/Loader";
import { signInErrorTost } from "@/utils/tostErrors";
import { Grid } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { NextPage } from "next";
import { getCategories } from "@/reactQuery/Queries";
import CategoryItem from "@/components/modules/adminpanel/CategoryItem";
import { ToastContainer } from "react-toastify";

const AdminPanel: NextPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  if (isLoading) return <Loader width="60" height="60" color="#374151" />;
  if (isError) return signInErrorTost();
  return (
    <Grid container spacing={2}>
      {data?.data?.map((category: any) => (
        <CategoryItem key={category._id} category={category} />
      ))}
      <ToastContainer />
    </Grid>
  );
};

export default AdminPanel;

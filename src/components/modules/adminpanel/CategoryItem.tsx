"use client";
import { ReturnSvg } from "@/utils/ReturnCategorySvg";
import { Box, Button, Grid, SvgIcon, Typography } from "@mui/material";
import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { CategoryItemPropsInterface } from "../Contracts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory } from "@/reactQuery/Mutations";
import { signInErrorTost, successTost } from "@/utils/tostErrors";
import { Oval } from "react-loader-spinner";

const CategoryItem: React.FC<CategoryItemPropsInterface> = ({ category }) => {
  const queryClient = useQueryClient();
  const { mutate, isPending, error, data } = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
  //   console.log(data);
  useEffect(() => {
    if (data?.status === 200) {
      successTost("دسته بندی با موفقیت حذف شد");
    }
    if (error) {
      signInErrorTost();
    }
  }, [error, data]);

  return (
    <Grid
      key={category._id}
      item 
      xs={12}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ borderBottom: "2px solid #D1D5DB", paddingBottom: "8px" }}
    >
      <Box display="flex" justifyContent="start" alignItems="center" gap={2}>
        <SvgIcon>{ReturnSvg(category.icon)}</SvgIcon>
        <Typography>{category.name}</Typography>
      </Box>
      {!isPending ? (
        <Button
          variant="contained"
          onClick={() => mutate(category._id)}
          sx={{
            backgroundColor: "#BE123C",
            marginTop: "10px",
            "&:hover": {
              backgroundColor: "#E11D48",
            },
          }}
        >
          حذف
        </Button>
      ) : (
        <div
          style={{
            backgroundColor: "#BE123C",
            borderRadius: "4px",
            padding: "7px 8px",
            marginTop: "10px",
          }}
        >
          <Oval
            visible={true}
            height="22"
            width="47"
            color="#fff"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
    </Grid>
  );
};

export default CategoryItem;

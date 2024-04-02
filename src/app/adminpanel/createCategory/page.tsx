"use client";
import { Box, Button, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateCategoryFormschema } from "@/utils/validationFormSxhema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCategory } from "@/reactQuery/Queries";
import { Oval } from "react-loader-spinner";
import CategoryField from "@/components/modules/createCategoryPage/CategoryField";
import { signInErrorTost, successTost } from "@/utils/tostErrors";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

const CreateCategory: React.FC = () => {
  const queryClient = useQueryClient();
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateCategoryFormschema),
  });

  const { mutate, isPending, error, data } = useMutation({
    mutationFn: addCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });

  useEffect(() => {
    if (!error && !isPending && data?.status === 201) {
      reset();
      successTost("دسته بندی با موفقیت اضافه شد");
    }
    if (error && !isPending) {
      signInErrorTost();
    }
  }, [error, isPending, data]);

  const onSubmit = async (data: any) => {
    mutate(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <CategoryField
              name="name"
              label="نام دسته بندی"
              control={control}
              errors={errors}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CategoryField
              name="slug"
              label="اسلاگ"
              control={control}
              errors={errors}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CategoryField
              name="icon"
              label="آیکن"
              control={control}
              errors={errors}
            />
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="start" sx={{ marginTop: "10px" }}>
          {!isPending ? (
            <Button
              variant="contained"
              onClick={handleSubmit(onSubmit)}
              sx={{
                backgroundColor: "#BE123C",
                marginTop: "10px",
                "&:hover": {
                  backgroundColor: "#E11D48",
                },
              }}
            >
              ایجاد دسته بندی
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
                width="115"
                color="#fff"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          )}
        </Box>
      </form>
      <ToastContainer />
    </>
  );
};

export default CreateCategory;

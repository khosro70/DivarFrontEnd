"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Grid, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/reactQuery/Queries";
import axios from "axios";
import { getCookie } from "@/utils/cookie";
import { AddPostFormSchema } from "@/utils/validationFormSxhema";
import { FormValues } from "@/Types/types";
import TextArea from "@/components/modules/createPostpage/TextArea";
import SelectOption from "@/components/modules/createPostpage/SelectOption";
import TextInput from "@/components/modules/createPostpage/TextInput";
import { NextPage } from "next";

const Dashboard: NextPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    resolver: yupResolver(AddPostFormSchema) as any,
  });

  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("amount", data.amount);
    formData.append("city", data.city);
    formData.append("category", data.category);
    formData.append("content", data.content);
    if (data.images) {
      formData.append("images", data.images[0]);
    }
    const token = getCookie("DivarAccessToken");
    await axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/post/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <TextInput
          name="title"
          label="عنوان"
          control={control}
          errors={errors}
        />
        <TextInput
          name="amount"
          label="قیمت"
          control={control}
          errors={errors}
        />
        <TextInput name="city" label="شهر" control={control} errors={errors} />
        <SelectOption
          name="category"
          label="دسته بندی"
          control={control}
          data={data}
          errors={errors}
        />
        <Grid item xs={12}>
          <Typography
            component="div"
            fontWeight="medium"
            sx={{
              marginBottom: "10px",
              marginTop: "5px",
              textAlign: "right",
              fontSize: "18px",
            }}
          >
            عکس
          </Typography>
          <input
            type="file"
            onChange={(e) => setValue("images", e.target.files)}
            accept="image/*"
            multiple
          />
          {errors.images && (
            <p style={{ color: "red", textAlign: "right", fontSize: "12px" }}>
              {errors.images.message}
            </p>
          )}
        </Grid>
        <TextArea control={control} errors={errors} />

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            افزودن آگهی
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Dashboard;

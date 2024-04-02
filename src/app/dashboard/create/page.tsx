"use client";

import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  Button,
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextareaAutosize,
  styled,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/reactQuery/Queries";
import axios from "axios";
import { getCookie } from "@/utils/cookie";

type FormValues = {
  title: string;
  amount: string;
  city: string;
  category: string;
  images: FileList | null;
  content: string;
};

export const AddPostFormSchema = yup.object().shape({
  title: yup.string().required("عنوان الزامی است"),
  amount: yup
    .string()
    .matches(/^\d+$/, "قیمت باید عددی باشد")
    .required("قیمت الزامی است"),
  city: yup.string().required("شهر الزامی است"),
  category: yup.string().required("دسته بندی الزامی است"),
  images: yup.mixed().required("آپلود عکس الزامی است"),
  content: yup.string().required("افزودن توضیحات الزامی است"),
});

const TextareaField = styled(TextareaAutosize)(
  ({ theme }) => `
  box-sizing: border-box;
  width: 100%;
  min-height: 100px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px;
  border-radius:8px 8px 8px 8px;
  color:black;
  background: white;
  border: 1px solid grea;
  &:focus {
    outline: 0;
    border-color: "blue";
  }
  &:focus-visible {
    outline: 0;
  }
`
);

export default function Dashboard() {
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

  const onSubmit: SubmitHandler<FormValues> = (data) => {
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
    axios
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
        <Grid item xs={12} md={6}>
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
            عنوان
          </Typography>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                size="small"
                {...field}
                id="outlined-title"
                label="عنوان"
                variant="outlined"
                fullWidth
                sx={{
                  width: "100%",
                  "& .MuiInputBase-input": {
                    padding: "8px",
                  },
                  "& .MuiFormLabel-root": {
                    top: "-2px",
                    transformOrigin: "right",
                    left: "unset",
                    right: "1.75rem",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    textAlign: "right",
                    color: "#D1D5DB",
                  },
                }}
              />
            )}
          />
          {errors.title && (
            <p style={{ color: "red", textAlign: "right", fontSize: "12px" }}>
              {errors.title.message}
            </p>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
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
            قیمت
          </Typography>
          <Controller
            name="amount"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                size="small"
                {...field}
                id="outlined-amount"
                label="قیمت"
                variant="outlined"
                fullWidth
                sx={{
                  width: "100%",
                  "& .MuiInputBase-input": {
                    padding: "8px",
                  },
                  "& .MuiFormLabel-root": {
                    top: "-2px",
                    transformOrigin: "right",
                    left: "unset",
                    right: "1.75rem",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    textAlign: "right",
                    color: "#D1D5DB",
                  },
                }}
              />
            )}
          />
          {errors.amount && (
            <p style={{ color: "red", textAlign: "right", fontSize: "12px" }}>
              {errors.amount.message}
            </p>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
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
            شهر
          </Typography>
          <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                size="small"
                {...field}
                id="outlined-city"
                label="شهر"
                variant="outlined"
                fullWidth
                sx={{
                  width: "100%",
                  "& .MuiInputBase-input": {
                    padding: "8px",
                  },
                  "& .MuiFormLabel-root": {
                    top: "-2px",
                    transformOrigin: "right",
                    left: "unset",
                    right: "1.75rem",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    textAlign: "right",
                    color: "#D1D5DB",
                  },
                }}
              />
            )}
          />
          {errors.city && (
            <p style={{ color: "red", textAlign: "right", fontSize: "12px" }}>
              {errors.city.message}
            </p>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
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
            دسته بندی
          </Typography>
          <Controller
            name="category"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl
                size="small"
                fullWidth
                variant="outlined"
                sx={{ width: "100%" }}
              >
                <InputLabel id="category-label">دسته بندی</InputLabel>
                <Select
                  labelId="category-label"
                  id="category"
                  {...field}
                  label="دسته بندی"
                >
                  {data?.data?.map((category: any) => (
                    <MenuItem key={category._id} value={category.name}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
                {errors.category && (
                  <Typography variant="body2" color="error">
                    {errors.category.message}
                  </Typography>
                )}
              </FormControl>
            )}
          />
        </Grid>
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
            توضیحات
          </Typography>
          <Controller
            name="content"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextareaField
                {...field}
                aria-label="توضیحات"
                placeholder="توضیحات را وارد کنید"
              />
            )}
          />
          {errors.content && (
            <Typography variant="body2" color="error">
              {errors.content.message}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            افزودن آگهی
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

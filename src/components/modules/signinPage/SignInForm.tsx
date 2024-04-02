"use client";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";

import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInFormschema } from "@/utils/validationFormSxhema";

interface Props {
  onSubmit: (data: any) => void;
  loading: boolean;
}
const SignInForm: React.FC<Props> = ({ onSubmit, loading }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInFormschema),
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography
        variant="h5"
        component="div"
        fontWeight="bold"
        sx={{ marginBottom: "25px", marginTop: "10px" }}
      >
        ورود به حساب کاربری
      </Typography>
      <Divider />
      <Typography
        component="div"
        fontWeight="medium"
        sx={{
          marginBottom: "15px",
          marginTop: "15px",
          textAlign: "right",
          fontSize: "18px",
        }}
      >
        شماره موبایل خود را وارد کنید
      </Typography>
      <Typography
        component="div"
        sx={{
          marginBottom: "15px",
          marginTop: "15px",
          textAlign: "right",
          fontSize: "14px",
        }}
      >
        برای استفاده از امکانات دیوار، لطفاً شمارهٔ موبایل خود را وارد کنید. کد
        تأیید به این شماره پیامک خواهد شد.
      </Typography>
      <Controller
        name="phone"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-basic"
            label="شماره تلفن"
            variant="outlined"
            sx={{
              width: "100%",
              "& .MuiInputBase-input": {
                padding: "8px",
              },
              "& .MuiFormLabel-root": {
                top: "-8px",
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
      {errors.phone && (
        <p style={{ color: "red", textAlign: "right", fontSize: "12px" }}>
          {errors.phone.message}
        </p>
      )}
      <Typography
        component="div"
        sx={{
          marginBottom: "15px",
          marginTop: "15px",
          textAlign: "right",
          fontSize: "14px",
        }}
      >
        شرایط استفاده از{" "}
        <Link href="#" style={{ color: "red" }}>
          خدمات و حریم خصوصی دیوار
        </Link>{" "}
        را می‌پذیرم.
      </Typography>
      <Divider />
      <Box display="flex" justifyContent="end">
        {!loading ? (
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
            تایید
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
              width="49"
              color="#fff"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}
      </Box>
    </form>
  );
};

export default SignInForm;

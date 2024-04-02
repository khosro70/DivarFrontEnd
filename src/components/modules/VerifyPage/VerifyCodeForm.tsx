"use client";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";
import { yupResolver } from "@hookform/resolvers/yup";
import { VerifyCodeFormschema } from "@/utils/validationFormSxhema";

interface Props {
  onSubmit: (data: any) => void;
  loading: boolean;
  phone: string;
}
const VerifyCodeForm: React.FC<Props> = ({ onSubmit, loading, phone }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(VerifyCodeFormschema),
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
        کد تایید را وارد کنید
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
        کد پیامک شده به شماره ی {phone} را وارد کنید
      </Typography>
      <Controller
        name="code"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-basic"
            label="کد تایید"
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
      {errors.code && (
        <p
          style={{
            color: "red",
            textAlign: "right",
            fontSize: "12px",
          }}
        >
          {errors.code.message}
        </p>
      )}
      <Divider sx={{ marginTop: "20px" }} />
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
            ورود
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

export default VerifyCodeForm;

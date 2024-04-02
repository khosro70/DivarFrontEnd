"use client";
import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { VerifyCodeFormschema } from "@/utils/validationFormSxhema";
import callApi from "@/configs/callApi";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInErrorTost } from "@/utils/tostErrors";
import VerifyCodeForm from "@/components/modules/VerifyPage/VerifyCodeForm";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setCookies } from "@/utils/cookie";

const VerifyPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const phoneNumber = useSelector((state: RootState) => state.auth.phone);
  const {
    formState: { errors },
  } = useForm({
    resolver: yupResolver(VerifyCodeFormschema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const res = await callApi().post("/auth/check-otp", {
        mobile: phoneNumber,
        code: data.code,
      });
      setLoading(false);
      if (res.status === 200) {
        console.log(res.data);
        setCookies(res.data);
        router.push("/");
      }
    } catch (error) {
      setLoading(false);
      signInErrorTost();
    }
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "calc(100vh - 64px)" }}
    >
      <Grid
        container
        display="flex"
        maxWidth="sm"
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          border: "1px solid #D1D5DB",
          padding: "20px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Grid item sx={{ width: "100%" }}>
          <VerifyCodeForm
            onSubmit={onSubmit}
            loading={loading}
            phone={phoneNumber}
          />
        </Grid>
      </Grid>
      <ToastContainer />
    </Box>
  );
};

export default VerifyPage;

"use client";
import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInFormschema } from "@/utils/validationFormSxhema";
import callApi from "@/configs/callApi";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInErrorTost } from "@/utils/tostErrors";
import SignInForm from "@/components/modules/signinPage/SignInForm";
import { useDispatch } from "react-redux";
import { setPhone } from "@/redux/features/auth-slice";
const SignInPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInFormschema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const res = await callApi().post("/auth/send-otp", {
        mobile: data.phone,
      });
      setLoading(false);
      if (res.status === 200) {
        dispatch(setPhone(data.phone));
        router.push("/auth/verifycode");
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
          <SignInForm onSubmit={onSubmit} loading={loading} />
        </Grid>
      </Grid>
      <ToastContainer />
    </Box>
  );
};

export default SignInPage;

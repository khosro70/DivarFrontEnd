"use client";
import VerifyPage from "@/components/templates/VerifyPage";

import { RootState } from "@/redux/store";
import { NextPage } from "next";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const VerifyCode: NextPage = () => {
  const router = useRouter();
  const phoneNumber = useSelector((state: RootState) => state.auth.phone);
  if (!phoneNumber) router.push("/auth/signin");

  return <VerifyPage />;
};

export default VerifyCode;

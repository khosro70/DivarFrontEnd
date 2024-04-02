"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "@/utils/cookie";
import callApi from "@/configs/callApi";
import Loader from "@/components/sheared/Loader";
import { signInErrorTost } from "@/utils/tostErrors";
import { useDispatch } from "react-redux";
import { setUserData } from "@/redux/features/auth-slice";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await callApi().get("/user/whoami", {
          headers: {
            Authorization: "Bearer " + getCookie("DivarAccessToken"),
          },
        });
        // console.log(res);
        if (res?.status === 200) {
          router.push("/dashboard");
          dispatch(setUserData(res.data));
        } else {
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, []);

  if (loading) return <Loader width="60" height="60" color="#374151" />;
  if (error) return signInErrorTost();
  return <>{children}</>;
}

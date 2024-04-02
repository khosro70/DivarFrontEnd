"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "@/utils/cookie";
import callApi from "@/configs/callApi";
import Loader from "@/components/sheared/Loader";
import { signInErrorTost } from "@/utils/tostErrors";
import { useDispatch } from "react-redux";
import { setUserData } from "@/redux/features/auth-slice";
import { Grid } from "@mui/material";
import AdminPanelSidebar from "@/components/modules/adminpanel/AdminPanelSidebar";

export default function AdminPanelLayout({
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
        const userdata = await callApi().get("/user/whoami", {
          headers: {
            Authorization: "Bearer " + getCookie("DivarAccessToken"),
          },
        });
        if (userdata?.status === 200) {
          setLoading(false);
          dispatch(setUserData(userdata.data));
        } else {
          router.push("/auth/signin");
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
  return (
    <Grid container display="flex" spacing={2}>
      <AdminPanelSidebar />
      <Grid item lg={10} md={8} xs={12} sm={7} sx={{ paddingRight: "30px" }}>
        {children}
      </Grid>
    </Grid>
  );
}

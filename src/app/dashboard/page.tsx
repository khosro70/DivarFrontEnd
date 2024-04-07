"use client";

import Loader from "@/components/sheared/Loader";
import { convertToJalali } from "@/helpers/dateStringToJalali";
import { eTpWithComma } from "@/helpers/etp";
import { getPosts } from "@/reactQuery/Queries";
import { signInErrorTost } from "@/utils/tostErrors";
import { Grid, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const YourPosts: NextPage = () => {
  const router = useRouter();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["myPosts"],
    queryFn: getPosts,
  });

  if (isLoading) return <Loader width="60" height="60" color="#374151" />;
  if (isError) return signInErrorTost();
  const clickHandler = (id: string) => {
    router.push(`/${id}`);
  };

  return (
    <>
      {data?.data?.posts.map((post: any) => (
        <Grid
          // onClick={() => clickHandler(post._id)}
          onClick={() => router.push(`/${post._id}`)}
          key={post._id}
          container
          display="flex"
          justifyContent="space-between"
          sx={{
            cursor: "pointer",
            borderBottom: "1px solid #9CA3AF",
            marginBottom: "9px",
          }}
        >
          <Grid
            item
            container
            sm={12}
            md={6}
            lg={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            spacing={2}
          >
            <Grid item sm={12} md={6}>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/${post.images[0]}`}
                width={500}
                height={500}
                alt="Picture of the author"
                style={{ width: "100%", height: "100px" }}
              />
            </Grid>
            <Grid item sm={12} md={6} sx={{ marginBottom: { sm: "8px" } }}>
              <Typography component="div" fontWeight="bold">
                {post.options.title}
              </Typography>
              <Typography component="div">شهر : {post.options.city}</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            lg={2}
            spacing={1}
            container
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Grid item>
              <Typography component="div" fontWeight="bold">
                تاریخ : {convertToJalali(post.createdAt)}
              </Typography>
            </Grid>
            <Grid item>
              <Typography component="div">
                {eTpWithComma(post.amount)} تومان
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default YourPosts;

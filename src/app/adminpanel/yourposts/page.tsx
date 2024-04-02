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
import React from "react";

const YourPosts: NextPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["myPosts"],
    queryFn: getPosts,
  });
  console.log(data?.data?.posts);
  if (isLoading) return <Loader width="60" height="60" color="#374151" />;
  if (isError) return signInErrorTost();

  return (
    <>
      {data?.data?.posts.map((post: any) => (
        <Grid
          key={post._id}
          container
          display="flex"
          justifyContent="space-between"
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
                // src={`http://localhost:3400/upload\\1711718373158.jpg`}
                src="/images/postimagedivar.jpg"
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

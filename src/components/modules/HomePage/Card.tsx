"use client";

import { CardPropsInterface } from "@/Types/Contracts";
import { eTpWithComma } from "@/helpers/etp";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Card: React.FC<CardPropsInterface> = ({ post }) => {
  const router = useRouter();
  const clickHandler = () => {
    router.push(`/${post._id}`);
  };
  return (
    <Grid
      onClick={clickHandler}
      key={post._id}
      container
      item
      xs={12}
      md={6}
      lg={4}
      sx={{
        maxHeight: "180px",
      }}
    >
      <Grid
        container
        display="flex"
        alignItems="center"
        sx={{
          border: 1,
          padding: "8px 12px",
          borderColor: "#D1D5DB",
          cursor: "pointer",
          "&:hover": { boxShadow: "0 0 0 1px rgba(20,20,20,0.4)" },
        }}
      >
        <Grid
          item
          xs={12}
          sm={7}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
          padding="20px 0"
        >
          <Box>
            <Typography component="div" variant="body2" fontWeight="bold">
              {post.options.title}
            </Typography>
            <Typography>{post.options.city}</Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ opacity: "0.6" }}>
              {eTpWithComma(post.amount)} تومان
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5} display="flex" alignItems="center">
          <Image
            src="/images/postimagedivar.jpg"
            width={300}
            height={300}
            alt="image"
            style={{
              height: "auto",
              objectFit: "contain",
              width: "100%",
              borderRadius: "6px",
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Card;

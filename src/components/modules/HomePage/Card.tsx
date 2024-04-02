"use client";

import { eTpWithComma } from "@/helpers/etp";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface CardPropsInterface {
  post: any;
}

const Card: React.FC<CardPropsInterface> = ({ post }) => {
  return (
    <Grid
      key={post._id}
      container
      item
      xs={12}
      md={6}
      lg={4}
      sx={{ maxHeight: "180px" }}
    >
      <Grid
        container
        display="flex"
        alignItems="center"
        sx={{ border: 1, padding: "8px 12px", borderColor: "#D1D5DB" }}
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
          {/* {post.images[0] ? (
            <Image
              //   src={`http://localhost:3400/${post.images[0]}`}
              src={myImageLoader(post.images[0])}
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
          ) : (
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
          )} */}
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

"use client";

import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Dashboard() {
  return (
    <Grid container display="flex" justifyContent="space-between">
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
            src="/images/divar.svg"
            width={500}
            height={500}
            alt="Picture of the author"
            style={{ width: "100%", height: "100px" }}
          />
        </Grid>
        <Grid item sm={12} md={6} sx={{marginBottom:{sm:"8px"}}}>
          <Typography component="div" fontWeight="bold">
            خانه 90 متری
          </Typography>
          <Typography component="div">شهر : تهران</Typography>
        </Grid>
      </Grid>
      <Grid item sm={12} md={6} lg={2} spacing={1} container display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center">
        <Grid item>
          <Typography component="div" fontWeight="bold">
            تاریخ
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="div">60000000 تومان</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

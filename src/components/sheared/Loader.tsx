"use client";

import { Box } from "@mui/material";
import React from "react";
import { Oval } from "react-loader-spinner";

interface loaderPropsInterface {
  width: string;
  height: string;
  color: string;
}

const Loader: React.FC<loaderPropsInterface> = ({ width, height, color }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: "20px", minWidth: "100%" }}
    >
      <Oval
        visible={true}
        height={width}
        width={height}
        color={color}
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Box>
  );
};

export default Loader;

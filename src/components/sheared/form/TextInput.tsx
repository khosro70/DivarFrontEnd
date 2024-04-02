"use client";

import React from "react";

import { InputBase, styled } from "@mui/material";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#D1D5DB",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 16,
    width: "100%",
    marginTop: "10px",
    height: "15px",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    "&:focus": {
      boxShadow: `#4992FF 0 0 0 0.05rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const TextInput: React.FC = () => {
  return <BootstrapInput placeholder="شماره تلفن" id="bootstrap-input" />;
};

export default TextInput;

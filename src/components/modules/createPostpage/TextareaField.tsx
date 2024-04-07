import { TextareaAutosize, styled } from "@mui/material";

export const TextareaField = styled(TextareaAutosize)(
  ({ theme }) => `
    box-sizing: border-box;
    width: 100%;
    min-height: 100px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px;
    border-radius:8px 8px 8px 8px;
    color:black;
    background: white;
    border: 1px solid grea;
    &:focus {
      outline: 0;
      border-color: "blue";
    }
    &:focus-visible {
      outline: 0;
    }
  `
);

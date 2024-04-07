import React from "react";
import { Controller } from "react-hook-form";
import { Typography, Grid } from "@mui/material";
import { TextareaField } from "./TextareaField";

interface TextAreaPropsInterface {
  control: any;
  errors: any;
}

const TextArea: React.FC<TextAreaPropsInterface> = ({ control, errors }) => {
  return (
    <Grid item xs={12}>
      <Typography
        component="div"
        fontWeight="medium"
        sx={{
          marginBottom: "10px",
          marginTop: "5px",
          textAlign: "right",
          fontSize: "18px",
        }}
      >
        توضیحات
      </Typography>
      <Controller
        name="content"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextareaField
            {...field}
            aria-label="توضیحات"
            placeholder="توضیحات را وارد کنید"
            style={{ width: "100%", padding: "8px", resize: "none" }}
          />
        )}
      />
      {errors.content && typeof errors.content === "string" && (
        <p style={{ color: "red", textAlign: "right", fontSize: "12px" }}>
          {errors.content.message}
        </p>
      )}
    </Grid>
  );
};

export default TextArea;

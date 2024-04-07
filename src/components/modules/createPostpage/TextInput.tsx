import React from "react";
import { Controller } from "react-hook-form";
import { Typography, Grid, TextField } from "@mui/material";

export interface TextInputPropsInterface {
  name: string;
  label: string;
  control: any;
  errors: any;
}

const TextInput: React.FC<TextInputPropsInterface> = ({
  name,
  label,
  control,
  errors,
}) => {
  return (
    <Grid item xs={12} md={6}>
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
        {label}
      </Typography>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            size="small"
            {...field}
            id="outlined-title"
            label={label}
            variant="outlined"
            fullWidth
            sx={{
              width: "100%",
              "& .MuiInputBase-input": {
                padding: "8px",
              },
              "& .MuiFormLabel-root": {
                top: "-2px",
                transformOrigin: "right",
                left: "unset",
                right: "1.75rem",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                textAlign: "right",
                color: "#D1D5DB",
              },
            }}
          />
        )}
      />
      {errors.title && (
        <p style={{ color: "red", textAlign: "right", fontSize: "12px" }}>
          {errors.title.message}
        </p>
      )}
    </Grid>
  );
};

export default TextInput;

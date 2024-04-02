"use client";
import { Controller } from "react-hook-form";
import { TextField, Typography } from "@mui/material";
import { FieldErrors, FieldValues } from "react-hook-form";

interface CategoryFieldProps {
  name: string;
  label: string;
  control: any;
  errors: any;
}

const CategoryField: React.FC<CategoryFieldProps> = ({
  name,
  label,
  control,
  errors,
}) => {
  return (
    <>
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
        defaultValue=""
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id={`outlined-${name}`}
            label={label}
            variant="outlined"
            sx={{
              width: "100%",
              "& .MuiInputBase-input": {
                padding: "8px",
              },
              "& .MuiFormLabel-root": {
                top: "-8px",
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
      {errors[name] && (
        <p style={{ color: "red", textAlign: "right", fontSize: "12px" }}>
          {errors[name].message}
        </p>
      )}
    </>
  );
};

export default CategoryField;

import React from "react";
import { Controller } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Grid,
} from "@mui/material";
import { SelectOptionPropsInterface } from "@/Types/Contracts";
const SelectOption: React.FC<SelectOptionPropsInterface> = ({
  name,
  label,
  control,
  errors,
  data,
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
          <FormControl
            size="small"
            fullWidth
            variant="outlined"
            sx={{ width: "100%" }}
          >
            <InputLabel id="category-label">{label}</InputLabel>
            <Select
              labelId="category-label"
              id={name}
              {...field}
              label="دسته بندی"
            >
              {data?.data?.map((category: any) => (
                <MenuItem key={category._id} value={category._id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
            {errors.category && (
              <Typography variant="body2" color="error">
                {errors.category.message}
              </Typography>
            )}
          </FormControl>
        )}
      />
    </Grid>
  );
};

export default SelectOption;

import React from "react";
import { TextField, Typography } from "@mui/material";
import { Field } from "formik";

function Input(props) {
  <Field {...props}>
    {({ field, meta }) => (
      <div className="mb-2">
        <TextField
          label={props.label}
          inputProps={{ ...field, ...props }}
          className="w-100"
          variant="standard"
        />
        {meta.touched && meta.errors && (
          <div className="p-relative" variant="caption" color="error">
            <Typography className="p.absolute">{meta.error}</Typography>}
          </div>
        )}
      </div>
    )}
  </Field>;
}

export default Input;

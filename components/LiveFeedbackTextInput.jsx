import * as React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';

const LiveFeedbackTextInput = ({ formik, helperText, ...props }) => {
  const [field, meta] = useField(props);

  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => {
    setDidFocus(true);
  };

  let currentState = 'text';
  if ((didFocus && field.value.trim().length > 1) || meta.touched) {
    helperText = meta.error ? meta.error : "It's Ok.";
    if (meta.error) {
      currentState = 'error';
    } else {
      currentState = 'success';
    }
  }

  return (
    <TextField
      {...props}
      {...field}
      onFocus={handleFocus}
      onChange={formik.handleChange}
      // onBlur={formik.handleBlur}
      helperText={helperText}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: currentState + '.main',
          },
          '&:hover fieldset': {
            borderColor: currentState + '.main',
          },
          '&.Mui-focused fieldset': {
            borderColor: currentState + '.main',
          },
        },

        '& .MuiFormHelperText-root': {
          color: currentState + '.main',
        },
        '& label.Mui-focused': {
          color: currentState + '.dark',
        },
        '& .MuiFormLabel-root': {
          color: currentState + '.dark',
        },
      }}
    />
  );
};

export default LiveFeedbackTextInput;

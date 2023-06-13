import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';

const CustomizedInputs = (props) => {
  const {
    displayLabel,
    inputType,
    handleChange,
    adornmentValue = '',
    className = '',
    placeholderText,
    multiline,
    inputProps,
    value,
    errorValue,
    name,
    errorMessage,
    readOnly,
    required,
    disabled,
  } = props;
  return (
    <FormControl
      variant="standard"
      fullWidth
      sx={{ mb: 2 }}
    >
      <InputLabel shrink htmlFor="bootstrap-input">
        {displayLabel}
        <span> {required ? '*' : ''}</span>
      </InputLabel>
      <InputBase
        name={name}
        type={inputType}
        id="bootstrap-input"
        className={className}
        fullWidth
        onChange={handleChange}
        startAdornment={adornmentValue}
        placeholder={placeholderText}
        multiline={multiline}
        inputProps={inputProps}
        value={value}
        error={errorValue}
        readOnly={readOnly}
        disabled={disabled}
      />
      {errorValue ? <Typography variant="caption" color="error">{errorMessage}</Typography> : ''}
    </FormControl>
  );
};

export default CustomizedInputs;


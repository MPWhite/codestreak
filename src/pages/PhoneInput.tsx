import { Input, Typography } from "@mui/joy";

export const PhoneNumberInput = () => {
  return (
    <Input startDecorator={<Typography>🇺🇸</Typography>} variant="outlined" />
  );
};

export default PhoneNumberInput;

import { Input, Typography } from "@mui/joy";
import { faFlagUsa } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PhoneNumberInput = () => {
  return (
    <Input startDecorator={<Typography>🇺🇸</Typography>} variant="outlined" />
  );
};

export default PhoneNumberInput;

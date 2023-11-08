import { Input, Typography } from "@mui/joy";
import styled from "styled-components";

const Wrapper = styled.div`
  z-index: 1000;
  // Add additional styles if needed
`;

export const PhoneNumberInput = () => {
  return (
    <Wrapper>
      <Input
        size="lg"
        sx={{
          fontWeight: "500",
        }}
        placeholder="555-555-5555"
        startDecorator={
          <>
            <Typography>🇺🇸</Typography>
          </>
        }
        // You may need to adjust these styles further to match the exact design
      />
    </Wrapper>
  );
};

export default PhoneNumberInput;

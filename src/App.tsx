import styled from "styled-components";
import { Button, Chip, Input, Link, Typography } from "@mui/joy";
import { ParticlesWrapper } from "./pages/ParticlesWrapper.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faPhone } from "@fortawesome/free-solid-svg-icons";
import PhoneNumberInput from "./pages/PhoneInput.tsx";
import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  //background-color: #1a1a1a;
`;

const FormWrapper = styled.div`
  top: 50%;
  transform: translateY(-50%);
  position: relative;
  padding: 20px;
  z-index: 1000;
  background-color: #1a1a1a;
`;

const EnterUsernameBlock = ({ nextStep }: { nextStep: () => void }) => {
  return (
    <>
      <Link
        level="h1"
        sx={{
          color: "white",
          // hover stay white
          "&:hover": {
            color: "white",
          },
        }}
      >
        Write Code Every Day
      </Link>
      <Typography
        level="h4"
        sx={{
          color: "white",
          marginTop: "10px",
        }}
      >
        Setup in seconds, no login required.
      </Typography>
      <Input
        startDecorator={<FontAwesomeIcon icon={faGithub} color={"white"} />}
        placeholder="Github Username"
        type="email"
        size={"lg"}
        endDecorator={<Button onClick={() => nextStep()}>Start</Button>}
        variant={"solid"}
        sx={{
          fontSize: "2rem",
          marginTop: "10px",
          padding: "10px 20px;",
          fontWeight: "bold",
          paddingLeft: "15px",
        }}
      />
    </>
  );
};

const GithubBlock = ({ nextStep }: { nextStep: () => void }) => {
  return (
    <>
      <Typography
        level="h1"
        sx={{
          color: "white",
        }}
      >
        Hey, MPWhite! 👋
      </Typography>
      <Typography
        sx={{
          color: "white",
          marginTop: "10px",
        }}
      >
        To get started, paste the following link anywhere in your Github's bio:{" "}
        <Chip
          onClick={() => alert("Copied!")}
          variant="soft"
          color="primary"
          endDecorator={<FontAwesomeIcon icon={faCopy} />}
        >
          codestreak.io/MPWhite
        </Chip>{" "}
        Then check back here once you've added it.
      </Typography>
      <Button
        startDecorator={<FontAwesomeIcon icon={faGithub} color={"white"} />}
        size={"lg"}
        sx={{
          marginTop: "15px",
          padding: "10px 20px;",
        }}
        onClick={() => nextStep()}
      >
        Verify Github
      </Button>
    </>
  );
};

const PhoneNumberBlock = () => {
  return (
    <>
      <Typography
        level="h1"
        sx={{
          color: "white",
        }}
      >
        Last step!
      </Typography>
      <Typography
        sx={{
          color: "white",
          marginTop: "10px",
        }}
      >
        Let us know where and when to send your daily reminders. Cancel anytime
        via test message.
      </Typography>
      <PhoneNumberInput />
      <Button
        startDecorator={<FontAwesomeIcon icon={faPhone} color={"white"} />}
        size={"lg"}
        sx={{
          marginTop: "15px",
          padding: "10px 20px;",
        }}
      >
        Verify Number
      </Button>
    </>
  );
};

const App = () => {
  const [step, setStep] = React.useState(0); // [0, 1, 2

  return (
    <Background>
      <ParticlesWrapper />
      <FormWrapper>
        {step === 0 && (
          <EnterUsernameBlock nextStep={() => setStep(step + 1)} />
        )}
        {step === 1 && <GithubBlock nextStep={() => setStep(step + 1)} />}
        {step === 2 && <PhoneNumberBlock />}
      </FormWrapper>
    </Background>
  );
};

export default App;

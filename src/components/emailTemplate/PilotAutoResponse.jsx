import React from "react";
import { Body, Container, Head, Hr, Html, Img, Preview, Text } from "@react-email/components";

const PilotAutoResponse = ({ userName }) => {
  return (
  <Html>
      <Head />
      <Preview>
        Thank you for your Pilot Program request - DSW
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={"https://www.datasciencewizards.ai/assets/images/form-logo.png"}
            width="140"
            height="80"
            alt="DSW Logo"
            style={logo}
          />
          <Text style={greeting}>Hi {userName},</Text>
          <Text style={paragraph}>
            Thank you for your interest in our Pilot Program! We've received your request and are excited about the opportunity to work with you.
          </Text>
          <Text style={paragraph}>
            Our team will carefully review your submission and assess how our solutions can best address your specific needs. We'll reach out to you within the next <strong>24-48 hours</strong> to discuss the next steps and program details.
          </Text>
          <Text style={paragraph}>
            In the meantime, if you have any additional information or questions about the pilot program, feel free to reach out to us directly.
          </Text>
          <Text style={paragraph}>
            Best regards,
            <br />
            Team DSW
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            This is an automated confirmation email.
          </Text>
          <Text style={footer}>Data Science Wizards</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default PilotAutoResponse;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "580px",
};

const logo = {
  margin: "0 auto 30px",
  display: "block",
};

const greeting = {
  fontSize: "18px",
  lineHeight: "26px",
  fontWeight: "600",
  marginBottom: "20px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "16px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "30px 0 20px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "18px",
  marginTop: "8px",
};
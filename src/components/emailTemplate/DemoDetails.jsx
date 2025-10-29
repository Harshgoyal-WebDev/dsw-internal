// components/emailTemplate/DemoDetails.jsx
import React from "react";
import { Body, Column, Container, Head, Hr, Html, Img, Preview, Row, Section, Text } from "@react-email/components";

const DemoDetails = ({
  userName,
  userEmail,
  userDesignation,
  userCompany,
  userNumber,
  downloadedPdfName, // 👈 optional
}) => {
  const previewText = downloadedPdfName
    ? `Someone just filled demo details and downloaded a PDF (${downloadedPdfName}) on DSW Website.`
    : `Someone just filled demo details on DSW Website.`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={"https://dsw-internal.vercel.app/assets/images/form-logo.png"}
            width="140"
            height="80"
            alt="Logo"
            style={logo}
          />
          <Text style={paragraph}>Hi,</Text>
          <Text style={paragraph}>
            {downloadedPdfName ? (
              <>You have a new demo form submission on the DSW website, and they downloaded <b>{downloadedPdfName}</b>. Below are the details.</>
            ) : (
              <>You have a new demo form submission on the DSW website. Below are the details.</>
            )}
          </Text>

          <Section>
            <Row style={row}>
              <Column style={columnHead}>Name</Column>
              <Column style={columnText}>{userName}</Column>
            </Row>
            <Row style={row}>
              <Column style={columnHead}>Email</Column>
              <Column style={{ ...columnText, textDecoration: "underline", color: "#067df7" }}>
                {userEmail}
              </Column>
            </Row>
            <Row style={row}>
              <Column style={columnHead}>Designation</Column>
              <Column style={columnText}>{userDesignation}</Column>
            </Row>
            <Row style={row}>
              <Column style={columnHead}>Company</Column>
              <Column style={columnText}>{userCompany}</Column>
            </Row>
            <Row style={row}>
              <Column style={columnHead}>Number</Column>
              <Column style={columnText}>{userNumber}</Column>
            </Row>

            {downloadedPdfName && (
              <Row style={row}>
                <Column style={columnHead}>Downloaded PDF</Column>
                <Column style={columnText}>{downloadedPdfName}</Column>
              </Row>
            )}
          </Section>

          <Text style={paragraph}>- Team DSW</Text>
          <Hr style={hr} />
          <Text style={footer}>India</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default DemoDetails;

const main = { backgroundColor: "#ffffff", fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif' };
const container = { margin: "0 auto", padding: "20px 0 48px" };
const logo = { margin: "0 auto" };
const paragraph = { fontSize: "16px", lineHeight: "26px" };
const row = { borderLeft: "1px solid #f2f2f2", borderRight: "1px solid #f2f2f2", borderTop: "1px solid #f2f2f2" };
const columnHead = { textAlign: "left", fontSize: "16px", lineHeight: "26px", fontWeight: "500", width: "120px", padding: "10px 15px", borderRight: "1px solid #f2f2f2" };
const columnText = { textAlign: "left", fontSize: "15px", lineHeight: "26px", padding: "10px 15px", color: "#6a6a6a" };
const hr = { borderColor: "#cccccc", margin: "20px 0" };
const footer = { color: "#8898aa", fontSize: "12px" };

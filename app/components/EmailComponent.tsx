import React from "react";
import {
  Hr,
  Row,
  Column,

  Tailwind,
  Body,
  Html,
  Head,
  Preview,
  Heading,
  Section,
} from "@react-email/components";

const EmailComponent = ({
  firstname,
  lastname,
  senderEmail,
  phone,
  projecttype,
  width,
  height,
}: {
  firstname: string;
  lastname: string;
  senderEmail: string;
  phone: string;
  projecttype: string;
  width: string;
  height: string;
}) => {
  return (
    <Html>
      <Head>
        <title>O noua comanda!</title>
      </Head>

      <Preview>O noua comanda primita din formularul de contact!</Preview>

      <Tailwind>
        <Body>
          <Section className="py-10">
            <Heading>O noua comanda!</Heading>
            <Row>
              <Column>
                Nume: {firstname} {lastname}
              </Column>
            </Row>

            <Hr className="my-[16px] border-black" />

            <Row>
              <Column>Email client: {senderEmail}</Column>
            </Row>

            <Hr className="my-[16px] border-black" />

            <Row>
              <Column>Număr de telefon client: {phone}</Column>
            </Row>

            <Hr className="my-[16px] border-black" />

            <Row>
              <Column>Tip proiect: {projecttype}</Column>
            </Row>

            <Hr className="my-[16px] border-black" />

            <Row>
              <Column>
                Dimensiuni: {width} x {height}
              </Column>
            </Row>

            <Hr className="my-[16px] border-black" />
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailComponent;

import sendgrid from "@sendgrid/mail";
import { NextResponse } from "next/server";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

interface FormSubmission {
  name: string;
  email: string;
  number: string;
  class: string;
  info: string;
}

export async function POST(request: Request) {
  try {
    const {
      name,
      number,
      email,
      class: selectedClass,
      info,
    }: FormSubmission = await request.json();

    await sendgrid.send({
      from: "contact@stalonebjj.co.uk",
      html: `
        <h1>Professor Stalone</h1>
        <p>${name} would like to join for the ${selectedClass} trial at your next suitable availability.</p>
        <p>Here is their form information:</p>
        <p>
          Name: ${name}
          <br />
          Email: ${email}
          <br />
          Phone: ${number}
          <br />
          Class: ${selectedClass}
          <br />
          Message: ${info}
        </p>
        <p>You can reply to this email directly to contact them.</p>
      `,
      replyTo: email,
      subject: `Class Trial Request ${new Date().toLocaleDateString()}`,
      to: "stalonebjjacademy@gmail.com",
    });

    await sendgrid.send({
      from: "contact@stalonebjj.co.uk",
      html: `
        <h3>We'll be in touch soon.</h3>
        <p>Thanks for your interest in Stalone BJJ. We'll be in touch soon to arrange your trial class.</p>
        <p>Here's the information you provided: please double check to ensure it's correct.</p>
        <p>
          Name: ${name}
          <br />
          Email: ${email}
          <br />
          Phone: ${number}
          <br />
          Class: ${selectedClass}
          <br />
          Message: ${info}
        </p>
        <p>You can reply to this email directly to contact us, or if you need to amend any of the details above.</p>
        <p>We're looking forward to welcoming you in to our school.</p>
        <p> - Stalone BJJ Team</p>
      `,
      replyTo: "contact@stalonebjj.co.uk",
      subject: `Thanks for your interest in Stalone BJJ`,
      to: email,
    });

    return NextResponse.json({ message: "Email sent", success: true });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error", success: false },
      { status: 500 }
    );
  }
}

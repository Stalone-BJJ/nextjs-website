import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY as string);

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
    const { data, error } = await resend.batch.send([
      {
        from: "Website Contact Form <onboarding@resend.dev>",
        html: `
        <h1>New Class Trial Request</h1>
        <h3>Professor Stalone,</h3>
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
        subject: `New Class Trial Request ${new Date().toLocaleDateString()}`,
        to: "contact@stalonebjj.co.uk",
      },
      // {
      //   from: "onboarding@resend.dev",
      //   html: `
      //   <h1>We'll be in touch soon.</h1>
      //   <p>Thanks for your interest in Stalone BJJ. We'll be in touch soon to arrange your trial class.</p>
      //   <p>Here's the information you provided: please double check to ensure it's correct.</p>
      //   <p>
      //     Name: ${name}
      //     <br />
      //     Email: ${email}
      //     <br />
      //     Phone: ${number}
      //     <br />
      //     Class: ${selectedClass}
      //     <br />
      //     Message: ${info}
      //   </p>
      //   <p>Please email contact@stalonebjj.co.uk if you have further questions. Replies to this email are not monitored.</p>
      //   <p>We're looking forward to welcoming you in to our school.</p>
      //   <p>Kind regards,</p>
      //   <p>Stalone BJJ Academy Chorley</p>
      // `,
      //   replyTo: "contact@stalonebjj.co.uk",
      //   subject: `Thanks for your interest in Stalone BJJ`,
      //   to: email,
      // },
    ]);

    console.log("Data:", data);
    console.log("Error:", error);

    if (error !== null) {
      throw new Error(error.message);
    }

    return NextResponse.json({ message: "Email sent", success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Internal server error", success: false },
      { status: 500 },
    );
  }
}

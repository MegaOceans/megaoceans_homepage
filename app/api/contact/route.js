import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();

  const { name, companyName, email, companyEmail, description } = body;

  if (!name || !email || !description) {
    return new Response(
      JSON.stringify({ error: "Please fill all required fields." }),
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or any email service you use
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.COMPANY_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Company Name: ${companyName || "N/A"}
        Email: ${email}
        Company Email: ${companyEmail || "N/A"}
        Description: ${description}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Error sending email." }), {
      status: 500,
    });
  }
}

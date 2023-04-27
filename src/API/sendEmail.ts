import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your_email@gmail.com",
    pass: "your_password",
  },
});

interface EmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailProps) => {
  const { name, email, subject, message } = data;

  try {
    await transporter.sendMail({
      from: email,
      to: "vanessa.ferreira.dev@gmail.com",
      subject: `New message from ${name}: ${subject}`,
      html: `<p>${message}</p>`,
    });
    console.log("Email sent successfully!");
  } catch (error) {
    console.log(error);
  }
};

import sgMail, { MailDataRequired, ResponseError } from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
export const sendEmail = (
  to: string,
  from: string,
  subject: string,
  html: string
) => {
  const msg: MailDataRequired = {
    to,
    from,
    subject,
    html,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email was sent");
    })
    .catch((err: ResponseError | Error) => {
      console.error("Email not sent", err);
    });
};

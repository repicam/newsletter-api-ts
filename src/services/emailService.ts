import { Transporter } from '../configs/emailTransporter'
import { SendMailOptions } from 'nodemailer'

export const sendEmail = async ( to: string, subject: string, message: string ) => {
  try {
    const mailOptions: SendMailOptions = {
      from: process.env.EMAIL_ACCOUNT!,
      to, subject, text: message
    }
    await Transporter.sendMail( mailOptions )
  } catch ( error ) {
    console.log( 'Error sending email', error )
  }
}
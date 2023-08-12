import { Transporter } from '../configs/emailTransporter'
import { SendMailOptions } from 'nodemailer'
import { EmailI } from '../interfaces/email'
import { UserBodyI, UserI } from '../interfaces/user'

const sendEmail = async ( email: EmailI ) => {
  try {
    const mailOptions: SendMailOptions = {
      from: process.env.EMAIL_ACCOUNT!,
      to: email.to,
      subject: email.subject,
      html: email.html
    }
    await Transporter.sendMail( mailOptions )
  } catch ( error ) {
    console.log( 'Error sending email', error )
  }
}

const welcomeEmail = async ( user: UserBodyI ) => {
  const emailDto: EmailI = {
    to: user.email,
    subject: `Bienvenid@ ${ user.name }`,
    html: `<h1> Hola ${ user.name } </h1> <br> <p>Te has suscrito a la newsletter, espero que te guste</p>`
  }

  await sendEmail( emailDto )
}

const updatePreferencesEmail = async ( user: UserI ) => {
  const textActive = user.isActive ? 'Te has suscrito de nuevo a la lista, no te defraudaremos'
    : 'Te has dado de baja de la lista, pero siempre te esperaremos de vuelta'

  const emailDto: EmailI = {
    to: user.email,
    subject: `${ user.name }, nuevas preferencias`,
    html: `<h1> Hola ${ user.name } </h1>
    <p>Tus preferencias han sido modificadas. ${ textActive }</p>`
  }

  await sendEmail( emailDto )
}

const deleteUserEmail = async ( user: UserBodyI ) => {
  const emailDto: EmailI = {
    to: user.email,
    subject: `${ user.name }, lo sentimos`,
    html: `<h1> Hola ${ user.name } </h1>
    <p>Sentimos que no sea lo que esperabas y te hayas dado de baja. Si deseas volver, estaremos encantados</p>`
  }

  await sendEmail( emailDto )
}

const reactivateUserEmail = async ( user: UserBodyI ) => {
  const emailDto: EmailI = {
    to: user.email,
    subject: `${ user.name }, te queremos de vuelta`,
    html: `<h1> Hola ${ user.name } </h1>
    <p>Una lástima que aun no hayas elegido volver. ¿Te animas?</p>
    <a href='www.google.com'>Volver a unirme</a>
    <a href='www.you.com'>Darme de baja del sistema</a>`
  }

  await sendEmail( emailDto )
}

export default {
  welcomeEmail, updatePreferencesEmail, deleteUserEmail, reactivateUserEmail,
  sendEmail
}
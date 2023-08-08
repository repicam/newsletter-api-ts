import { connect } from 'mongoose'

export const connectDB = () => {
  connect(
    process.env.DB_URI! //aseguramos que el valor no es undefined con !
  ).then( () => {
    console.log( 'Conectado a MongoDB' )
  } ).catch( ( error ) => {
    console.log( `Error conectando a MongoDB: ${ error }` )
  } )
}
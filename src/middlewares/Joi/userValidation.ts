import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

export const userValidationMdlware = ( req: Request, res: Response, next: NextFunction ) => {
  const userSchema = Joi.object( {
    email: Joi.string().email().required(),
    name: Joi.string().required()
  } )

  const { error } = userSchema.validate( req.body, {abortEarly: false} )

  if ( error ) {
    const errorMessage = error.details.map( ( d ) => d.message ).join( ', ' )
    return res.status( 400 ).json( { message: errorMessage } )
  }

  next()
}

export const userUpdateValidationMdlware = ( req: Request, res: Response, next: NextFunction ) => {
  const userSubsSchema = Joi.object( {
    unsubscribe: Joi.boolean().required()
  } )

  const { error } = userSubsSchema.validate( req.body, { abortEarly: false } )

  if ( error ) {
    const errorMessage = error.details.map( ( d ) => d.message ).join( ', ' )
    return res.status( 400 ).json( { message: errorMessage } )
  }

  next()
}
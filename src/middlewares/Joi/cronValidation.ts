import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

export const cronValidationMdlware = ( req: Request, res: Response, next: NextFunction ) => {
  const cronSchema = Joi.object( {
    cron: Joi.string().valid( 'daily', 'monthly' ).required(),
    action: Joi.string().valid( 'start', 'stop' ).required()
  } )

  const { error } = cronSchema.validate( req.body, { abortEarly: false } )

  if ( error ) {
    const errorMessage = error.details.map( ( d ) => d.message ).join( ', ' )
    return res.status( 400 ).json( { message: errorMessage } )
  }

  next()
}
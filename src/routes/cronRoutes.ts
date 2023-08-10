import { Request, Response, Router } from 'express'
import { cronValidationMdlware } from '../middlewares/Joi/cronValidation'
import cronController from '../controllers/cronController'

const router = Router()

router.post( '/', cronValidationMdlware, async ( req: Request, res: Response ) => {
  try {
    cronController.modifyCron( req.body )
    res.status( 200 ).json( { success: 'OK' } )
  } catch ( error ) {
    res.status( 400 ).json( { success: 'KO', error } )
  }
} )

export default router
import { Request, Response, Router } from 'express'
import { userValidationMdlware } from '../middlewares/Joi/userValidation'
import userController from '../controllers/userController'

const router = Router()

router.post( '/', userValidationMdlware, async ( req: Request, res: Response ) => {
  try {
    const newUser = await userController.createNewUser( req.body )
    res.status( 201 ).json( { success: 'OK', newUser } )
  } catch ( error ) {
    res.status( 400 ).json( { success: 'KO', error } )
  }
} )

/*router.get( '/', async ( _, res: Response ) => {
  try {
    const userList = await userController.getAllUsers()
    res.status( 200 ).json( { success: 'OK', userList } )
  } catch ( error ) {
    res.status( 400 ).json( { success: 'KO', error } )
  }
} )*/

export default router
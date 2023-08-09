import { Request, Response, Router } from 'express'
import { userValidationMdlware, userUpdateValidationMdlware } from '../middlewares/Joi/userValidation'
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

router.delete( '/:id', async ( req: Request, res: Response ) => {
  const { id } = req.params
  try {
    await userController.deleteUser( id )
    res.status( 204 )
  } catch ( error ) {
    res.status( 400 ).json( { success: 'KO', error } )
  }
} )

router.patch( '/:id', userUpdateValidationMdlware, async ( req: Request, res: Response ) => {
  const { id } = req.params
  const { unsubscribe } = req.body

  try {
    await userController.updateUser( id, unsubscribe )
    res.status( 200 ).json( { success: 'OK' } )
  } catch ( error ) {
    res.status( 400 ).json( { success: 'KO', error } )
  }
} )

export default router
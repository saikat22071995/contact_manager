const express=require('express')
const router=express.Router()
const userController=require('../app/controllers/userController')
const {authenticateUser}=require('../app/middleware/authentication')
const contactController=require('../app/controllers/contactController')
const {upload}=require('../app/middleware/multer')



router.post('/users/register',userController.create)
router.post('/users/login',userController.loginCreate)
router.get('/users/account',authenticateUser,userController.account)
router.delete('/users/logout',authenticateUser,userController.logout)


router.get('/contacts',authenticateUser,contactController.list)
router.get('/contacts/:id',authenticateUser,contactController.show)
router.post('/contacts',authenticateUser,upload.single('contactImage'),contactController.create)
router.put('/contacts/:id',authenticateUser,upload.single('contactImage'),contactController.update)
router.delete('/contacts/:id',authenticateUser,contactController.destroy)

module.exports=router
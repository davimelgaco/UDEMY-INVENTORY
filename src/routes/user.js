const express = require('express');
const ApiUser = require('../api/user');

const userRouter = express.Router();

// opções do usuário por si só
userRouter.get('/info', ApiUser.FindById)
userRouter.put('/', ApiUser.Update)
userRouter.delete('/', ApiUser.Delete)

//opções do admin
userRouter.get('/', ApiUser.FindAll)
userRouter.get('/:id', ApiUser.FindById)
userRouter.post('/', ApiUser.Create)
userRouter.put('/:id', ApiUser.Update)
userRouter.delete('/:id', ApiUser.Delete)


module.exports = userRouter;
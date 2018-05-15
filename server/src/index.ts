import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import setupDb from './db'
import UserController from './users/controller'
// import LoginController from './logins/controller'



const app = createKoaServer({
  cors: true,
  controllers: [
    UserController,
    // LoginController
    ]
})

setupDb()
  .then(_ =>
    app.listen(4000, () => console.log('Listening on port 4000'))
  )
  .catch(err => console.error(err))
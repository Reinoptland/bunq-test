import { IsString } from 'class-validator'
import { JsonController, Post, Body, BadRequestError, NotFoundError } from 'routing-controllers'
// import * as superagent from 'superagent'
import User from '../users/entity'
import { sign } from '../jwt';

class AuthenticatePayload {
  @IsString()
  email: string

  @IsString()
  password: string
}

@JsonController()
export default class LoginController {

  @Post('/logins')
  async authenticate(
    @Body() {email, password}: AuthenticatePayload
  ) {
    const user = await User.findOne({where: {email}})

    if(!user) throw new NotFoundError('No user with that email found.')
    if(!await user.checkPassword(password)) throw new BadRequestError('Incorrect password.')

    const jwt = sign({id: user.id!})
    return {
      jwt
    }
  }

}

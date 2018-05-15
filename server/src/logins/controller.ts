import { IsString } from 'class-validator'
import { JsonController, Post, Body, BadRequestError } from 'routing-controllers'
// import * as superagent from 'superagent'
import User from '../users/entity'

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
    @Body() { email, password }: AuthenticatePayload
  ) {
    const user = await User.findOne({ where: { email } })
    // console.log(password)
    if (!user) throw new BadRequestError('A user with this email does not exist')
    // console.log(await user.checkPassword(password))

    if (!await user.checkPassword(password)) throw new BadRequestError('The password is not correct')
    
    return {user}

  }
}

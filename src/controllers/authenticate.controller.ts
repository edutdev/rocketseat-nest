import { Controller } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Controller('/sessions')
export class AuthenticateController {
  constructor(private jtw: JwtService) {}

  async handle() {}
}

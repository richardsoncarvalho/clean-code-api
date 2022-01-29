import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamsError } from '../errors/MissingParamError'
import { badRequest } from '../helpers/http-request'
import { Controller } from '../protocols/controller'

export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamsError(field))
      }
    }

    return {
      statusCode: 400,
      body: ''
    }
  }
}

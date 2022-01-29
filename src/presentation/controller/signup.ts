import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamsError } from '../errors/MissingParamError'
import { badRequest } from '../helpers/http-request'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email']
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

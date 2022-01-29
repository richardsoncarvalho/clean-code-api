import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamsError } from '../errors/MissingParamsError'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamsError('name')
      }
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamsError('email')
      }
    }

    return {
      statusCode: 400,
      body: ''
    }
  }
}

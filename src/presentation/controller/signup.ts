import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamsError } from '../errors/MissingParamsError'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return {
          statusCode: 400,
          body: new MissingParamsError(field)
        }
      }
    }

    return {
      statusCode: 400,
      body: ''
    }
  }
}

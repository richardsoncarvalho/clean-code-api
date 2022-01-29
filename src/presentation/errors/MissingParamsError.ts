export class MissingParamsError extends Error {
  constructor (params: string) {
    super(`Missing Params: ${params}`)
    this.name = 'MissingParamsError'
  }
}

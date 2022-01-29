export class MissingParamsError extends Error {
  constructor (params: string) {
    super(`Missing Param: ${params}`)
    this.name = 'MissingParamsError'
  }
}

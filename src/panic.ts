/**
 * Throws specified error or creates and throws new Error with given message
 * @param messageOrError Either error message or error object
 */
export function panic(messageOrError: string | Error): never {
  throw typeof messageOrError === "string"
    ? new Error(messageOrError)
    : messageOrError;
}

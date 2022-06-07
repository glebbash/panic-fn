/**
 * Throws provided error or new Error with provided message
 * @param messageOrError Either error message or error object
 */
 export function panic(messageOrError: string | Error): never {
    throw typeof messageOrError === 'string'
      ? new Error(messageOrError)
      : messageOrError;
  }
  
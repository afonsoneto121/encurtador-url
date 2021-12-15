type ApplicationErrorInformation<T> = {
  data?: T
  message?: string,
  log?: string,
}
const DEFAULT_APPLICATION_ERROR_CONFIG: ApplicationErrorInformation<void> = {
  message: 'Unexpected error',
  log: 'unexpected-error',
};

class ApplicationError<T> extends Error {
  constructor(
    public information: ApplicationErrorInformation<T>,
  ) {
    super(information.message || DEFAULT_APPLICATION_ERROR_CONFIG.message);
    if (!information.log) {
      information.log = DEFAULT_APPLICATION_ERROR_CONFIG.log;
    }
  }
}
export {ApplicationError, ApplicationErrorInformation};

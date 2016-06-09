package com.bp3.seed.model;

/**
 * Generic Exception for catching server side errors.
 * @author dparish
 */
public class ServiceException extends Exception {

    public ServiceException(final String message) {
        super(message);
    }

    public ServiceException(final String message, final Throwable cause) {
        super(message, cause);
    }
}

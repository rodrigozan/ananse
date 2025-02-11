import { Response } from "express";

export default function handleError(res: Response, error: any, defaultMessage = 'Error processing request') {
    let errorMessage = defaultMessage;
    let fieldErrors = [];

    if (error.name === 'ValidationError') {
        fieldErrors = Object.values(error.errors).map((err: any) => err.message);
        errorMessage = `${defaultMessage}: [${fieldErrors.join(' | ')}]`;
    } else if (error.message) {
        errorMessage = error.message;
    }

    console.error(errorMessage);

    return res.status(500).json({
        message: errorMessage,
    });
}
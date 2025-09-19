import { type ClassValue, clsx } from "clsx";
import { FieldError } from "react-hook-form";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
Handles the error that returns from the server function.
Zod error and others. Used on the client side to display the error message.

@param error - The error object returned from the server function.
@returns The error message or null if the error is not an object or the message is not present.
*/
export function handleError(error: Error | FieldError | null) {
  if (!error) return null;
  if (typeof error === "object" && error.message) {
    try {
      const errorObj = JSON.parse(error.message);
      if (Array.isArray(errorObj) && errorObj.length > 0) {
        return errorObj[0].message;
      }
    } catch (e) {
      console.error(e);
      return error.message ?? "Unknown error";
    }
  }
  return error.message;
}

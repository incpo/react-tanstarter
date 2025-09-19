import { customAlphabet } from "nanoid";

// Custom alphabet: lowercase letters, numbers, and uppercase letters
const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Create custom nanoid generator with the alphabet
export const nanoid = (length = 21) => customAlphabet(alphabet, length)();

// Generate ID with label prefix
export const generateId = (label: string, length: number = 21): string => {
  const id = customAlphabet(alphabet, length)();
  return `${label}_${id}`;
};

import { compare, hash } from 'bcrypt';

const saltRounds = 10; // Number of rounds for generating salt

/**
 * Hashes a plain-text password.
 * @param {string} password - The plain-text password to hash.
 * @returns {Promise<string>} - A promise that resolves to the hashed password.
 */
export async function hashPassword(password) {
  try {
    return await hash(password, saltRounds);
  } catch (error) {
    throw new Error('Failed to hash password');
  }
}

/**
 * Compares a plain-text password with a hashed password.
 * @param {string} password - The plain-text password to compare.
 * @param {string} hashedPassword - The hashed password to compare against.
 * @returns {Promise<boolean>} - A promise that resolves to true if passwords match, otherwise false.
 */
export async function comparePasswords(password, hashedPassword) {
  try {
    return await compare(password, hashedPassword);
  } catch (error) {
    throw new Error('Failed to compare passwords');
  }
}

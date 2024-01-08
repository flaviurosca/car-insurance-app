/**
 *
 * @param data
 * @returns get data from local storage
 */

export const getUsersData = (data: string) => {
  return JSON.parse(localStorage.getItem(data) || "[]");
};

/**
 *
 * @param data
 * @param value
 * @returns set data to local storage
 */

export const setUsersData = (data: string, value: unknown) => {
  localStorage.setItem(data, JSON.stringify(value));
};

/**
 *
 * @returns generate random premium
 */

export const generateRandomPremium = (): string =>
  (Math.random() * (999 - 100) + 100).toFixed(2);

/**
 *
 * @returns min date for birthdate
 * @description 18 years ago
 * @example 15-09-2003
 */

export const validateBirthdate = (): string => {
  const eighteenYearsAgo = new Date();
  eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
  return eighteenYearsAgo.toISOString().split("T")[0];
};

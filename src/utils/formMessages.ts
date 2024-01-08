export const formMessages = {
  email: {
    required: "Email is required.",
    pattern: "Email is not valid.",
    exists: "Email already exists. Please use a different email address.",
  },
  password: {
    required: "Password is required.",
    minLength: "Password must be at least 8 characters.",
    maxLength: "Password must be at most 30 characters.",
    pattern:
      "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character.",
  },
  firstName: {
    required: "First name is required.",
    minLength: "First name must be at least 2 characters.",
    maxLength: "First name must be at most 30 characters.",
  },
  lastName: {
    required: "Last name is required.",
    minLength: "Last name must be at least 2 characters.",
    maxLength: "Last name must be at most 30 characters.",
  },
  birthdate: {
    required: "Birthdate is required.",
  },
  carManufacturer: {
    required: "Car manufacturer is required.",
  },
  yearOfManufacture: {
    required: "Year of manufacture is required.",
    pattern: "Year of manufacture is not valid.",
  },
  mileage: {
    required: "Mileage is required.",
  },
};

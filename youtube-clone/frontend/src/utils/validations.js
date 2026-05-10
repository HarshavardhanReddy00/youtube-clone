// EMAIL VALIDATION

export const validateEmail = (
  email
) => {
  // MUST BE LIKE:
  // username@gmail.com

  const regex =
    /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  return regex.test(email);
};

// PASSWORD VALIDATION

export const validatePassword = (
  password
) => {
  /*
    
    RULES:
    
    1. Minimum 8 characters
    2. One uppercase letter
    3. One lowercase letter
    4. One number
    5. One special character
    
  */

  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return regex.test(password);
};

// USERNAME VALIDATION

export const validateUsername = (
  username
) => {
  return username.length >= 3;
};
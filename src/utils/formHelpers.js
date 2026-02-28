import toast from 'react-hot-toast';

export const handleFormError = (error) => {
  if (typeof error === 'string') {
    toast.error(error);
  } else if (error.message) {
    toast.error(error.message);
  } else {
    toast.error('Something went wrong. Please try again.');
  }
};

export const handleFormSuccess = (message = 'Success!') => {
  toast.success(message);
};

export const getFieldError = (fieldName, formState) => {
  return formState?.errors?.[fieldName]?.message;
};

export const validatePhoneNumber = (phone) => {
  return /^(\+234|0)[0-9]{10}$/.test(phone);
};

export const formatPhoneNumber = (phone) => {
  if (!phone) return '';
  // Convert 0 to +234
  if (phone.startsWith('0')) {
    return '+234' + phone.slice(1);
  }
  return phone;
};

export const maskEmail = (email) => {
  if (!email) return '';
  const [local, domain] = email.split('@');
  if (local.length <= 2) return email;
  return local.slice(0, 2) + '*'.repeat(local.length - 2) + '@' + domain;
};

export const isPasswordStrong = (password) => {
  return (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password)
  );
};


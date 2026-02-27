import { z } from 'zod';

export const registerSchema = z.object({
  userType: z.enum(['rider', 'host'], {
    errorMap: () => ({ message: 'Please select Rider or Host' })
  }),
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(50, 'Full name must be less than 50 characters'),
  email: z
    .string()
    .email('Invalid email address')
    .refine(email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), {
      message: 'Please enter a valid email address'
    }),
  phone: z
    .string()
    .regex(/^(\+234|0)[0-9]{10}$/, {
      message: 'Phone number must be valid (e.g., +2349012345678 or 09012345678)'
    }),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword']
});

export const loginSchema = z.object({
  email: z
    .string()
    .email('Invalid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
});

export const profileSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(50, 'Full name must be less than 50 characters'),
  phone: z
    .string()
    .regex(/^(\+234|0)[0-9]{10}$/, {
      message: 'Phone number must be valid'
    }),
  bio: z
    .string()
    .max(500, 'Bio must be less than 500 characters')
    .optional()
    .or(z.literal('')),
  profileImage: z
    .string()
    .url('Profile image must be a valid URL')
    .optional()
    .or(z.literal(''))
});

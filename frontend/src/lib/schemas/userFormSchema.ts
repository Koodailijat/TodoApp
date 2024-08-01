import { z } from 'zod';

export function loginUsernameSchema() {
    return z.object({
        username: z.string(),
        password: z.string(),
    });
}

export function usernameSchema() {
    return z.object({
        username: z
            .string()
            .min(2, { message: 'Username must be 2 characters long' }),
    });
}

export function signUpWithEmailSchema() {
    return z
        .object({
            firstName: z.string().min(2, { message: 'First name is required' }),
            lastName: z.string().min(2, { message: 'Last name is required' }),
            email: z.string().email(),
            username: z
                .string()
                .min(3, { message: 'Username must be 3 characters long' })
                .max(20, {
                    message: 'Username must be shorter than 20 characters',
                }),
            password: z
                .string()
                .includes('')
                .min(8, { message: 'Password must be 8 characters long' })
                .max(32, {
                    message: 'Password must be shorter than 32 characters',
                }),
            confirmPassword: z
                .string()
                .includes('')
                .min(8, { message: 'Password must be 8 characters long' })
                .max(32, {
                    message: 'Password must be shorter than 32 characters',
                }),
        })
        .superRefine(({ password, confirmPassword }, ctx) => {
            if (password !== confirmPassword) {
                ctx.addIssue({
                    code: 'custom',
                    message: 'Passwords do not match',
                    path: ['confirmPassword'],
                });
            }
        });
}

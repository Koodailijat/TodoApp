import { z } from 'zod';

export function loginUsernameSchema() {
    return z.object({
        username: z.string().min(2, { message: 'Username is invalid' }),
        password: z.string().min(0, { message: 'Password is invalid' }),
    });
}

export function usernameSchema() {
    return z.object({
        username: z
            .string()
            .min(2, { message: 'Username must be longer than 2 characters' }),
    });
}

export function signUpSchema() {
    return z
        .object({
            first_name: z
                .string()
                .min(2, { message: 'First name is required' })
                .max(16, {
                    message: 'First name must be shorter than 16 characters',
                }),
            last_name: z
                .string()
                .min(2, { message: 'Last name is required' })
                .max(16, {
                    message: 'Last name must be shorter than 16 characters',
                }),
            email: z.string().email(),
            username: z
                .string()
                .min(2, {
                    message: 'Username must be longer than 2 characters',
                })
                .max(16, {
                    message: 'Username must be shorter than 16 characters',
                }),
            password: z
                .string()
                .min(8, {
                    message: 'Password must be longer than 8 characters',
                })
                .max(32, {
                    message: 'Password must be shorter than 32 characters',
                }),
            confirmPassword: z.string(),
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

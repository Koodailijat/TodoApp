import { request } from '@/services/request.ts';

export async function loginRequest(values) {
    return request({
        method: 'POST',
        url: 'auth/login',
        data: {
            username: values.username,
            password: values.password,
        },
    });
}

export async function signUpRequest(values) {
    return request({
        method: 'POST',
        url: 'auth/signup',
        data: {
            first_name: values.firstName,
            last_name: values.lastName,
            username: values.username,
            email: values.email,
            password: values.password,
        },
    });
}

import { request } from '@/services/request.ts';
import { SignupUserDto } from '@/lib/types/SignupUserDto.ts';
import { LoginUserDto } from '@/lib/types/LoginUserDto.ts';

export async function loginRequest(values: LoginUserDto) {
    return request({
        method: 'POST',
        url: 'auth/login',
        data: {
            username: values.username,
            password: values.password,
        },
    });
}

export async function signUpRequest(values: SignupUserDto) {
    return request({
        method: 'POST',
        url: 'auth/signup',
        data: {
            first_name: values.first_name,
            last_name: values.last_name,
            username: values.username,
            email: values.email,
            password: values.password,
        },
    });
}

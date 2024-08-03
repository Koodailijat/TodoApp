import { useMutation } from '@tanstack/react-query';
import { mutationKeys } from '@/constants/mutationKeys.ts';
import { loginRequest, signUpRequest } from '@/services/authRequest.ts';
import { storageKeys } from '@/constants/storageKeys.ts';

export function useLoginMutation() {
    return useMutation({
        mutationFn: loginRequest,
        mutationKey: [mutationKeys.login],
        onSuccess: (response) => {
            localStorage.setItem(
                storageKeys.accessToken,
                response.data.auth_token
            );
        },
    });
}

export function useSignUpMutation() {
    return useMutation({
        mutationFn: signUpRequest,
        mutationKey: [mutationKeys.singup],
    });
}

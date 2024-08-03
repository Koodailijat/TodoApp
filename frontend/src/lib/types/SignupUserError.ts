export interface SignUpUserError {
    response: {
        data: {
            conflictedField: 'email' | 'username';
            message: string;
            statusCode: number;
        };
    };
}

import { z } from 'zod';

export default function loginFormSchema() {
    return z.object({
        email: z.string().email(),
    });
}

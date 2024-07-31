import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Lock, Mail } from 'lucide-react';
import PageView from '@/components/views/PageView.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import { loginEmailSchema } from '@/lib/schemas/userFormSchema.ts';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form.tsx';
import { IconField } from '@/components/iconfield/IconField.tsx';

export default function LoginEmail() {
    const enteredEmail = useLocation().state.values.email;
    const [email] = useState<string>(enteredEmail);
    const password = '';
    const formSchema = loginEmailSchema();

    const loginForm = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email,
            password,
        },
    });

    // @ts-expect-error not implemented yet
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Send login
    }

    return (
        <PageView>
            <div className="flex size-full items-center justify-center">
                <div className="flex w-96 flex-col items-center justify-center gap-6 rounded-lg bg-secondary p-12">
                    <div className="h-full">
                        <h1 className="text-3xl">Login with email</h1>
                    </div>
                    <Separator className="bg-border" />
                    <Form {...loginForm}>
                        <form
                            className="flex size-full flex-col items-center justify-center gap-6"
                            onSubmit={loginForm.handleSubmit(onSubmit)}>
                            <div className="flex w-full flex-col">
                                <FormField
                                    control={loginForm.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="max-h-28 min-h-28 w-full">
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <IconField
                                                    icon={<Mail />}
                                                    type="email"
                                                    placeholder="Email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={loginForm.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="max-h-28 min-h-28 w-full">
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <IconField
                                                    icon={<Lock />}
                                                    type="password"
                                                    placeholder="Password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button className="m-2 w-full" type="submit">
                                Login
                            </Button>
                        </form>{' '}
                    </Form>
                </div>
            </div>
        </PageView>
    );
}

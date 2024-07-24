import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button.tsx';
import PageView from '@/components/views/PageView.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import { Input } from '@/components/ui/input.tsx';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form.tsx';
import LoginFormSchema from '@/lib/schemas/loginFormSchema.ts';

export default function Login() {
    const [email] = useState<string>('');
    const navigate = useNavigate();
    const formSchema = LoginFormSchema();

    const loginForm = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email,
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        navigate('email', { state: { values } });
    }

    return (
        <PageView>
            <div className="flex size-full items-center justify-center">
                <div className="flex size-full flex-col items-center justify-center gap-12 bg-secondary p-12 md:h-4/6 md:w-96">
                    <div className="">
                        <h1 className="text-3xl">Login</h1>
                    </div>
                    <Button className="w-full md:w-4/5">
                        Login using Google
                    </Button>
                    <div className="flex w-2/5 items-center justify-center gap-4">
                        <Separator className="bg-primary" />
                        <h2 className="text-xl">Or</h2>
                        <Separator className="bg-primary" />
                    </div>
                    <Form {...loginForm}>
                        <form
                            className="flex w-full flex-col items-center justify-center gap-2 md:w-4/5"
                            onSubmit={loginForm.handleSubmit(onSubmit)}>
                            <FormField
                                control={loginForm.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="max-h-28 min-h-28 w-full pb-4">
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button className="m-2 w-full" type="submit">
                                Continue
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </PageView>
    );
}

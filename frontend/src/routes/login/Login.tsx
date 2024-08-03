import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import PageView from '@/components/views/PageView.tsx';
import { Separator } from '@/components/ui/separator.tsx';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form.tsx';
import { usernameSchema } from '@/lib/schemas/userFormSchema.ts';
import { IconField } from '@/components/iconfield/IconField.tsx';

export default function Login() {
    const navigate = useNavigate();
    const formSchema = usernameSchema();

    const loginForm = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        navigate('username', { state: { values } });
    }

    return (
        <PageView>
            <div className="flex size-full items-center justify-center">
                <div className="md: flex w-96 flex-col items-center justify-center gap-12 rounded-lg bg-secondary p-12">
                    <div className="">
                        <h1 className="text-3xl">Login</h1>
                    </div>
                    <Button className="w-full">Login using Google</Button>
                    <div className="flex w-2/5 items-center justify-center gap-4">
                        <Separator className="bg-primary" />
                        <h2 className="text-xl">Or</h2>
                        <Separator className="bg-primary" />
                    </div>
                    <Form {...loginForm}>
                        <form
                            className="flex w-full flex-col items-center justify-center gap-4"
                            onSubmit={loginForm.handleSubmit(onSubmit)}>
                            <FormField
                                control={loginForm.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem className="max-h-28 min-h-28 w-full pb-4">
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <IconField
                                                icon={<User />}
                                                placeholder="Username"
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
                            <div className="flex flex-col items-center justify-center">
                                <p>Don&apos;t have an account?</p>
                                <Link className="underline" to="/signup">
                                    Sign up now!
                                </Link>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </PageView>
    );
}

import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Lock, User } from 'lucide-react';
import PageView from '@/components/views/PageView.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import { loginUsernameSchema } from '@/lib/schemas/authFormSchema.ts';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form.tsx';
import { IconField } from '@/components/iconfield/IconField.tsx';
import { useLoginMutation } from '@/queries/authQueries.tsx';
import { UserContext } from '@/routes/root/Root.tsx';

export default function LoginUsername() {
    const enteredUsername = useLocation().state.values.username;
    const [username] = useState<string>(enteredUsername);
    const { setLoggedIn } = useContext(UserContext);
    const loginMutation = useLoginMutation();
    const password = '';
    const formSchema = loginUsernameSchema();
    const navigate = useNavigate();
    const loginForm = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username,
            password,
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            await loginMutation.mutateAsync({
                username: values.username,
                password: values.password,
            });
            navigate('/');
            setLoggedIn(true);
        } catch (error) {
            loginForm.setError('password', {
                type: 'custom',
                message: 'Invalid credentials',
            });
        }
    }

    return (
        <PageView>
            <div className="flex size-full items-center justify-center">
                <div className="flex w-96 flex-col items-center justify-center gap-6 rounded-lg bg-secondary p-12">
                    <div className="h-full">
                        <h1 className="text-3xl">Login with username</h1>
                    </div>
                    <Separator className="bg-border" />
                    <Form {...loginForm}>
                        <form
                            className="flex size-full flex-col items-center justify-center gap-6"
                            onSubmit={loginForm.handleSubmit(onSubmit)}>
                            <div className="flex w-full flex-col">
                                <FormField
                                    control={loginForm.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem className="max-h-28 min-h-28 w-full">
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
                        </form>
                    </Form>
                </div>
            </div>
        </PageView>
    );
}

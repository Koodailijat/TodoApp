import { useForm } from 'react-hook-form';
import { setErrorMap, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Contact, Lock, Mail, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { signUpWithEmailSchema } from '@/lib/schemas/userFormSchema.ts';
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
import { Button } from '@/components/ui/button.tsx';
import { IconField } from '@/components/iconfield/IconField.tsx';
import { request } from '@/services/request.ts';
import { useState } from 'react';
import { AxiosError } from 'axios';

export default function SignUp() {
    const formSchema = signUpWithEmailSchema();
    const navigate = useNavigate();
    const signUpForm = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            await request({
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
            navigate('/login/email');
        } catch (error) {
            if (error.response.data.statusCode === 409) {
                signUpForm.setError(error.response.data.conflictedField, {
                    type: 'custom',
                    message: error.response.data.message,
                });
            }
        }
    }

    return (
        <PageView>
            <div className="flex size-full items-center justify-center">
                <div className="flex w-[50rem] flex-col items-center justify-center gap-6 rounded-lg bg-secondary p-12">
                    <div className="h-full">
                        <h1 className="text-4xl font-medium">Sign Up</h1>
                    </div>
                    <Separator className="bg-border dark:bg-primary-foreground" />
                    <Form {...signUpForm}>
                        <form
                            className="flex size-full flex-col items-center justify-center gap-6"
                            onSubmit={signUpForm.handleSubmit(onSubmit)}>
                            <div className="flex w-full flex-col">
                                <div className="flex gap-6">
                                    <FormField
                                        control={signUpForm.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem className="max-h-28 min-h-28 w-full">
                                                <FormLabel>
                                                    First name
                                                </FormLabel>
                                                <FormControl>
                                                    <IconField
                                                        icon={<User />}
                                                        placeholder="First name"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={signUpForm.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem className="max-h-28 min-h-28 w-full">
                                                <FormLabel>Last name</FormLabel>
                                                <FormControl>
                                                    <IconField
                                                        icon={<User />}
                                                        placeholder="Last name"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex gap-6">
                                    <FormField
                                        control={signUpForm.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem className="max-h-28 min-h-28 w-full">
                                                <FormLabel>Username</FormLabel>
                                                <FormControl>
                                                    <IconField
                                                        icon={<Contact />}
                                                        placeholder="Username"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={signUpForm.control}
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
                                </div>
                                <div className="flex gap-6">
                                    <FormField
                                        control={signUpForm.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem className="max-h-28 min-h-28 w-full">
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <IconField
                                                        type="password"
                                                        icon={<Lock />}
                                                        placeholder="Password"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={signUpForm.control}
                                        name="confirmPassword"
                                        render={({ field }) => (
                                            <FormItem className="max-h-28 min-h-28 w-full">
                                                <FormLabel>
                                                    Confirm password
                                                </FormLabel>
                                                <FormControl>
                                                    <IconField
                                                        type="password"
                                                        icon={<Lock />}
                                                        placeholder="Password"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <Button className="m-2 w-full" type="submit">
                                Sign Up
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </PageView>
    );
}

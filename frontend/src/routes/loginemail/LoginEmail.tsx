import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PageView from '@/components/views/PageView.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Separator } from '@/components/ui/separator.tsx';

export default function LoginEmail() {
    const enteredEmail = useLocation().state.values.email;
    const [email, setEmail] = useState<string>(enteredEmail);
    return (
        <PageView>
            <div className="flex size-full items-center justify-center">
                <div className="flex h-3/5 w-2/5 flex-col items-center justify-end gap-12 rounded-2xl border-2 bg-secondary p-12">
                    <div className="h-full">
                        <h1 className="text-3xl">Login with email</h1>
                    </div>
                    <Separator className="bg-primary" />
                    <form className="flex size-full flex-col items-center justify-center gap-6">
                        <div className="flex w-4/5 flex-col gap-10">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    required
                                    className="w-full"
                                    placeholder="Email"
                                    type="email"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    required
                                    className="w-full"
                                    placeholder="Password"
                                    type="password"
                                    id="password"
                                />
                            </div>
                        </div>
                        <Button className="m-2 w-4/5" onClick={() => null}>
                            Login
                        </Button>
                    </form>
                </div>
            </div>
        </PageView>
    );
}

import React, { ReactNode } from 'react';
import { Input } from '@/components/ui/input.tsx';

interface TextFieldProps
    extends React.ComponentPropsWithoutRef<typeof Input.propTypes> {
    isDisabled: boolean;
}

export default function TextField({ ...props }: TextFieldProps) {
    return <Input {...props} />;
}

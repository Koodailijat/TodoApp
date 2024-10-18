import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { SelectSingleEventHandler } from 'react-day-picker';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Calendar } from '@/components/ui/calendar.tsx';

interface SelectDateProps {
    label: string;
    date: Date | undefined;
    setDate: SelectSingleEventHandler;
}

export default function SelectDate({ label, date, setDate }: SelectDateProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" className="w-full">
                    <CalendarIcon className="mr-2 size-4" />
                    {date ? format(date, 'PPP') : <span>{label}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
}

import * as React from 'react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button.tsx';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
} from '@/components/ui/command.tsx';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover.tsx';
import { Badge } from '@/components/ui/badge.tsx';
import { TaskStatus } from '@/lib/types/TaskDto.ts';

export type Status = {
    value: string;
    color: string;
};

const statuses: Status[] = [
    {
        value: TaskStatus.TODO,
        color: 'bg-blue-500',
    },
    {
        value: TaskStatus.IN_PROGRESS,
        color: 'bg-yellow-500',
    },
    {
        value: TaskStatus.COMPLETED,
        color: 'bg-green-500',
    },
    {
        value: TaskStatus.CANCELLED,
        color: 'bg-red-500',
    },
];

interface TaskStatusSelectProps {
    selectedStatus: TaskStatus;
    setSelectedStatus: (...event: any[]) => void;
}

export function TaskStatusSelect({
    selectedStatus,
    setSelectedStatus,
}: TaskStatusSelectProps) {
    const [open, setOpen] = React.useState(false);
    const { t } = useTranslation();
    const statusColor = useMemo(() => {
        switch (selectedStatus) {
            case TaskStatus.TODO:
                return 'bg-blue-500';
            case TaskStatus.IN_PROGRESS:
                return 'bg-yellow-500';
            case TaskStatus.COMPLETED:
                return 'bg-green-500';
            case TaskStatus.CANCELLED:
                return 'bg-red-500';
            default:
                return '';
        }
    }, [selectedStatus]);

    return (
        <div className="flex items-center space-x-4">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        size="sm"
                        className="w-[150px] justify-start">
                        {selectedStatus ? (
                            <Badge className="flex w-full gap-2">
                                <div
                                    className={`size-3 rounded-3xl ${statusColor}`}
                                />
                                {t(`task.status.${selectedStatus}`)}
                            </Badge>
                        ) : (
                            `+ ${t('task.setStatus')}`
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0" side="bottom" align="start">
                    <Command>
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup>
                                {statuses.map((status) => (
                                    <CommandItem
                                        key={status.value}
                                        value={status.value}
                                        onSelect={(value) => {
                                            setSelectedStatus(
                                                statuses.find(
                                                    (priority) =>
                                                        priority.value === value
                                                ) || null
                                            );
                                            setOpen(false);
                                        }}>
                                        <Badge className="flex w-full gap-2">
                                            <div
                                                className={`size-3 rounded-3xl ${status.color}`}
                                            />
                                            {t(`task.status.${status.value}`)}
                                        </Badge>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
}

import { Tags } from 'lucide-react';
import { useMemo } from 'react';
import { TaskDto, TaskStatus } from '@/lib/types/TaskDto.ts';
import { Badge } from '@/components/ui/badge.tsx';
import { Card } from '@/components/ui/card.tsx';

interface TaskCardProps extends TaskDto {}

interface StatusBadgeProps {
    status: TaskStatus;
}

function StatusBadge({ status }: StatusBadgeProps) {
    const statusColor = useMemo(() => {
        switch (status) {
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
    }, [status]);

    return (
        <Badge className="flex gap-2">
            <div className={`size-3 rounded-3xl ${statusColor}`} />
            {status}
        </Badge>
    );
}

export default function TaskCard({
    name,
    description,
    status,
    tags,
    start_date,
    end_date,
}: TaskCardProps) {
    return (
        <Card className="flex w-96 flex-col gap-4 bg-secondary p-3">
            <div className="flex justify-between">
                <h2 className="text-xl">{name}</h2>
                <StatusBadge status={status} />
            </div>
            <div className="">
                <p>{description}</p>
            </div>
            <div className="flex gap-4">
                <Tags />
                <div className="flex gap-1">
                    {tags.map((tag) => (
                        <Badge key={tag.id}>{tag.name}</Badge>
                    ))}
                </div>
            </div>
        </Card>
    );
}

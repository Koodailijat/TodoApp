import { Tags } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TaskDto } from '@/lib/types/TaskDto.ts';
import { Badge } from '@/components/ui/badge.tsx';
import { Card } from '@/components/ui/card.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import { TaskStatusBadge } from '@/components/task/TaskStatusBadge.tsx';

interface TaskCardProps extends TaskDto {}

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
                <TaskStatusBadge status={status} />
            </div>
            <div className="">
                <p>{description}</p>
            </div>
            <Separator />
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

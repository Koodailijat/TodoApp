import { Tags } from 'lucide-react';
import { TaskDto } from '@/lib/types/TaskDto.ts';
import { Badge } from '@/components/ui/badge.tsx';
import { Card } from '@/components/ui/card.tsx';

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
        <Card className="flex w-96 flex-col gap-2 bg-secondary p-3">
            <div className="flex justify-between">
                <h2 className="text-xl">{name}</h2>
                <Badge>{status}</Badge>
            </div>
            <div className="">
                <p>{description}</p>
            </div>
            <div>
                <Tags />
                <div>
                    {tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                    ))}
                </div>
            </div>
        </Card>
    );
}

import { Tags, Trash2 } from 'lucide-react';
import { Tag, TaskOutputDto } from '@/lib/types/TaskDto.ts';
import { Badge } from '@/components/ui/badge.tsx';
import { Card } from '@/components/ui/card.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import { TaskStatusBadge } from '@/components/task/TaskStatusBadge.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useTaskDeleteMutation } from '@/queries/taskQueries.tsx';
import TagList from '@/components/task/TagList.tsx';

interface TaskCardProps extends TaskOutputDto {}

export default function TaskCard({
    id,
    name,
    description,
    status,
    tags,
    start_date,
    end_date,
}: TaskCardProps) {
    const deleteTaskMutation = useTaskDeleteMutation();

    async function deleteTask() {
        try {
            await deleteTaskMutation.mutateAsync({ id });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Card className="flex w-96 flex-col gap-4 bg-secondary p-3">
            <div className="flex justify-between">
                <h2 className="text-xl">{name}</h2>
                <TaskStatusBadge status={status} />
            </div>
            {description && (
                <div className="">
                    <p>{description}</p>
                </div>
            )}
            <Separator />
            <div className="flex items-center justify-between gap-4">
                <TagList tags={tags} />
                <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => deleteTask()}>
                    <Trash2 />
                </Button>
            </div>
        </Card>
    );
}

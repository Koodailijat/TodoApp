import { Tags, Trash2 } from 'lucide-react';
import { Tag, TaskOutputDto } from '@/lib/types/TaskDto.ts';
import { Badge } from '@/components/ui/badge.tsx';
import { Card } from '@/components/ui/card.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import { TaskStatusBadge } from '@/components/task/TaskStatusBadge.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useTaskDeleteMutation } from '@/queries/taskQueries.tsx';

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
            <div className="">
                <p>{description}</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between gap-4">
                <div>
                    {tags.length > 0 && (
                        <>
                            <Tags />
                            <div className="flex gap-1">
                                {tags.map((tag: Tag) => (
                                    <Badge key={tag.id}>{tag.name}</Badge>
                                ))}
                            </div>
                        </>
                    )}
                </div>
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

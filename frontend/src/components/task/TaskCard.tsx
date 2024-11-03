import { Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { TaskOutputDto } from '@/lib/types/TaskDto.ts';
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
        <Card className="flex w-96 flex-col gap-2 bg-secondary p-3">
            <div className="flex justify-between">
                <h2 className="text-xl">{name}</h2>
                <TaskStatusBadge status={status} />
            </div>
            <Separator />
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
            <div>
                {start_date && (
                    <p className="text-xs">
                        Start date {format(new Date(start_date), 'dd.MM.yyyy')}
                    </p>
                )}
                {end_date && (
                    <p className="text-xs">
                        End date {format(new Date(end_date), 'dd.MM.yyyy')}
                    </p>
                )}
            </div>
        </Card>
    );
}

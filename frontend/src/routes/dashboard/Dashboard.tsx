import PageView from '@/components/views/PageView.tsx';
import { useTasksQuery } from '@/queries/taskQueries.tsx';
import TaskCard from '@/components/task/TaskCard.tsx';

export default function Dashboard() {
    const tasksQuery = useTasksQuery();

    if (tasksQuery.isPending) {
        return <div>Loading...</div>;
    }
    if (tasksQuery.isError) {
        return <div>Error</div>;
    }

    return (
        <PageView>
            <div className="flex flex-col gap-6">
                {tasksQuery.data.map((task) => {
                    return <TaskCard key={task.id} {...task} />;
                })}
            </div>
        </PageView>
    );
}

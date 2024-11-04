import PageView from "@/components/views/PageView.tsx";
import { useTasksQuery } from "@/queries/taskQueries.tsx";
import TaskCard from "@/components/task/TaskCard.tsx";
import CreateTaskDialog from "@/components/task/CreateTaskDialog.tsx";
import { ScrollArea } from "@/components/ui/scroll-area.tsx";

export function Dashboard() {
  const tasksQuery = useTasksQuery();

  if (tasksQuery.isPending) {
    return <div>Loading...</div>;
  }
  if (tasksQuery.isError) {
    return <div>Error</div>;
  }

  return (
    <PageView>
      {tasksQuery.data.length > 0 && (
        <>
          <h1 className="text-2xl">Current Tasks</h1>
          <ScrollArea className="h-4/5 max-h-[3/5] w-fit rounded-md border">
            <div className="flex flex-col gap-6 p-4">
              {tasksQuery.data.map((task) => {
                return <TaskCard key={task.id} {...task} />;
              })}
            </div>
          </ScrollArea>
        </>
      )}
      <CreateTaskDialog />
    </PageView>
  );
}

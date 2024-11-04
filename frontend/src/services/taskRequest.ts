import { authRequest } from '@/services/request.ts';
import { TaskInputDto, TaskOutputDto } from '@/lib/types/TaskDto.ts';

export async function getTasksRequest(): Promise<Array<TaskOutputDto>> {
    return authRequest({
        method: 'GET',
        url: 'task',
    });
}

export async function postTaskRequest(
    values: TaskInputDto
): Promise<TaskInputDto> {
    return authRequest({
        method: 'POST',
        url: 'task',
        data: {
            name: values.name,
            description: values.description,
            start_date: values.start_date,
            end_date: values.end_date,
            status: values.status,
            tags: values.tags,
        },
    });
}

export async function deleteTaskRequest(values: { id: string }): Promise<void> {
    return authRequest({
        method: 'DELETE',
        url: `task/${values.id}`,
    });
}

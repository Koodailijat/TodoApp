import { authRequest } from '@/services/request.ts';
import { TaskDto } from '@/lib/types/TaskDto.ts';

export async function getTasksRequest(): Promise<Array<TaskDto>> {
    return authRequest({
        method: 'GET',
        url: 'task',
    });
}

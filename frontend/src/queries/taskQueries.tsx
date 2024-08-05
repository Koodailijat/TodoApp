import { useQuery } from '@tanstack/react-query';
import { getTasksRequest } from '@/services/taskRequest.ts';
import { queryKeys } from '@/constants/queryKeys.ts';

export function useTasksQuery() {
    return useQuery({
        queryFn: getTasksRequest,
        queryKey: [queryKeys.task],
    });
}

import { useMutation, useQuery } from '@tanstack/react-query';
import {
    deleteTaskRequest,
    getTasksRequest,
    postTaskRequest,
} from '@/services/taskRequest.ts';
import { queryKeys } from '@/constants/queryKeys.ts';
import { queryClient } from '@/queries/queryClient.ts';
import { TaskOutputDto } from '@/lib/types/TaskDto.ts';

export function useTasksQuery() {
    return useQuery({
        queryFn: getTasksRequest,
        queryKey: [queryKeys.task],
    });
}

export function useTaskCreateMutation() {
    return useMutation({
        mutationFn: postTaskRequest,
        mutationKey: [queryKeys.task],
        onSuccess: (data) => {
            queryClient.setQueryData(
                [queryKeys.task],
                (oldData: Array<TaskOutputDto>) => {
                    return [...oldData, data];
                }
            );
        },
    });
}

export function useTaskDeleteMutation() {
    return useMutation({
        mutationFn: deleteTaskRequest,
        mutationKey: [queryKeys.task],
        onSuccess: (data, variables) => {
            queryClient.setQueryData(
                [queryKeys.task],
                (oldData: Array<TaskOutputDto>) => {
                    return oldData.filter(
                        (task: TaskOutputDto) => task.id !== variables.id
                    );
                }
            );
        },
    });
}

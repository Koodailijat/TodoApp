import { z } from 'zod';
import { TaskStatus } from '@/lib/types/TaskDto.ts';

export function createTaskSchema() {
    return z.object({
        name: z.string().max(32, { message: 'Max 32 characters' }),
        description: z.string(),
        start_date: z.date().nullable(),
        end_date: z.date().nullable(),
        status: z.nativeEnum(TaskStatus),
        tags: z.object({ id: z.string(), name: z.string() }).array(),
    });
}

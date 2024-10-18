export enum TaskStatus {
    TODO = 'TODO',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED',
}

export interface TaskOutputDto {
    id: string;
    author_id: string;
    name: string;
    description: string | null;
    start_date: string | null;
    end_date: string | null;
    status: TaskStatus;
    tags: Tag[];
    created_at: string;
    updated_at: string;
}

export interface TaskInputDto {
    name: string;
    description: string | null;
    start_date: string | null;
    end_date: string | null;
    status: TaskStatus;
    tags: Tag[];
}

export interface Tag {
    id: string;
    name: string;
}

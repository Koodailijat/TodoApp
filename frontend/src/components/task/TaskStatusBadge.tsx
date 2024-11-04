import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TaskStatus } from '@/lib/types/TaskDto.ts';
import { Badge } from '@/components/ui/badge.tsx';

interface StatusBadgeProps {
    status: TaskStatus;
}

export function TaskStatusBadge({ status }: StatusBadgeProps) {
    const statusColor = useMemo(() => {
        switch (status) {
            case TaskStatus.TODO:
                return 'bg-blue-500';
            case TaskStatus.IN_PROGRESS:
                return 'bg-yellow-500';
            case TaskStatus.COMPLETED:
                return 'bg-green-500';
            case TaskStatus.CANCELLED:
                return 'bg-red-500';
            default:
                return '';
        }
    }, [status]);
    const { t } = useTranslation();

    return (
        <Badge className="flex gap-2">
            <div className={`size-3 rounded-3xl ${statusColor}`} />
            {t(`task.status.${status}`)}
        </Badge>
    );
}

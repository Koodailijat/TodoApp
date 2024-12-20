import { PlusIcon, Tags } from 'lucide-react';
import React from 'react';
import { Tag } from '@/lib/types/TaskDto.ts';
import { Badge } from '@/components/ui/badge.tsx';
import { Button } from '@/components/ui/button.tsx';
import TooltipHelper from '@/lib/TooltipHelper.tsx';

interface TagListProps {
    tags: Array<Tag>;
}

export default function TagList({ tags }: TagListProps) {
    const [isTagsExpanded, setIsTagsExpanded] = React.useState(false);
    const tagLength = tags.length;

    if (tagLength === 0) {
        return <div />;
    }

    if (isTagsExpanded) {
        return (
            <div className="flex items-center gap-2">
                <Tags />
                <div className="grid grid-cols-3 items-center gap-2">
                    {tags.map((tag: Tag) => (
                        <Badge key={tag.id}>{tag.name}</Badge>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="flex gap-2">
            {tagLength <= 3 ? (
                <>
                    <Tags />
                    <div className="flex gap-1">
                        {tags.map((tag: Tag) => (
                            <Badge key={tag.id}>{tag.name}</Badge>
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <Tags />
                    <div className="flex gap-1">
                        {tags.slice(0, 3).map((tag: Tag) => (
                            <Badge key={tag.id}>{tag.name}</Badge>
                        ))}
                    </div>
                    <TooltipHelper
                        tooltip={tags.slice(3).map((tag: Tag) => (
                            <p key={tag.id}>{tag.name}</p>
                        ))}>
                        <Button
                            className="flex h-6 w-8 gap-1 rounded-full p-1"
                            onClick={() => setIsTagsExpanded(true)}>
                            <p className="text-xs">{tags.length - 3}</p>
                            <PlusIcon width={10} height={10} />
                        </Button>
                    </TooltipHelper>
                </>
            )}
        </div>
    );
}

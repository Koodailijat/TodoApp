import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { formatISO } from 'date-fns';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';
import SelectDate from '@/components/date/SelectDate.tsx';
import { useTaskCreateMutation } from '@/queries/taskQueries.tsx';
import { createTaskSchema } from '@/lib/schemas/taskFormSchema.ts';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form.tsx';
import { TaskStatus } from '@/lib/types/TaskDto.ts';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog.tsx';

import { TaskStatusSelect } from '@/components/task/TaskStatusSelect.tsx';

export default function CreateTaskDialog() {
    const { t } = useTranslation();
    const taskMutation = useTaskCreateMutation();
    const formSchema = createTaskSchema();

    const taskForm = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            description: '',
            start_date: null,
            end_date: null,
            status: TaskStatus.TODO,
            tags: [],
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values.status);
        try {
            await taskMutation.mutateAsync({
                name: values.name,
                description: values.description,
                start_date: values.start_date
                    ? formatISO(values.start_date)
                    : null,
                end_date: values.end_date ? formatISO(values.end_date) : null,
                status: TaskStatus.CANCELLED,
                tags: [],
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="w-fit">{t('task.addNew')}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="mb-4">
                        {t('task.addNew')}
                    </AlertDialogTitle>
                    <AlertDialogDescription className="flex flex-col gap-4" />
                </AlertDialogHeader>
                <Form {...taskForm}>
                    <form
                        onSubmit={taskForm.handleSubmit(onSubmit)}
                        className="flex flex-col items-center justify-center gap-2">
                        <FormField
                            control={taskForm.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="max-h-28 min-h-fit w-full">
                                    <FormLabel>{t('task.name')}</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder={t('task.name')}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={taskForm.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem className="max-h-28 min-h-28 w-full">
                                    <FormLabel>
                                        {t('task.description')}
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder={t('task.description')}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex w-full gap-4">
                            <FormField
                                control={taskForm.control}
                                name="start_date"
                                render={({ field }) => (
                                    <FormItem className="max-h-28 min-h-28 w-full">
                                        <FormLabel>
                                            {t('task.startDate')}
                                        </FormLabel>
                                        <FormControl>
                                            <SelectDate
                                                label={t('task.startDate')}
                                                date={field.value}
                                                setDate={field.onChange}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={taskForm.control}
                                name="end_date"
                                render={({ field }) => (
                                    <FormItem className="max-h-28 min-h-28 w-full">
                                        <FormLabel>
                                            {t('task.endDate')}
                                        </FormLabel>
                                        <FormControl>
                                            <SelectDate
                                                label={t('task.endDate')}
                                                date={field.value}
                                                setDate={field.onChange}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex w-full gap-4">
                            <FormField
                                control={taskForm.control}
                                name="tags"
                                render={({ field }) => (
                                    <FormItem className="max-h-28 min-h-28 w-full">
                                        <FormLabel>
                                            {t('task.statusText')}
                                        </FormLabel>
                                        <FormControl>
                                            <TaskStatusSelect {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <AlertDialogFooter>
                            <AlertDialogCancel onClick={() => taskForm.reset()}>
                                {t('menu.cancel')}
                            </AlertDialogCancel>
                            <AlertDialogAction type="submit">
                                {t('task.addNew')}
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </form>
                </Form>
            </AlertDialogContent>
        </AlertDialog>
    );
}
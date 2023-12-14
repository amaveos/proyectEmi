import { Routes } from '@angular/router';
import { TaskListComponent } from './componets/task-list/task-list.component';
import { TaskDetailsComponent } from './componets/task-details/task-details.component';
import { TaskFormComponent } from './componets/task-form/task-form.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/taskList',
        pathMatch: 'full'
    },
    {
        path: 'taskList',
        component: TaskListComponent
    },
    {
        path: 'taskDetailBy/:title',
        component: TaskDetailsComponent
    },
    {
        path: 'newTask',
        component: TaskFormComponent
    },
];

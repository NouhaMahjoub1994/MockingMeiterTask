import {RouterModule, Routes} from '@angular/router';
import {TaskManagerComponent} from './task-manager/task-manager.component';


const APP_ROUTING: Routes = [
  {path: 'taskManager', component: TaskManagerComponent}
];
export const ROUTING = RouterModule.forRoot(APP_ROUTING) ;

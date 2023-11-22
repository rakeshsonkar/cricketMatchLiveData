import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LiveComponent } from './pages/live/live.component';
import { PointTableComponent } from './pages/point-table/point-table.component';
import { HistoryComponent } from './pages/history/history.component';

export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent,
        title:"Home Matches || CrickInformation"
    },
    {
        path:"live",
        component:LiveComponent,
        title:"Live Matches || CrickInformation"
    },
    {
        path:"point-table",
        component:PointTableComponent,
        title:"Point-Table Matches || CrickInformation"
    },
    {
        path:"history",
        component:HistoryComponent,
        title:"History Matches || CrickInformation"
    }
    
];

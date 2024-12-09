import { Routes } from '@angular/router';
import { MatchesComponent } from './matches/matches.component';
import { TableComponent } from './table/table.component';

export const routes: Routes = [
    { path: 'table', component: TableComponent },
    { path: '', component: MatchesComponent },
    { path: '**', redirectTo: '' }
];

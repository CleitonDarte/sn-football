import { Component } from '@angular/core';
import { Team, TeamListService } from '../_core/team-list.service';
import { SharedModule } from '../_core/shared.module';
import { CoreService } from '../_core/core.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  public teamList$?: Team[];

  constructor(
    public core: CoreService,
    private teamSvc: TeamListService
  ) {
    this.teamSvc.teamList.subscribe(tl => {
      this.teamList$ = tl.filter(t => { return !!t.playing }).sort((a: any, b: any) => { return (b.points - a.points) || ((b.goalsFavor - b.goalsAgainst) - (a.goalsFavor - a.goalsAgainst)) }) ;
    });
  }

}

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
    this.teamSvc.getTeamsInfo().subscribe({
      next: tl => {
        if (tl.success) {
          this.teamList$ = tl.data.teams || [];
        } else {
          this.teamList$ = [];
          this.core.toast.next({ type: 'error', description: tl.message, time: 15 });
        }
      }, error: noTl => {
        this.teamList$ = [];
        this.core.toast.next({ type: 'error', description: noTl.error.message, time: 15 });
      }
    });
  }

}

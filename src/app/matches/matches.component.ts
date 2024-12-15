import { Component } from '@angular/core';
import { MatchDay, MatchListService } from '../_core/match-list.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../_core/shared.module';
import { CoreService } from '../_core/core.service';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.scss'
})
export class MatchesComponent {

  public readonly mft: number = 6300000;/* Match Full Time 105min */

  public matchDays$?: MatchDay[];
  public matchDay?: MatchDay;
  public nowDate: number = new Date().getTime();

  public lastMatchDay: number = 1;

  constructor(
    public core: CoreService,
    private matchSvc: MatchListService
  ) {
    setInterval(() => { this.nowDate = new Date().getTime() }, 1000);
    this.core.refreshCall.subscribe(refresh => {
      if (refresh) {
        this.loadMatches(false);
        this.core.refreshCall.next(false);
      }
    });
    this.loadMatches();
  }

  private loadMatches(initial: boolean = true) {
    this.matchSvc.getAllMatches().subscribe({
      next: ml => {
        if (ml.success) {
          this.matchDays$ = ml.data.matches || [];

          let currentMatchDay: number = 1;
          this.lastMatchDay = 1;
          for (let matchDay of this.matchDays$ || []) {
            initial && matchDay.endDate && this.nowDate > matchDay.endDate && (currentMatchDay = matchDay.matchdayId + 1);
            this.lastMatchDay = matchDay.matchdayId;
          }
          this.gotoMatchDay(currentMatchDay);
        } else {
          this.matchDays$ = [];
          this.core.toast.next({ type: 'error', description: ml.message, time: 15 });
        }
      }, error: noMl => {
        this.matchDays$ = [];
        this.core.toast.next({ type: 'error', description: noMl.error.message, time: 15 });
      }
    });
  }

  public gotoMatchDay(matchdayId: number) {
    this.matchDay = this.matchDays$?.filter((md) => { return md.matchdayId == matchdayId })[0];
  }

  public cron(initDate: number): number {
    return Math.floor((this.nowDate - initDate) / 60000);
  }

}

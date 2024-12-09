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
    this.matchSvc.matchList.subscribe(ml => {
      this.matchDays$ = ml;

      let currentMatchDay: number = 1;
      this.lastMatchDay = 1;
      for (let matchDay of this.matchDays$) {
        if (matchDay.endDate && this.nowDate > matchDay.endDate) {
          currentMatchDay = matchDay.matchday - 1;
        }
        this.lastMatchDay = matchDay.matchday;
      }
      this.gotoMatchDay(currentMatchDay);
    });

    setInterval(() => { this.nowDate = new Date().getTime() }, 1000);
  }

  public gotoMatchDay(matchday: number) {
    this.matchDay = this.matchDays$?.filter((md) => { return md.matchday == matchday })[0];
  }

  public cron(initDate: number): number {
    return Math.floor((this.nowDate - initDate) / 60000);
  }

}

import { Component } from '@angular/core';
import { SharedModule } from '../_core/shared.module';
import { CoreService } from '../_core/core.service';
import { AuthService } from '../_core/auth.service';
import { MatchListService } from '../_core/match-list.service';
import { TeamListService } from '../_core/team-list.service';

@Component({
  selector: 'app-pop',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './pop.component.html',
  styleUrl: './pop.component.scss'
})
export class PopComponent {

  public showingPopUp: any;
  public loading: boolean = false;

  public readonly mft: number = 6300000;/* Match Full Time 105min */
  public nowDate: number = new Date().getTime();

  constructor(
    public core: CoreService,
    private auth: AuthService,
    private matchSvc: MatchListService,
    private teamSvc: TeamListService
  ) {
    this.core.popup.subscribe(val => { setTimeout(() => { this.showingPopUp = val }, 0) });

    setInterval(() => { this.nowDate = new Date().getTime() }, 1000);
  }

  public checkAuth(value: { user: string, pass: string }) {
    this.loading = true;
    console.debug(value);
    this.auth.validateUser(value).subscribe({
      next: user => {
        if (user.success && !!user.data?.authToken) {
          let sd = JSON.parse(localStorage['sd'] || '{}');
          sd.ut = user.data.authToken;
          localStorage['sd'] = JSON.stringify(sd);
          this.auth.savedData.next(true);
          this.core.popup.next(undefined);
          this.core.toast.next({ type: 'success', description: 'Authentication Successful' });
        } else {
          this.core.toast.next({ type: 'error', description: user.message || 'Error while Authenticating' });
        }
        this.loading = false;
      }, error: noUser => {
        this.core.toast.next({ type: 'error', description: noUser.error.message });
        this.loading = false;
      }
    });
  }

  public updateMatchScore(matchId: number, teamAScore: string, teamBScore: string) {
    this.loading = true;
    this.matchSvc.setMatcheGoals(matchId, { team_a_goals: +teamAScore, team_b_goals: +teamBScore }).subscribe({
      next: update => {
        if (update.success) {
          this.core.refreshCall.next(true);
          this.core.popup.next(undefined);
          this.core.toast.next({ type: 'success', description: 'Match Updated Successfully' });
        } else {
          this.core.toast.next({ type: 'error', description: update.message || 'Error while Updating' });
        }
        this.loading = false;
      }, error: noUpdate => {
        this.core.toast.next({ type: 'error', description: noUpdate.error.message });
        this.loading = false;
      }
    });
  }

  public sendMatchresult(matchId: number, teamAScore: string, teamBScore: string) {
    this.loading = true;
    this.teamSvc.setMatcheResults(matchId, { team_a_goals: +teamAScore, team_b_goals: +teamBScore }).subscribe({
      next: finish => {
        if (finish.success) {
          this.core.refreshCall.next(true);
          this.core.popup.next(undefined);
          this.core.toast.next({ type: 'success', description: 'Match Result Submited Successfully' });
        } else {
          this.core.toast.next({ type: 'error', description: finish.message || 'Error while Updating' });
        }
        this.loading = false;
      }, error: noFinish => {
        this.core.toast.next({ type: 'error', description: noFinish.error.message });
        this.loading = false;
      }
    });
  }

}

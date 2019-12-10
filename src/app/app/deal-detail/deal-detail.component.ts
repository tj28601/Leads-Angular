import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DealService } from '../deal-list/deal.service';
import { Deal } from '../deal-list/deal';
import { Location } from '@angular/common';
import { Observable, of, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';


@Component({
  selector: 'app-deal-detail',
  templateUrl: './deal-detail.component.html',
  styleUrls: ['./deal-detail.component.css']
})
export class DealDetailComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private dealService: DealService,
    private snackBar: MatSnackBar
  ) { }

  model: Deal;

  public dealFormUpdate = new Subject<string>();

  ngOnInit(): void {
    this.getDeal();
  }

  setDealDate(charzard: any) {
    let badDate = new Date(charzard.close_date);
    this.model.close_date = new Date(badDate.setDate(badDate.getDate() + 1))
  }

  getDeal(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dealService.getDeal(id)
      .subscribe(res => {
        this.model = res;
        this.setDealDate(this.model);
      });
  }

  debounceSave(event: any) {
    // debugger;
    this.dealFormUpdate.pipe(
      debounceTime(4000),
      distinctUntilChanged());
// debugger;
    this.dealService.updateDeal(this.model)
      .subscribe();
      this.openSnackBar();
  }

  openSnackBar() {
    this.snackBar.openFromComponent(UpdateMessage, {
      duration: 2000,
    });
  }
}

@Component({
  selector: 'snack-bar-component-update-msg',
  templateUrl: 'snack-bar-update-msg.html',
  styles: [`
    .deal-snackbar-msg {
      color: hotpink;
    }
  `],
})
export class UpdateMessage {}

import { Component, Output } from '@angular/core';
import { CovidSummaryService } from './covid-summary-common/services/covid-summary.service'
import { Observable } from 'rxjs';


@Component({
  selector: 'coivd-summary-page',
  template: `<coivd-summary 
    [confirmedCases]="confirmedCases$ | async"
    [deadCases]="deadCases$ | async"
    [recoveredCases]="recoveredCases$ | async"
    [globalSummary]="globalSummary$ |async"
    [globalGeoSummary]="globalGeoSummary$ | async"
    ></coivd-summary>`
})

export class CovidSummaryPageComponent {
  
  confirmedCases$:Observable<any>;
  deadCases$:Observable<any>;
  recoveredCases$:Observable<any>;
  globalSummary$:Observable<any>;
  globalGeoSummary$:Observable<any>;

  
  constructor(
    covidSummaryService: CovidSummaryService
  ){
    this.confirmedCases$ = covidSummaryService.getConfirmedCases()
    this.deadCases$ = covidSummaryService.getDeaths()
    this.recoveredCases$ = covidSummaryService.getRecovered()
    this.globalSummary$ = covidSummaryService.getGlobalSummary()
    this.globalGeoSummary$ = covidSummaryService.getGlobalGeoSummary()
  }
}

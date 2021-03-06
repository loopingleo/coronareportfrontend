import { ApiService } from './../services/api.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ParamMap } from '@angular/router';
import { DiaryEntry } from '../models/diary-entry';
import { pipe } from 'rxjs';

@Injectable()
export class DiaryEntryResolver implements Resolve<DiaryEntry> {
  constructor(private apiService: ApiService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<DiaryEntry> {
    const id = route.paramMap.get('id');

    if (id) {
      return this.apiService.getDiaryEntry(id);
    } else {
      return of(
        {
          id: null,
          characteristicSymptoms: [],
          nonCharacteristicSymptoms: [],
          bodyTemperature: null,
          date: new Date()
        });
    }
  }
}

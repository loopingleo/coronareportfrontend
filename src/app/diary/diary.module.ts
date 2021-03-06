import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { SymptomsResolver } from './../resolvers/symptoms.resolver';
import { DiaryEntryResolver } from './../resolvers/diary-entry.resolver';
import { DiaryEntryComponent } from './diary-entry/diary-entry.component';
import { DiaryRoutingModule } from './diary-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryComponent } from './diary.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DiaryRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  declarations: [DiaryComponent, DiaryEntryComponent],
  providers: [DiaryEntryResolver, SymptomsResolver]
})
export class DiaryModule { }

import { NgModule, Sanitizer } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValueArrayPipe } from './pipe.pipe';
import { SafePipe } from './sanitizer.pipe';

import { StarComponent } from './star.component';

@NgModule({
  imports: [
  ],
  declarations: [
    StarComponent,
    ValueArrayPipe,
    SafePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StarComponent,
    ValueArrayPipe,
    SafePipe
  ]
})
export class SharedModule { }

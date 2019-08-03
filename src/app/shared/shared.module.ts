import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [SearchBoxComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SearchBoxComponent]
})
export class SharedModule { }

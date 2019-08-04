import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Output() getSearchString: EventEmitter<object> = new EventEmitter<object>();
  searchString = '';
  constructor() { }

  ngOnInit() {
  }
  /*
  Emit the string as output event object.
  */
  searchClick(): void {
      this.getSearchString.emit({
        searchString: this.searchString
      });
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Output() getSearchString: EventEmitter<object> = new EventEmitter<object>();
  searchString: string = '';
  constructor() { }

  ngOnInit() {
  }

  searchClick(): void {
      this.getSearchString.emit({
        searchString: this.searchString
      });
  }
}

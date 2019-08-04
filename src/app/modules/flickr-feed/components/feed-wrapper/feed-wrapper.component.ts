import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../../../core/services/base.service';

@Component({
  selector: 'app-feed-wrapper',
  templateUrl: './feed-wrapper.component.html',
  styleUrls: ['./feed-wrapper.component.scss']
})
export class FeedWrapperComponent implements OnInit {

  feedList: Array<object> = [];
  constructor(private baseService: BaseService) { }

  /*
  get public feeds When initialise the component.
  */
  ngOnInit() {
    this.getFeeds({});
  }

  /*
  Click event handler for search button to get feeds.
  */
  getFeeds(event: object): void {
    this.baseService.post(event).subscribe(feedList => {
      this.feedList = feedList;
    });
  }

}

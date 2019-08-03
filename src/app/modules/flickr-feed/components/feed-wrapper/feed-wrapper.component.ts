import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../../../core/services/base.service';

@Component({
  selector: 'app-feed-wrapper',
  templateUrl: './feed-wrapper.component.html',
  styleUrls: ['./feed-wrapper.component.scss']
})
export class FeedWrapperComponent implements OnInit {

  feedList: Array<Object> = [];
  constructor(private baseService: BaseService) { }

  ngOnInit() {
    this.getFeeds({});
  }

  getFeeds(event: object): void {
    this.baseService.post(event).subscribe(feedList => {
      this.feedList = feedList;
      console.log(this.feedList);
    });
  }

}

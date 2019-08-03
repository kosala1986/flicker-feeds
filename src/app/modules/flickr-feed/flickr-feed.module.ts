import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '../../shared/shared.module';
import { FlickrFeedRoutingModule } from './flickr-feed-routing.module';
import { FeedWrapperComponent } from './components/feed-wrapper/feed-wrapper.component';
import { BaseService } from '../../core/services/base.service';

@NgModule({
  declarations: [FeedWrapperComponent],
  imports: [
    CommonModule,
    FlickrFeedRoutingModule,
    FlexLayoutModule,
    SharedModule
  ],
  providers: [BaseService],
})
export class FlickrFeedModule { }

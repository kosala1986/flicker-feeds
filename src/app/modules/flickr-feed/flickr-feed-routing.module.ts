import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedWrapperComponent } from './components/feed-wrapper/feed-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: FeedWrapperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlickrFeedRoutingModule { }

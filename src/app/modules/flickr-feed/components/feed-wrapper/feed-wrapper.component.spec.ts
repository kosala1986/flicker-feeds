import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedWrapperComponent } from './feed-wrapper.component';
import { SearchBoxComponent } from '../../../../shared/components/search-box/search-box.component';

describe('FeedWrapperComponent', () => {
    let component: FeedWrapperComponent;
    let fixture: ComponentFixture<FeedWrapperComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FeedWrapperComponent, SearchBoxComponent],
            imports: [FormsModule, HttpClientModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FeedWrapperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should return an array', () => {
        component.getFeeds({
            searchString: 'Sri Lanka'
        });
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(component.feedList).toEqual(jasmine.any(Array));
        });
    });

    it('should return an array of objects with title, imageUrl, imageHeight, imageWidth, description properties', () => {
        component.getFeeds({
            searchString: 'Sri Lanka'
        });
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const keys = Object.keys(component.feedList[0]).sort();
            const expected = ['title', 'imageUrl', 'imageHeight', 'imageWidth', 'description'].sort();
            expect(keys).toEqual(expected);
        });
    });
});

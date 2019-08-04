import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SearchBoxComponent } from './search-box.component';

describe('SearchBoxComponent', () => {
    let component: SearchBoxComponent;
    let fixture: ComponentFixture<SearchBoxComponent>;
    let debugElement: DebugElement;
    let inputElement: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchBoxComponent],
            imports: [FormsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        debugElement = fixture.debugElement.query(By.css('input'));
        inputElement = fixture.nativeElement;

    });

    it('Initial string should be empty string', () => {
        expect(component.searchString).toEqual('');
    });
    it('should button get called', async(() => {
        spyOn(component, 'searchClick');
        const button = fixture.debugElement.nativeElement.querySelector('button');
        button.click();
        fixture.whenStable().then(() => {
            expect(component.searchClick).toHaveBeenCalled();
        });
    }));
    it('should emit event when search button is clicked', async(() => {
        const button = fixture.debugElement.nativeElement.querySelector('button');
        spyOn(component.getSearchString, 'emit');
        button.click();
        expect(component.getSearchString.emit).toHaveBeenCalled();
    }));
    it('should emit correct event object when search button is clicked', async(() => {
        const button = fixture.debugElement.nativeElement.querySelector('button');
        component.searchString = 'Sri Lanka';
        spyOn(component.getSearchString, 'emit');
        button.click();
        expect(component.getSearchString.emit).toHaveBeenCalledWith({
            searchString: 'Sri Lanka'
        });
    }));
});

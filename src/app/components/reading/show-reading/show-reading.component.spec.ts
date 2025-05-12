import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReadingComponent } from './show-reading.component';

describe('ShowReadingComponent', () => {
  let component: ShowReadingComponent;
  let fixture: ComponentFixture<ShowReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowReadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

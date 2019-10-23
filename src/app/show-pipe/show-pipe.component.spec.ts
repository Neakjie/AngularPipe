import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPipeComponent } from './show-pipe.component';

describe('ShowPipeComponent', () => {
  let component: ShowPipeComponent;
  let fixture: ComponentFixture<ShowPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

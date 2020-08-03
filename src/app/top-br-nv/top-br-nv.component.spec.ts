import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBrNvComponent } from './top-br-nv.component';

describe('TopBrNvComponent', () => {
  let component: TopBrNvComponent;
  let fixture: ComponentFixture<TopBrNvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBrNvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBrNvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

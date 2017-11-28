import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiLevelMenuComponent } from './multi-level-menu.component';

describe('MultiLevelMenuComponent', () => {
  let component: MultiLevelMenuComponent;
  let fixture: ComponentFixture<MultiLevelMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiLevelMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiLevelMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

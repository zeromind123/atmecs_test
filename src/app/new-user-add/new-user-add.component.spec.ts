import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserAddComponent } from './new-user-add.component';

describe('NewUserAddComponent', () => {
  let component: NewUserAddComponent;
  let fixture: ComponentFixture<NewUserAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUserAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

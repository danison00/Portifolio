import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStackComponent } from './my-stack.component';

describe('MyStackComponent', () => {
  let component: MyStackComponent;
  let fixture: ComponentFixture<MyStackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyStackComponent]
    });
    fixture = TestBed.createComponent(MyStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

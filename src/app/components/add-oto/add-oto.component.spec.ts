import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOtoComponent } from './add-oto.component';

describe('AddOtoComponent', () => {
  let component: AddOtoComponent;
  let fixture: ComponentFixture<AddOtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOtoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

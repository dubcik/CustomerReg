import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaApiSimulatorFormComponent } from './dia-api-simulator-form.component';

describe('DiaApiSimulatorFormComponent', () => {
  let component: DiaApiSimulatorFormComponent;
  let fixture: ComponentFixture<DiaApiSimulatorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaApiSimulatorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaApiSimulatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

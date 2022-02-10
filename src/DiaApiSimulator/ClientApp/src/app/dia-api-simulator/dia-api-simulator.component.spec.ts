import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaApiSimulatorComponent } from './dia-api-simulator.component';

describe('DiaApiSimulatorComponent', () => {
  let component: DiaApiSimulatorComponent;
  let fixture: ComponentFixture<DiaApiSimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaApiSimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaApiSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

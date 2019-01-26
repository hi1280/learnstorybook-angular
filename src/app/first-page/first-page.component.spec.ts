import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageComponent } from './first-page.component';

describe('FirstPageComponent', () => {
  let component: FirstPageComponent;
  let fixture: ComponentFixture<FirstPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirstPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render first-page works!', () => {
    fixture = TestBed.createComponent(FirstPageComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('first-page works!');
  });

});

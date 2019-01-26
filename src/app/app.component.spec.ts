import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ROUTES } from './app-routing.module';
import { Router } from '@angular/router';
import { AppModule } from './app.module';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

  let fixture;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule.withRoutes(ROUTES)
      ],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    router = TestBed.get(Router);
    fixture.ngZone.run(() => {
      router.initialNavigation();
    });
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test-angular-storybook'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('test-angular-storybook');
  });

  it('should render the first page component when the app loads', () => {
    fixture.detectChanges();
    const firstPage = fixture.debugElement.query(By.css('app-first-page'));
    expect(firstPage.nativeElement.textContent).toContain('first-page works!');
  });

});

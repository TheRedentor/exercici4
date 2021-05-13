import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VacunacioMunicipisPage } from './vacunacio-municipis.page';

describe('VacunacioMunicipisPage', () => {
  let component: VacunacioMunicipisPage;
  let fixture: ComponentFixture<VacunacioMunicipisPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VacunacioMunicipisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VacunacioMunicipisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

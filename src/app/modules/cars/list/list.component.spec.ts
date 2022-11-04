import { ChangeDetectionStrategy, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { faker } from '@faker-js/faker';

import { CarsService } from 'app/modules/cars/cars.service';
import { CarsListComponent } from 'app/modules/cars/list/list.component';
import { Car } from 'app/modules/cars/cars.types';

describe('CarsListComponent', () => {
  let component: CarsListComponent;
  let fixture: ComponentFixture<CarsListComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        CarsListComponent,
      ],
      providers: [
        CarsService,
      ],
    })
    .overrideComponent(CarsListComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsListComponent);
    component = fixture.componentInstance;

    const cars: Car[] = [];
    for (let i = 0; i < 3;  i++) {
      cars.push(new Car(
        faker.datatype.number(),
        faker.vehicle.manufacturer(),
        faker.vehicle.model(),
        faker.vehicle.type(),
        faker.date.past().getFullYear(),
        faker.datatype.number(),
        faker.color.human(),
        faker.image.imageUrl(),
      ));
    }

    component.cars = cars;
    fixture.changeDetectorRef.markForCheck();
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <table.table-striped> element', () => {
    expect(debug.query(By.css('table.table.table-striped'))).toBeTruthy();
  });

  it('should have <table-dark> element', () => {
    expect(debug.query(By.css('tr.table-dark'))).toBeTruthy();
  });

  it('should have 3 <car-item> elements', () => {
    expect(debug.queryAll(By.css('tr.car-item'))).toHaveSize(3);
  });

  it('should have <th> element with the car ID', () => {
    debug.queryAll(By.css('tr.car-item')).forEach((tr, i) => {
      expect(tr.children[0].nativeElement.textContent).toContain(component.cars[i].id);
    });
  });

  it('should have <td> element with the car brand, model and year', () => {
    debug.queryAll(By.css('tr.car-item')).forEach((tr, i) => {
      expect(tr.children[1].nativeElement.textContent).toContain(component.cars[i].marca);
      expect(tr.children[2].nativeElement.textContent).toContain(component.cars[i].linea);
      expect(tr.children[3].nativeElement.textContent).toContain(component.cars[i].modelo);
    });
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumeComponent } from './albume.component';

describe('AlbumeComponent', () => {
  let component: AlbumeComponent;
  let fixture: ComponentFixture<AlbumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

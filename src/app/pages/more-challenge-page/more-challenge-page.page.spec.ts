import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoreChallengePagePage } from './more-challenge-page.page';

describe('MoreChallengePagePage', () => {
  let component: MoreChallengePagePage;
  let fixture: ComponentFixture<MoreChallengePagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MoreChallengePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

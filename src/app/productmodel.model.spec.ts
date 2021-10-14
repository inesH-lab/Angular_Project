import { Productmodel } from './productmodel.model';

describe('Productmodel', () => {
  it('should create an instance', () => {
    expect(new Productmodel("","","","","")).toBeTruthy();
  });
});

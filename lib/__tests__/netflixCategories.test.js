const categories = require('../index.js');
const categoriesJSON = require('../all.json');
describe('Object testing', () => {
  it('Get Category by Id', () => {
    expect.assertions(1);
    const testResult = expect(categories.get('2')).toEqual(
      'Scary Cult Movies from the 1980s'
    );
    return testResult;
  });

  it('Get category that doesnt exist', () => {
    expect.assertions(1);
    const testResult = expect(categories.get('222j2')).toEqual(false);
    return testResult;
  });
  it('Get all categories', () => {
    expect.assertions(1);
    const testResult = expect(categories.all()).toEqual(categoriesJSON);
    return testResult;
  });
});

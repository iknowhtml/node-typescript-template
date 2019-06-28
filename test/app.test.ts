import app from '../src/app';
describe('Simple node app', () => {
  it('should console.log', done => {
    app();
    done();
  });
});

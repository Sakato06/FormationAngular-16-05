import { Task } from './task';

describe('Task', () => {
  it('should create an instance', () => {
    expect(new Task(1, "toto", true, "tutu")).toBeTruthy();
  });
});

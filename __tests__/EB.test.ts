import { EBApplnStack } from '../lib/eb-appln-stack';
import { Stack } from 'aws-cdk-lib';

describe('EBApplnStack', () => {
  it('should create an instance of EBApplnStack', () => {
    // Create a mock scope object (you can use a plain JavaScript object as a mock)
    const mockScope = {} as Stack;

    // Create an instance of EBApplnStack
    const ebApplnStack = new EBApplnStack(mockScope, 'TestStack');

    // Assert that the instance is created successfully
    expect(ebApplnStack).toBeInstanceOf(EBApplnStack);
  });

  it('should have required properties set', () => {
    // Create a mock scope object
    const mockScope = {} as Stack;

    // Create an instance of EBApplnStack with sample props
    const ebApplnStack = new EBApplnStack(mockScope, 'TestStack', {
      minSize: '1',
      maxSize: '2',
    });

    // Assert that the required properties are set correctly
    expect(ebApplnStack.minSize).toBe('1');
    expect(ebApplnStack.maxSize).toBe('2');
  });

  // Add more test cases to cover other functionality and edge cases as needed
});

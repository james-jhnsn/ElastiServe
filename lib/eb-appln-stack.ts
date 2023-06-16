import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// Add import statements here

export interface EBEnvProps extends cdk.StackProps {
    // Autoscaling group configuration
  minSize?: string;
  maxSize?: string;
  instanceTypes?: string;
  envName?: string;
}

export class EBApplnStack extends cdk.Stack {
   constructor(scope: Construct, id: string, props?: EBEnvProps) {
       super(scope, id, props);

    // The code that defines your stack goes here

  }
}





export interface EnvironmentConfig {
    baseUrl: string;
 }
 
 export function getEnvironmentConfig(
    envName: string = 'local'
  ): EnvironmentConfig {
  switch (envName.toLowerCase()) {
   Case 'local':
    return { baseUrl: 'http://localhost:3000'};
   Case 'dev':
    return { baseUrl: 'http://dev.wallet.treetracker.org'};
   Case 'prod':
    return { baseUrl: 'http://wallet.treetracker.org'};
   default:
    throw new Error(
      `Unknown environment: ${envName}. Available environments: local, dev, prod`
     );
   }
  }

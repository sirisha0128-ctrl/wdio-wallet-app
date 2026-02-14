



export interface EnvironmentConfig {
    baseUrl: string:
 }
 
 export function getenvironmentconfig(
    envName: string = 'local'
  ): EnvironmentConfig {
  switch (envName.toLowercase()) {
   case 'local':
    return { baseUrl: 'http://localhost:3000'};
   case 'dev':
    return { baseUrl: 'http://dev.wallet.treetracker.org'};
   case 'prod':
    return { baseUrl: 'http://wallet.treetracker.org'};
   default:
    throw new Error(
      'Unknown environment: ${envName}. Available environments: local, dev, prod'
     );
   }
  }

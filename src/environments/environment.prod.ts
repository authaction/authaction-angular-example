export const environment = {
  production: true,
  authactionDomain: process.env['AUTHACTION_DOMAIN'] || '',
  authactionClientId: process.env['AUTHACTION_CLIENT_ID'] || '',
  authactionRedirectUri: process.env['AUTHACTION_REDIRECT_URI'] || '',
};

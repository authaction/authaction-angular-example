export const environment = {
  production: false,
  authactionDomain: process.env['AUTHACTION_DOMAIN'] || '',
  authactionClientId: process.env['AUTHACTION_CLIENT_ID'] || '',
  authactionRedirectUri: process.env['AUTHACTION_REDIRECT_URI'] || '',
  authactionLogoutRedirectUri: process.env['AUTHACTION_LOGOUT_REDIRECT_URI'] || '',
};

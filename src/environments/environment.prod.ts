export const environment = {
  production: true,
  authactionTenantDomain: process.env['AUTHACTION_TENANT_DOMAIN'] || '',
  authactionClientId: process.env['AUTHACTION_CLIENT_ID'] || '',
  authactionRedirectUri: process.env['AUTHACTION_REDIRECT_URI'] || '',
  authactionLogoutRedirectUri:
    process.env['AUTHACTION_LOGOUT_REDIRECT_URI'] || '',
};

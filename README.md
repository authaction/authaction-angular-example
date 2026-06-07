# Angular OAuth2 Integration with Authaction

This is an Angular application demonstrating how to integrate OAuth2 authentication using [AuthAction](https://authaction.com/) with the `@authaction/web-sdk` library.

## Overview

This application showcases how to configure and handle authentication and logout using Authaction's OAuth2 service. The setup includes:

- Redirecting users to the login page.
- Handling successful authentication and displaying user information.
- Logging out users and redirecting them to the specified logout URL.

## Prerequisites

Before using this application, ensure you have:

1. **Node.js and npm installed**: You can download and install them from [nodejs.org](https://nodejs.org/).

2. **Authaction OAuth2 credentials**: You will need to have the `tenantDomain`, `clientId`, and relevant URIs from your Authaction setup.

## Installation

1. **Clone the repository** (if applicable):

   ```bash
   git clone git@github.com:authaction/authaction-angular-example.git
   cd authaction-angular-example
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure your Authaction credentials**:

   configure your AuthAction OAuth2 details using environment variables in your `.env.development` file

   ```bash
   AUTHACTION_DOMAIN=your-authaction-tenant-domain
   AUTHACTION_CLIENT_ID=your-authaction-app-clientid
   AUTHACTION_REDIRECT_URI=http://localhost:4200/
   AUTHACTION_LOGOUT_REDIRECT_URI=http://localhost:4200/
   ```

## Usage

1. **Start the development server**:

   ```bash
   npm start
   ```

   This will start the Angular application on `http://localhost:4200`.

2. **Testing Authentication**:

   - Open your browser and navigate to `http://localhost:4200`.
   - Click the "Login" button to be redirected to the Authaction login page.
   - After successful login, you will be redirected back to the application with a welcome message showing your name and a "Logout" button.
   - Click the "Logout" button to be logged out and redirected to the specified logout URL.

## Code Explanation

### Configuration (`src/app/app.config.ts`)

- **`provideAuthAction` Setup**:
  - Registers `@authaction/web-sdk/angular` with the Angular dependency injection system.
  - Sets up `domain`, `clientId`, `redirectUri`, and `postLogoutRedirectUri` from the environment file (`src/environments/environment.ts`).

### Application Component (`src/app/app.component.ts`)

- **Login and Logout Handling**:
  - `login()` calls `AuthActionService.loginWithRedirect()` to redirect the user to the Authaction login page.
  - `logout()` calls `AuthActionService.logout()` to end the session.
  - The template uses `isAuthenticated$`, `isLoading$`, and `user$` observables to conditionally display a welcome message and logout button or a login button.

## Common Issues

- **Redirects not working**:

  - Ensure that the `redirectUri` and `postLogoutRedirectUri` match the URIs configured in your [AuthAction](https://authaction.com/) application settings.
  - Make sure the application is running on the same port as specified in the `redirectUri`.

- **Network Errors**:
  - Verify that your network allows traffic to the Authaction servers and that there are no firewall rules blocking the OAuth2 redirects.

## Contributing

Feel free to submit issues or pull requests if you find any bugs or have improvements to suggest.

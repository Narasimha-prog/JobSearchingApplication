import { UserManager } from "oidc-client-ts";



export const userManager = new UserManager({
  authority: "https://accounts.google.com",
  client_id: "616346721814-cfags13k4n37shqe4ku9i174i3db835a.apps.googleusercontent.com",
  redirect_uri: "http://localhost:5174/JobSearchingApplication/callback",
  response_type: "code",
  scope: "openid profile email",
  post_logout_redirect_uri: "http://localhost:5174/JobSearchingApplication",
});

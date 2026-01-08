import { useEffect } from "react";
import { userManager } from "./OauthClient";

function Callback() {

    console.log("Callback component rendered");
  useEffect(() => {

    userManager.signinRedirectCallback()
      .then(user => {
        console.log("Access token:", user.access_token);
      })
      .catch(console.error);

  }, []);

  return <div>Signing in...</div>;
}

export default Callback;

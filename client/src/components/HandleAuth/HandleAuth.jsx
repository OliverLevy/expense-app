import React from "react";

export default function HandleAuth() {
  return (
    <div>
      <h2>this is how we handle auth</h2>
    </div>
  );
}


//this function checks to see if there is a user already signed in.
//if user is already signed in, the user will get sent to the signed in part of the site that has all the nav required.
//if user is NOT signed in, they have the choice to sign in with facebook or google
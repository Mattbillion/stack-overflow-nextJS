import React from "react";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div>
      <h1>Sign-up page</h1>
      <SignUp />
    </div>
  );
};

export default SignUpPage;

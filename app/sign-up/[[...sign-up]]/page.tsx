import { SignUp } from "@clerk/nextjs";

import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <SignUp fallbackRedirectUrl="/new-user" />
      </div>
    </div>
  );
};

export default SignUpPage;

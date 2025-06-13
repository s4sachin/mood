import { SignIn } from "@clerk/nextjs";

import React from "react";

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <SignIn forceRedirectUrl="/journal" />
      </div>
    </div>
  );
};

export default SignInPage;

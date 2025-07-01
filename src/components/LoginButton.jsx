"use client";
import { signIn } from "next-auth/react";

const LoginButton = () => {
  return (
    <div>
      <button
        onClick={() => signIn()}
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
      >
        Login
      </button>
    </div>
  );
};

export default LoginButton;

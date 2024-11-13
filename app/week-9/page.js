"use client";
import { useUserAuth } from "./_utils/auth-context";
import { useState } from "react";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    try {
      setError("");
      await gitHubSignIn();
      console.log("Sign in completed");
    } catch (error) {
      console.error("Sign in error:", error);
      setError("Failed to sign in: " + error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      setError("");
      await firebaseSignOut();
      console.log("Sign out completed");
    } catch (error) {
      console.error("Sign out error:", error);
      setError("Failed to sign out: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            {error && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                role="alert"
              >
                <span className="block sm:inline">{error}</span>
              </div>
            )}
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                {!user ? (
                  <div className="text-center">
                    <h1 className="text-2xl font-bold mb-8">
                      Welcome to Shopping List
                    </h1>
                    <button
                      onClick={handleSignIn}
                      className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Sign in with GitHub
                    </button>
                  </div>
                ) : (
                  <div className="text-center space-y-6">
                    <h1 className="text-2xl font-bold">
                      Welcome to Shopping List
                    </h1>
                    <p className="text-gray-600">
                      Hello, {user.displayName || user.email}!
                    </p>
                    <div className="space-y-4">
                      <a
                        href="/week-9/shopping-list"
                        className="block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors"
                      >
                        Go to Shopping List
                      </a>
                      <button
                        onClick={handleSignOut}
                        className="block w-full bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

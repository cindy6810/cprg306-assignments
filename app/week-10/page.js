"use client";

import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter(); // Import from `next/navigation`

  const handleGoToShoppingList = () => {
    router.push("/week-10/shopping-list"); // Navigation
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to Shopping List</h1>
      {user ? (
        <>
          <p>Hello, {user.email}!</p>
          <button onClick={handleGoToShoppingList}>Go to Shopping List</button>
          <button onClick={firebaseSignOut}>Sign Out</button>
        </>
      ) : (
        <button onClick={gitHubSignIn}>Sign In with GitHub</button>
      )}
    </div>
  );
};

export default HomePage;

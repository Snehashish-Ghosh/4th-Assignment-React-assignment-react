import React from "react";
import Button from "react-bootstrap/Button";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const GoogleSignUp = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (error) {
    return (
      <div>
        <p>Please Verify Your Email {"error".message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>User Registered</p>
      </div>
    );
  }
  return (
    <div className="google-signUp">
      <Button
        className="mt-3 w-100 theme-button google-image"
        onClick={() => signInWithGoogle()}
        type="submit"
      >
        Continue With Google
      </Button>
    </div>
  );
};

export default GoogleSignUp;

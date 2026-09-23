import Link from "next/link";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      {/* TODO: username input (className="wd-username") */}
      {/* TODO: password input (className="wd-password") */}
      <Link href="/dashboard" id="wd-signin-btn">
        Sign in
      </Link>
      <br />
      <Link href="/account/signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}

import Link from "next/link";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      {/* TODO: username (wd-username), password (wd-password), verify password (wd-password-verify) */}
      <Link href="/account/profile">Sign up</Link>
      <br />
      <Link href="/account/signin">Sign in</Link>
    </div>
  );
}

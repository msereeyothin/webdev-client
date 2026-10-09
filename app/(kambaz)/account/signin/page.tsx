import Link from "next/link";
const input = "mb-2 w-full rounded border border-neutral-300 p-2";
const button = "mb-2 block rounded bg-blue-600 p-2 text-center text-white no-underline";
export default function Signin() {
  return (
    <div id="wd-signin-screen" className="max-w-sm">
      <h1>Sign in</h1>
      <input placeholder="username" defaultValue="ada" className={`wd-username ${input}`} />
      <input
        placeholder="password"
        type="password"
        defaultValue="123"
        className={`wd-password ${input}`}
      />
      <Link id="wd-signin-btn" href="/dashboard" className={button}>
        Sign in
      </Link>
      <Link id="wd-signup-link" href="/account/signup">
        Sign up
      </Link>
    </div>
  );
}

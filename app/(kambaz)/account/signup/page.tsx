import Link from "next/link";
const input = "mb-2 w-full rounded border border-neutral-300 p-2";
const button = "mb-2 block rounded bg-blue-600 p-2 text-center text-white no-underline";
export default function Signup() {
  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h1>Sign up</h1>
      <input placeholder="username" defaultValue="ada" className={`wd-username ${input}`} />
      <input
        placeholder="password"
        type="password"
        defaultValue="123"
        className={`wd-password ${input}`}
      />
      <input
        placeholder="verify password"
        type="password"
        className={`wd-password-verify ${input}`}
      />
      <Link id="wd-signup-btn" href="/account/profile" className={button}>
        Sign up
      </Link>
      <Link id="wd-signin-link" href="/account/signin">
        Sign in
      </Link>
    </div>
  );
}

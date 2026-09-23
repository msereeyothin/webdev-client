import Link from "next/link";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {/* TODO: username (wd-username), password (wd-password) */}
      {/* TODO: wd-firstname, wd-lastname, wd-dob (date), wd-email (email) */}
      {/* TODO: <select id="wd-role"> USER / ADMIN / FACULTY / STUDENT */}
      <Link href="/account/signin">Sign out</Link>
    </div>
  );
}

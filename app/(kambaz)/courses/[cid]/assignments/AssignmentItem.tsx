import Link from "next/link";
export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
}) {
  return (
    <li className="wd-assignment-list-item">
      {/* TODO: title Link to /courses/${cid}/assignments/${aid} (className wd-assignment-link), details underneath */}
    </li>
  );
}

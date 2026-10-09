import Link from "next/link";
import type { ReactNode } from "react";

const field = "mb-4 w-full rounded border border-neutral-300 p-2";
const box = "rounded border border-neutral-300 p-4";

function Row({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <label htmlFor={htmlFor} className="w-1/3 pt-2 text-right">
        {label}
      </label>
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" className={field} />
      <textarea
        id="wd-description"
        rows={8}
        className={field}
        defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Vercel. The landing page should include the following: your full name and section, links to each of the lab assignments, a link to the Kambaz application, and links to all relevant source code repositories. The Kambaz application should include a link to navigate back to the landing page."
      />
      <Row label="Points" htmlFor="wd-points">
        <input id="wd-points" type="number" defaultValue={100} className={field} />
      </Row>
      <Row label="Assignment Group" htmlFor="wd-group">
        <select id="wd-group" defaultValue="ASSIGNMENTS" className={field}>
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </Row>
      <Row label="Display Grade as" htmlFor="wd-display-grade-as">
        <select id="wd-display-grade-as" defaultValue="PERCENTAGE" className={field}>
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="LETTER">Letter Grade</option>
          <option value="COMPLETE">Complete/Incomplete</option>
        </select>
      </Row>
      <Row label="Submission Type" htmlFor="wd-submission-type">
        <div className={`${box} mb-4`}>
          <select id="wd-submission-type" defaultValue="ONLINE" className={field}>
            <option value="ONLINE">Online</option>
            <option value="ON_PAPER">On Paper</option>
            <option value="NO_SUBMISSION">No Submission</option>
          </select>
          <b>Online Entry Options</b>
          {[
            { id: "wd-text-entry", label: "Text Entry" },
            { id: "wd-website-url", label: "Website URL", checked: true },
            { id: "wd-media-recordings", label: "Media Recordings" },
            { id: "wd-student-annotation", label: "Student Annotation" },
            { id: "wd-file-upload", label: "File Uploads" },
          ].map(({ id, label, checked }) => (
            <div key={id} className="mt-2">
              <input type="checkbox" id={id} defaultChecked={checked} />{" "}
              <label htmlFor={id}>{label}</label>
            </div>
          ))}
        </div>
      </Row>
      <Row label="Assign">
        <div className={box}>
          <label htmlFor="wd-assign-to" className="font-semibold">
            Assign to
          </label>
          <input id="wd-assign-to" defaultValue="Everyone" className={field} />
          <label htmlFor="wd-due-date" className="font-semibold">
            Due
          </label>
          <input type="date" id="wd-due-date" defaultValue="2024-05-13" className={field} />
          <div className="flex gap-2">
            <div className="flex-1">
              <label htmlFor="wd-available-from" className="font-semibold">
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                defaultValue="2024-05-06"
                className={field}
              />
            </div>
            <div className="flex-1">
              <label htmlFor="wd-available-until" className="font-semibold">
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                defaultValue="2024-05-20"
                className={field}
              />
            </div>
          </div>
        </div>
      </Row>
      <hr />
      <div className="py-4 text-right">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded bg-neutral-200 px-4 py-2 text-black no-underline"
        >
          Cancel
        </Link>{" "}
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}

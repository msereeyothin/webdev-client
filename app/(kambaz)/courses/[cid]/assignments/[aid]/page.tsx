import Link from "next/link";
export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" defaultValue="TODO: description" />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          {/* TODO: wd-group, wd-display-grade-as, wd-submission-type selects */}
          {/* TODO: online entry checkboxes — wd-text-entry, wd-website-url, wd-media-recordings, wd-student-annotation, wd-file-upload */}
          {/* TODO: wd-assign-to, wd-due-date, wd-available-from, wd-available-until */}
        </tbody>
      </table>
      <hr />
      <Link href={`/courses/${cid}/assignments`} id="wd-cancel">
        Cancel
      </Link>{" "}
      <Link href={`/courses/${cid}/assignments`} id="wd-save">
        Save
      </Link>
    </div>
  );
}

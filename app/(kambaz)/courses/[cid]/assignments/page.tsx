import AssignmentItem from "./AssignmentItem";
export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      {/* TODO: search input (wd-search-assignment), + Group (wd-add-assignment-group), + Assignment (wd-add-assignment) */}
      {/* TODO: <h3 id="wd-assignments-title"> ASSIGNMENTS 40% of Total + </h3> */}
      <ul id="wd-assignment-list">
        {/* TODO: 3+ AssignmentItems using cid */}
      </ul>
    </div>
  );
}

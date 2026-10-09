import { FaCheckCircle } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { BiImport } from "react-icons/bi";
import {
  LiaBellSolid,
  LiaBullhornSolid,
  LiaCrosshairsSolid,
  LiaFileImportSolid,
} from "react-icons/lia";
import { IoStatsChart } from "react-icons/io5";
import type { IconType } from "react-icons";
const actions: { label: string; Icon: IconType }[] = [
  { label: "Import Existing Content", Icon: BiImport },
  { label: "Import from Commons", Icon: LiaFileImportSolid },
  { label: "Choose Home Page", Icon: LiaCrosshairsSolid },
  { label: "View Course Stream", Icon: IoStatsChart },
  { label: "New Announcement", Icon: LiaBullhornSolid },
  { label: "New Analytics", Icon: IoStatsChart },
  { label: "View Course Notifications", Icon: LiaBellSolid },
];
export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-1 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      {actions.map(({ label, Icon }) => (
        <button
          key={label}
          type="button"
          className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
          <Icon className="me-2 shrink-0 text-base" /> {label}
        </button>
      ))}
    </div>
  );
}

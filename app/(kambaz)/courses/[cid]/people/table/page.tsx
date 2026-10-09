import { FaUserCircle } from "react-icons/fa";
const people = [
  { name: "Motto Sereeyothin", loginId: "001234561S", section: "S101", role: "STUDENT", last: "2020-10-01", total: "10:21:32" },
  { name: "John Kaisen", loginId: "001234562S", section: "S101", role: "STUDENT", last: "2020-11-02", total: "23:32:23" },
  { name: "Action Bronson", loginId: "001234563S", section: "S101", role: "STUDENT", last: "2020-10-02", total: "13:21:32" },
  { name: "Quincy Pondexter", loginId: "001234564S", section: "S101", role: "TA", last: "2020-11-05", total: "11:22:33" },
];
export default function PeopleTable() {
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p) => (
            <tr key={p.loginId} className="odd:bg-neutral-50">
              <td className="p-2 text-nowrap">
                <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                {p.name}
              </td>
              <td className="p-2">{p.loginId}</td>
              <td className="p-2">{p.section}</td>
              <td className="p-2">{p.role}</td>
              <td className="p-2">{p.last}</td>
              <td className="p-2">{p.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

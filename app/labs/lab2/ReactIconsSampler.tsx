import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { SiNextdotjs } from "react-icons/si";
import { GiRocket } from "react-icons/gi";
import { MdSchool } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
        <MdSchool id="wd-ai-icon-md" className="text-4xl text-blue-600" />
        <HiAcademicCap id="wd-ai-icon-hi2" className="text-4xl text-blue-600" />
        <SiNextdotjs className="text-4xl text-gray-900" />
        <GiRocket className="text-4xl text-red-600" />
      </div>
    </div>
  );
}

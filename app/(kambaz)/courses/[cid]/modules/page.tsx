import Module from "./Module";
import Lesson from "./Lesson";
export default function Modules() {
  return (
    <div>
      {/* TODO: toolbar — Collapse All, View Progress, Publish All select, + Module */}
      <ul id="wd-modules">
        <Module title="Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda">
          <Lesson title="LEARNING OBJECTIVES">
            {/* TODO: <li className="wd-content-item"> items */}
          </Lesson>
          {/* TODO: READING and SLIDES lessons */}
        </Module>
        {/* TODO: Weeks 2–3 */}
      </ul>
    </div>
  );
}

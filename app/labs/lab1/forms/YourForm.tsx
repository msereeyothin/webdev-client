export default function YourForm() {
  return (
    <form id="wd-your-form" onSubmit={(event) => event.preventDefault()}>
      <h4>Student Profile</h4>

      <h5>Name</h5>
      <label htmlFor="wd-your-first-name">First name: </label>
      <input id="wd-your-first-name" defaultValue="Motto" />
      <br />
      <label htmlFor="wd-your-last-name">Last name: </label>
      <input id="wd-your-last-name" defaultValue="Sereeyothin" />
      <br />
      <label htmlFor="wd-your-student-id">Student ID: </label>
      <input
        id="wd-your-student-id"
        type="password"
        placeholder="NUID"
        title="Your Northeastern student ID"
      />

      <h5>About me</h5>
      <label htmlFor="wd-your-bio">Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={40}
        rows={5}
        defaultValue="I want to build cool apps."
      />

      <h5>Class standing</h5>
      <input type="radio" name="your-standing" id="wd-your-freshman" />
      <label htmlFor="wd-your-freshman">Freshman</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-sophomore" />
      <label htmlFor="wd-your-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-junior" />
      <label htmlFor="wd-your-junior">Junior</label>
      <br />
      <input
        type="radio"
        name="your-standing"
        id="wd-your-senior"
        defaultChecked
      />
      <label htmlFor="wd-your-senior">Senior</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-graduate" />
      <label htmlFor="wd-your-graduate">Graduate</label>

      <h5>Enrollment</h5>
      <input
        type="radio"
        name="your-enrollment"
        id="wd-your-full-time"
        defaultChecked
      />
      <label htmlFor="wd-your-full-time">Full-time</label>
      <br />
      <input type="radio" name="your-enrollment" id="wd-your-part-time" />
      <label htmlFor="wd-your-part-time">Part-time</label>

      <h5>Interests</h5>
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-interest-webdev"
        defaultChecked
      />
      <label htmlFor="wd-your-interest-webdev">Web development</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-reinforcement"
        defaultChecked
      />
      <label htmlFor="wd-your-reinforcement">Reinforcement learning</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-interest-inference"
      />
      <label htmlFor="wd-your-interest-inference">Inference engineering</label>

      <h5>Academics</h5>
      <label htmlFor="wd-your-major">Major: </label>
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="CY">Cybersecurity</option>
        <option value="CE">Computer Engineering</option>
      </select>
      <br />
      <label htmlFor="wd-your-topics">Topics to deepen this term:</label>
      <br />
      <select
        multiple
        id="wd-your-topics"
        defaultValue={["REACT", "NEXTJS"]}
      >
        <option value="HTML">HTML</option>
        <option value="CSS">CSS and Tailwind</option>
        <option value="REACT">React</option>
        <option value="NEXTJS">Next.js</option>
        <option value="NODE">Node.js</option>
        <option value="MONGODB">MongoDB</option>
      </select>

      <h5>Details</h5>
      <label htmlFor="wd-your-email">School email: </label>
      <input
        type="email"
        id="wd-your-email"
        placeholder="sereeyothin.w@northeastern.edu"
      />
      <br />
      <label htmlFor="wd-your-grad-year">Expected graduation year: </label>
      <input
        type="number"
        id="wd-your-grad-year"
        defaultValue={2026}
        min={2025}
        max={2032}
      />
      <br />
      <label htmlFor="wd-your-start-date">Program start date: </label>
      <input type="date" id="wd-your-start-date" defaultValue="2022-09-06" />
      <br />
      <label htmlFor="wd-your-excitement">
        How excited am I about this course (0–10):{" "}
      </label>
      <input
        type="range"
        id="wd-your-excitement"
        min={0}
        max={10}
        defaultValue={9}
      />
      <br />
      <br />
      <button type="submit" id="wd-your-save">
        Save
      </button>{" "}
      <button type="button" id="wd-your-cancel">
        Cancel
      </button>
    </form>
  );
}

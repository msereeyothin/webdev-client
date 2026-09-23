import CourseCard from "./CourseCard";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (3)</h2> <hr />
      <div id="wd-dashboard-courses">
        {/* TODO: 3+ courses; add matching images under public/images/ */}
        <CourseCard
          id="1234"
          title="CS1234 React JS"
          subtitle="Full Stack software developer"
          image="/images/reactjs.jpg"
        />
      </div>
    </div>
  );
}

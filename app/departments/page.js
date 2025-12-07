import { departments } from "../../data/departments";
import DepartmentCard from "../components/DepartmentCard";
import "../styles/home.css";

export default function DepartmentsPage() {
  return (
    <div className="home-container">
      <h1>All Departments</h1>
      <div className="cards-container">
        {departments.map((dept) => (
          <DepartmentCard key={dept.slug} department={dept} />
        ))}
      </div>
    </div>
  );
}

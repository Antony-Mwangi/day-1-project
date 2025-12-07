import { departments } from "../../../data/departments";
import Image from "next/image";
import Link from "next/link";
import "../../styles/home.css";

export default function DepartmentDetail({ params }) {
  const dept = departments.find((d) => d.slug === params.slug);

  if (!dept) {
    return (
      <div className="home-container">
        <h2>Department Not Found</h2>
        <Link href="/departments">Back to Departments</Link>
      </div>
    );
  }

  return (
    <div className="home-container">
      <h1>{dept.name}</h1>
      <Image src={dept.image} alt={dept.name} width={600} height={300} />
      <p>{dept.description}</p>

      <h3>Department Head</h3>
      <p>{dept.head}</p>

      <h3>Location</h3>
      <p>{dept.location}</p>

      <h3>Contact</h3>
      <p>Phone: {dept.contacts.phone}</p>
      <p>Email: {dept.contacts.email}</p>

      <Link href="/departments">Back to Departments</Link>
    </div>
  );
}
//Component to display detailed information about a specific department
//Uses: server component, next/image , next/link    

import Image from "next/image";
import Link from "next/link";

export default function DepartmentCard({ department }) {
  return (
    <div className="card">
      <Image src={department.image} alt={department.name} width={300} height={200} />
      <h3>{department.name}</h3>
      <p>{department.description}</p>
      <Link href={`/departments/${department.slug}`}>View Details</Link>
    </div>
  );
}

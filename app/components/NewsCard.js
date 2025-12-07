import Image from "next/image";
import Link from "next/link";

export default function NewsCard({ newsItem }) {
  return (
    <div className="card">
      <Image src={newsItem.image} alt={newsItem.title} width={300} height={150} />
      <h3>{newsItem.title}</h3>
      <p>{newsItem.summary}</p>
      <Link href={`/news/${newsItem.id}`}>Read More</Link>
    </div>
  );
}

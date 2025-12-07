import { news } from "../../../data/news";
import Image from "next/image";
import Link from "next/link";
import "../../styles/home.css";

export default function NewsDetail({ params }) {
  const newsItem = news.find((n) => n.id.toString() === params.id);

  if (!newsItem) {
    return (
      <div className="home-container">
        <h2>News Not Found</h2>
        <Link href="/news">Back to News</Link>
      </div>
    );
  }

  return (
    <div className="home-container">
      <h1>{newsItem.title}</h1>
      <Image src={newsItem.image} alt={newsItem.title} width={600} height={300} />
      <p><strong>Date:</strong> {newsItem.date}</p>
      <p>{newsItem.content}</p>
      <Link href="/news">Back to News</Link>
    </div>
  );
}

//Features: dynamic routing [id], server component, next/image , next/link
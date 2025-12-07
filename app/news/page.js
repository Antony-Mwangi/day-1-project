import { news } from "../../data/news";
import Image from "next/image";
import Link from "next/link";
import "../styles/home.css";

export default function NewsPage() {
  return (
    <div className="home-container">
      <h1>Campus News</h1>
      <div className="cards-container">
        {news.map((item) => (
          <div key={item.id} className="card">
            <Image src={item.image} alt={item.title} width={300} height={150} />
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <Link href={`/news/${item.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

//features: server component, next/image optimization , next/link navigation, uses local data (news.js)
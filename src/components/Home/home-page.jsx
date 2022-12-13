import Link from "next/link";
import Image from "next/image";

export const HomePage = ({data}) => {
    return (
      <div className="home_body">
        {data.map((ev) => (
          <Link legacyBehavior key={ev.id} href={`/events/${ev.id}`} passHref>
          <a className="card">
            <div className="image">
              <Image alt={ev.title} width={300} height={300} src={ev.image}/> 
            </div>
            <div className="content">
              <h2>{ev.title}</h2> 
              <p>{ev.description}</p>
            </div>
          </a>
          </Link>
        ))}
        </div>
    )
}
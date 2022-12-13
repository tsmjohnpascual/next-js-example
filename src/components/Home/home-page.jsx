import Link from "next/link";
import Image from "next/image";

export const HomePage = ({data}) => {
    return (
    <main>
        {data.map((ev) => (
          <Link legacyBehavior key={ev.id} href={`/events/${ev.id}`} passHref>
          <a>
            <Image alt={ev.title} width={300} height={300} src={ev.image}/> 
            <h2>{ev.title}</h2> 
            <p>{ev.description}</p>
          </a>
          </Link>
        ))}
      </main>
    )
}
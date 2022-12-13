import Image from 'next/image';
import Link from 'next/link';

const EventsCatPage = ({data, pageName}) => {
    return (
        <div>
            <h1>Events in {pageName}</h1>
            <div>
                {data.map((ev) => (
                    <Link legacyBehavior key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
                        <a>
                            <Image alt={ev.title} width={300} height={300} src={ev.image}/> 
                            <h2>{ev.title}</h2>
                            <p>{ev.description}</p>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default EventsCatPage;

export async function getStaticPaths() {

    const {events_categories} = await import('/data/data.json')
    const allPaths = events_categories.map(ev => {
        return {
            params: {
                categories: ev.id.toString()
            }
        }
    })

    return {
        paths: allPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    //console.log(context)
    const id = context?.params.categories
    //console.log(id)
    const {allEvents} = await import('/data/data.json')
    const data = allEvents.filter(ev => ev.city === id)
    //console.log(data)
    return {props: {data, pageName: id}}
}
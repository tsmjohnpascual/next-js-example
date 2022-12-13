import Image from 'next/image';

const EventPage = ({data}) => {
    console.log(data)
    return (
        <div>
            <Image src={data.image} width={1000} height={300} alt={data.title}/>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
    )
}

export default EventPage;

export async function getStaticPaths() {
    const {allEvents} = await import ('/data/data.json')

    const allPaths = allEvents.map(path => {
        return {
            params: {
                categories: path.city,
                id: path.id
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
    const id = context?.params.id
    const {allEvents} = await import ('/data/data.json')
    const eventData = allEvents.find(ev => id === ev.id)

    return {props: {data: eventData}}
}
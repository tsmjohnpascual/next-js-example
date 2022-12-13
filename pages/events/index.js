import EventsPage from '../../src/components/Events/events-page';

const EventsPage2 = ({data}) => {
    return (
        <EventsPage data={data} />
    )
}

export default EventsPage2;

export async function getStaticProps() {
    const {events_categories} = await import('/data/data.json')
    return {
        props: {
            data: events_categories
        }
    }
}
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <img />
          <Link legacyBehavior href='/' passHref><a>Home</a></Link>
          <Link legacyBehavior href='/events' passHref><a>Events</a></Link>
          <Link legacyBehavior href='/about-us' passHref><a>About us</a></Link>
        </nav>
      </header>
      <main className={styles.main}>
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

      <footer className={styles.footer}>
        <p> © 2022 Time to Code - A Project Built with Next.js </p>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  const {events_categories} = await import('/data/data.json')
  return {
      props: {
          data: events_categories
      }
  }
}

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const catEvent = ({data, pageName}) => {
  return (
    <div className='cat_events'>
        <h1>Events in {pageName}</h1>
        <div className='content'>
            {data.map((ev) => (
                <Link legacyBehavior key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
                    <a className='card'>
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

export default catEvent
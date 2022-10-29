import React from 'react';
import './App.css';
import { Navbar } from './component/nav';
import { Card } from './component/card';
import { Hero } from './component/hero';
import data from './data'

export default function App() {
  const cards = data.map(item => {
    return (
      <Card

        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className='card-list'>{cards}</section>
    </div>
  )
}
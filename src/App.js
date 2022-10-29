import React from 'react';
import './App.css';
import { Navbar } from './component/nav';
import { Card } from './component/card';
import data from './data'

export default function App() {
  // <Hero />
  const cards = data.map(item => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
      />
    )
  })

  return (
    <div>
      <Navbar />
      {cards}
    </div>
  )
}
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
        item={item}
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
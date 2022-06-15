import React, { useState } from 'react'
import Categories from './components/Categories.js';
import Menu from "./components/Menu.js";
import items from './data.js'

// new Set去除重複
const allCategories = ['all', ...new Set(items.map(item => item.category))];

function App() {
  const [munuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  // 過濾菜單
  const filterItems = (category) => {
    if (category === 'all') {
      console.log('all')
      setMenuItems(items)
      return
    }

    const newItems = items.filter((item) => {
      return item.category === category
    })
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>美食美客-菜單</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={munuItems} />
      </section>
    </main>
  );
}

export default App;

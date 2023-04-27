import React, {useEffect, useState} from 'react';
import Article from './Article';
import data from './data';

const getStorageTheme = () => {
    let theme = 'light-theme';
    if(localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    }
    return theme;
}

const App = () => {

  const[theme , setTheme] = useState(getStorageTheme());

  const toggle = () => {
      if(theme === 'light-theme') {
          setTheme('dark-theme');
      } else {
        setTheme('light-theme');
      }
  }

  useEffect(() => {
      document.documentElement.className = theme;
      localStorage.setItem('theme' , theme);
  },[theme])

  return (
    <main>
        <nav>
          <div className='nav-center'>
              <h1>overreact</h1>
              <button className='btn' onClick={toggle}>Toggle</button>
          </div>
            
            <section className='articles'>
                {
                  data.map((item) => {
                    return <Article key={item.id} {...item}/>
                  })
                }
            </section>
        </nav>
    </main>
  );
}

export default App;

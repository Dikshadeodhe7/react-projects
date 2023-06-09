import data from './data';
import React, {useState}  from 'react';
function App() {

  const[count, setCount] = useState(0);
  const[text, setText] = useState([]);

  const handleSubmit = (e) => {
        e.preventDefault();

        let amount =parseInt(count);

        if(count <= 0) {
            amount = 1;
        }

        if(count > 8) {
            amount = 8;
        }

        setText(data.slice(0, amount));
  }

  return (
    
    <section className='section-center'>
         <h3>tired of boring lorem ipsum?</h3>

         <form onSubmit={handleSubmit} className='lorem-form'>
              <label htmlFor='amount'>paragraphs:</label>
              <input type="number" name="amount" value={count} id='amount' onChange={(e) => setCount(e.target.value)}/>
              <button className='btn'>generate</button>
         </form>

         <article className='lorem-text'>
            {
              text.map((item, index) => {
                  return <p key={index}>{item}</p>
                  
              })
            }
         </article>
    </section>
  );
}

export default App;

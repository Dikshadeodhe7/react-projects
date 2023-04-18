import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa';

const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';


function App() {
  const [loading , setLoading] = useState(false);
  const [person , setPerson] = useState(null);
  const [value, setValue] = useState('random person');
  const [title, setTitle] = useState('name');

  const handleValue =  (e) => {
      if(e.target.classList.contains('icon')) {
          let newValue = e.target.dataset.label;

          setTitle(newValue);
          setValue(person[newValue]);
      }
  }

  const getPerson = async () => {
    setLoading(true);
    const request = await fetch(url);
    const data =  await request.json();
    let person = data.results[0];
    

    const {email, phone} = person;
    const {dob : {age}} = person;
    const {first, last} = person.name;
    const {street: {number,name}} = person.location;  
    const {password} = person.login;
    const {large: image} = person.picture;

    const newPerson = {
        image, email, phone, password, age, name: `${first} ${last}`,
        street : `${number} ${name}`
    }
    
    setPerson(newPerson);
    setLoading(false);
    setTitle('name');
    setValue(newPerson.name);
  }

  useEffect(() => {
      getPerson();
  }, [])
  

  return (
      <main>
        <div className='block bcg-black'></div>
        
        <div className='block'>
          <div className='container'>
            <img src = {(person && person.image) || defaultImage} alt='random user' className='user-img'/>
              <p className='user-title'>My {title} is</p>
              <p className='user-value'>{value}</p>

              <div className='values-list'>
                    <button className='icon' data-label='name' onMouseOver={handleValue}>
                        <FaUser />
                    </button>
                    <button className='icon' data-label='email' onMouseOver={handleValue}>
                        <FaEnvelopeOpen />
                    </button>
                    <button className='icon' data-label='age' onMouseOver={handleValue}>
                        <FaCalendarTimes />
                    </button>
                    <button className='icon' data-label='street' onMouseOver={handleValue}>
                        <FaMap />
                    </button>
                    <button className='icon' data-label='phone' onMouseOver={handleValue}>
                        <FaPhone />
                    </button>
                    <button className='icon' data-label='password' onMouseOver={handleValue}>
                        <FaLock />
                    </button>
              </div>

              <button className='btn' type='button' onClick={getPerson}>
                    {loading ? 'Loading...' : 'Random Person'}
              </button>

          </div>
        </div>

      </main>
  );
}

export default App;

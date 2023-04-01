import React , {useState}  from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index];
    //console.log(people);
    const checkNumber = (number) => {
        if(number > people.length - 1) {
            return 0;
        }

        if(number < 0) {
            return people.length - 1;
        }
        return number;
    }

    const nextNumber = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })
    }

    const prevNumber = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }

    const randomNumber = () => {
        let randomNum = Math.floor(Math.random() * people.length);

        if(randomNum === index) {
            randomNum = index + 1;
        }
        setIndex(checkNumber(randomNum));
    }
  
    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
                    <FaQuoteRight />    
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>

            <div className='button-container'>
                <button onClick={prevNumber}  className='prev-btn'> 
                    <FaChevronLeft />
                </button>
                <button onClick={nextNumber}  className='next-btn'> 
                    <FaChevronRight />
                </button>
            </div>

            <button className='ranodm-num' onClick={randomNumber}>
                Surprise Me
            </button>
        </article>
    );
}

export default Review;

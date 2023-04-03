import React, {useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title, info, id, toggelAnswer, idFlag}) => {

    const [showInfo, setShowInfo] = useState(false);
    const isThisActive = id === idFlag;


    return (
        <article className='question'>
            <header onClick={() => handleToggle(title)}>
                <h4>{title}</h4>
                <button className='btn' onClick={() => toggelAnswer(isThisActive ? null : id)}>  
                    {isThisActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {isThisActive && <p>{info}</p>}
            
        </article>
    );
}

export default Question;

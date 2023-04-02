import React, {useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title, info}) => {

    const [showInfo, setShowInfo] = useState(false);
    const [openKey, setOpenKey] = useState();

    const handleToggle = key => {
        setOpenKey(openKey !== key ? key : null );
    }


    return (
        <article className='question'>
            <header onClick={() => handleToggle(title)}>
                <h4>{title}</h4>
                <button className='btn' onClick={() => setShowInfo(!showInfo)}>  
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {showInfo && <p>{info}</p>}
            
        </article>
    );
}

export default Question;

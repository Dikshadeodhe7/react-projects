import React, { useState , useEffect } from 'react';
import List from './List.js';
import Alert from './Alert';

const getLocalStorage = () => {
    let list = localStorage.getItem("list");

    if(list) {
      return (list = JSON.parse(localStorage.getItem("list")));
    } else {
      return [];
    }
}

//getLocalStorage()
const App = () => {

    const [name, setName] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(false);
    const [alert, setAlert] = useState({show:false, title:'', msg:''})
    const [list, setList]  = useState(getLocalStorage());

    const showAlert = (show= false, type='', msg='') => {
        setAlert({show, type, msg})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name) {
            showAlert(true, 'danger', 'Please add the Item')
        } 
        else if ( name && isEdit) {

            setList(list.map((item) => {
                if(item.id === editId) {
                    return {...item, title: name}
                }
                return item;
            }))

            setName('');
            setEditId(null);
            setIsEdit(false);
            showAlert(true, 'success', 'Item changed')
        }
        else {
            showAlert(true, 'success', 'Item added sucessfully...!');
            const newItem = {id: new Date().getTime().toString(), title: name}
            setList([...list, newItem]);
            setName('');
        }
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    const removeItem = (id) => {
        setList(list.filter(item => item.id !== id))
    }

    const handleEdit = (id) => {
        const specificItem = list.find((item) => item.id === id);
        setIsEdit(true);
        setEditId(id);
        setName(specificItem.title);
    }   

    const clearItem = () => {
        showAlert(true, 'danger' , 'Empty list');
        setList([]);
    }
 
    return (
        <section className="section-center">
                
                <form className='grocery-form' onSubmit={handleSubmit}>
                    {
                        alert.show &&  <Alert {...alert} removeAlert={showAlert} list={list} /> 
                    }
                    <h3>Grocery Bud</h3>

                    <div className="form-control">
                        <input className='grocery' type='text' 
                        placeholder='Eggs' onChange={(e) => setName(e.target.value)} value={name}/>
                        <button className='submit-btn'>
                            {isEdit ? 'Edit' : 'Submit'}
                        </button>
                    </div>
                    
                </form>

                { list && 
                    <div className='grocery-container'>
                        <List items={list} removeItem={removeItem} editItem={handleEdit}/>
                        <button className='clear-btn' onClick={clearItem}>Clear Item</button>
                    </div>
                }
                
        </section>
    );
}

export default App;

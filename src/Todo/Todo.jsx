import React, { useState } from 'react'
import { FaRegCopy, FaRegEdit } from 'react-icons/fa';
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";




const Todo = () => {

    const [input,setInput] = useState('')
    const [items,setItems] = useState([])
    const [isEditing, setIsEditing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [editInput, setEditInput] = useState('');



    const addItems = () => {
        if(input){
            setItems([...items, input])
            setInput('')
            return
        }
    }

    const deleteAll = () => {
        setItems([])
    }

    const deleteSingleItems = (index) => {
        
        const filterData = items.filter((e, i)=>{
            return index !== i
        })
        setItems(filterData)
    }


    const copyItem = async (item) => {
        try {
            await navigator.clipboard.writeText(item);
            alert('Copied to clipboard');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };


    
    
  return (
    <div className='w-50 mx-auto'>
      <h1 className='text-center mt-5 mb-4'>Todo App</h1>
      <br></br>
     <p style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px'}}>
     <input value={input} type="text" placeholder='Enter items..' onChange={(e)=> setInput(e.target.value)}/>

<IoIosAddCircle onClick={addItems} style={{fontSize:30,marginLeft:5, cursor: 'pointer'}}/>
<MdDelete style={{fontSize:30,marginLeft:5, cursor: 'pointer'}} onClick={deleteAll}/>
     </p>
      {
        items.map((item,index) => {
            return(
                <li key={index} style={{fontSize: 20, display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, }}>
                    {item}
                        <FaRegCopy style={{cursor: 'pointer'}} onClick={() => copyItem(item)}/>
                            <FaRegEdit style={{cursor: 'pointer'}} onClick={() => startEditing(index)}/>
                            <MdDelete style={{cursor: 'pointer'}} onClick={() => deleteSingleItems(index)}/>
                    
                </li>
            )
        })
    }
    </div>
  )
}

export default Todo

































// const startEditing = (index) => {
//     setIsEditing(true)
//     setCurrentIndex(index)
//     setEditInput(items[input])
// }

// const handleEdit = (e) => {
//     setEditInput(e.target.value)
// }

// const saveEdit = () => {
//     const updatedEdit = items.map((e, i) =>{
//         i === currentIndex ? editInput : e
//     });
//     setItems(updatedEdit)
//     setIsEditing(false)
//     setCurrentIndex(null)
//     setEditInput('')
// }

{/* {




             isEditing && currentIndex === index ? (
                <div>
                     <input type="text" onChange={handleEdit} value={editInput}/>
                     <button onClick={saveEdit}>save</button>
                     
                 </div>
             ) : (
             )} */}
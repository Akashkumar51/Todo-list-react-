import React from 'react'
import './List.css'


function List({list,deleteListItem,completeItem,editeListItem,filter}) {
  return (
    <div className='list'>
        <ul  className='listul'>
          {list.filter((data) => {
            if (filter === "all") {
              return data 
            }
            if (filter === "complete") {
              return data.complete === true 
            }
            if (filter === "uncomplete") {
              return data.complete === false
            }
          }).map((data, index) => (
            <div key = {index} className='listhead'>
              <li className='lists'>
                <p className={`${data.complete === true ? "completecheck" : "completeuncheck"}`}>{data.name}</p>
               
              </li>
              <button onClick={() => completeItem(data.id)} className='ulbutton'>
              <i className='icon' class="fa-solid fa-check fa-2x" ></i>
              </button>
              <button onClick={() => deleteListItem(data.id)} className='ulbutton2'>
              <i class=" fa-solid fa-trash fa-2x"></i>
              </button>
              </div>
          ))}
          
        </ul>
    </div>
  )
}

export default List
import React,{useState,useEffect} from 'react'
import './Body.css';
import List from './List';
import { v4 as uuidv4 } from 'uuid';


function Body() {
    const LOCAL_STORAGE_KEY = "Body";
    const [list, setList] = useState( JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? [])
    const [input, setinput] = useState("")
    const [filter, setFilter] = useState("all")
    
    function changeList(name,list) {
        if (name === "") {
            
        }else{
            const id = uuidv4();
            setList([...list,{name:name, id: id, complete:false}])
            setinput("")
        }
    }

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list))
    }, [list]);

    function deleteListItem(id) {
        const newList = list.filter((data) => {
            return data.id !== id
        });
        setList(newList)
    }

    function completeItem(id) {
      const newlist = list.map((data, index)=> {
        if (data.id === id && data.complete === false ) {
            return {...data, complete: true}
        }if (data.id === id && data.complete === true) {
            return {...data, complete: false}
        }
        return data
       })

       setList(newlist)

    }
   
    function filterList(value) {
        setFilter(value)
    }
  return (
    <>
    <div className='bodyhead'>
        <div className='mainbody'>
            <div className='inputhead'>
                <input value={input}  onChange={(event) => setinput(event.target.value)} className='bodyinput' type="text" placeholder='Enter your activty' />
                <button onClick={() => changeList(input,list)} className='bodybutton'>
                    <i className='bodyplusicon' class="fa-solid fa-plus fa-small"></i>
                </button>
            </div>
            <div className='inputfoot'>
            <select className='select'onChange={(e) =>filterList(e.target.value)}>
                <option className='option' value="all">All</option>
                <option className='option' value="complete">Completed</option>
                <option className='option' value="uncomplete">Uncompleted</option>
                </select>
            </div>
        </div>
    </div>
    <List list={list} deleteListItem={deleteListItem} completeItem={completeItem} filter={filter}/>
    </>
  )
}

export default Body
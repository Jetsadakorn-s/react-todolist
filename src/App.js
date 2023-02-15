import { useState } from 'react';
import './App.css';
import { v4 } from 'uuid';
import List from './component/List';
import Alert from './component/Alert';

function App() {
  const [name,setName] = useState("")
  const [list,setList] = useState([])

  const [alert,setAlert] = useState({show:false,msg:'',type:''})
  const [checkEditItem,setCheckEditItem] = useState(false)
  const [editID,setEditID] = useState('')

  const submitData=(e)=>{
    e.preventDefault()
    if(!name){
      setAlert({show:true,msg:"กรุุณาป้อนข้อมูล",type:"error"})
    }else if(checkEditItem && name){
      const result = list.map((item)=>{
        if(item.id === editID){
          return{...item,title:name}
        }
        return item
      })
      setList(result)
      setName('')
      setCheckEditItem(false)
      setEditID(null)
      setAlert({show:true,msg:"แก้ไขข้อมูลเรียบร้อย",type:"success"})
    }else{
    const newItem={
      id:v4(),
      title:name
    }
    setList([...list,newItem])
    setName('')
      setAlert({show:true,msg:"บันทึกข้อมูลเรียบร้อย",type:"success"})
  }}

    const removeItem=(id)=>{
      const result = list.filter((item)=>item.id !== id)
      setList(result)
      setAlert({show:true,msg:"ลบข้อมูลเรียบร้อย",type:"error"})
    }

    const editItem=(id)=>{
      setCheckEditItem(true)
      setEditID(id)
      const searchItem = list.find((item)=>item.id === id)
      setName(searchItem.title)
    }
  return (
    <section className='container'>
      <h1>To Do List</h1>
      {alert.show && <Alert {...alert} setAlert={setAlert} list={list}/>}
      <form className='form-group' onSubmit={submitData}>
        <div className='form-control'>
          <input type="text" className="text-input"
          onChange={(e)=>setName(e.target.value)}
          value={name}
          />
          <button type='submit' className='submit-button'>              
              {checkEditItem ? "แก้ไขข้อมูล" : "เพิ่มข้อมูล"}
          </button>
        </div>
      </form>
      <section className='List-container'>
          {list.map((data,index)=>{
            return<List key={index} {...data} removeItem={removeItem} editItem={editItem}/>
          })}
      </section>
    </section>
    );
}

export default App;

import { useState } from 'react';
import './App.css';
import { v4 } from 'uuid';
import List from './component/List';
import Alert from './component/Alert';

function App() {
  const [name,setName] = useState("")
  const [list,setList] = useState([])

  const [alert,setAlert] = useState({show:true,msg:'',type:''})

  const submitData=(e)=>{
    e.preventDefault()
    const newItem={
      id:v4(),
      title:name
    }
    setList([...list,newItem])
    setName('')
  }
  return (
    <section className='container'>
      <h1>To Do List</h1>
      {alert.show && <Alert/>}
      <form className='form-group' onSubmit={submitData}>
        <div className='form-control'>
          <input type="text" className="text-input"
          onChange={(e)=>setName(e.target.value)}
          value={name}
          />
          <button type='submit' className='submit-button'>เพิ่มข้อมูล</button>
        </div>
      </form>
      <section className='List-container'>
          {list.map((data,index)=>{
            return<List key={index} {...data}/>
          })}
      </section>
    </section>
    );
}

export default App;

import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name,setName] = useState('')
  const [list,setList]= useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert,setAlert] = useState({show:false, msg:'',type:''})
const handleSubmit=(e)=>{
  e.preventDefault()
if(!name){
  // display Alert
}
else if(name && isEditing){
  // deal width edit

}
else{
  // show alert
  const newItem = {id: new Date().getTime().toString(), title:name}
setList([...list, newItem])
setName('')
}
}
  return <section className='section-center'>
  <form classname='grocery-form' onSubmit={handleSubmit}>
  {alert.show && <Alert/>}
  <h3>grocery bud</h3>
  <div className="form-control">
  <input type="text" className='grocery' placeholder='e.g. eggs' value={name} onChange={(e)=>{
    setName(e.target.value)

  }} />
  <button className="submit-btn" type='submit'> {isEditing? 'edit' : 'submit'}  </button>
  </div>
  </form>
  <div className="grocery-conteiner">
  <List items={list}/>
  <button className="clear-btn">clear items</button>
  </div>
  </section>
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
// блять эти костыли кустарные просто в ахуе с них
// как же я ахуенен 
// *Илья
  const [count, setCount] = useState(1)
  const [note, setNote] = useState('')
  const [title, setTitle] = useState('')
  const [data, setData] = useState(
    [

    ]  
  )

  const addNote = () =>{
    setCount(count + 1) 
    console.log(note)
    setData((prev) =>{
      return prev.concat({
        key:count,
        title:title,
        note:note
      })
    })
    console.log(data)
    console.log(count)
  }


  const removeAllNotes = () => {
    setData(data.filter((e) => e.id === count)); 
    console.log(count)
    setCount(count - count) 
  }

  const removeNote = (id) => { 
    setData(data.filter((e) => e.key !== id))
  }

  return (
    <>
        <div className='center'> {/* вот эта хуйня все сдерживает по центру, это мой любимый костыль и я им горжусь (и всем его вставляю) */}
        <div className='notes'>
          <h1> Заметки </h1>
          <div className='input-and-button'>

            <input placeholder='Заголовок заметки' maxLength={10} value={title} onChange={(e)=>{
              setTitle(e.target.value)
            }}></input> 
            <div className='center'>           
            <textarea autoFocus placeholder='Текст заметки' maxLength={50} value={note} onChange={(e)=>{
              setNote(e.target.value)
            }}></textarea></div>

            <button className='add' onClick={addNote}> Добавить </button>
            <button className='delete' onClick={removeAllNotes}> Удалить все </button>
            </div>
          </div>
        </div>
        <div className='center'>
            <div className='note-item-list'>
                  {data.map((e)=>{
                    return (
                      <div className='note-item'>
                        <button onClick={()=>{removeNote(e.key)}}>-</button>
                        <div className='note-text'>
                        <h2>{e.title}</h2>
                        <hr></hr>
                        <p>{e.note}</p>
                        </div>
                      </div>
                    )
                  })}
            </div>
          </div>
    </>
  )
}

export default App

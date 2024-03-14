
import './App.css';
import React, { useEffect, useState } from 'react'

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts"
  const [data, setDate] = useState([])
  const [load, setLoad] = useState('loading........')

  const showdata = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setDate(d))
  }



  useEffect(() => {
    showdata();
  }, [load])


  useEffect(() => {
    setLoad(load)
  }, [load])

  console.log(setDate)

  function DelereItem(index) {
    const deletedate = data.filter((ele, id) => {
      return index !== id
    })
    setDate(deletedate)
  }



  return (
    <div className="App">
      

      <div className='leftbox'>
        
        <div className='leftgridone'>
         <h3>Hello Ganesh</h3>
        </div>


        <div className='leftgridTwo'>
         <h2 className='viewtogghle'>View toggle</h2>
         <div className='secondBoxLeft'>
          <div className='secone'></div><div className='sectwo'></div>
         </div>
        </div>
        
        
        <div className='leftgridThree'>
          <h1>Have A Feedback</h1>
          <h3 className='wearelistening'>We are Listening</h3>
        </div>
        
        
      </div>
     
      
      
      {data.map((dataobj, index) => {
        return (
          <div>
            <div key={index} className='mainbox' id='pagination_list'>
              <h3 className='tital'> {dataobj.title}</h3>
              <p className='discription'>{dataobj.body}</p>
              <p className='timedate'>Mon, 21 Dec 2020 14:57</p>
            </div>
            <button data-bs-theme="dark" id='detelebtn' onClick={() => DelereItem(index)}>*</button>
          </div>


        )
      })}





    </div>
  );



}

export default App;

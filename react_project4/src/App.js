import './App.css'
import React, {useEffect, useState} from 'react'
import Loading from './components/Loading/Loading.jsx'
import Questions from './components/Questions/Questions.jsx'

const App = () => {

  
  const [data, setData] = useState([])
  const [loading, setloading] = useState(false)
 

useEffect(() => {
 
      setloading(true)
      setData([])

      fetch('api/v1/data')
      .then(  (response) => (response.json()))
      .then(  (respAdat)     => (setData(respAdat)))
      .catch( (error)    => {
                              console.log('error', error)
                              setData(null)
                            }
            )
      .finally( ()=>{
      
                      console.log('fetch end');
                      setloading(false)
                    }
              )
      return () => {
      // cleanup
      }
}, [])

console.log(' data=',data);




  return (
    <div className="App">
     <h2>Question and Answer about Login </h2>
            {loading ? <Loading/> :  
                                    data === null ? <p>Upps something happend</p>
                                                  : <Questions data={data}/>


                 }
    </div>
  )
}

export default App

import React from 'react'
import configStore from './Redux/store/store'
import { Provider } from 'react-redux'
import MainComponnent from './MainComponnent'

const store=configStore
//  console.log("App.js", store.getState()); 
const App = () => {
  return (
<div className="app">
<Provider store={store}>
   <MainComponnent />
        </Provider>
</div>
        
   
   
  )
}

export default App

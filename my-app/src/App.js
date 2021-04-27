import React from 'react'
import '../src/assets/style/App.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Route, Switch} from 'react-router-dom';
import Header from './Parts/header'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

const App = () => {
  return(
    <>
    <Header />
    <Switch>
      <Route exact path='/' component={Home}  />
      <Route path='/about' component={About}  />
      <Route path='/contact' component={Contact}  />
    </Switch>
    </>
  )
}
export default App;
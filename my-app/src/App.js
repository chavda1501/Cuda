import React from 'react'
import '../src/Assets/style/App.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Route, Switch} from 'react-router-dom';
import Header from './Components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Components/Footer';
import Work from './Pages/Work';

const App = () => {
  return(
    <>
    <Header />
    <Switch>
      <Route exact path='/' component={Home}  />
      <Route path='/about' component={About}  />
      <Route path='/work' component={Work}  />
      <Route path='/contact' component={Contact}  />
    </Switch>
    <Footer />
    </>
  )
}
export default App;
import React from 'react';
import Drawer from'./components/Drawer/Drawer';
import Cards from './components/Cards/Cards';
import CardsSec from './components/Cards/Cards';
import Footer from './components/Footercards/Footer';

class App extends React.Component {
  render() {
    return (
        <div>
            <Drawer/>
            <Cards/>
            <CardsSec/>
            <Footer/>
        </div>
    )
  }
}


export default App;
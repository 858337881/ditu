import React, { Component } from 'react';
import './assets/css/App.css'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Reader from './views/Reader'
import Weather from './views/Weather'
import Setup from './views/Setup'
import Restroom from './views/Restroom'



class App extends Component {

  render() {
    return (
      <Router>
         <div className="a1">
           
           <header>
             {/* <Link to="/">首页</Link> */}
             <div><Link to="/Restroom"><i className="iconfont">&#xe603;</i><br />洗手间</Link></div>
             <div><Link to="/Reader"><i className="iconfont">&#xe609;</i><br />阅读</Link></div>
             <div><Link to="/Weather"><i className="iconfont">&#xe640;</i><br />天气</Link></div>
             <div><Link to="/Setup"><i className="iconfont">&#xe639;</i><br />设置</Link></div>
             
           </header>
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/Reader" component={Reader} />
            <Route path="/Weather" component={Weather} />
            <Route path="/Setup" component={Setup} />
            <Route path="/Restroom" component={Restroom} />
         </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react'
import { BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom'
import Grouplist from '../Navbar2/groupBy/grouplist';
import Pending from '../listDisplay/pending';

class listRoute extends Component {
    render() {
        return (
            <Router>
                <div className='listroute'>
                   
                    <ul className='nav nav-tabs'>
                    <li className='nav-item'><Link className='active nav-link' to='/seachlist'>All</Link></li>
                    <li className='nav-item'><NavLink className='nav-link' to='/seachlist'>Completed</NavLink></li>
                    <li className='nav-item'><NavLink className='nav-link' to='/pending'>Pending</NavLink></li>
                    </ul>

                    <Switch>
                 
                       <Route path='/seachlist' render={(props) => (<seachlist {...props}/>)} />
                       <Route path='/seachlist' render={(props) => (<seachlist {...props}/>)} />
                       <Route path='/pending' render={(props) => (<Pending {...props}/>)} />
                       <Route exact path='/listRoute'  />
                    </Switch>
                </div>
                
         </Router>
        )
    }
}

export default listRoute







// import React, { Component } from 'react'
// import './listRoute.css'

// class listRoute extends Component {
//     render() {
//         return (
//          <div className='listroute'>
//              <div className='theme-selector dropdown'>
//             <ul className='nav nav-tabs'>
//               <li className='nav-item'><span className='active nav-link' href='/all'>All</span></li>
//               <li className='nav-item'><span className='nav-link'>Pending</span></li>
//               <li className='nav-item'><span className='nav-link'>Completed</span></li>
//             </ul>
//          </div>
//          </div>
//         )
//     }
// }

// export default listRoute
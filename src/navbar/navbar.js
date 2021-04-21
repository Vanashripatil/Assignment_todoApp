import React from 'react'

const navbar = ({setModal}) => {
    return (
        <div>
                                        <nav className='navbar navbar-expand-s-2 bg-light'>
                                <h1>TO DO APP</h1>
                               
                                <button className='btn btn-primary m' onClick={setModal}>+</button>
                              
                             </nav>
                            
        </div>
    )
}

export default navbar
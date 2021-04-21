import React from 'react'

const search = ({handleChangeSearch}) => {
    return (
        <div>
            <h6>Search</h6>
            <div className="input-group">
            <input type="search" id="form1" className="form-control" placeholder="Search Tasks" onChange={handleChangeSearch} />

  </div>
                    
        </div>
    )
}

export default search
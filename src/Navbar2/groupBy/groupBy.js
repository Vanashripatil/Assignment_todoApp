import React  from 'react'

import 'react-datepicker/dist/react-datepicker.css';

const groupBy = ({ selectgroup, groupby,  onChnageGroupbyHandler}) => {

    return (
        
        <div>
                     <h6>Priority</h6>
                          <select selected={selectgroup}  onChange={e => onChnageGroupbyHandler(e.target.value)}  name='selectedValue'>
                              <option hidden>None</option>
                                {groupby.map(data =>{
                                    return(
                                        
                                        <option  key={data} defaultValue={groupby}>{data}</option>
                                    )
                                })}
                          </select>
                          </div>
         
    )
}

export default groupBy;

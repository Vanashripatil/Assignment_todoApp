

import React from 'react'
import GroupbyTable from '../../listDisplay/groupbyTable';


const grouplist = ({ results, selectgroup, onChnageGroupbyHandler}) => {
    
    return (
       
        <div>
             <GroupbyTable
            results = {results} selectgroup={selectgroup} onChnageGroupbyHandler={onChnageGroupbyHandler}
         
     />
            </div>
     
    )
}
export default grouplist
import React from 'react'
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";


export const listDisplay = ({result, handleDelete, handleEdit, }) => {
    console.log('result');
    console.log(result);

    return (
        <div className='col-md-'>
        <table className="table table-bordered">
               <thead>
                   <tr>
                       <th>Title</th>
                       <th>description</th>
                       <th>Created On</th>
                       <th>Due Date</th>
                       <th>Priority</th>
                       <th>Action</th>
                   </tr>
               </thead>
                   <tbody>
                       {
                         result.map(key =>{
                               return <tr key={key.id}>
                                   <td>{key.title}</td>
                                   <td>{key.description}</td>
                                   <td>{key.createdat}</td>
                                   <td>{key.dueDate}</td>
                                   <td>{key.selectedValue}</td>
                                   <td>
                                   <FontAwesomeIcon icon={faEdit} onClick={() => handleEdit(key.id) }/>
                                       <Button >Done</Button>
                                       <FontAwesomeIcon icon={faTrashAlt} onClick={() => handleDelete(key.id)}/>
                                      
                                   </td>
                               </tr>
                           })
                       }
                   </tbody>
            </table>
           

        </div>
    )
}

export default listDisplay;
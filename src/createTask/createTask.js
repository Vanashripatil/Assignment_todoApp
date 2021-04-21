import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateTask = ({
    modal, 
    toggle, 
    title, 
    description,
    dueDate,
    handleChange, 
    handleCreate, 
    createdDateHandler, 
    selectedDate, 
    Priority,
    priority, 
    onChnagePriorityHandler
}) => {

    //let date = new Date();
    //let displayTodayDate = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();

//  const [selectedDate, setSelectedDate] = useState(null)



    return (
        
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Add Task Form</ModalHeader>
                <ModalBody>
                   <form>
                       <div className='form-group'><h6>Title</h6>
                           <input placeholder='title' id='title' name='title' type='text' className='form-control' onChange={handleChange} defaultValue={title}/>
                       </div>
                       <div className='form-group'><h6>Description</h6>
                          <textarea placeholder='description' id='description' name='description' rows = '3' className='form-control' onChange={handleChange} defaultValue={description}></textarea>
                       </div>
                       <div className='row'>
                       <div className='col-md-8'>
                           <h6>DueDate</h6>
                                  <DatePicker 
                                 selected={selectedDate } 
                                 onChange= {createdDateHandler}
                                  name='dueDate'
                                  defaultValue={dueDate}/>
                      </div>
                      <div className='btn btn-default dropdown-toggle col-md-4'>
                     <h6>Priority</h6>
                          <select selected={Priority}  onChange={e => onChnagePriorityHandler(e.target.value)} name='selectedValue'>
                              <option hidden>None</option>
                                {priority.map(data =>{
                                    return(
                                        
                                        <option  key={data} defaultValue={priority}>{data}</option>
                                    )
                                })}
                          </select>
                          </div>
                       </div>
                   </form>
                </ModalBody>
                <ModalFooter>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
                <Button color="success" onClick={handleCreate}>Create</Button>{' '}
            </ModalFooter>
      </Modal>
    )
}

export default CreateTask;

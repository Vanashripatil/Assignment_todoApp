import React from 'react';
import instance from '../firebase/instance';
import Navbar from '../navbar/navbar';
import CreateTask from '../createTask/createTask';
import GroupBy from '../Navbar2/groupBy/groupBy';
import Search from '../Navbar2/search/search'
import ListRoute from '../listRoute/listRoute';
import SearchList from '../Navbar2/search/searchList';
import Grouplist from '../Navbar2/groupBy/grouplist';
import UpdateTask from '../updateTask/updateTask';

class appMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            modal: false,
            editmodal: false,
            title: '',
            description: '',
            results: [],
            dueDate: new Date(),
            createdat: new Date(),
            Priority: '',
            selectgroup: '',
            selectedDate: '',
            priority: ['None', 'Low', 'Medium', 'High'],
            groupby: ['None', 'createdat', 'dueDate', 'Priority'],
            search: '',
            column: '',
         };
        this.toggle = this.toggle.bind(this);
        this.setModal = this.setModal.bind(this);
        this.setEditModal = this.setEditModal.bind(this);
      }

     

      handleChangeSearch = (event) => {
        // Get event value
        let searchValue = event.target.value;
  
        this.setState({ search: searchValue });
    }
    onChnageGroupbyHandler = (q) =>{
        this.setState({selectgroup: q})
        console.log('onChnageGroupbyHandler' );
    }
    
    
    componentDidMount(){
        instance.get('/results.json').then((response) => {
            console.log(response);
            const fetchedData = []

            for(let key in response.data){
                fetchedData.push({...response.data[key], id: key})
            }
            this.setState({
                results: fetchedData
            })
        })
       
    }

    setModal(){
        this.setState({modal: true})
        console.log('setmodel');
    }

    setEditModal = (id) => {
        const result = this.state.results.find(result => result.id === id )
        this.setState({
            title: result.title,
            description: result.description,
            dueDate: result.dueDate,
            createdat: result.createdat,
            Priority: result.Priority,
            id : result.id,
            editmodal: true,
        })
        // this.setState({editmodal: true})
        console.log('seteditmodel');
    }

    toggle(){
        this.setState({modal: false})
        this.setState({editmodal: false})
        console.log('toggle');
  
    };

    handleChange = e =>{
        console.log('Handler is called');
        this.setState({
           [e.target.name]: e.target.value,
           
        })
    }
    createdDateHandler = (date) =>{
        this.setState({
            dueDate: date,
            selectedDate: date,
        })
    }

    onChnagePriorityHandler = (q) =>{
        this.setState({Priority: q})
    }


    handlePost = e => {
              console.log('submitting');
              const Data = {
                  title: this.state.title,
                  description: this.state.description,
                  dueDate: this.state.dueDate.toLocaleDateString(),
                  createdat: this.state.createdat.toLocaleDateString(),
                  Priority: this.state.Priority
              }

              instance.post('/results.json', Data).then((response) =>{
                  console.log(response);

                  const results = [
                      ...this.state.results,
                      {...Data, id: response.data.name}
                  ];

                  this.setState({
                      title: '',
                      description: '',
                      createdat: '',
                      dueDate: '',
                      
                      results: results,
                  })
              })
          }

    handleDelete = (id) =>{
      console.log('delete', id);
      instance.delete(`/results/${id}.json`).then((response) =>{
        console.log(response);
      })

      this.setState({
          results: this.state.results.filter(result => result.id !== id)}
      )
    } 

    handleEdit = () =>{
        this.setState({
            editmodal: false,
        })
        const Data = {
            title: this.state.title,
            description: this.state.description,
            dueDate: this.state.dueDate,
            createdat: this.state.createdat,
            Priority: this.state.Priority
        }

        instance.put(`/results/${this.state.id}.json`, Data).then((response) => {
            console.log(response);
            instance.get('/results.json').then((response) => {
                console.log(response);
                const fetchedData = []
    
                for(let key in response.data){
                    fetchedData.push({...response.data[key], id: key})
                }
                this.setState({
                    results: fetchedData,
                    title: '',
                    description: '',
                    createdat: '',
                    dueDate: '',
                })
            })
        })
    }
    

   
    

    render(){
             const {title, description, results, dueDate, createdat, selectedDate, priority,Priority, search,groupby,selectgroup } = this.state
                return (
                        <>
                            <Navbar setModal={this.setModal}/>
                            <nav className='navbar navbar-expand-s bg-light'>
                                   <GroupBy 
                                       results={results}  
                                       onChnageGroupbyHandler={this.onChnageGroupbyHandler}
                                       groupby={groupby}  
                                       selectgroup={selectgroup}/>
                                   <Search handleChangeSearch={this.handleChangeSearch} handleDelete={this.handleDelete}/>
                            </nav>
                            <ListRoute />
                           
                            <CreateTask 
                                toggle={this.toggle} 
                                modal={this.state.modal}
                                title={title} 
                                description={description}
                                dueDate={dueDate}
                                createdat={createdat}
                                createdDateHandler = {this.createdDateHandler}
                                handleChange={this.handleChange}
                                handleCreate={this.handlePost}
                                selectedDate={selectedDate}
                                onChnagePriorityHandler={this.onChnagePriorityHandler}
                                priority={priority}
                                Priority={Priority}
                                 />
                           
                           <UpdateTask 
                                toggle={this.toggle} 
                                editmodal={this.state.editmodal}
                                title={title} 
                                description={description}
                                dueDate={dueDate}
                                createdat={createdat}
                                createdDateHandler = {this.createdDateHandler}
                                handleChange={this.handleChange}
                                handleCreate={this.handlePost}
                                selectedDate={selectedDate}
                                onChnagePriorityHandler={this.onChnagePriorityHandler}
                                priority={priority}
                                Priority={Priority}
                                handleEdit={this.handleEdit}
                                 />
                              
                           <SearchList  results = {results}  search={search} handleDelete={this.handleDelete} handleEdit={this.setEditModal}/>
                             {/* <Search   results = {results}  search={search} handleDelete={this.handleDelete} /> */}
                           <Grouplist results = {results} selectgroup={selectgroup} onChnageGroupbyHandler={this.onChnageGroupbyHandler}/>
                        </>
                )
        }
}

export default appMenu;
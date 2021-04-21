import React, { Component } from 'react'
import ListDisplay from '../../listDisplay/listDisplay';


class searchList extends Component {
    
    render() {
        console.log('serach' + this.props.searchString);
        let results = this.props.results,
        searchString = this.props.search.trim().toLowerCase();

        if (searchString.length > 0) {
    
            results = results.filter((e) => e.title.toLowerCase().match(searchString));
        }
        return (
            <div>
                {/* <List results={results} /> */}
                <ListDisplay 
            result = {results} 
            handleEdit = {this.props.handleEdit}
            handleDelete={this.props.handleDelete} />
            </div>
       
        )
    }
}

export default searchList


import React from 'react';
//import { Row, Form, Col, Button } from 'react-bootstrap';

/*
    book = {
        id : 1,
        name : 'bookName',
        description : '',
        count : 10,
        author : 'authorName'
    }
**/

class UpdateBook extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      key: '',
      name: '',
      description: '',
      count: '',
      author: ''
    }

    if(props.book){
      this.state = props.book
    } else {
      this.state = this.initialState;
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    let pageTitle;
    if(this.state.id) {
      pageTitle = <h2>Edit Book</h2>
    } else {
      pageTitle = <h2>Add Book</h2>
    }

    return(
      <div>
        {pageTitle}
        <form onSubmit={this.handleSubmit}>
                <span>Book Name</span>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Name" />


                <span>Book Description</span>
                <input
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                  placeholder="Description" />

                <span>Book Counts</span>
                <input
                  type="text"
                  name="count"
                  value={this.state.count}
                  onChange={this.handleChange}
                  placeholder="Count" />

                <span>Book Author</span>
                <input
                  type="text"
                  name="author"
                  value={this.state.author}
                  onChange={this.handleChange}
                  placeholder="Author" />

                <input type="hidden" name="id" value={this.state.id} />

                <button variant="success" type="submit">Save</button>

                {/* <button onClick={this.props.onSubmit.bind(this, this.state.id)} variant="success" type="submit">Save</button> */}

                <button onClick={this.props.onCancel}>Cancel</button>
            </form>
      </div>
    )
  }
}

export default UpdateBook;
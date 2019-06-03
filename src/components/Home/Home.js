import React from 'react';

import SearchBar from '../elements/SearchBar/SearchBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import Book from '../elements/Book/Book';
import Spinner from '../elements/Spinner/Spinner';
import Header from '../elements/Header/Header'
import UpdateBook from '../Book/UpdateBook';

import './Home.css';
/*
    book = {
        id : 1
        name : 'bookName',
        description : '',
        count : 10,
        author : 'authorName'
    }
**/

class Home extends React.Component {

    state = {
        books: [],
        loading: false,
        totalPages: 0,
        searchTerm: '',
        isUpdateView: false,
        currentBook: null
    }

    componentDidMount() {
        this.setState({
            loading: true
        })

        this.Data = [
            {
                id: 1,
                name: 'bookName',
                description: '',
                count: 10,
                author: 'authorName'
            },
            {
                id: 2,
                name: 'bookName',
                description: '',
                count: 10,
                author: 'authorName'
            },
            {
                id: 3,
                name: 'bookName',
                description: '',
                count: 10,
                author: 'authorName'
            },
            {
                id: 4,
                name: 'bookName',
                description: '',
                count: 10,
                author: 'authorName'
            },
            {
                id: 5,
                name: 'bookName',
                description: '',
                count: 10,
                author: 'authorName'
            },
            {
                id: 6,
                name: 'bookName',
                description: '',
                count: 10,
                author: 'authorName'
            },
            {
                id: 7,
                name: 'bookName',
                description: '',
                count: 10,
                author: 'authorName'
            },
            {
                id: 8,
                name: 'bookName',
                description: '',
                count: 10,
                author: 'authorName'
            },
            {
                id: 9,
                name: 'bookName',
                description: '',
                count: 10,
                author: 'authorName'
            },
            {
                id: 10,
                name: 'bookName',
                description: '',
                count: 10,
                author: 'authorName'
            },
            {
                id: 11,
                name: 'bookName',
                description: '',
                count: 10,
                author: 'authorName'
            },
            {
                id: 12,
                name: 'bookName',
                description: '',
                count: 10,
                author: 'authorName'
            }
        ]

        setTimeout(() => {
            this.setState({
                books: this.Data,
                loading: false
            })
        }, 5000)
    }

    searchItems = (searchTerm) => {

        this.setState({
            books: [],
            loading: true,
            searchTerm
        });

        if (searchTerm === '') {
            setTimeout(() => {
                this.setState({
                    books: this.Data,
                    loading: false,
                    searchTerm
                })
            }, 5000)
        } else {
            let data = this.Data.filter((book) => {
                return book.name.includes(searchTerm)
            })

            setTimeout(() => {
                this.setState({
                    books: data,
                    loading: false,
                    searchTerm
                })
            }, 5000)
        }
    }

    onAddButtonClicked = () => {
        this.setState({
            isUpdateView: true
        })
    }

    onEditButtonClicked = (key, book) => {
        book.key = key;
        this.setState({
            isUpdateView: true,
            currentBook: book
        })
    }

    onSubmitButtonClicked = (book) => {

        let newObj = {
            name: book.name,
            description: book.description,
            count: book.count,
            author: book.author
        }

        if (book.key === undefined || book.key === null || book.key.length === 0) {
            this.Data.unshift(newObj)
        } else {
            this.Data[book.key] = newObj;
        }

        this.setState({
            isUpdateView: false,
            currentBook: null,
            books: this.Data
        })
    }

    onCancelButtonClicked = () => {
        this.setState({
            isUpdateView: false,
            currentBook: null
        })
    }

    render() {

        let { books, loading, totalPages, searchTerm, isUpdateView, currentBook } = this.state;

        return (
            <React.Fragment>
                <Header>
                    <SearchBar
                        callback={this.searchItems}
                    />
                </Header>
                <div className="bl-home">

                    <div className="bl-home-grid">

                        {isUpdateView ?
                            <UpdateBook
                                book={currentBook}
                                onSubmit={this.onSubmitButtonClicked}
                                onCancel={this.onCancelButtonClicked}
                            />
                            : !loading ? <span className="bl-add-book-btn" onClick={this.onAddButtonClicked}>Add Book</span> : null
                        }

                        <FourColGrid
                            header={this.state.searchItem ? 'Search Result' : 'All Books'}
                            loading={loading}
                        >
                            {books.map(
                                (element, i) => {
                                    return (
                                        <Book
                                            key={i}
                                            book={element}
                                            onEditButtonClicked={this.onEditButtonClicked.bind(this, i)}
                                        />
                                    )
                                }
                            )}
                        </FourColGrid>

                        {loading ? <Spinner /> : null}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;
import React from 'react'
import style from './SearchBook.module.scss'
import image from '../../assets/images/image.png'

class SearchBook extends React.Component <{
    setSearch: React.Dispatch<React.SetStateAction<string>>
}> {
    state = {search: ""}

    searchBook(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.setSearch(search => search);

        this.setState({search: ""});
    }
    render() {
        return (
            <>
            <form className={style.SearchBookForm}>
                <div className={style.SearchContainer}>
                    <input 
                        type="text" 
                        className={style.SearchInput}
                        value={this.state.search}
                        onChange={event => this.setState({search: event.target.value})}
                        placeholder="Pesquisar livro"
                        required
                    />
                    <button className={style.SearchButton} type='submit'>Pesquisar</button>
                </div>
            </form>
            <div className={style.SearchImage}>
                <img src={image} alt="book"/>
            </div>
            </>
        )
    }
}

export default SearchBook;
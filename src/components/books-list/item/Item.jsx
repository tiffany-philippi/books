import style from '../BooksList.module.scss';

function Item({ item }) {
    const book = item.volumeInfo;

    function formatAuthors(authors) {
        let authorsList = [];
        authors?.map(author => authorsList.push(author))
        return authorsList.toString().replace(',', ', ');
    }
    
    function listItem() {
        return <li className={style.Item}>
            <div className={style.ItemCard}>
                <img className={style.ItemCardImage} src={book.imageLinks?.thumbnail} alt="book cover" />
                <h2 className={style.ItemCardTitle}>{book.title}</h2>
                <p className={style.ItemCardAuthors}>{formatAuthors(book.authors)} | {book.publishedDate.substring(0, 4)}</p>
            </div>
        </li>
    }

    function noResults() {
        return <p>Sem resultados.</p>
    }


    if (book) {
        return listItem()
    } else {
        return noResults()
    }
}

export default Item;

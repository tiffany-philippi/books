import style from '../BooksList.module.scss';
import image from '../../../assets/images/no-book-cover.png';

function Item({ item }) {
    const book = item.volumeInfo;

    function formatAuthors(authors) {
        let authorsList = [];
        authors?.map(author => authorsList.push(author))
        return authorsList.length > 0 ? authorsList.toString().replace(',', ', ') : 'Desconhecido';
    }

    function listItem() {
        return <li className={style.Item}>
            <div className={style.ItemCard}>
                <div className={style.ItemCardInfoContainer}>
                    <img className={style.ItemCardImage} src={book.imageLinks?.thumbnail ?? image} alt="book cover" />
                    <h2 className={style.ItemCardTitle}>{book.title}</h2>
                    <div className={style.ItemCardInfo}>
                        <p className={style.ItemCardAuthors}>{formatAuthors(book.authors)} </p>
                        <span className={style.ItemCardYear}> | {book.publishedDate.substring(0, 4)}</span>
                    </div>
                </div>
                <div className={style.ItemCardButtonContainer}>
                    <button className={style.ItemCardButton}>
                        Ver mais
                    </button>
                </div>
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

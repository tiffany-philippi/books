import React from 'react';
import style from './BooksList.module.scss';
import Item from './item/Item';

function BooksList({ books }: { books: any }) {
    console.log(books)
    return (
        <aside className={style.BooksList}>
            <h2>Resultados:</h2>
            <ul className={style.List}>
                {books?.items?.map((book: []) =>  (
                    <Item
                        key={books.id}
                        item={book}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default BooksList;
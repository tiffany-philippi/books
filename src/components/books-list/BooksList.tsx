import React from 'react';
import style from './BooksList.module.scss';
import Item from './item/Item';

function BooksList({ books }: { books: any[] }) {
    return (
        <aside>
            <h2>Resultados:</h2>

            <ul>
                {books?.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default BooksList;
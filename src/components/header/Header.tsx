import React from 'react';
import { FaBookmark, FaBookOpen } from "react-icons/fa";
import style from './Header.module.scss'

class Header extends React.Component {
    render() {
        return (
            <div className={style.HeaderContainer}>
                <FaBookOpen className={style.HeaderLogoIcon} size='2em' color='#fff'/>
                <h1 className={style.HeaderTitle}>BOOKS SEARCH</h1>
                <div className={style.HeaderActionContainer}>
                    <FaBookmark color='#fff' size='1.5em'/>
                    <h2 className={style.HeaderActionText}>VER SALVOS</h2>
                </div>
            </div>
        )
    }
}

export default Header;

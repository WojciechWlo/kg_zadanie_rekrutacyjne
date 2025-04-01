import '../styles/appHeader.less';
import React, { useState } from 'react';

interface AppHeaderProps {
    onSearch: (query: string) => void;
}

const AppHeader = ({ onSearch }: AppHeaderProps) => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSearch(inputValue);
    };

    return (
        <header className='app_header'>



            <form className="search_form" onSubmit={handleSubmit}>
                <label className='search_form__label'>PODAJ NIP LUB NAZWĘ DŁUŻNIKA</label>
                <div className="search_form__controls">
                    <input className="search_form__input" name="search" type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}>
                    </input>

                    <button className="search_form__button" type="submit">SZUKAJ</button>
                </div>
            </form>

        </header>)
}

export default AppHeader;
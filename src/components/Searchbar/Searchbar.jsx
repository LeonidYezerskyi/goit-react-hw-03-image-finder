import React from 'react';
import css from './Searchbar.module.css'
import search from '../../images/search.svg';

class Searchbar extends React.Component {
    state = {
        name: ''
    }

    onChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    onSubmitForm = e => {
        e.preventDefault();
        this.props.onSelectName(this.state.name);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: ''
        });
    };

    render() {
        const { name } = this.state;

        return (
            <header className={css.searchbar}>
                <form className={css.searchForm} onSubmit={this.onSubmitForm}>
                    <button type="submit" className={css.searchFormBtn}>
                        <img className={css.iconSearch} src={search} alt='icon' />
                        <span className={css.searchFormBtnLabel}>Search</span>
                    </button>

                    <input
                        className={css.searchFormInput}
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.onChange}
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>)
    };
}

export default Searchbar;
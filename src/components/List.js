import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFilter, setItems, toggleFollow } from "../store/actions";

import '../styles/List.css';

class List extends React.Component {

    state = {
        active: 'all'
    };

    render = () => {

        let items = [];

        if (this.props.filteredItems.length !== 0 && this.props.searchLine.length !== 0) {
            items = this.props.filteredItems;
        } else if (this.state.active === 'follow') {
            items = this.props.items.filter(item => ~this.props.followItems.indexOf(item.id));
        } else {
            items = this.props.items;
        }

        return (
            <div className='List'>
                <div className='List-searchLine'>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas"
                         data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img"
                         viewBox="0 0 512 512">
                        <path fill="currentColor"
                              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
                    </svg>
                    <input type="search" placeholder='Поиск' onChange={event => this.props.setFilter(event.target.value)}/>
                </div>
                <div className='List-body'>
                    <div className='List-body_swap'>
                        <div className={this.state.active === 'all' ? 'active' : ''}
                             onClick={() => this.setState({active: 'all'})}>Все
                        </div>
                        <div className={this.state.active === 'follow' ? 'active' : ''}
                             onClick={() => this.setState({active: 'follow'})}>Избранное
                            ({this.props.followItems.length})
                        </div>
                    </div>
                    {items.map(item => (
                        <div className='List-item' key={item.id}>
                            <div className='List-item_link'>
                                <img alt='' src={item.img}/>
                                <Link to={`/items/${item.id}`} id={`link_${item.id}`}>
                                    <div className='List-item_address'>{item.address}</div>
                                </Link>
                                {~this.props.followItems.indexOf(item.id)
                                    ?
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"
                                         data-prefix="fas" data-icon="heart"
                                         className="svg-inline--fa fa-heart fa-w-16" role="img"
                                         viewBox="0 0 512 512" onClick={() => this.props.toggleFollow(item.id)}>
                                        <path fill="currentColor"
                                              d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/>
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"
                                         data-prefix="far" data-icon="heart"
                                         className="svg-inline--fa fa-heart fa-w-16"
                                         role="img" viewBox="0 0 512 512"
                                         onClick={() => this.props.toggleFollow(item.id)}>
                                        <path fill="currentColor"
                                              d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"/>
                                    </svg>
                                }
                            </div>
                            <div className='List-item_metro'>{item.metro} | {item.path}</div>
                            <div className='List-item_price'>{item.fullPrice} | {item.size}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    items: state.data.items,
    filteredItems: state.data.filteredItems,
    searchLine: state.data.searchLine,
    followItems: state.data.followItems
});

const mapDispatchToProps = {
    setFilter: setFilter,
    toggleFollow: toggleFollow,
    setItems: setItems
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
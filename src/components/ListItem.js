import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { setFilter, setItems, toggleFollow } from "../store/actions";

import '../styles/ListItem.css';

class ListItem extends React.Component {

    render = () => {
        const item = this.props.items[this.props.match.params.id];

        console.log(this.props);
        console.log(item);

        const isFollow = ~this.props.followItems.indexOf(item.id);

        return (
            <div className='ListItem'>
                <div className='ListItem-head'>
                    <Link to='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas"
                             data-icon="chevron-left" className="svg-inline--fa fa-chevron-left fa-w-10" role="img"
                             viewBox="0 0 320 512">
                            <path fill="currentColor"
                                  d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/>
                        </svg>
                        <div className='ListItem-head_back'>Назад</div>
                    </Link>
                    <div className='ListItem-head_header'>Карточка</div>
                </div>
                <div className="ListItem-body">
                    <img alt='' src={item.img}/>
                    <div className='ListItem-body_address'>
                        <div className='header'>{item.address}</div>
                        <div className='desc'>{item.metro} | {item.path}</div>
                    </div>
                    <div className='ListItem-body_size'>
                        <div className='header'>{item.fullPrice} | {item.size}</div>
                        <div className='desc'>{item.area} | {item.floor} | {item.m2price}</div>
                    </div>
                    <div className='ListItem-body_adout'>
                        <div className='header'>О доме</div>
                        <div className='desc'>{item.about}</div>
                    </div>
                    <div className='ListItem-body_year'>
                        <div className='header'>Год постройки</div>
                        <div className='desc'>{item.year}</div>
                    </div>
                    <div className='ListItem-body_type'>
                        <div className='header'>Тип дома</div>
                        <div className='desc'>{item.type}</div>
                    </div>
                    {isFollow
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
                             role="img" viewBox="0 0 512 512" onClick={() => this.props.toggleFollow(item.id)}>
                            <path fill="currentColor"
                                  d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"/>
                        </svg>
                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
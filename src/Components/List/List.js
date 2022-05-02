import React from 'react';
import PropTypes from 'prop-types';
import './List.css'

List.propTypes = {
    items: PropTypes.array.isRequired,
    changeUser: PropTypes.func.isRequired,
};

function List({items, changeUser}) {
    return (
        <ul className='list'>
            {items.map(element=>
            <li id={element.id} className='list__item' key={element.id} onClick={evt=>changeUser(evt.target)}>{element.name}</li>
            )}
        </ul>
    );
}

export default List;
import React from 'react';
import PropTypes from 'prop-types';
import useFetch from "../../hook/useFetch";
import './User.css'
const User = ({userId}) => {
    const [{data: user, load}] = useFetch(`${process.env.REACT_APP_USERS_URL}${userId}.json`, {});
    if(load){
        return <div>Load....</div>
    }
    const renderDetails = (userDetails)=>{
        const details = [];
        for (let key in userDetails) {
            details.push(<li className='user__item' key={key}>{key[0].toUpperCase()+key.slice(1)}: {userDetails[key]}</li>);
        }
        return details;
    }



    return (

        <div id={user.id} className='user'>
            <img src={user.avatar} alt={user.name}/>
            <div className="user__name">{user.name}</div>
            <ul className='user__list'>
                {renderDetails(user.details)}
            </ul>
        </div>
    );
};

User.propTypes = {
    userId: PropTypes.string.isRequired
};

export default User;
import React from 'react';

const Link = ({route}) => {
    return (
        <li className='px-5 hover:bg-amber-400 lg:mr-10'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;
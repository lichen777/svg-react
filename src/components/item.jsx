import React from 'react';

const Item = props => (
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        {props.children}
    </svg>
);

export default Item;
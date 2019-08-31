import React from 'react';

const DeviceItem = (props) => {
    return (
        <li key={ props.key } className="list-group-item list-group-item-action">{ props.name }</li>
    );
};

export default DeviceItem;
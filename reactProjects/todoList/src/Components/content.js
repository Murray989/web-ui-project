import React from 'react';

const Content = (props) => {
    return (
        <div className="container content">
            { props.children }
        </div>
    );
};

export default Content;
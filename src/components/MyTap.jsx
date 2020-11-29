import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyTap = ({currentTap}) => {
    return (
        <p className="zoom border-darken-1">{currentTap} content is showing here.</p>
    )
}
export default MyTap;
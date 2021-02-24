import React from 'react'
import Classics from '../components/booksCategory/Classics';
import History from '../components/booksCategory/History';
import Philosophy from '../components/booksCategory/Philosophy';
import Poetry from '../components/booksCategory/Poetry';
import Psychology from '../components/booksCategory/Psychology';

function Categories() {
    return (
        <div>
            <History/>
            <Philosophy/>
            <Psychology />
            <Poetry/>
            <Classics />
        </div>
    )
}

export default Categories

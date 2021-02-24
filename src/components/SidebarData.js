import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { IoBookSharp } from 'react-icons/io5';

export const SidebarData = [
    {
        title:'Pocetna',
        path: '/',
        icon:<AiFillHome/>,
        cName:'nav-text'

    },
    {
        title:'Kategorije',
        path: '/categories',
        icon:<IoBookSharp/>,
        cName:'nav-text' 
    }
]


import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Form from './validation/Form';
import Categories from './pages/Categories';
import './components/Navbar.scss'
import Info from './pages/Info';
import Classics from './components/booksCategory/Classics';
import History from './components/booksCategory/History';
import Philosophy from './components/booksCategory/Philosophy';
import Poetry from './components/booksCategory/Poetry';
import Psychology from './components/booksCategory/Psychology';
import Book from './pages/BookDetails';
import Admin from './pages/Admin'

function Router() {
    return (
        <div className="router">
            <Route path='/' exact component= {Home} /> 
            <Route path='/login' exact component = {Form} />
            <Route path='/categories' exact component = {Categories} />
            <Route path='/info' exact component = {Info} />  
            <Route path='/classics' exact component = {Classics} /> 
            <Route path= '/history' exact component = {History} />
            <Route path = '/philosophy' exact component = {Philosophy} />
            <Route path = '/poetry' exact component = {Poetry} />
            <Route path = '/psychology' exact component = {Psychology} />
            <Route path = '/details/:idBook' exact component = {Book} />
            <Route path = '/admin' exact component = {Admin} />


        </div>
    )
}

export default Router

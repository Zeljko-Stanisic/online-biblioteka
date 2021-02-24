import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import DetailsService from '../service/Details.service';
import { Spinner } from 'react-bootstrap';
import '../sass/Details.scss';

const Book = () => {
    const [loader, setLoader] = useState(true);
    const [book, setBook] = useState({});
    const id = useParams();
    console.log(id);
    useEffect(() => {
        DetailsService.Get(id.idBook).then((res) => {
            console.log(res);
            setBook(res);
            setLoader(false);
        });
    }, []);






    if (loader) {
        return (
            <div className="center">
                <Spinner animation="border" className="spinner" />
            </div>
        );
    }
    return (
        <>
            <div className="wrapper">
                <div className="image">
                    <img src={book.slika}></img>
                </div>
                <div className="info">
                    <div>
                        <h1>{book.naslov}</h1>
                        <h4>{book.autor}</h4>
                        <p>Godina izdavanja: {book.godina_izdavanja}</p>
                        <p>Izdavac: {book.izdavac}</p>
                        <p>Broj strana: {book.broj_strana}</p>
                        <p>Sifra knjige: {book.sifra_knjige}</p>
                        <p> {book.opis_knjige}</p>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Book

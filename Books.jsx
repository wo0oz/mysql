import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Books =()=> {
    const [books,setBooks]=useState([])

    useEffect(()=>{
        const fethAllBooks = async ()=>{
            try{
                const res= await axios.get("http://localhost:8800/books");
                setBooks(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fethAllBooks();
    },[]);

    return<div>
        <h1>database book shop</h1>
        <div className="books">
            {books.map((book)=>(
                <div className="book" key = {book.id}>
                 {book.cover && <img src={book.cover} alt=""/>}
                    <h2>{book.title}</h2>
                    <p>{book.desc}</p>
                    <span>{book.price}</span>
                </div>
                ))}
            </div>
        </div>;
    };
export default Books
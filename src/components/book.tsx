import React, { useEffect, useState } from 'react';
import { api } from '../enverioments/api';
import { BookModel } from '../model/models';


const Book: React.FC = () => {
  const [query, setQuery] = useState<string>(""); 
  const [data, setData] = useState<BookModel[]>([]);

  const fetchData = async () => {
    if (!query.trim()) return; 

    const options = {
      method: "GET",
      headers: {
        Accept: "application/ld+json",
        "x-rapidapi-host": "libros1.p.rapidapi.com",
        "x-rapidapi-key": "aebaf1d7admsh5c23eb38e050326p1e6f81jsne9fee16d0897",
      },
    };

    try {
      const response = await fetch(`${api}${encodeURIComponent(query)}`, options);
      const result = await response.json();
      setData(result["hydra:member"] || []); 
    } catch (error) {
      console.error("Error:", error); 
    }
  };

  useEffect(() => {
    if (query.trim()) {
      fetchData()
    }
  }, [query]); 

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Inserta el titulo del libro"
      />
      <button onClick={fetchData}>Cerca</button> 

     
      {data.length > 0 ? (
        <ul>
          {data.map((book: any) => (
            <li key={book["@id"]}>
              <h3>{book.Title}</h3>
              <p><strong>Autore:</strong> {book.Author}</p>
              <p><strong>Idioma:</strong> {book.Language}</p>
              <p><strong>Numero de paginas:</strong> {book.PagesInFile}</p>
              <img
                src={book.cover}
                alt={`Copertura di ${book.Title}`}
                style={{ width: "100px", height: "150px" }}
              />
              <br />
              <a href={book.downloadUrl} target="_blank" rel="noopener noreferrer">
                Descargar el libro
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Ningun libro encontrado</p>
      )}
    </div>
  );
};

export default Book;


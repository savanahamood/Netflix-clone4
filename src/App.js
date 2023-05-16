
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavList from './components/FavList';
import MovieList from './components/MovieList';

import Header from './components/Header';
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<MovieList />} /> 
                <Route path="/getMovies" element={<FavList />} />

            </Routes>

        </>
    );
}
export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import LoLChessCalculator from './elements/lol-chess/calculator.tsx';

const root = ReactDOM.createRoot(document.getElementById('root')!);
const router = createBrowserRouter([
    {path: '/', element: <App/>},
    {path: '/lolchess/calculator', element: <LoLChessCalculator/>}
], {});

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

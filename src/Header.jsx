import React from "react";
import {createRouter} from '@tanstack/react-router'

const routes = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/posts",
        element: <PostsPage />,
    },
    {
        path: "/create-post",
        element: <CreatePostPage />,
    },
];

const router = createRouter({ routes });

export function Header() {
    return (
        <header style={{width:'100%'}}>
            <nav>
                <ul style={{display: 'flex'}}>
                    <li>
                        <a href="/">Strona Główna</a>
                    </li>
                    <li>
                        <a href="/Ogloszenia">Ogłoszenia</a>
                    </li>
                    <li>
                        <a href="/DodajOgloszenie">Dodaj ogłoszenie</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
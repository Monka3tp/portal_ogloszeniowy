import React from "react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import Announcement from "./Ogloszenia.jsx";
import AddAnnouncement from "./DodajOgloszenie.jsx";

const routes = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/posts",
        element: <Announcement />,
    },
    {
        path: "/create-post",
        element: <AddAnnouncement />,
    },
];

const router = createRouter({ routes });

function App() {
    return (
        <RouterProvider router={router}>
            <Header />
            <div>
                <HomePage />
            </div>
        </RouterProvider>
    );
}

function Header() {
    return (
        <header style={headerStyle}>
            <nav>
                <ul style={navListStyle}>
                    <li style={navItemStyle}>
                        <a href="/" style={linkStyle}>Home</a>
                    </li>
                    <li style={navItemStyle}>
                        <a href="/posts" style={linkStyle}>Posts</a>
                    </li>
                    <li style={navItemStyle}>
                        <a href="/create-post" style={linkStyle}>Create Post</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

const headerStyle = {
    backgroundColor: "#282c34",
    padding: "10px 20px",
};

const navListStyle = {
    listStyleType: "none",
    display: "flex",
    gap: "20px",
};

const navItemStyle = {
    display: "inline",
};

const linkStyle = {
    color: "#fff",
    textDecoration: "none",
};

export default App;
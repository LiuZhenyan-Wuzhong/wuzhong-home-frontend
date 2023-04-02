import React from 'react';
import './assets/medium.css';

export default function Editor() {
    const pathname = window.location.pathname;

    return (
        <div>
            {/* { !pathname.includes('editor') ? <Header /> : '' }
            <SignInWith /> */}
            {/* <button onClick={()=>Router.push("/")}>Feed</button>
            <button onClick={()=>Router.push("/profile/:id")}>Profile</button>
            <button onClick={()=>Router.push("/articleview/:id")}>ArticleView</button>
            <button onClick={()=>Router.push("/editor")}>Editor</button>
            <button onClick={()=>Router.push("**")}>Feed</button> */}
        </div>
    );
}

import React from 'react';

export default function Blogcards({src}) {

    return (
        <div className="blog-cards-container">
            <span>
                <img src={src} alt={"blog-images"} style={{
                    objectFit:"cover",
                    width:"100%"
                    }} />
            </span>
            <span>
                Blog Post One
            </span>
            <span>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed
                do eiusmod.
            </span>
            <span>
                Read More
            </span>
            <span></span>
        </div>
    )
}

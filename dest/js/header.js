'use strict';
class Header extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
            <style>
                * {
                    margin: 0;
                }
                
                .marquee-content:hover .header {
                    animation-play-state: paused;
                }
                
                .header {
                    padding: 15px;
                    display: inline-block;
                    color: rgba(234, 234, 234, 255);
                    background-color: black;
                    text-transform: uppercase;
                    white-space: nowrap;
                    animation: moveText 25s linear infinite;
                }
                
                .marquee-content {
                    overflow: hidden;
                    white-space: nowrap;
                    font-size: 29px;
                    font: caption;
                    font-weight: 750;
                    color: rgb(8, 8, 8);
                    text-decoration: none;
                    display: flex;
                    flex-direction: row;
                    background-color: black;
                }
                
                .flex {
                    display: flex;
                    flex-direction: row;
                }
                
                @keyframes moveText {
                    0% {
                        transform: translateX(100%);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
            </style>

            <header>
                <div href="collection.html" class="marquee-content">
                    <span class="header">Get FREE domestic US shipping on Karl Kani orders over $200! Shop now and save.</span>
                    <span class="header">Get FREE domestic US shipping on Karl Kani orders over $200! Shop now and save.</span>
                    <span class="header">Get FREE domestic US shipping on Karl Kani orders over $200! Shop now and save.</span>
                    <span class="header">Get FREE domestic US shipping on Karl Kani orders over $200! Shop now and save.</span>
                    <span class="header">Get FREE domestic US shipping on Karl Kani orders over $200! Shop now and save.</span>
                    <span class="header">Get FREE domestic US shipping on Karl Kani orders over $200! Shop now and save.</span>
                    <span class="header">Get FREE domestic US shipping on Karl Kani orders over $200! Shop now and save.</span>
                    <span class="header">Get FREE domestic US shipping on Karl Kani orders over $200! Shop now and save.</span>
                    <span class="header">Get FREE domestic US shipping on Karl Kani orders over $200! Shop now and save.</span>
                </div>
            </header>
        
    }
}

customElements.define("header", Header);
class Nav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<style>
          nav {
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color:  #0000;
          
          }
  
          ul {
            padding: 0;
          }
  
          a {
            font-weight: 700;
            margin: 0 25px;
            color: #000000;
            text-decoration: none;
            
          }
  
          a:hover {
            padding-bottom: 5px;
            box-shadow: inset 0 -2px 0 0 #fff;
          }
        </style>
        <header>
        <nav class="myNav">
        <a href="index.html"></a>
        <img src="../assets/img/karl-kani-logo-v1_b66bf179-b568-4392-9e4b-dee17e84d634.png" />
        <ul> 
          <li><a href="BIB.html">B.I.B COLLECTION</a></li>
          <li><a href="LIFE.html">LIFE COLLECTION</a></li>
          <li><a href="men.html">MEN</a></li>
          <li><a href="women.html">WOMEN</a></li>
          <li><a href="acc.html">ACCESSORIES</a></li>
          <li><a href="sale.html">SALE</a></li>
        </ul>
      </nav>
        </header>
      `;
  }
}

customElements.define("nav-component", Nav);

class Nav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<style>
    nav {
      height: 100px;
      display: flex;
      align-items: left; 
      justify-content: space-between; 
      background-color:  #0000;
    
    }
  
    .NavUL {
      padding: 0;
      list-style-type: none;
      display:flex;
      flex-direction:row;
    }
  
    a {
      font-size:40px;
      font-weight: 350;
      margin: 0 5px;
      color: #000000;
      text-decoration: none;
      padding:10px;
      
    }
  
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }
    
    </style>
    <header>
    <nav class="myNav">
    
    <a href="index.html"><img src="../assets/img/karl-kani-logo-v1_b66bf179-b568-4392-9e4b-dee17e84d634.png" width="300" height="250"></a>
    <ul class="NavUL"> 
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

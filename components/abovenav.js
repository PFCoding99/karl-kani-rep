class Animation extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
          .topNav {
            padding: 15px;
            height: 100px;
            display: flex;
            align-items: left; 
            justify-content: space-between; 
            background-color: #0000;
            animation: moveText 10s linear infinite; /* Apply animation */
          }
  
          }
  
          a {
            font-size: 29px;
            font-weight: 350;
            margin: 0 5px;
            color: #000000;
            text-decoration: none;
            padding: 10px;
          }
  
          a:hover {
            padding-bottom: 5px;
            box-shadow: inset 0 -2px 0 0 #fff;
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
          <nav class="myNav">
            <div class="marquee">
              <a href="collection.html">asfsafafafafafaf af afa fa fa fa fa</a>
              <!-- Wrap the text in a container for animation -->
            </div>
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define("animation-component", Animation);
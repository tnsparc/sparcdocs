import { QuartzComponentConstructor } from "./types"

export default (() => {
  function GlobalStyles() {
    return null // No visible output, just injects CSS
  }

  GlobalStyles.css = `
button.mobile-explorer {
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1100; /* Even higher than the explorer */
}

.explorer {
  z-index: 1000; /* Explorer remains below the hamburger */
}


    .custombutton {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 10px 20px;
      margin: 5px;
      text-decoration: none;
      border-radius: 8px;
      font-weight: bold;
      color: white;
      transition: background-color 0.2s ease;
      text-align: center;
    }

    .custombutton::after {
      content: none !important;
    }

    .custombutton.primary { background-color: #224466; }
    .custombutton.primary:hover { background-color: #1e2c44; }
    .custombutton.secondary { background-color: #6c757d; }
    .custombutton.secondary:hover { background-color: #545b62; }
    .custombutton.danger { background-color: #dc3545; }
    .custombutton.danger:hover { background-color: #a71d2a; }
    .custombutton .external-icon { display: none !important; }

    

  `

  return GlobalStyles
}) satisfies QuartzComponentConstructor

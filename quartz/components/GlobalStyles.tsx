import { QuartzComponentConstructor } from "./types"

export default (() => {
  function GlobalStyles() {
    return null // No visible output, just injects CSS
  }

  GlobalStyles.css = `
    .custombutton {
      display: inline-flex;            /* Use flex to center content */
      justify-content: center;         /* Center horizontally */
      align-items: center;             /* Center vertically */
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

    .custombutton.primary {
      background-color: #224466;
    }

    .custombutton.primary:hover {
      background-color: #1e2c44;
    }

    .custombutton.secondary {
      background-color: #6c757d;
    }

    .custombutton.secondary:hover {
      background-color: #545b62;
    }

    .custombutton.danger {
      background-color: #dc3545;
    }

    .custombutton.danger:hover {
      background-color: #a71d2a;
    }

    .custombutton::after {
      content: none !important;
    }

    .custombutton .external-icon {
      display: none !important;
    }
  `

  return GlobalStyles
}) satisfies QuartzComponentConstructor

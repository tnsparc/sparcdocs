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

    .calendar-container {
      position: relative;
      width: 100%;
      padding-bottom: 75%; /* 4:3 Aspect Ratio or adjust as needed */
      height: 0;
      overflow: hidden;
      max-width: 800px;
      margin: 0 auto;
    }

    .calendar-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }

    @media (min-width: 601px) {
      .calendar-container {
        width: 80%; /* Or a fixed pixel value like 800px */
        padding-bottom: 0; /* Remove aspect ratio enforcement */
        height: 600px; /* Set explicit height for desktop */
      }

      .calendar-container iframe {
        height: 100%;
      }
    }

    @media (max-width: 600px) {
      .custombutton {
        width: auto;           /* Instead of 100% */
        max-width: 90%;        /* Optional: control maximum width */
        box-sizing: border-box;
        font-size: 1.1rem;
        padding: 12px;
        margin: 1rem auto;
        white-space: normal;
      }
    }





  `


  return GlobalStyles
}) satisfies QuartzComponentConstructor

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

    .club-logo {
      width: 100%;
      text-align: center;
      margin: 0 auto 0.5rem auto; /* Top:0, Right:auto, Bottom:0.5rem, Left:auto */
    }

    .club-logo img {
      max-width: 160px;
      height: auto;
      display: inline-block; /* Needed when centering img inside text-align:center */
    }

    .flex-container {
      display: flex;
      flex-direction: column;
      align-items: center; /* Center content inside */
      text-align: center;
      width: 100%; /* Take full sidebar width */
    }

    .left.sidebar {
      display: flex;
      flex-direction: column;
      align-items: flex-start; /* Align the container to the left */
    }

.search-space, .search {
  display: flex;
  justify-content: center;
  width: 180px; /* Match logo width */
  margin: 0 auto;
}

.search-bar {
  width: 100% !important;
  max-width: 200px !important;
  min-width: 160px !important;
  display: block !important;
  margin: 0 auto !important;
  box-sizing: border-box !important;
  visibility: visible !important;
  opacity: 1 !important;
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

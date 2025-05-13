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

    @media (max-width: 600px) {
        .custombutton {
            width: 100%;             /* Take full width on small screens */
            max-width: 90%;          /* Optional: adds horizontal margins */
            box-sizing: border-box;  /* Prevents padding from affecting width */
            font-size: 1.1rem;       /* Slightly larger text for readability */
            padding: 12px;           /* Make it taller for easier tapping */
            margin: 1rem auto;       /* Center horizontally and add spacing */
            white-space: normal;     /* Allow text to wrap if needed */
        }
    }

    @media (max-width: 600px) {
      .club-logo {
        max-width: 120px !important;
        max-height: 1200px !important;
        height: auto !important;
        display: block;
        margin: 0 auto;
      }
    }

    .flex-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    @media (max-width: 600px) {
      .flex-container {
          flex-direction: column !important;
      }

      .flex-container .icon-buttons { 
        display: flex !important;
        flex-direction: row !important;
        justify-content: center;
        gap: 1rem; /* Adjust spacing between icons as needed */
      }
    }

    @media (max-width: 600px) {
  .icon-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }
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
    
    
    /* 📅 Responsive Calendar Embed */
    .calendar-container {
      position: relative;
      width: 100%;
      padding-bottom: 100%; /* Adjust aspect ratio if needed */
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

    #mc_embed_shell {
      margin-top: 50px;
      text-align: center;
    }

    #mc_embed_signup {
      background: #404040;
      font-family: sans;
      width: 100%;
      max-width: 480px;
      margin: auto;
      padding: 10px;
      border-radius: 5px;
      display: block;
      box-sizing: border-box;
    }

    #mc_embed_signup_scroll {
      text-align: center;
    }

    .mc-field-group {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }

    .mc-field-group input[type="email"] {
      all: unset;                     /* 💥 Completely remove all inherited styles */
      display: block;
      width: 100% !important;
      max-width: 300px !important;
      height: 32px !important;
      line-height: 32px !important;
      padding: 0 10px !important;
      margin: 0 auto !important;
      border: 1px solid #ccc !important;
      border-radius: 4px !important;
      box-sizing: border-box !important;
      font-size: 1rem !important;
      color: #000 !important;
      background-color: #fff !important;
    }

    #mc-embedded-subscribe {
      padding: 10px 20px !important;
      border-radius: 4px !important;
      border: none !important;
      background-color: #224466 !important;
      color: #fff !important;
      cursor: pointer !important;
      font-weight: bold !important;
      height: 40px !important;
    }

    @media (max-width: 600px) {
      .mc-field-group {
        flex-direction: column;
        align-items: center;
      }
        
      .mc-field-group input[type="email"],
      #mc-embedded-subscribe {
        width: 100%;
        max-width: 300px;
      }
    }
  
  `

  return GlobalStyles
}) satisfies QuartzComponentConstructor

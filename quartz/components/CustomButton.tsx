import { QuartzComponentConstructor } from "./types"

interface Options {
  text: string
  href: string
  newTab?: boolean
  variant?: "primary" | "secondary" | "danger"
}

const defaultOptions: Options = {
  text: "Click Me",
  href: "#",
  newTab: true,
  variant: "primary",
}

export default ((userOpts?: Options) => {
  const opts = { ...defaultOptions, ...userOpts }

  function CustomButtonComponent() {
    return (
      <a
        href={opts.href}
        class={`custombutton ${opts.variant}`}
        target={opts.newTab ? "_blank" : "_self"}
        rel={opts.newTab ? "noopener noreferrer" : undefined}
      >
        {opts.text}
      </a>
    )
  }

  CustomButtonComponent.css = `
    .custombutton {
      display: inline-block;
      padding: 10px 20px;
      margin: 5px;
      text-decoration: none;
      border-radius: 8px;
      font-weight: bold;
      color: white;
      transition: background-color 0.3s ease;
    }

    .custombutton.primary {
      background-color: #007BFF;
    }

    .custombutton.primary:hover {
      background-color: #0056b3;
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
  `

  return CustomButtonComponent
}) satisfies QuartzComponentConstructor

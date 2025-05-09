import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface ButtonData {
  text: string
  href: string
  newTab?: boolean
  variant?: "primary" | "secondary" | "danger" // Add variants here
}

export const Button: QuartzComponentConstructor = () => {
  return function ButtonComponent({ displayClass, fileData }: QuartzComponentProps) {
    const buttons = fileData.frontmatter?.buttons as ButtonData[] | undefined

    if (!buttons || buttons.length === 0) return null

    return (
      <div class={`button-group ${displayClass ?? ""}`}>
        {buttons.map(({ text, href, newTab = true, variant = "primary" }) => (
          <a
            href={String(href)}
            class={`button ${variant}`}  // 👈 Apply variant class
            target={newTab ? "_blank" : "_self"}
            rel={newTab ? "noopener noreferrer" : undefined}
          >
            {String(text)}
          </a>
        ))}
      </div>
    )
  }
}

import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const links = opts?.links ?? []

    return (
      <footer className={displayClass ?? ""}>
        <div style={{ textAlign: "center", color: "var(--darkgray)", fontFamily: "var(--bodyFont)" }}>
          <p style={{ margin: "1rem 0", fontSize: "1rem" }}>
            {i18n(cfg.locale).components.footer.createdWith}
            <br />
            <img
              id="ally-flag"
              src="https://tnsparc.pages.dev/images/ally.png"
              height={35}
              width={35}
              style={{ display: "block", margin: "0.5rem auto" }}
              alt="Ally Flag"
            />
            <small
              style={{
                display: "block",
                marginTop: "0.5rem",
                fontSize: "0.9rem",
                color: "var(--secondary)",
              }}
            >
              <b>
                <i>Y'all means <u>all</u></i>
              </b>
            </small>
          </p>
          <ul
            style={{
              display: "inline-flex",
              listStyle: "none",
              padding: 0,
              gap: "1rem",
              justifyContent: "center",
              margin: 0,
            }}
          >
            {Object.entries(links).map(([text, link]) => (
              <li key={text}>
                <a
                  href={link}
                  style={{
                    textDecoration: "none",
                    color: "var(--tertiary)",
                    fontSize: "0.95rem",
                  }}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor<Options>

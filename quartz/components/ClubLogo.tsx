import { h } from "preact"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export const ClubLogo: QuartzComponentConstructor = (_opts) => {
  return function ClubLogoComponent(_props: QuartzComponentProps) {
    return (
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <img
          src="/logo.png"
          alt="Club Logo"
          style={{ maxWidth: "100%", maxHeight: "250px" }}
        />
      </div>
    )
  }
}
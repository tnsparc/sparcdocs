import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export const MobileExplorerButton: QuartzComponent = (_props: QuartzComponentProps) => {
  const toggleExplorer = () => {
    const explorer = document.querySelector(".explorer")
    if (explorer) {
      explorer.classList.toggle("open")
    }
  }

  return (
    <button
      class="mobile-explorer"
      onClick={toggleExplorer}
      aria-label="Toggle Navigation Menu"
    >
      ☰
    </button>
  )
}

MobileExplorerButton.css = `
  .mobile-explorer {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    font-size: 2rem;
    z-index: 1000;
  }

  @media (min-width: 600px) {
    .mobile-explorer {
      display: none;
    }
  }
`

export default (() => MobileExplorerButton) satisfies QuartzComponentConstructor

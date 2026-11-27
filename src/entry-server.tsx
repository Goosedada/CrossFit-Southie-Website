// Build-time only: renders one route to HTML so search engines get each page's real
// text without running JavaScript. Used by scripts/prerender-seo.mjs.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'

export const render = (url: string) =>
  renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )

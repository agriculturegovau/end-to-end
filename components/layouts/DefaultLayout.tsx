import * as React from 'react'
import SiteHeader from 'components/SiteHeader'
import SiteMainNav from 'components/SiteMainNav'
import SiteFooter from 'components/SiteFooter'

const DefaultLayout: React.FC = ({ children }) => (
  <div className="App">
    <SiteHeader />
    <SiteMainNav />
    <main id="content">
      <section className="container au-body">{children}</section>
    </main>
    <SiteFooter />
  </div>
)

export default DefaultLayout

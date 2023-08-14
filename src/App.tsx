import { FrontPage } from './assets/components/front-page/FrontPage'
import SectionList from './assets/components/section-list/SectionList'
import SectionProductList from './assets/components/section-product-list/SectionProductList'

function App() {

  return (
    <section className='w-[80%] m-auto'>
      <FrontPage />
      <SectionList />
      <SectionProductList />
    </section>
  )
}

export default App

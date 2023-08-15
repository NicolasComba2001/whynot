import { FrontPage } from './assets/components/front-page/FrontPage'
import SectionList from './assets/components/section-list/SectionList'
import SectionOfInfo from './assets/components/section-of-info/SectionOfInfo'
import SectionProductList from './assets/components/section-product-list/SectionProductList'
function App() {

  return (
    <section>
      <section className='w-[80%] m-auto'>
        <FrontPage />
        <SectionList />
        <SectionProductList />
      </section>
      <section className='w-full bg-[#1a1a1a] mt-20'>
        <SectionOfInfo />
      </section>
    </section>
  )
}

export default App

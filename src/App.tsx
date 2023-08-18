import FrontPage  from './assets/components/front-page/FrontPage'
import Footer from './assets/components/footer/Footer'
import SectionList from './assets/components/section-list/SectionList'
import SectionMostSold from './assets/components/section-most-sold/SectionMostSold'
import SectionOfInfo from './assets/components/section-of-info/SectionOfInfo'
import SectionProductList from './assets/components/section-product-list/SectionProductList'
function App() {

  return (
    <>
      <section className='w-[80%] m-auto'>
        <FrontPage />
        <SectionList />
        <SectionProductList />
      </section>
        <SectionOfInfo />
      <section  className='w-[80%] m-auto'>
        <SectionMostSold />
      </section>
      <Footer />
    </>
  )
}

export default App

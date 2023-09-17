import FrontPage  from './assets/components/front-page/FrontPage'
import Footer from './assets/components/footer/Footer'
import SectionList from './assets/components/section-list/SectionList'
import SectionMostSold from './assets/components/section-most-sold/SectionMostSold'
import SectionOfInfo from './assets/components/section-of-info/SectionOfInfo'
import SectionProductList from './assets/components/section-product-list/SectionProductList'
import SectionNewProduct from './assets/components/section-new-product/SectionNewProduct'
import Share from './assets/components/Share'
import AllProductList from './assets/components/section-product-list/AllProductList'

function App() {

  return (
    <>
      <Share>
        <FrontPage />
        <SectionList />
        <SectionProductList />
      </Share>
        <SectionOfInfo />
      <Share>
        <SectionMostSold />
      </Share>
        <SectionNewProduct />
        <AllProductList />
      <Footer />
    </>
  )
}

export default App

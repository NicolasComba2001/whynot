import ShareSectionProductList from "../shareComponents/ShareSectionProductList";
import WavingHandOutlinedIcon from '@mui/icons-material/WavingHandOutlined';
import ProductList from "../section-product-list/sub-component/ProductList";

const _DATA = [
    {
      id: 1,
      title: "par de medias",
      image:
        "https://images.pexels.com/photos/4043611/pexels-photo-4043611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "550",
    },
    {
      id: 2,
      title: "par de medias",
      image:
        "https://images.pexels.com/photos/4043611/pexels-photo-4043611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "550",
    },
    {
      id: 3,
      title: "par de medias",
      image:
        "https://images.pexels.com/photos/4043611/pexels-photo-4043611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "550",
    },
    {
      id: 4,
      title: "par de medias",
      image:
        "https://images.pexels.com/photos/4043611/pexels-photo-4043611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "550",
    }
  ];
export default function SectionMostSold(){
    return(
        <ShareSectionProductList>
             <section>
                <article className="mb-8">
                    <h1 className="text-7xl leading-snug text-right">ROPA DE FERIA</h1>
                    <section className=" p-4 flex justify-between align-items-center flex-row-reverse">
                        <div>
                        </div>
                        <button className="self-start bg-orange-400 p-2 rounded">VER TODO <WavingHandOutlinedIcon /> </button>
                    </section>
                </article>
                <ProductList dataOfProducts={_DATA}/>
             </section>
        </ShareSectionProductList>
    )
}
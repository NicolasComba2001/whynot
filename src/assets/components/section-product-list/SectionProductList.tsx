import ShareSectionProductList from "../shareComponents/ShareSectionProductList";
import ProductList from "./sub-component/ProductList";
import WavingHandOutlinedIcon from '@mui/icons-material/WavingHandOutlined';

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
    },
    {
      id: 5,
      title: "par de medias",
      image:
        "https://images.pexels.com/photos/4043611/pexels-photo-4043611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "550",
    },
    {
      id: 6,
      title: "par de medias",
      image:
        "https://images.pexels.com/photos/4043611/pexels-photo-4043611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "550",
    },
    {
      id: 7,
      title: "par de medias",
      image:
        "https://images.pexels.com/photos/4043611/pexels-photo-4043611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "550",
    },
    {
      id: 8,
      title: "par de medias",
      image:
        "https://images.pexels.com/photos/4043611/pexels-photo-4043611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "550",
    },
  ];

export default function SectionProductList(){
    return(
        <ShareSectionProductList>
             <>
                <article className="mb-8 p-2">
                    <h1 className="text-4xl leading-snug xl:text-7xl">ROPA DE CALIDAD Y LA MEJOR</h1>
                    <section className=" p-4 flex flex-col justify-between align-items-center">
                        <article>
                            <p className="normal-family-font font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas itaque sit temporibus quaerat! Tempore, quaerat. Voluptate beatae eum ea ratione?</p>
                            <p className="normal-family-font font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
                            <p className="normal-family-font font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </article>
                        <button className="self-start bg-orange-400 mt-2 p-2 rounded">VER TODO <WavingHandOutlinedIcon /> </button>
                    </section>
                </article>
                <ProductList dataOfProducts={_DATA}/>
             </>
        </ShareSectionProductList>
    )
}
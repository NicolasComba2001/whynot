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
                <article className="mb-8 p-2 relative overflow-hidden">
                    <svg className="absolute right-[-40%] bottom-[-10%] w-full h-full " viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <path className="w-full h-full" fill="#fb923c" d="M47.9,-46.2C55,-29.4,48.5,-9.9,44.5,11.2C40.6,32.4,39.1,55.2,25.8,66.5C12.6,77.8,-12.3,77.6,-33.4,68C-54.5,58.4,-71.6,39.3,-75.7,18.2C-79.8,-2.9,-70.9,-26.2,-56.1,-44.7C-41.3,-63.3,-20.6,-77.2,-0.1,-77.2C20.5,-77.1,40.9,-63,47.9,-46.2Z" transform="translate(100 100)" />
                    </svg>
                    <svg className="absolute left-[-40%] top-[-10%] w-full h-full " viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <path className="w-full h-full" fill="#fb923c" d="M47.9,-46.2C55,-29.4,48.5,-9.9,44.5,11.2C40.6,32.4,39.1,55.2,25.8,66.5C12.6,77.8,-12.3,77.6,-33.4,68C-54.5,58.4,-71.6,39.3,-75.7,18.2C-79.8,-2.9,-70.9,-26.2,-56.1,-44.7C-41.3,-63.3,-20.6,-77.2,-0.1,-77.2C20.5,-77.1,40.9,-63,47.9,-46.2Z" transform="translate(100 100)" />
                    </svg>
                    <section className="relative z-[100]">
                      <h1 className="text-4xl z-[100] leading-snug xl:text-7xl">ROPA DE CALIDAD Y LA MEJOR</h1>
                    </section>
                    <section className="relative z-[100] p-4 flex flex-col justify-between align-items-center">
                        <article className="xl:w-2/4 mt-4 mb-4">
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
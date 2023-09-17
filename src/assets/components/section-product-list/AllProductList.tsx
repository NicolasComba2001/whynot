import BarSearching from "../bar-searching/BarSearching";
import SubscribeLetter from "../subscribe-letter/SubscribeLetter";
import ProductList from "./sub-component/ProductList";

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


export default function AllProductList(){
    return(
      <>
      {/* esta seccion debe de ir en una ruta aparte se abre cuando seleccionas ver todo */}
        <section className="w-full relative m-auto lg:w-[80%]">
            {/* <BarMenu /> */}
            <h2 className="text-4xl text-center bolder p-4">TODOS LOS PRODUCTOS</h2>
            <article className="mt-2 mb-2 xl:w-[60%] xl:m-auto">
              <p className="leading-normal normal-family-font text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus gravida odio sagittis, risus sodales nec. Sagittis nisi at venenatis, pretium. Risus neque a, egestas iaculis.</p>
            </article>
            <BarSearching />
            <ProductList dataOfProducts={_DATA}/>
        </section>
        <SubscribeLetter />
      </>
    )
}
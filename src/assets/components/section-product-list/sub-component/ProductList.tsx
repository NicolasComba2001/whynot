import Product from "./Product";

const _DATA = [
  {
    id: 1,
    title: "par de medias",
    image:
      "https://images.pexels.com/photos/9558761/pexels-photo-9558761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "550",
  },
  {
    id: 2,
    title: "par de medias",
    image:
      "https://images.pexels.com/photos/9558761/pexels-photo-9558761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "550",
  },
  {
    id: 3,
    title: "par de medias",
    image:
      "https://images.pexels.com/photos/9558761/pexels-photo-9558761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "550",
  },
  {
    id: 4,
    title: "par de medias",
    image:
      "https://images.pexels.com/photos/9558761/pexels-photo-9558761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "550",
  },
  {
    id: 5,
    title: "par de medias",
    image:
      "https://images.pexels.com/photos/9558761/pexels-photo-9558761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "550",
  },
  {
    id: 6,
    title: "par de medias",
    image:
      "https://images.pexels.com/photos/9558761/pexels-photo-9558761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "550",
  },
  {
    id: 7,
    title: "par de medias",
    image:
      "https://images.pexels.com/photos/9558761/pexels-photo-9558761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "550",
  },
  {
    id: 8,
    title: "par de medias",
    image:
      "https://images.pexels.com/photos/9558761/pexels-photo-9558761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "550",
  },
];

export default function ProductList() {
  return (
    <section className="grid grid-cols-autoFit gap-8 ">
      {_DATA?.map((item) => (
        <Product
          key={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
        />
      ))}
    </section>
  );
}

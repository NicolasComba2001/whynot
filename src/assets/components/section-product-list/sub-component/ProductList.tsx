import Product from "./Product";

interface PropProductList {
  id: number,
  title: string,
  price: string,
  image: string
}

export default function ProductList({dataOfProducts}: any) {
  return (
    <section className="grid grid-cols-autoFit gap-12 ">
      {dataOfProducts?.map(({id, title, image, price}: PropProductList) => (
        <Product
          key={id}
          title={title}
          image={image}
          price={price}
        />
      ))}
    </section>
  );
}

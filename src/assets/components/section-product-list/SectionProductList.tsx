import ProductList from "./sub-component/ProductList";
import WavingHandOutlinedIcon from '@mui/icons-material/WavingHandOutlined';

export default function SectionProductList(){
    return(
        <section>
            <article className="mb-8">
                <h1 className="text-7xl leading-snug">NUESTRAS PRENDAS DE ROPA</h1>
                <section className=" p-4 flex justify-between align-items-center">
                    <article>
                        <p className="normal-family-font font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas itaque sit temporibus quaerat! Tempore, quaerat. Voluptate beatae eum ea ratione?</p>
                        <p className="normal-family-font font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
                        <p className="normal-family-font font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </article>
                    <button className="self-start bg-orange-400 p-2 rounded">VER TODO <WavingHandOutlinedIcon/> </button>
                </section>
            </article>
            <ProductList/>
        </section>
    )
}
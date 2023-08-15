import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

interface PropType {
    image: string,
    title: string,
    price: string
}

export default function Product({image, title, price}: PropType){
    return(
        <article className=" h-[400px] flex flex-col rounded shadow-[0px_10px_7px_0px_rgba(0,0,0,0.50)]">
            <img src={image} alt={title} className="object-cover rounded h-[80%]" />
            <article className="p-4 bg-white rounded h-[20%]">
                <div className='flex justify-between'>
                    <span>{title}</span>
                    <button><AddShoppingCartOutlinedIcon /></button>
                </div>
                <strong className="mt-2 block normal-family-font font-light">$ {price}</strong>
            </article>
        </article>
    )
}
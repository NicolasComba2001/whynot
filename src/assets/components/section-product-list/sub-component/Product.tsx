import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

interface PropType {
    image: string,
    title: string,
    price: string
}

export default function Product({image, title, price}: PropType){
    return(
        <article className="h-[450px] flex flex-col p-4">
            <img src={image} alt={title} className="h-[90%] object-cover rounded" />
            <article className="p-4 bg-white">
                <div className='flex justify-between'>
                    <span>{title}</span>
                    <button><AddShoppingCartOutlinedIcon /></button>
                </div>
                <strong className="mt-2 block normal-family-font font-light">$ {price}</strong>
            </article>
        </article>
    )
}
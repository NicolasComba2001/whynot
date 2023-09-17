import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

interface PropType {
    image: string,
    title: string,
    price: string
}

export default function Product({image, title, price}: PropType){
    return(
        <article className="flex flex-col rounded shadow-[0px_10px_7px_0px_rgba(0,0,0,0.50)]">
            <figure className='h-[300px]'>
                <img src={image} alt={title} className="object-cover rounded h-full w-full" />
            </figure>
            <article className="p-4 bg-white rounded">
                <div className='flex justify-between'>
                    <span>{title}</span>
                    <button className='p-1 border-b-2 border-orange-400 rounded cursor-pointer'><AddShoppingCartOutlinedIcon /></button>
                </div>
                <strong className="mt-2 block normal-family-font font-light">$ {price}</strong>
            </article>
        </article>
    )
}
interface PropType{
    children: any
}
export default function Share({children}:PropType){
    return(
        <section className='w-full m-auto lg:w-[80%]'>
            {children}
        </section>
    )
}
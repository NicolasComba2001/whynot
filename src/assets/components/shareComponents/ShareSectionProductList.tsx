
interface PropType {
    children: any
}

export default function ShareSectionProductList({children}: PropType){
    return(
        <section className="mt-8">{children}</section>
    )
}
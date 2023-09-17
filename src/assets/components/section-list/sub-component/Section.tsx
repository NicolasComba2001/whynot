interface PropType {
    titleOfSection: string,
    imageOfSection: string
}
export default function Section({titleOfSection, imageOfSection}: PropType){
    return(
        <section style={{backgroundImage: `url('${imageOfSection}')`}} className="w-full h-[80vh] relative rounded bg-cover bg-center bg-no-repeat grayscale 
        2xl:h-screen">
            <article  className="absolute bottom-[45px]">
                <p className="text-4xl leading-none h-min text-white tracking-widest underline decoration-orange-500 ml-4
                md:text-2xl
                xl:text-4xl">{titleOfSection}</p>
            </article>
        </section>
    )
}
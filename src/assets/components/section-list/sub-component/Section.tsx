interface PropType {
    titleOfSection: string,
    imageOfSection: string
}
export default function Section({titleOfSection, imageOfSection}: PropType){
    return(
        <section style={{
            backgroundImage: `url('${imageOfSection}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: 'grayscale(1)'
        }} className="w-full h-[80vh] relative rounded">
            <article  className="absolute bottom-[45px]">
                <p className="text-4xl leading-none h-min text-white tracking-widest underline decoration-orange-500 ml-4">{titleOfSection}</p>
            </article>
        </section>
    )
}
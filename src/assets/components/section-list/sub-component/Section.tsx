interface PropType {
    titleOfSection: string,
    imageOfSection: string
}
export default function Section({titleOfSection, imageOfSection}: PropType){
    return(
        <section style={{
            backgroundImage: `url('${imageOfSection}')`,
            width: "100%",
            height: "90vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            borderRadius: '8px',
            filter: 'grayscale(1)'
        }}>
            <article style={{position: "absolute", bottom: "5%"}}>
                <p className="text-4xl leading-none h-min text-white tracking-widest underline decoration-orange-500 ml-4">{titleOfSection}</p>
            </article>
        </section>
    )
}
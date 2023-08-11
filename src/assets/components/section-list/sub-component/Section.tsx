interface PropType {
    titleOfSection: string,
    imageOfSection: string
}
export default function Section({titleOfSection, imageOfSection}: PropType){
    return(
        <section style={{
            backgroundImage: `url('${imageOfSection}')`,
            width: "100%",
            height: "700px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            borderRadius: '8px'
        }}>
            <article style={{position: "absolute", bottom: "150px", right: "-50px", transform: "rotate(-90deg)"}}>
                <p className="text-4xl leading-none h-min text-white tracking-widest underline decoration-orange-500">{titleOfSection}</p>
            </article>
        </section>
    )
}
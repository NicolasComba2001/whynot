interface PropType {
    Icon: any,
    textInfo: string,
    title: string,
    subtitle: string
}
export default function InfoBox({Icon, textInfo, title, subtitle}: PropType){
    return(
        <article>
            <section>
                {Icon}
                <p>{title}</p>
                <p>{subtitle}</p>
            </section>
            <p>{textInfo}</p>
        </article>
    )
}
interface PropType {
    Icon: any,
    textInfo: string,
    title: string,
    subtitle: string
}
export default function InfoBox({Icon, textInfo, title, subtitle}: PropType){
    return(
        <article>
            <section className="flex items-center">
                {Icon}
               <article className="ml-4">
                <p>{title}</p>
                <p>{subtitle}</p>
               </article>
            </section>
            <p className="w-[150px]">{textInfo}</p>
        </article>
    )
}
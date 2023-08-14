import InfoBox from "./sub-component/InfoBox";

export default function SectionOfInfo(){
    return(
        <section>
            <article>
                <h2>Intentionally designed, ethical factories, fairly priced.</h2>
                <button>Ver mas</button>
            </article>
            <section>
                <InfoBox Icon={""} title="test" subtitle="tes" textInfo="lorem1231"/>
                <InfoBox Icon={""} title="test" subtitle="tes" textInfo="lorem1231"/>
                <InfoBox Icon={""} title="test" subtitle="tes" textInfo="lorem1231"/>
            </section>
        </section>
    )
}
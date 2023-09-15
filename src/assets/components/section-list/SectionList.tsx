import Section from "./sub-component/Section";

export default function SectionList(){
    return(
        <section className="w-full grid grid-cols-autoFit gap-8 mt-40 mb-20 
        md:w-full
        md:flex 
        md:m-auto 
        md:mt-8 
        2xl:grid
        lg:mt-[100px]">
            <Section titleOfSection="Remeras" imageOfSection="https://images.pexels.com/photos/15031644/pexels-photo-15031644/free-photo-of-young-man-in-white-tshirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <Section titleOfSection="Pantalones" imageOfSection="https://images.pexels.com/photos/16109029/pexels-photo-16109029/free-photo-of-young-man-in-white-t-shirt-walking-on-a-bridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <Section titleOfSection="Sweaters" imageOfSection="https://images.pexels.com/photos/17570098/pexels-photo-17570098/free-photo-of-young-man-with-sunglasses-standing-on-stairs-and-looking-away.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <Section titleOfSection="Camperas" imageOfSection="https://images.pexels.com/photos/12597363/pexels-photo-12597363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </section>
    )
}
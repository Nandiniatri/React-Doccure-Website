import AHref from "../../Component/ahref"
import Icons from "../../Component/icons"

export default function HeaderNavigation(){
    return (
        <div className="navBar">
                <div className="navBarLink"><AHref href="#home">Home</AHref><Icons className="fa fa-angle-down"/>
                    <div className="headerClassFirst">
                        <h1>General Home</h1>
                        <h1>General Home</h1>
                        <h1>General Home</h1>
                        <h1>General Home</h1>
                    </div>
                </div>

                <div className="navBarLink"><AHref href="#">Doctors</AHref><Icons className="fa fa-angle-down"/></div>
                <div className="navBarLink"><AHref href="#">Patients</AHref><Icons className="fa fa-angle-down"/></div>
                <div className="navBarLink"><AHref href="#">Pharmacy</AHref><Icons className="fa fa-angle-down"/></div>
                <div className="navBarLink"><AHref href="#">Pages</AHref><Icons className="fa fa-angle-down"/></div>
                <div className="navBarLink"><AHref href="#">Blog</AHref><Icons className="fa fa-angle-down"/></div>
                <div className="navBarLink"><AHref href="#">Admin</AHref><Icons className="fa fa-angle-down"/></div>
        </div>
    )
}

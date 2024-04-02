import Image from "../Component/img";

export default function Footer(){
    return (
        <>
            <div className="footerMain-Container">
                <div>
                    <Image src="https://doccure.dreamstechnologies.com/react/template/e196fae05467bf1c6a3b.png"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>Facilis ut consequatur omnis possimus pariatur tenetur <br></br>rerum.</p>
                </div>

                <div>
                    <h2>For Patients</h2>
                    <ul>
                        <li>Search for Doctor</li>
                        <li>Login</li>
                        <li>Register</li>
                    </ul>
                </div>

                <div>
                    <h2>For Doctors</h2>
                    <ul>
                        <li>Appointments</li>
                        <li>Chat</li>
                        <li>Login</li>
                    </ul>
                </div>

                <div>
                    <h2>Contact Us</h2>
                    <ul>
                        <li><i class="fa fa-map-marker"></i> 3226 Beech Street , USA</li>
                        <li><i class="fa fa-phone"></i> +1 382 283 9392</li>
                        <li><i class="fa fa-envelope"></i>{" "}doccure123@Copy.com</li>
                    </ul>
                </div>

                <div className="div4">
                    <h2>Join Our Newsletter</h2>
                    <ul>
                        <li>
                            <input placeholder="Enter Email"/>
                            <button>Submit</button>
                        </li>
                        <br />
                        <li className="div4-Icon">
                        <a href=""><i class="fa fa-facebook-square"></i></a> {" "}
                        <a href=""><i class="fa fa-instagram"></i></a> {" "}
                        <a href=""><i class="fa fa-linkedin"></i></a> {" "}
                        <a href=""><i class="fa fa-youtube-play"></i></a>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className="divider"></div>

            <div className="footer-Bottom">
                <div>
                    <h3>Copyright © 2024 <a href="#">Dreamguys</a>. All Rights Reserved</h3>
                </div>

                <div>
                    <h3>Privacy Policy | Terms and Conditions</h3>
                </div>
            </div>

        </>
    )
}
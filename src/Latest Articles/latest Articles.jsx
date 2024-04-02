import Button from "../Component/button";
import Image from "../Component/img";

export default function LatestArticles(){
    return (
        <>
        <div className="latestH1Div">
            <h1 className="pricingH1">Latest Articles</h1>
        </div>
        <div className="latestArtical-Container">

            <div className="latestArtical-SubContainer">
                
                <div className="subContainerImg-Div">
                    <Image src="https://doccure.dreamstechnologies.com/react/template/e349ac5b2a6d5506ed69.jpg"/>
                </div>

                <div className="subContainer-Div2">
                    <span className="subCon-Div2-Span">
                        <i className="fa fa-user-circle-o"></i> {" "} John Doe <i className="fa fa-calendar"></i> {" "} 13 Aug, 2023
                    </span>
                    <h2>What are the benefits of Online Doctor Booking?</h2>
                    <p>Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                    <Button className="subContainer-Btn">View Blog</Button>
                </div>   
            </div>


            <div className="latestArtical-SubContainer">
                <div className="subContainerImg-Div">
                    <Image src="https://doccure.dreamstechnologies.com/react/template/15ef1f9566a0514b241a.jpg"/>
                </div>

                <div className="subContainer-Div2">
                    <span className="subCon-Div2-Span"><i className="fa fa-user-circle-o"></i> {" "} Darren Elder <i className="fa fa-calendar"></i> {" "} 10 Sep, 2023</span>
                    <h2>Benefits of consulting with an Online Doctor</h2>
                    <p>Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                    <Button className="subContainer-Btn">View Blog</Button>
                </div>   
            </div>


            <div className="latestArtical-SubContainer">
                <div className="subContainerImg-Div">
                    <Image src="https://doccure.dreamstechnologies.com/react/template/3edc4460377dd8b6662c.jpg"/>
                </div>

                <div className="subContainer-Div2">
                    <span className="subCon-Div2-Span"><i className="fa fa-user-circle-o"></i> {" "} Ruby Perrin <i className="fa fa-calendar"></i> {" "} 30 Oct, 2023</span>
                    <h2>5 Great reasons to use an Online Doctor</h2>
                    <p>Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                    <Button className="subContainer-Btn">View Blog</Button>
                </div>   
            </div>


            <div className="latestArtical-SubContainer">
                <div className="subContainerImg-Div">
                    <Image src="https://doccure.dreamstechnologies.com/react/template/0415fd976d8cd447b682.jpg"/>
                </div>

                <div className="subContainer-Div2">
                    <span className="subCon-Div2-Span"><i className="fa fa-user-circle-o"></i> {" "} Sofia Brient <i className="fa fa-calendar"></i> {" "} 08 Nov, 2023</span>
                    <h2>Doccure – Making your clinic painless visit?</h2>
                    <p>Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                    <Button className="subContainer-Btn">View Blog</Button>
                </div>   
            </div>

        </div>
        </>

    )
}
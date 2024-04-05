import Button from "../Component/button"
import Image from "../Component/img"
import AHref from "../Component/ahref"
import { useRef } from "react"

export default function BestDoctors(){
    const scrollRef = useRef(null);
    console.log(scrollRef);

    function previousBtn(){
        const prevScroll = scrollRef.current.scrollLeft;
        console.log(prevScroll);
        scrollRef.current.scrollLeft = prevScroll - 100;
    }

    function nextBtn(){
        const nextScroll = scrollRef.current.scrollLeft;
        console.log(nextScroll);
        scrollRef.current.scrollLeft = nextScroll + 100; 
    }

    return (
        <div className="bestDr-container">

            <div className="bestDr-top">
                <h1 className="bestDrh1">Best Doctors</h1>
                <div className="bestDr-top-btn-div">
                    <Button handleClick={() => previousBtn()} className="bestDrBtn">{"<"}</Button>
                    <Button handleClick={() => nextBtn()}  className="bestDrBtn">{">"}</Button>
                </div>
            </div>


            <div className="bestDrSlider" ref={scrollRef}>
                <div className="sliderInner">
                    <div className="sliderImg">
                        <Image src="https://doccure.dreamstechnologies.com/react/template/7058680646be673ef70f.jpg" />
                    </div>
                    <div className="sliderDiv2">
                        <AHref href="#Darren">Dr. Darren Elder</AHref> 
                        <p>Neurology</p>
                        <div className="sliderDiv3">
                            <icon className={"fa fa-map-marker"}/> {" "}
                            <span>Florida , USA</span>
                        </div>
                    </div>
                </div>

                <div className="sliderInner">
                    <div className="sliderImg">
                        <Image src="https://doccure.dreamstechnologies.com/react/template/e8a9570dc3b6da522754.jpg" />
                    </div>
                    <div className="sliderDiv2">
                        <AHref href="#Darren">Dr. Sofia Brient</AHref> 
                        <p>Urology</p>
                        <div className="sliderDiv3">
                            <icon className={"fa fa-map-marker"}/> {" "}
                            <span>Georgia , USA</span>
                        </div>
                    </div>
                </div>

                <div className="sliderInner">
                    <div className="sliderImg">
                        <Image src="https://doccure.dreamstechnologies.com/react/template/4c4edf4d3fc07e7acd8f.jpg" />
                    </div>
                    <div className="sliderDiv2">
                        <AHref href="#Darren">Dr. Paul Richard</AHref> 
                        <p>Orthopedia</p>
                        <div className="sliderDiv3">
                            <icon className={"fa fa-map-marker"}/> {" "}
                            <span>Michingan , USA</span>
                        </div>
                    </div>
                </div>

                <div className="sliderInner">
                    <div className="sliderImg">
                        <Image src="https://doccure.dreamstechnologies.com/react/template/82a70aca5403c6ff499b.jpg" />
                    </div>
                    <div className="sliderDiv2">
                        <AHref href="#Darren">Dr. John Deo</AHref> 
                        <p>Dentist</p>
                        <div className="sliderDiv3">
                            <icon className={"fa fa-map-marker"}/> {" "}
                            <span>California , USA</span>
                        </div>
                    </div>
                </div>

                <div className="sliderInner">
                    <div className="sliderImg">
                        <Image src="https://doccure.dreamstechnologies.com/react/template/9109ec39a7b4d06af126.jpg" />
                    </div>
                    <div className="sliderDiv2">
                        <AHref href="#Darren">Dr. Ruby Perrin</AHref> 
                        <p>Cardiology</p>
                        <div className="sliderDiv3">
                            <icon className={"fa fa-map-marker"}/> {" "}
                            <span>Newyork , USA</span>
                        </div>
                    </div>
                </div>
              

            </div>

        </div>
    )
}
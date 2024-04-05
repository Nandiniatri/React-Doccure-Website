import { useRef } from "react";
import Button from "../Component/button";
import Image from "../Component/img";

export default function Specialities(){ 
    const scrollRef = useRef(null);
    console.log(scrollRef);

    function prev(){ 
        const scrollLeft = scrollRef.current.scrollLeft;
        console.log(scrollLeft);
        scrollRef.current.scrollLeft = scrollLeft - 100;
    }

    function next(){ 
        const scrollRight = scrollRef.current.scrollLeft;
        console.log(scrollRight);
        scrollRef.current.scrollLeft = scrollRight + 100; 
    }
 
    return (
        <div className="specialities-container">
            <div className="specialites-Div">
                <h1 className="specialitesH1">Specialities</h1>
                <div className="specialites-btn-Div">
                <Button handleClick={() => prev()} className="specialites-btn">{"<"}</Button>
                <Button handleClick={() => next()} className="specialites-btn">{">"}</Button>
                </div>
            </div>

            <div className="item-container" ref={scrollRef}>
                <div className="items">
                    <div className="items-Sub">
                        <div className="items-Span">
                            <Image src="https://doccure.dreamstechnologies.com/react/template/26237a97c1ab7ab9a911.svg" />
                        </div>
                        <div className="items-Div2">
                            <h2>Cardiology</h2>
                        </div>
                    </div>
                </div>

            <div className="items">
                <div className="items-Sub">
                    <div className="items-Span">
                        <Image src="https://doccure.dreamstechnologies.com/react/template/14341fe35b9de28c54dd.svg" />
                    </div>
                        <div  className="items-Div2">
                            <h2>Neurology</h2>
                        </div>
                    </div>
            </div>

            <div className="items">
                    <div className="items-Sub">
                        <div className="items-Span">
                            <Image src="https://doccure.dreamstechnologies.com/react/template/d47d19ed41023d23d969.svg" />
                        </div>
                        <div className="items-Div2">
                            <h2>Urology</h2>
                        </div>
                    </div>
                </div>

                <div className="items">
                    <div className="items-Sub">
                        <div className="items-Span">
                            <Image src="https://doccure.dreamstechnologies.com/react/template/e0e6e7521c563a821578.svg" />
                        </div>
                        <div className="items-Div2">
                            <h2>Orthopedia</h2>
                        </div>
                    </div>
                </div>


                <div className="items">
                    <div className="items-Sub">
                        <div className="items-Span">
                            <Image src="https://doccure.dreamstechnologies.com/react/template/8f6e1b61d43c9aab0a76.svg" />
                        </div>
                        <div className="items-Div2">
                            <h2>Dentist</h2>
                        </div>
                    </div>
                </div>


                <div className="items">
                    <div className="items-Sub">
                        <div className="items-Span">
                            <Image src="https://doccure.dreamstechnologies.com/react/template/b03bb751c7c17c2a2399.svg" />
                        </div>
                        <div className="items-Div2">
                            <h2>Ophthalmology</h2>
                        </div>
                    </div>
                </div>

            </div>

        <div className="specialities-btn-div">
            <Button className="specialities-btn">See All Specialities</Button>
        </div>
        </div>
    )
}




// const scroll = (scrollOffset) => {
//     containerRef.current.scrollLeft += scrollOffset;
//   };
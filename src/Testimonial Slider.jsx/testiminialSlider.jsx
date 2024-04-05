import { useState } from "react";
import Button from "../Component/button";
import Image from "../Component/img";
import { ContainerSliderData } from "./data";

export default function TestimonialSlider() {
    const [index, setIndex] = useState(0);
    const replaySlider = index < ContainerSliderData.length - 1;

    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(ContainerSliderData.length - 1);
        }
    };

    const handleNext = () => {
        if (replaySlider) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    };
 
    let testSlider = ContainerSliderData[index];

    return (
        <>
            <div className="text-MainContainer">
                <div className="testSlider-Container">
                    <div className="textImgDiv">
                        <Image src={testSlider.url} />
                    </div>
                    <div className="textDiv2">
                        <h2>{testSlider.heading}</h2>
                        <h1>{testSlider.title}</h1>
                        <p>{testSlider.subTitle}</p>
                        <span>{testSlider.name}</span>
                    </div>
                </div>
            </div>

            <div className="textBtnDiv">
                <Button handleClick={handlePrev} className="text-Btn prevBtn">{'<'}</Button>
                <Button handleClick={handleNext} className="text-Btn nextBtn">{'>'}</Button>
            </div>
        </>
    );
}






// <div className="text-Conatiner">

// <div className="test-SubContainer">
//     <div className="testImg-Div">
//         <Image src="https://doccure.dreamstechnologies.com/react/template/0fb84840269919a5ccc3.jpg"/>
//     </div>

//     <div className="testDiv2">
//         <span>Testimonials</span>
//         <h2>What Our Client Says</h2>
//         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid suscipit reprehenderit obcaecati quae cumque temporibus sit sunt accusantium, quisquam dicta repellat? Incidunt illo dignissimos rerum repellendus, nesciunt dolorum ratione officia.</p>
//         <span>Richard Michigan</span>
//     </div>   
// </div>

// <div className="test-SubContainer">
//     <div className="testImg-Div">
//         <Image src="https://doccure.dreamstechnologies.com/react/template/0fb84840269919a5ccc3.jpg"/>
//     </div>

//     <div className="testDiv2">
//         <span>Testimonials</span>
//         <h2>What Our Client Says</h2>
//         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid suscipit reprehenderit obcaecati quae cumque temporibus sit sunt accusantium, quisquam dicta repellat? Incidunt illo dignissimos rerum repellendus, nesciunt dolorum ratione officia.</p>
//         <span>Richard Michigan</span>
//     </div>   
// </div>

// <div className="test-SubContainer">
//     <div className="testImg-Div">
//         <Image src="https://doccure.dreamstechnologies.com/react/template/0fb84840269919a5ccc3.jpg"/>
//     </div>

//     <div className="testDiv2">
//         <span>Testimonials</span>
//         <h2>What Our Client Says</h2>
//         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid suscipit reprehenderit obcaecati quae cumque temporibus sit sunt accusantium, quisquam dicta repellat? Incidunt illo dignissimos rerum repellendus, nesciunt dolorum ratione officia.</p>
//         <span>Richard Michigan</span>
//     </div>   
// </div>

// <div className="test-SubContainer">
//     <div className="testImg-Div">
//         <Image src="https://doccure.dreamstechnologies.com/react/template/0fb84840269919a5ccc3.jpg"/>
//     </div>

//     <div className="testDiv2">
//         <span>Testimonials</span>
//         <h2>What Our Client Says</h2>
//         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid suscipit reprehenderit obcaecati quae cumque temporibus sit sunt accusantium, quisquam dicta repellat? Incidunt illo dignissimos rerum repellendus, nesciunt dolorum ratione officia.</p>
//         <span>Richard Michigan</span>
//     </div>   
// </div>
// </div>
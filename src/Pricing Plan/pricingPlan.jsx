import Image from "../Component/img";
import Button from "../Component/button";

export default function PricingPlan(){
    return (
        <div className="pricingPlan-Container">
            <div className="pricingPlanH1Div">
                <h1 className="pricingH1">Pricing Plan</h1>
            </div>

{/* first */}
            <div className="pricing-Grid">

                <div className="pricing-Grid1">

                    <div className="grid">
                        <div className="grid2-Img">
                            <img src="https://doccure.dreamstechnologies.com/react/template/2d88bd6393c72947bd52.svg"/>
                        </div>
                        <div className="gridsss"> 
                            <span className="grid1Span1">For individuals</span>
                            <h2 className="grid1H2">Basic</h2>
                        </div>
                    </div>

                    <div className="grid1SpanSec">
                        <span>Lorem ipsum dolor consectetur adipiscing elit,sed do eiusmod tempor</span>
                    </div>
                
                    <div className="grid1Third">
                        <h1 className="grid1H1">$99 /monthly</h1>
                        <span className="grid1Include">What’s included</span>
                    </div>

                    <div className="pricing-grid-ul-div">
                        <ul>
                            <li><i class="fa fa-check-circle"></i> {" "} Lorem ipsum dolor amet, consectetur</li>
                            <li><i class="fa fa-check-circle"></i> {" "} Lorem ipsum amet, consectetur</li>
                            <li><i class="fa fa-check-circle"></i> {" "} Lorem ipsum dolor amet, consectetur</li>
                            <li><i class="fa fa-check-circle"></i> {" "} Lorem ipsum amet, consectetur</li>
                        </ul>
                    </div>
                    <div className="pricingBtnDiv">
                        <Button className="pricingBtn">Choose Plan</Button>
                    </div>
                </div>


{/* second */}
                <div className="pricing-Grid2">
                    <div className="grid">
                        <div className="grid2-Img">
                            <img src="https://doccure.dreamstechnologies.com/react/template/200c6fdf43865c7be237.svg"/>
                        </div>
                        <div className="gridsss">
                            <span className="grid1Span2">For startups</span>
                            <h2 className="grid2H2">Pro</h2>
                        </div>
                     
                    </div>

                    <div  className="grid1SpanSec1">
                        <span>Lorem ipsum dolor consectetur adipiscing elit,sed do eiusmod tempor</span>
                    </div>
                
                    <div className="grid2-sec-Div">
                        <h1>$199 /monthly</h1>
                        <span>What’s included</span>
                    </div>

                    <div className="grid2-ul">
                        <ul>
                            <li><i class="fa fa-check-circle"></i> {" "}Lorem ipsum dolor amet, consectetur</li>
                            <li><i class="fa fa-check-circle"></i> {" "}Lorem ipsum amet, consectetur</li>
                            <li><i class="fa fa-check-circle"></i> {" "}Neque porro quisquam est, qui dolorem</li>
                            <li><i class="fa fa-check-circle"></i> {" "}Lorem ipsum dolor amet, consectetur</li>
                            <li><i class="fa fa-check-circle"></i> {" "}Lorem ipsum amet, consectetur</li>
                            <li><i class="fa fa-check-circle"></i> {" "}Sed ut perspiciatis unde</li>
                            <li><i class="fa fa-check-circle"></i> {" "}Nemo enim ipsam voluptatem</li>
                        </ul>
                    </div>
                    <div>
                        <Button className="pricing-Btn1">Choose Plan</Button>
                    </div>
                </div>


{/* Third */}
                <div className="pricing-Grid1">
                    <div className="grid">
                        <div className="grid2-Img">
                            <img src="https://doccure.dreamstechnologies.com/react/template/1420445446d62a28465b.svg"/>
                        </div>
                        <div className="gridsss"> 
                            <span className="grid1Span1">For big companies</span>
                            <h2 className="grid1H2">Enterprise</h2>
                        </div>
                    </div>

                    <div className="grid1SpanSec">
                        <span>Lorem ipsum dolor consectetur adipiscing elit,sed do eiusmod tempor</span>
                    </div>
                
                    <div className="grid1Third">
                        <h1 className="grid1H1">$399 /monthly</h1>
                        <span className="grid1Include">What’s included</span>
                    </div>

                    <div className="pricing-grid-ul-div">
                        <ul>
                            <li><i class="fa fa-check-circle"></i> {" "}Lorem ipsum dolor amet, consectetur</li>
                            <li><i class="fa fa-check-circle"></i> {" "}Lorem ipsum amet, consectetur</li>
                            <li><i class="fa fa-check-circle"></i> {" "}Lorem ipsum dolor amet, consectetur</li>
                            <li><i class="fa fa-check-circle"></i> {" "}Lorem ipsum amet, consectetur</li>
                        </ul>
                    </div>
                    <div className="pricingBtnDiv">
                        <Button className="pricingBtn">Choose Plan</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}


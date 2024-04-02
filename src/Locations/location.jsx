import Button from "../Component/button";

export default function Location(){
    return (
        <div className="location-Container">
            <div className="location-left">
                <h1 className="locationH1">Consult Best Doctors Your Nearby Location.</h1>
                <span className="location-left-span">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
                <Button className="location-left-btn">Start a Consult</Button>
                
            </div>

            <div className="location-Right">
              <img src="https://doccure.dreamstechnologies.com/react/template/006b775288d9aab46e5e.png" />
            </div>

        </div>
    )
}
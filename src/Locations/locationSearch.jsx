import Icons from "../Component/icons"

export default function LocationSearch(){
    return (
         <div className="locationSearchContainer">
                <div className="searchDiv">
                    <Icons className={"fa fa-search"}/>
                    <div>
                        <input type="text" placeholder="Search doctors, clinics, hospital,.."/>
                    </div>
                </div>

                <div className="searchExtraDiv"></div>

                <div className="searchDiv">
                    <Icons className={"fa fa-map-marker"}/>
                        <div>
                            <input type="location" placeholder="Location"/>
                        </div>
                </div>

                <div className="searchExtraDiv"></div>

                <div className="searchDiv">
                        <div>
                            <input type="date" placeholder="Date"/>
                        </div>
                </div>

                <button className="locationSearchBtn">Search</button>
        </div>
    )
}

import Location from "./Locations/location";
import LocationSearch from "./Locations/locationSearch";
import RegularImg from "./Locations/regularCheckUpImg";

export default function MainFileOfLocation(){
    return (
        <div>
            <Location />
            <LocationSearch />
            <RegularImg />
        </div>
    )
}
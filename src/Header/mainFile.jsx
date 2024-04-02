import HeaderImage from "./Left/headerImage"
import HeaderNavigation from "./Middle/navigation"
import HeaderButton from "./Right/HeaderButton"

export default function MainFileOfHeader(){
    return (
        <div className="header">
            <HeaderImage />
            <HeaderNavigation />
            <HeaderButton />
        </div>
    )
}

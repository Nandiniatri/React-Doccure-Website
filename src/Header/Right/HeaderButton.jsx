import Button from "../../Component/button";
import Icons from "../../Component/icons";

export default function HeaderButton(){
    return (
        <div className="headerBtnDiv">
            <div className="hdrBtn headerBtn"><Icons className="fa fa-user-circle-o"/><Button>Register</Button></div>
            <div  className="hdrBtn headerBtn1"><Icons className="fa fa-lock"/><Button>Login</Button></div>
        </div>
    )
}
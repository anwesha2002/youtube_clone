import {FaBars , FaPortrait} from "react-icons/fa";
import {Button , Col , Row} from "react-bootstrap";
import {AiOutlineSearch} from "react-icons/ai";
import {MdApps , MdNotifications} from "react-icons/md";
import ytLogo from "../../public/Youtube_logo.png"
import "./_header.scss"

export function Header({handleToggleSidebar}){
    return(
        <div className=" header d-flex justify-content-between align-items-center">
            <FaBars className="header_bar" size={28} onClick={()=>handleToggleSidebar()}/>
            {/*<Row>*/}
                <Col>
                    <img
                        src={ytLogo}
                        className="header__logo object-fit-contain"
                    />
                </Col>
                <Col lg={6} sm={10}>
                    <form className="d-flex justify-content-center  m-1 rounded-5 ">
                        <input type="text" placeholder="Search"/>
                        <div className="rounded-end-5">
                            <Button type="submit" className="d-flex align-items-center px-4">
                                <AiOutlineSearch size={28}/>
                            </Button>
                        </div>
                    </form>
                </Col>
                <Col className="header_icon d-flex justify-content-end">
                    <div className="header_icon_div w-50 d-flex justify-content-around align-items-center">
                        <MdNotifications size={28}/>
                        <MdApps size={28}/>
                        <img
                            src={ytLogo}
                            className=" object-fit-contain d-block"
                        />
                    </div>
                </Col>
            {/*</Row>*/}

        </div>
    )
}
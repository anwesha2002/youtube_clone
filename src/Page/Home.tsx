import {Header} from "../Component/Header/header.tsx";
import {Sidebar} from "../Component/Sidebar/sidebar.tsx";
import {Container} from "react-bootstrap";
import {ReactNode , useState} from "react";
// import {useAppSelector} from "../redux/store.ts";
// import {useNavigate} from "react-router-dom";

export function Home({children} : {children : ReactNode}){

    const [showSidebar, toggleSidebar] = useState(false)
    // const { loading,accessToken, user, error} = useAppSelector((state) => state.auth)
    // const navigate = useNavigate()

    const handleToggleSidebar = () => {
        toggleSidebar(value => !value)
    }

    return(
        <>
            <Header handleToggleSidebar={handleToggleSidebar}/>
            <div className="app_container ">
                <Sidebar showSidebar={showSidebar}/>
                <Container fluid className=" w-100 m-0">
                    {/*<HomeScreen/>*/}
                    {children}
                </Container>
            </div>
            {/*<LoginScreen/>*/}
        </>
    )
}

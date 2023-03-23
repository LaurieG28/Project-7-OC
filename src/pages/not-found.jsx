import {Outlet} from "react-router-dom";

function Error() {
    return (
        <div className="Error">
            <p>Error 404</p>
            <Outlet/>
        </div>
    );
}

export default Error;
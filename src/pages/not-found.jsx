import {Outlet} from 'react-router-dom';

function Error() {
    return (
        <div id="error" className="page">
            <p>Error 404</p>
            <Outlet/>
        </div>
    );
}

export default Error;
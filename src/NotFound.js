import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>We Are so Sorry</h2>
            <p>The page you are looking for was not found</p>
            <Link to="/"> Back to the homepage... </Link>
        </div>   
     );
}
 
export default NotFound;
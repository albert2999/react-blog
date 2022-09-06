import { Link } from 'react-router-dom'

const Navbar = () => {
    // const style = "#f2159d"
    return (
        <nav className="navbar">
            <h1>The Zerrave Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</Link>
                
                {/* <Link to="/create" style={{backgroundColor: style,
                borderRadius: '8px',
                color: "white"}}>New Blog 2</Link>
                 */}
            </div>
        </nav>
    );
}
 
export default Navbar;
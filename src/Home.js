// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from './useFetch'; 

const Home = () => {
    // let name = 'mario';
    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog=> blog.id !== id)
    //     setBlogs(newBlogs); 
    // }

    

    // const [name, setName] = useState('Mario');
    // const [age, setAge] = useState(23);

    // const handleClick = (e) => {
    //     console.log("Hello, Zerrave!", e.target)
    //     setName('Luigi')
    //     setAge(20)
    // }
    // const handleClickAgain = (name , e ) => {
    //     alert('Hello, Zerrave! and '+ name, e.target )
    //     setName('Mario')
    //     setAge(23)
    // }
    
    return (
        <div className="home">
            {/* <h2>Home Page</h2>
            <p>{ name } is {age} years old</p>
            <button onClick={handleClick} > Click me!</button>
            <button onClick={(e) => handleClickAgain('mario' , e)} > Click me again!</button> */}

            {/* {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                </div>
            ))} */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading ... {isPending}</div>}

            {/* {blogs ? <BlogList blogs = {blogs} title = "All Blogs" /> : ""} */}
            {blogs &&  <BlogList blogs = {blogs} title = "All Blogs" />}
            {blogs && <BlogList blogs = {blogs.filter((blog)=>blog.author === "mario")} title = "Mario's Blogs" />}

        </div>
    );
}
 
export default Home;
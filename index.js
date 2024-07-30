// https://www.figma.com/design/xA1rJVQOorqMW6xjGdBLcI/ReactFacts?node-id=0-1&t=2Q0pD0GLgbkGarFy-0
// http://localhost:3000/

function Header() {
    return(
        <nav className = "nav">
            <img src="hedgehog.jpeg" height="50px" width="50px" />
            <ul className = "nav-items">
                <li>Bio</li>
                <li>Projects</li>
            </ul>  
        </nav>
    )}

function Footer(){
    return(
    <small>© Harmandeep Khera. All rights reserved.</small>
    )}
    

ReactDOM.render(<Header/>,document.getElementById("root"))
ReactDOM.render(<Footer/> , document.getElementById("foot"))

//Currently, trying to import Header from a Hedaer.js file doesn't work. It gives the error: ReferenceError: require is not defined
    //at <anonymous>:3:15
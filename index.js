function CreateNavbar() {
    return(

        <div>
        <nav>
            <h1>Harman's Site</h1>
            <ul>
                <li>Bio</li>
                <li>Projects</li>
            </ul>   
        </nav>
        <small>© Harmandeep Khera. All rights reserved.</small>
        </div>
    )
}
    

ReactDOM.render(CreateNavbar(),document.getElementById("root"))

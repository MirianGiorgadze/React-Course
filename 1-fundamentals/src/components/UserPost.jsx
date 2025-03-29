import "./UserPost.css";

export default function UserPost(props){
    const {author, title, uploadDate, children} = props
    return(
        <div className="user-post">
            <h3>{title}</h3>
            {children}
            <h5><b>Author:</b> {author}</h5>
            <p>Uploaded on {uploadDate}</p>
            
        </div>
    )
}
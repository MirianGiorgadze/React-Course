import "./UserPost.css";

export default function UserPost({author, title, uploadDate, children}){
    return(
        <div className="user-post">
            <h3>{title}</h3>
            
            <h5><b>Author:</b> {author}</h5>
            <p>Uploaded on {uploadDate}</p>
            {children}
        </div>
    )
}
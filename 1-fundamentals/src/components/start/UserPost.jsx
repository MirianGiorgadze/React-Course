import "./UserPost.css";

export default function UserPost(props){
    // const {author, title, uploadDate, children} = props
    return(
        <div className="user-post">
            <h3>{props.title}</h3>
            {props.children}
            <h5><b>Author:</b> {props.author}</h5>
            <p>Uploaded on {props.uploadDate}</p>
            
        </div>
    )
}
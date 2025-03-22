import "./UserCard.css";

function UserCard(props) {
  return (

    <div className="user-card">
      <h2>{props.firstName} {props.lastName}</h2>
      <p>ასაკი: {props.age}</p>
      <p>ქვეყანა: {props.country}</p>
      <p>ქალაქი: {props.city}</p>
    </div>
  );
}

export default UserCard
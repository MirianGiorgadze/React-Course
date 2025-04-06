import './styles.css'; // არ დაგავიწყდეს სტილის ფაილის იმპორტი
import UserCard from './UserCard';


function UsersList(props) {
  
    return (
      <div>
        <h2>მომხმარებლების სია</h2>
        
          {props.users.map((user, index) => (
            <UserCard key={index} 
              firstName={user.firstName} 
              lastName={user.lastName} 
              age={user.age}
              country={user.country}
              city={user.city}
            />
          ))}
        
      </div>
    );
  }

export default UsersList;

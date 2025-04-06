import './App.css'
import SignInForm from './components/events/SignInForm';
import Counter from './components/states/Counter';
import UsersList from './components/usersList/UsersList'

function App() {
  const users = [
    { firstName: "სანდრო", lastName: "მოსიძე", age: 25, country: "საქართველო", city: "თბილისი" },
    { firstName: "საბა", lastName: "აბუსელიძე", age: 22, country: "საქართველო", city: "ბათუმი" },
    { firstName: "ლაშა", lastName: "ბერიძე", age: 30, country: "საქართველო", city: "ქუთაისი" }
  ];
  return (
    <>
      {/* <SignInForm/>
      <Counter/> */}
      {/* <FruitsList/>
      <FruitAlternative/>
      <UsersList/> */}
      {/* <UserPost author={"Mirian"} title={"React-course"} uploadDate={"March 22, 2025"}>
          ეს არის შვილი prop
      </UserPost> */}
      {/* <UsersList users={users}/>
      <SignInForm/> */}
      <Counter/>
    </>
  )
}

export default App

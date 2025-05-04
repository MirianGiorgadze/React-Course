import './App.css'
import CleanupFunction from './components/effects/CleanupFunction';
import Effects from './components/effects/effects';
import FetchData from './components/effects/FetchData';
import Counter from './components/states/Counter';

function App() {
  const users = [
    { firstName: "სანდრო", lastName: "მოსიძე", age: 25, country: "საქართველო", city: "თბილისი" },
    { firstName: "საბა", lastName: "აბუსელიძე", age: 22, country: "საქართველო", city: "ბათუმი" },
    { firstName: "ლაშა", lastName: "ბერიძე", age: 30, country: "საქართველო", city: "ქუთაისი" }
  ];
  return (
    <>
      {/* <FetchData/> */}
      <CleanupFunction/>
    </>
  )
}

export default App

import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// აქ აღვწერთ რა დარენდერდეს root ელემენტის შიგნით 
// div id-ით root შეგიძლიათ იპოვოთ index.html ფაილში
createRoot(document.getElementById('root')).render(
    <App />
)

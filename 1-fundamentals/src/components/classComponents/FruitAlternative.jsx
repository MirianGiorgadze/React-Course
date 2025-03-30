import './styles.css'; // არ დაგავიწყდეს სტილის ფაილის იმპორტი

export default function FruitAlternative(){
    const fruits = ['მსხალი', 'ბანანი', 'ატამი'];
    return (
        <div className="fruits-container">
          <h2>ხილის სია</h2>
          <ul className="fruits-list">
            {fruits.map((fruit, index) => (
              <li key={index} className="fruit-item">{index + 1}.{fruit}</li>
            ))}
          </ul>
        </div>
    );
}
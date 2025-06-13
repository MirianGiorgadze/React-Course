import { useRef } from 'react';

function FollowUs() {
  // ვქმნით რეფერენსს input ელემენტისთვის
  const inputRef = useRef(null);

  const handleFocusClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.style.backgroundColor = '#e0f7fa';
      alert("შენი ინფუთის მნიშვნელობა იყო " + inputRef.current.value);// ვიზუალური ეფექტი
    }
  };

  const handleBlur = () => {
    // input-დან ფოკუსის მოხსნისას ფონის ფერის სტანდარტულზე დაბრუნება
    if (inputRef.current) {
      inputRef.current.style.backgroundColor = '';
    }
  };

  return (
    <div>
      <h3>useRef მაგალითი</h3>
      <input 
        type="text" 
        ref={inputRef} // `ref` ატრიბუტით ვუკავშირებთ useRef-ს
        placeholder="Something"
        onBlur={handleBlur} // onBlur-ის დამატება სტილის მოსახსნელად
      />
      <button onClick={handleFocusClick}>გაგზავნა</button>
    </div>
  );
}

export default FollowUs;

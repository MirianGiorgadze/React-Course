import { useRef, useEffect, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

function FocusInput() {
  // ვქმნით რეფერენსს input ელემენტისთვის
  const inputRef = useRef(null);
  const { t } = useContext(LanguageContext);

  // useEffect ჰუკი კომპონენტის დამონტაჟებისას (პირველ რენდერზე) input-ზე ფოკუსირებისთვის
  useEffect(() => {
    // შეგიძლიათ აქ დაამატოთ ავტომატური ფოკუსირება, თუ გინდათ
    // inputRef.current.focus();
  }, []); // ცარიელი მასივი ნიშნავს, რომ ეს ეფექტი მხოლოდ ერთხელ გაეშვება

  const handleFocusClick = () => {
    // ღილაკზე დაჭერისას input-ზე ფოკუსირება useRef-ის გამოყენებით
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.style.backgroundColor = '#e0f7fa'; // ვიზუალური ეფექტი
    }
  };

  const handleBlur = () => {
    // input-დან ფოკუსის მოხსნისას ფონის ფერის სტანდარტულზე დაბრუნება
    if (inputRef.current) {
      inputRef.current.style.backgroundColor = '';
    }
  };

  return (
    <div className="focus-input-container">
      <h3>useRef მაგალითი</h3>
      <input 
        type="text" 
        ref={inputRef} // `ref` ატრიბუტით ვუკავშირებთ useRef-ს
        placeholder={t.enterText} 
        onBlur={handleBlur} // onBlur-ის დამატება სტილის მოსახსნელად
      />
      <button onClick={handleFocusClick}>{t.focusInput}</button>
    </div>
  );
}

export default FocusInput;

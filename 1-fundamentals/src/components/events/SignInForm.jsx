import './SignInForm.css';

export default function SignInForm () {
  const handleSubmit = (e) => {
    alert('ფორმა გაიგზავნა!');
  };

  const handleInput = (e) => {
    if(!e.target.value.includes("@")){
      alert("Your email doesn't include @@@@??????????????????")
    }
  }

  return (
    <div className="container">
      <div className="form-box">
        <h2>Sign In</h2>
        <form>
          <label>
            Email:
            <input type="email" name="email" placeholder="შეიყვანე ელ. ფოსტა" required onBlur={handleInput}/>
          </label>

          <label>
            Password:
            <input type="password" name="password" placeholder="შეიყვანე პაროლი" required />
          </label>

          <button onClick={handleSubmit}>Sign In</button>
        </form>
      </div>
    </div>
  );
};
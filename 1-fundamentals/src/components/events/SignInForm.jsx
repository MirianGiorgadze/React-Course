import './SignInForm.css';

const SignInForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('ფორმა გაიგზავნა!');
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" name="email" placeholder="შეიყვანე ელ. ფოსტა" required />
          </label>

          <label>
            Password:
            <input type="password" name="password" placeholder="შეიყვანე პაროლი" required />
          </label>

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;

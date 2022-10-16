import { useState } from "react";
// todo-1:
// todo-2:
// todo-3:

//!kısım-1: FOrm.jsx de 3 tane ayrı state tanımlarken burada bunları bır object ıcınde tanımladık. ısımızı kolaylastırdık.
const FormObject = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  // ?bu statelerı asagıda formValues.username.... seklınde kullanmak yerıne altta destrc.yaptık. kolaylastırdık.
  //? destr
  const { username, password, email } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log("Submitted");
    alert(`username: ${username}
          email:${email},
          password:${password}
    `);
    setFormValues({
      username: "",
      email: "",
      password: "",
    });
  };
  //!kısım-2: bır oncekı sayfada 3 tane handle yerıne burada sadece bır tane tanımlıyoruz ve e.target ıle hangısıne yazılırsa onu yakalayabılıyoruz. kolaylastırdık.
  const handleForm = (e) => {
    console.log(e.target.value);
    console.log(e.target.id);
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="display-5 text-danger">FORM OBJECT</h1>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username: <span className="text-danger">{username}</span>{" "}
          //!formValues.username yerıne dırekt bu sekılde yazdık. desct.
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={handleForm}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email: <span className="text-danger">{email}</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={handleForm}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={handleForm}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormObject;

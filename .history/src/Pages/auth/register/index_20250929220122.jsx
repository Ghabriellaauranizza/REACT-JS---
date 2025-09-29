import { useRef, useEffect, useState } from "react";
import { Link } from "react-router";

export default function Register() {
  const emailRef = useRef(); // Hook untuk fokus input email
  const [email, setEmail] = useState(""); // Hook untuk menyimpan email
  const [password, setPassword] = useState(""); // Hook untuk menyimpan password

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus(); // Fokus otomatis ke email saat komponen mount
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    console.log("Email:", email);
    console.log("Password:", password);
    // Bisa lanjutkan dengan proses register (API call, dsb.)
  };

  return (
    <>
      <div
        className="modal modal-sheet position-static d-block p-4 py-md-5"
        tabIndex="-1"
        role="dialog"
        id="modalSignin"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-4 shadow">
            {/* Header */}
            <div className="modal-header p-5 pb-4 border-bottom-0 d-flex justify-content-center">
              <h1 className="fw-bold mb-0 fs-2">Register</h1>
            </div>

            {/* Body */}
            <div className="modal-body p-5 pt-0">
              <form onSubmit={handleSubmit}>
                {/* Email */}
                <div className="form-floating mb-3">
                  <input
                    ref={emailRef} // Hook ref ditambahkan
                    type="email"
                    className="form-control rounded-3"
                    id="floatingInput"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>

                {/* Password */}
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-3"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                {/* Submit */}
                <button
                  className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                  type="submit"
                >
                  Register
                </button>
                <small className="text-body-secondary">
                  By clicking Register, you agree to the terms of use.
                </small>

                <hr className="my-4" />

                {/* Third-party options */}
                <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>

                <button
                  className="w-100 py-2 mb-2 btn btn-outline-danger rounded-3"
                  type="button"
                >
                  <i className="fa-brands fa-google me-2"></i>
                  Register with Google
                </button>

                <button
                  className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3"
                  type="button"
                >
                  <i className="fa-brands fa-facebook me-2"></i>
                  Register with Facebook
                </button>

                <button
                  className="w-100 py-2 mb-2 btn btn-outline-dark rounded-3"
                  type="button"
                >
                  <i className="fa-brands fa-github me-2"></i>
                  Register with GitHub
                </button>
              </form>

              <p className="mt-3 text-center">
                Already have an account?{" "}
                <a href="/login" style={{ color: "#ff69b4" }}>
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

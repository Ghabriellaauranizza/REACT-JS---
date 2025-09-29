import { useRef, useEffect } from "react";
import { Link } from "react-router";

export default function Login() {
  const emailRef = useRef(); // hook useRef

  useEffect(() => {
    // fokus input saat komponen mount
    emailRef.current.focus();
  }, []);

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
              <h1 className="fw-bold mb-0 fs-2">Login</h1>
            </div>

            {/* Body */}
            <div className="modal-body p-5 pt-0">
              <form>
                {/* Email */}
                <div className="form-floating mb-3">
                  <input
                    ref={emailRef} // pakai useRef di input
                    type="email"
                    className="form-control rounded-3"
                    id="floatingInput"
                    placeholder="name@example.com"
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
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                {/* Submit */}
                <button
                  className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { useState } from "react";
import gambar4 from "./assets/gambar4.jpeg";

export default function Hero() {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  const basePrimaryBtn = {
    backgroundColor: "#ff69b4", // pink
    border: "1.5px solid #ff69b4",
    color: "white",
    fontWeight: "600",
    padding: "10px 24px",
    transition: "all 0.3s ease",
    borderRadius: "8px",
  };

  const hoverPrimaryBtn = {
    backgroundColor: "white",
    color: "#ff69b4",
  };

  const baseOutlineBtn = {
    backgroundColor: "transparent",
    border: "1.5px solid #ff69b4",
    color: "#ff69b4",
    fontWeight: "600",
    padding: "10px 24px",
    transition: "all 0.3s ease",
    borderRadius: "8px",
  };

  const hoverOutlineBtn = {
    backgroundColor: "#ff69b4",
    color: "white",
  };

  return (
    <div>
      {/* CONTENT */}
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Filosofi Terras: Henry Manamping
            </h1>
            <p className="lead">
              "Filosofi Teras" mengajarkan cara menghadapi overthinking, emosi, dan masalah hidup dengan tenang melalui ajaran filsafat Stoik.
            </p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              {/* BUY NOW */}
              <button
                type="button"
                style={
                  hoveredBtn === "buy"
                    ? { ...basePrimaryBtn, ...hoverPrimaryBtn }
                    : basePrimaryBtn
                }
                onMouseEnter={() => setHoveredBtn("buy")}
                onMouseLeave={() => setHoveredBtn(null)}
              >
                Buy Now
              </button>

              {/* DETAIL */}
              <button
                type="button"
                style={
                  hoveredBtn === "detail"
                    ? { ...baseOutlineBtn, ...hoverOutlineBtn }
                    : baseOutlineBtn
                }
                onMouseEnter={() => setHoveredBtn("detail")}
                onMouseLeave={() => setHoveredBtn(null)}
              >
                Detail
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src={gambar4}
              alt="Buku"
              width="400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

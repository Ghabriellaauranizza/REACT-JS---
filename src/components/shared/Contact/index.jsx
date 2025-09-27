export default function Contact() {
    return(
        <>
        {/* Contact */}
      <section id="contact" className="container my-5"></section>
      <div className="container mt-5">
            <h1 className="text-center mb-4" style={{ color: "#ff69b4", fontWeight: "bold", fontFamily: "Helvetica, Arial, sans-serif", marginBottom: "3rem"}}>CONTACT US</h1>

        <div className="row g-4">
          {/* Form Contact */}
          <div className="col-md-6">
            <div className="card shadow-sm p-4">
              <h4 className="mb-3">Kirim Pesan</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nama</label>
                  <input type="text" className="form-control" id="name" placeholder="Masukkan nama Anda" />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Masukkan email Anda" />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Pesan</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Tulis pesan Anda di sini"></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#ff69b4', borderColor: '#ff69b4' }}>
                  Kirim
                </button>
              </form>
            </div>
          </div>

        {/* Info Contact + Maps */}
        <div className="col-md-6">
          <div className="card shadow-sm p-4 mb-4">
            <h4 className="mb-3">Info Kontak</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="fa-solid fa-location-dot me-2" style={{ color: '#ff1493' }}></i>
                Surabaya, Jawa Timur
              </li>
              <li className="mb-3">
                <i className="fa-solid fa-envelope me-2" style={{ color: '#ff1493' }}></i>
                ghabriellafransrico@gmail.com
              </li>
              <li className="mb-3">
                <i className="fa-solid fa-phone me-2" style={{ color: '#ff1493' }}></i>
                +6288991306216
              </li>
            </ul>

            <h5 className="mt-4">Ikuti Kami</h5>
            <div className="d-flex gap-2">
              <a href="#" className="btn btn-outline-primary btn-sm">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="btn btn-outline-danger btn-sm">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="btn btn-outline-info btn-sm">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Google Maps */}
          <div className="card shadow-sm">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.1795614693174!2d112.78832469999999!3d-7.333721199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fab87edcad15%3A0xb26589947991eea1!2sUniversitas%20Pembangunan%20Nasional%20%22Veteran%22%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1758863722774!5m2!1sid!2sid"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}
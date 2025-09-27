import team1 from "./assets/team1.jpg";

export default function Team() {
    return (
        <div>
            {/* TEAM */}
                  <div id="team" className="container marketing">
                     {/* Judul */}
                    <h1
                      className="text-center mt-5 mb-5"
                      style={{
                        color: "#ff69b4",   
                        fontWeight: "bold",         
                        fontFamily: "Helvetica, Arial, sans-serif",
                        marginBottom: "3rem"      
                      }}
                    >
                      OUR TEAM
                    </h1>
                   
                   
                    <div className="row text-center">
                      {/* Member 1 */}
                      <div className="col-lg-4">
                        <img
                          src={team1} 
                          alt="Ghabriella Auranizza Fransrico"
                          className="bd-placeholder-img rounded-circle"
                          width={180}
                          height={180}
                        />
                        <h2 className="fw-normal mt-3">Ghabriella Auranizza Fransrico</h2>
                        <p>Mahasiswa aktif Prodi Informatika Fakultas Ilmu Komputer UPN "Veteran Jawa Timur"</p>
                        <p><a className="btn btn-secondary" href="#" style={{ backgroundColor: '#ff69b4', borderColor: '#ff69b4' }}>View details »</a></p>
                      </div>
            
                      {/* Member 2 */}
                      <div className="col-lg-4">
                        <img
                          src={team1} 
                          alt="Dyah Inkud Daifatur Rahma"
                          className="bd-placeholder-img rounded-circle"
                          width={180}
                          height={180}
                        />
                        <h2 className="fw-normal mt-3">Dyah Inkud Daifatur Rahma</h2>
                        <p>Mahasiswa aktif Prodi Informatika Fakultas Ilmu Komputer UPN "Veteran Jawa Timur</p>
                        <p><a className="btn btn-secondary" href="#" style={{ backgroundColor: '#ff69b4', borderColor: '#ff69b4' }}>View details »</a></p>
                      </div>
            
                      {/* Member 3 */}
                      <div className="col-lg-4">
                        <img
                          src={team1} 
                          alt="Feomita Ramadhany"
                          className="bd-placeholder-img rounded-circle"
                          width={180}
                          height={180}
                        />
                        <h2 className="fw-normal mt-3">Feomita Ramadhany</h2>
                        <p>Mahasiswa aktif Prodi Informatika Fakultas Ilmu Komputer UPN "Veteran Jawa Timur</p>
                        <p><a className="btn btn-secondary" href="#" style={{ backgroundColor: '#ff69b4', borderColor: '#ff69b4' }}>View details »</a></p>
                      </div>
                    </div>
                  </div>

                  {/* DETAIL TEAM 1 */}
                <hr className="featurette-divider" />

                <div className="row featurette">
                  <div className="col-md-7">
                    {/* NAMA */}
                      <h2 className="featurette-heading fw-normal lh-1">
                        Ghabriella Auranizza Fransrico{" "}
                      </h2>
                      {/* Status / Prodi */}
                      <h6 className="card-subtitle mb-3 text-muted">
                        Mahasiswa aktif, Prodi Informatika
                      </h6>
                      {/* Deskripsi Singkkat */}
                      <p className="lead">
                        Saya adalah mahasiswa aktif Program Studi Informatika di Fakultas Ilmu Komputer, UPN "Veteran Jawa Timur", yang berfokus pada pengembangan kemampuan teknis di bidang pemrograman, basis data, dan pengembangan aplikasi web serta mobile. Selain menekuni akademik, saya juga aktif dalam berbagai kegiatan organisasi dan proyek komunitas, yang melatih kemampuan kepemimpinan, kolaborasi, dan manajemen waktu saya. Dengan kombinasi pengalaman praktis dan pendidikan formal, saya berkomitmen untuk terus belajar, mengembangkan diri, dan memberikan kontribusi yang berarti di dunia teknologi informasi.
                      </p>
                  </div>

                  <div className="col-md-5">
                    <svg
                      aria-label="Placeholder: 500x500"
                      className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                      width="500"
                      height="500"
                      role="img"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
                      <text
                        x="50%"
                        y="50%"
                        fill="var(--bs-secondary-color)"
                        dy=".3em"
                        textAnchor="middle"
                      >
                        500x500
                      </text>
                    </svg>
                  </div>
                </div>

                {/* DETAIL TTEAM 2 */}
                <hr className="featurette-divider" />

                 <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                      {/* NAMA */}
                      <h2 className="featurette-heading fw-normal lh-1">
                        Dyah Inkkud Daifatur Rahma{" "}
                      </h2>
                      {/* Status / Prodi */}
                      <h6 className="card-subtitle mb-3 text-muted">
                        Mahasiswa aktif, Prodi Informatika
                      </h6>
                      {/* Deskripsi Singkkat */}
                      <p className="lead">
                        Saya adalah mahasiswa aktif Program Studi Informatika di Fakultas Ilmu Komputer, UPN "Veteran Jawa Timur", yang berfokus pada pengembangan kemampuan teknis di bidang pemrograman, basis data, dan pengembangan aplikasi web serta mobile. Selain menekuni akademik, saya juga aktif dalam berbagai kegiatan organisasi dan proyek komunitas, yang melatih kemampuan kepemimpinan, kolaborasi, dan manajemen waktu saya. Dengan kombinasi pengalaman praktis dan pendidikan formal, saya berkomitmen untuk terus belajar, mengembangkan diri, dan memberikan kontribusi yang berarti di dunia teknologi informasi.
                      </p>
                    </div>

                    <div className="col-md-5 order-md-1">
                      <svg
                        aria-label="Placeholder: 500x500"
                        className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        width="500"
                        height="500"
                        role="img"
                        preserveAspectRatio="xMidYMid slice"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
                        <text
                          x="50%"
                          y="50%"
                          fill="var(--bs-secondary-color)"
                          dy=".3em"
                          textAnchor="middle"
                        >
                          500x500
                        </text>
                      </svg>
                    </div>
                  </div>


                  
                <hr className="featurette-divider" />

                <div className="row featurette">
                  <div className="col-md-7">
                    {/* NAMA */}
                      <h2 className="featurette-heading fw-normal lh-1">
                        Feomita Ramadhany Fudiansah{" "}
                      </h2>
                      {/* Status / Prodi */}
                      <h6 className="card-subtitle mb-3 text-muted">
                        Mahasiswa aktif, Prodi Informatika
                      </h6>
                      {/* Deskripsi Singkkat */}
                      <p className="lead">
                        Saya adalah mahasiswa aktif Program Studi Informatika di Fakultas Ilmu Komputer, UPN "Veteran Jawa Timur", yang berfokus pada pengembangan kemampuan teknis di bidang pemrograman, basis data, dan pengembangan aplikasi web serta mobile. Selain menekuni akademik, saya juga aktif dalam berbagai kegiatan organisasi dan proyek komunitas, yang melatih kemampuan kepemimpinan, kolaborasi, dan manajemen waktu saya. Dengan kombinasi pengalaman praktis dan pendidikan formal, saya berkomitmen untuk terus belajar, mengembangkan diri, dan memberikan kontribusi yang berarti di dunia teknologi informasi.
                      </p>
                  </div>

                  <div className="col-md-5">
                    <svg
                      aria-label="Placeholder: 500x500"
                      className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                      width="500"
                      height="500"
                      role="img"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
                      <text
                        x="50%"
                        y="50%"
                        fill="var(--bs-secondary-color)"
                        dy=".3em"
                        textAnchor="middle"
                      >
                        500x500
                      </text>
                    </svg>
                  </div>
                </div>
        </div>
        
    )
}
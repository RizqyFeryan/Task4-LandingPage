import React from "react";
import profilePhoto from "../assets/ProfilePhoto.png";
import projectPreview1 from '../assets/image copy.png';
import projectPreview2 from '../assets/image copy 2.png';
import projectPreview3 from '../assets/image copy 3.png';
import projectPreview4 from '../assets/image copy 4.png';
import projectPreview5 from '../assets/image copy 5.png';
import projectPreview6 from '../assets/image copy 6.png';
import './HomeStyle.css';
import Navbar from "../components/Navbar";

const Home = () => {
    const projectPreview = [
        projectPreview1,
        projectPreview2,
        projectPreview3,
        projectPreview4,
        projectPreview5,
        projectPreview6,
    ];

    return (
        <main className="home-main">     
            {/* Hero Section */}
            <nav className="navbar">
                {/* Navbar */}
                <Navbar />
            </nav>

            <section className="hero">
                <div className="hero-text">
                    <h1>Web Developer — <span>UI/UX</span></h1>
                </div>
                <img src={profilePhoto} alt="Profile" className="profile-img" />
            </section>

            {/* About Section */}
            <section id="about" className="about-section">
                <h2>About</h2>
                <p>
                    Halo, aku <strong>Feryan Rizqy</strong> — seorang <i>kreator konten edukasi bahasa Jepang</i> yang juga memiliki minat besar di bidang teknologi, desain, dan pengembangan web.
                </p>
                <p>
                    Sejak Februari 2025, aku mulai membagikan konten yang berfokus pada pembelajaran bahasa Jepang, tips belajar, dan kehidupan mahasiswa. Melalui Instagram dan Tiktok, aku berusaha menyampaikan informasi dengan cara yang sederhana, menyenangkan, dan mudah dipahami.
                </p>
                <p>
                    Saat ini, aku juga sebagai Mahasiswa aktif di <strong>Cakrawala University</strong>, dan memperdalam kemampuan di bidang Web Client Development dan pemrograman, serta mengerjakan berbagai proyek menggunakan tools seperti GitHub dan framework modern.
                </p>
                <p>
                    Aku percaya bahwa belajar adalah proses seumur hidup. Karena itu, aku selalu terbuka untuk kolaborasi, eksplorasi ide baru, dan bertumbuh bersama komunitas yang positif.
                </p>
                <p>
                    Di waktu luang, aku senang menggambar, mendesain, atau menikmati musik sambil merancang konten.
                    <br />Terima kasih sudah mampir! Semoga apa yang aku bagikan bisa bermanfaat dan menginspirasi 🌿
                </p>
            </section>

            {/* Recent Work Section */}
            <section id="work" className="recent-work">
                <h2>Recent Work</h2>
                <ul>
                    {['Decodable.co', 'Gofirefly.io', 'Blinkops.com', 'Withkanvas.com'].map((project) => (
                        <li key={project} className="work-item">
                            <div>
                                <h3>{project}</h3>
                                <p>Brand Design · Webflow Development · Web Design</p>
                            </div>
                            <button className="arrow-btn">→</button>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Projects Grid */}
            <section className="projects-grid">
                <h2>Projects</h2>
                <div className="grid-container">
                    {projectPreview.map((img, index) => (
                        <div key={index} className="project-card">
                            <img src={img} alt={`Project ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials">
                <h2>Testimonials</h2>
                {[1, 2].map((item) => (
                    <div key={item} className="testimonial">
                        <p>
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.”
                        </p>
                        <p className="testimonial-name">Nama Orang {item}</p>
                        <p className="testimonial-role">Role di Perusahaan</p>
                    </div>
                ))}
            </section>

            {/* CTA Final Section */}
            <section className="cta">
                <h2>Have something in mind?</h2>
                <p>Let’s build it together.</p>
                <button className="cta-btn">Get in Touch</button>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>
                    Built with ❤️ by Feryan Rizki &copy; {new Date().getFullYear()}
                </p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/muhammad-feryan-822836261/">LinkedIn</a>
                    <a href="https://instagram.com/rizqyferyan">Instagram</a>
                    <a href="https://github.com/RizqyFeryan">GitHub</a>
                </div>
            </footer>
        </main>
    );
};

export default Home;

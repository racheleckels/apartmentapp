import "../styles/home.css";
import courtyard from "../assets/courtyard.png";
import ImageReel from "../components/ImageReel.jsx";

function Home() {
    return (
        <>
        <div className="home-background">
            <div className="home-image" style={{ backgroundImage: `url(${courtyard})` }} />
            <div className="home-overlay">
                    <h1 className="home-title">
                        Georgetown Square
                        <div className="home-title-apartments-row">
                            <hr className="home-title-divider" />
                            <span className="home-title-apartments">Apartments</span>
                            <hr className="home-title-divider" />
                        </div>
                    </h1>
                    <p className="home-subtitle">Building Community in the Heart of Fayetteville Arkansas</p>
                </div>
        </div>
        <section className="home-description">
            <h2 className="home-description-heading">Comfort, Connection, and Convenience</h2>
            <p>Experience comfortable, hassle-free living in a welcoming apartment community designed for students and families. Conveniently located near the University of Arkansas and multiple bus stops, our fully furnished apartments make it easy to settle in and feel at home from day one.</p> 
            <p>Residents enjoy high-speed internet, on-site laundry facilities, and pre-furnished units. Whether you're studying, working, or connecting with neighbors, our community offers a convenient and supportive place to live.</p>
        </section>
        <section className="image-reel-section" id="image-reel">
            <ImageReel />
        </section>
        <section className="home-listings" id="units">
            <a
                href="https://listings1075352.tenantcloud.com/find?_gl=1*1810otp*_gcl_aw*RONMLjE3ODEyODUyODUuQ2owSONRanczSzdSQmhESkFSSXNBS1JOUDVUbGIZTGxDZHVYMGxfZXJuanRvREVLR2R6ZlVXUFNhSzFFaU5qdnZ6RDJOVFR2c2dtUURXd2FBaDJBRUFMd193YOI.*_gcl_au*MTEwNDk5MDUzNy4xNzgwMjg5NjM4&Bounds=-94.6720714%2C36.5813008%2C-93.6720714%2C35.5813008&fbclid=lwdGRjcAT5ibdjbGNrBPmJeXBkb2YFZXhObgNhZWOCMTEAc3JOYwZhcHBfaWQMMzUwNjg1NTMxNzl4AAEebM2gw5olr5t5WoYucXLQpqkPPrP1KmpsCodBLxJrY-QnxVkmleR2r_k_FQ_aem_YZdL60sb_od5qdtWflHDRQ"
                target="_blank"
                rel="noopener noreferrer"
                className="home-listings-card"
            >
                <p className="home-listings-card-label">Browse Available Units</p>
                <p className="home-listings-card-sub">View floor plans, pricing, and availability →</p>
            </a>
        </section>
        <section className="home-international">
            <h2 className="home-description-heading">International Student Looking for Housing?</h2>
            <p className="home-international-text">
                We warmly welcome international students and are familiar with the unique challenges of finding a home in a new country. 
                Our fully furnished apartments mean you can arrive with just your luggage — no need to source furniture or appliances from scratch. 
                We also offer the option of utilities coordinated through the leasing office. With water and electricity setup for you, plus reliable high-speed internet included in your rent, you can focus on your studies and 
                settling into life in Fayetteville without the stress of managing multiple service providers. We are conveniently located near the 
                University of Arkansas campus and bus routes, and our team is always happy to answer questions and make the process as smooth as possible for you.
            </p>
        </section>
        <section className="home-contact" id="contact">
            <h2 className="home-description-heading">Get in Touch</h2>
            <p className="home-contact-intro">Have questions or ready to apply? Reach out and we'll get back to you promptly.</p>
            <div className="home-contact-card">
                <p className="home-contact-name">Clark Eckels</p>
                <a className="home-contact-link" href="tel:+14794458755">+1 479-445-8755</a>
                <a className="home-contact-text">Call, Text, or Whatsapp</a>
                <a className="home-contact-link" href="mailto:georgetown.fayetteville@gmail.com">georgetown.fayetteville@gmail.com</a>
            </div>
        </section>
        <div className="property-address-container">
            <section className="property-address" id="contact">
                <h2 className="property-address-heading">Property Address:</h2>
                <p className="property-address-text">Georgetown Square Apartments</p>
                <p className="property-address-text">835 W Lawson St</p>
                <p className="property-address-text">Fayetteville, AR 72703</p>
                <button className="home-btn-secondary">
                    <a href="https://maps.app.goo.gl/AYbRYxDzkqSkfgz9A" target="_blank" rel="noopener noreferrer" className="home-contact-link">Open Map</a>
                </button>
            </section>

        </div>

        </>
    );
}

export default Home;
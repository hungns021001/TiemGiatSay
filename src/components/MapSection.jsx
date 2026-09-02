function MapSection() {
  return (
    <section id="contact" className="section-space map-section">
      <div className="container section-heading map-heading">
        <div>
          <span className="section-kicker">Địa chỉ</span>
          <h2>Ghé thăm hoặc gọi để đặt lịch</h2>
        </div>
        <a className="secondary-button" href="tel:0909123456">
          Gọi ngay 0909 123 456
        </a>
      </div>

      <div className="container map-shell glass-card">
        <iframe
          title="Google Maps - Giặt Sấy Cảnh Hương"
          src="https://www.google.com/maps/embed?pb=!4v1788333022223!6m8!1m7!1s0YYDTnHVpmm98RsMQjdaZw!2m2!1d18.191523192044!2d105.6960179240446!3f127.30996867063648!4f-21.016939685424106!5f0.7820865974627469"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}

export default MapSection;

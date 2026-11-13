export const Location = () => (
  <section className="py-4 px-8" style={{ backgroundColor: '#0c1322' }}>
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            FIND US
          </h2>
          <div className="space-y-4 text-lg" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>
            <p className="text-lg">
              <strong className="text-white">Address:</strong><br />
              383 Dorchester Ave Front<br />
              Boston, MA 02127
            </p>
            <p className="text-lg">
              <strong className="text-white">Parking:</strong><br />
              Two large shared parking lots available
            </p>
            <p className="text-lg">
              <strong className="text-white">Facility:</strong><br />
              10,000 square feet with 24-hour access available
            </p>
            <p className="text-lg">
              <strong className="text-white">Contact:</strong><br />
              <a href="tel:617-780-9769" className="hover:text-red-500 transition-colors" style={{ color: '#dc2626' }}>Phone: 617-780-9769</a><br />
              <a href="mailto:info@crossfitsouthie.com" className="hover:text-red-500 transition-colors" style={{ color: '#dc2626' }}>Email: info@crossfitsouthie.com</a> <span className="text-sm" style={{ color: '#dc2626' }}>(preferred)</span>
            </p>
            <p className="text-lg">
              <strong className="text-white">Hours:</strong><br />
              Monday - Thursday: 5:00am - 8:00pm<br />
              Friday: 5:00am - 7:00pm<br />
              Saturday: 7:00am - 1:00pm<br />
              Sunday: 9:00am - 12:00pm
            </p>
          </div>
        </div>
        <div className="bg-gray-200 aspect-video flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#232a3a' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10909.146600308768!2d-71.0684605805648!3d42.33547551950219!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a670d8f7ec5%3A0xd432a03a504831de!2sCrossFit%20Southie!5e1!3m2!1sen!2sus!4v1771955541380!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CrossFit Southie Location"
          />
        </div>
      </div>
    </div>
  </section>
)

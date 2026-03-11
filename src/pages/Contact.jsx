import Card from '../components/Card';
import Button from '../components/Button';
import contactHeroBg from '../assets/pexels-mikhail-nilov-7682340.jpg';

export default function Contact() {
  const handleOpenSupportChat = () => {
    window.dispatchEvent(new Event('open-support-chat'));
  };

  return (
    <div>
      <section className="relative overflow-hidden py-16 sm:py-20">
        <img
          src={contactHeroBg}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-white/70" />
        <div className="container-custom text-center">
          <h1 className="heading-1 text-nova-charcoal mb-6 relative z-10">Contact Us</h1>
          <p className="subheading text-nova-charcoal-700 max-w-2xl mx-auto relative z-10">
            Reach out to the FeyRide team for support, partnerships, or press inquiries.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Support',
                desc: '24/7 help for riders and passengers.',
                contact: 'support@feyride.co'
              },
              {
                title: 'Partnerships',
                desc: 'Work with FeyRide for corporate routes.',
                contact: 'hello@feyride.co'
              },
              {
                title: 'Press',
                desc: 'Media and brand collaborations.',
                contact: 'hello@feyride.co'
              }
            ].map((item, idx) => (
              <Card key={idx}>
                <h3 className="font-bold text-nova-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-nova-charcoal-700 mb-3">{item.desc}</p>
                <a className="text-nova-green font-semibold" href={`mailto:${item.contact}`}>
                  {item.contact}
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-nova-charcoal-light">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-nova-charcoal mb-6">Need Immediate Help?</h2>
          <p className="subheading text-nova-charcoal-700 mb-8">
            Our in-app support team responds within minutes.
          </p>
          <Button variant="primary" size="lg" onClick={handleOpenSupportChat}>
            Open Support Chat
          </Button>
        </div>
      </section>
    </div>
  );
}



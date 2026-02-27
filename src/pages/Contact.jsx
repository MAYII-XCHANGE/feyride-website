import Card from '../components/Card';
import Button from '../components/Button';

export default function Contact() {
  return (
    <div>
      <section className="bg-gradient-to-br from-nova-green-light to-white py-16 sm:py-20">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-nova-charcoal mb-6">Contact Us</h1>
          <p className="subheading text-nova-charcoal-700 max-w-2xl mx-auto">
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
                desc: '24/7 help for riders and hosts.',
                contact: 'support@FeyRide.ng'
              },
              {
                title: 'Partnerships',
                desc: 'Work with FeyRide for corporate routes.',
                contact: 'partners@FeyRide.ng'
              },
              {
                title: 'Press',
                desc: 'Media and brand collaborations.',
                contact: 'press@FeyRide.ng'
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
          <Button variant="primary" size="lg">Open Support Chat</Button>
        </div>
      </section>
    </div>
  );
}


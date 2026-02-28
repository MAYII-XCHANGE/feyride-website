import Card from '../components/Card';

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-br from-nova-green-light to-white py-16 sm:py-20">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-nova-charcoal mb-6">About FeyRide</h1>
          <p className="subheading text-nova-charcoal-700 max-w-2xl mx-auto">
            We help commuters share rides, cut costs, and build trusted communities across cities.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card elevated>
              <h2 className="heading-4 text-nova-charcoal mb-3">Our Mission</h2>
              <p className="text-nova-charcoal-700">
                Make daily transportation affordable, safe, and social by matching verified riders and hosts.
              </p>
            </Card>
            <Card elevated>
              <h2 className="heading-4 text-nova-charcoal mb-3">Our Vision</h2>
              <p className="text-nova-charcoal-700">
                Build the most trusted cost-sharing network for commuters in Africa.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-nova-charcoal-light">
        <div className="container-custom">
          <h2 className="heading-2 text-nova-charcoal text-center mb-12">Values We Live By</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Safety First',
                desc: 'Verification, ratings, and support keep the community protected.'
              },
              {
                title: 'Community Driven',
                desc: 'We are built on trust, respect, and shared experiences.'
              },
              {
                title: 'Affordability',
                desc: 'Lower costs for riders and fair earnings for hosts.'
              }
            ].map((value, idx) => (
              <Card key={idx}>
                <h3 className="font-bold text-nova-charcoal mb-2">{value.title}</h3>
                <p className="text-sm text-nova-charcoal-700">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}



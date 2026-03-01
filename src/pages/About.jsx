import Card from '../components/Card';
import { Target, Eye } from 'lucide-react';
import aboutBackground from '../assets/parveender-target-audience-7733218_1920.png';

export default function About() {
  return (
    <div>
      <section
        className="py-16 sm:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(9, 20, 28, 0.75), rgba(9, 20, 28, 0.35)), url(${aboutBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container-custom text-center">
          <h1 className="heading-1 text-white mb-6">About FeyRide</h1>
          <p className="subheading text-white/90 max-w-2xl mx-auto">
            We help commuters share rides, cut costs, and build trusted communities across cities.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card elevated className="relative overflow-hidden border border-nova-green/20">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-nova-green/15 text-nova-green">
                    <Target size={18} />
                  </span>
                  <div className="h-1 w-16 bg-nova-green"></div>
                </div>
                <p className="text-sm uppercase tracking-[0.35em] text-nova-green mb-3">Our Mission</p>
                <h2 className="heading-4 text-nova-charcoal mb-3">Redefining value in everyday travel.</h2>
                <p className="text-nova-charcoal-700">
                  To provide safe, affordable, and technology-driven transportation solutions that connect people seamlessly to their daily destinations while enhancing convenience, trust, and community.
                </p>
              </Card>
              <Card elevated className="relative overflow-hidden border border-nova-green/20">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-nova-green/15 text-nova-green">
                    <Eye size={18} />
                  </span>
                  <div className="h-1 w-16 bg-nova-green"></div>
                </div>
                <p className="text-sm uppercase tracking-[0.35em] text-nova-green mb-3">Our Vision</p>
                <h2 className="heading-4 text-nova-charcoal mb-3">Africa's most trusted ride-sharing network.</h2>
                <p className="text-nova-charcoal-700">
                  Building the most trusted cost-sharing network for daily commuters in Africa.
                </p>
              </Card>
            </div>
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



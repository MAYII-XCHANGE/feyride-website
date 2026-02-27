import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { Search, MapPin, CreditCard, CheckCircle, Shield } from 'lucide-react';

export default function FindRide() {
  return (
    <div>
      <section className="bg-gradient-to-br from-nova-green-light to-white py-16 sm:py-20">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-nova-charcoal mb-6">Find a Ride</h1>
          <p className="subheading text-nova-charcoal-700 max-w-2xl mx-auto">
            Match with verified hosts on your exact route, save on costs, and travel with confidence.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="heading-2 text-nova-charcoal mb-4">Book a Ride in Minutes</h2>
            <p className="subheading text-nova-charcoal-700">Search, compare, pay, and go.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                Icon: Search,
                title: 'Search Your Route',
                desc: 'Enter pickup and drop-off points to see available rides.'
              },
              {
                Icon: MapPin,
                title: 'Pick Your Seat',
                desc: 'Filter by pickup time, price, and host rating.'
              },
              {
                Icon: CreditCard,
                title: 'Pay Securely',
                desc: 'Transparent pricing with no cash handling.'
              },
              {
                Icon: CheckCircle,
                title: 'Ride With Confidence',
                desc: 'Live trip tracking and verified hosts on every trip.'
              }
            ].map((step, idx) => (
              <Card key={idx}>
                <div className="text-3xl mb-4"><step.Icon size={32} className="text-nova-green" /></div>
                <h3 className="font-bold text-nova-charcoal mb-2">{step.title}</h3>
                <p className="text-sm text-nova-charcoal-700">{step.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-nova-charcoal-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card elevated>
              <div className="text-3xl mb-4"><Shield size={32} className="text-nova-green" /></div>
              <h3 className="heading-4 text-nova-charcoal mb-3">Verified Hosts</h3>
              <p className="text-nova-charcoal-700">
                Every host completes phone, ID, and vehicle verification for safer rides.
              </p>
            </Card>
            <Card elevated>
              <h3 className="heading-4 text-nova-charcoal mb-3">Popular Ride Types</h3>
              <ul className="space-y-2 text-nova-charcoal-700">
                <li>City commutes for work and school</li>
                <li>Airport and intercity trips</li>
                <li>Weekend events and group rides</li>
                <li>Recurring routes with trusted hosts</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-nova-charcoal mb-6">Ready to Ride?</h2>
          <p className="subheading text-nova-charcoal-700 mb-8">
            Create your account and start saving on every trip.
          </p>
          <Link to="/register">
            <Button variant="primary" size="lg">Find Your Ride</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

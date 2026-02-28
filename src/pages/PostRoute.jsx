import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { Users, TrendingUp, DollarSign, Shield, CheckCircle } from 'lucide-react';

export default function PostRoute() {
  return (
    <div>
      <section className="bg-gradient-to-br from-nova-green-light to-white py-16 sm:py-20">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-nova-charcoal mb-6">Post a Route</h1>
          <p className="subheading text-nova-charcoal-700 max-w-2xl mx-auto">
            Turn your daily commute into income by sharing empty seats with verified riders.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="heading-2 text-nova-charcoal mb-4">Start Hosting in 3 Steps</h2>
            <p className="subheading text-nova-charcoal-700">Complete KYC, list your route, earn weekly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                Icon: Users,
                title: 'Complete Verification',
                desc: 'Verify phone, ID, and vehicle details to get approved.'
              },
              {
                Icon: TrendingUp,
                title: 'List Your Commute',
                desc: 'Set pickup points, schedule, and seat availability.'
              },
              {
                Icon: DollarSign,
                title: 'Earn Weekly',
                desc: 'Get automatic payouts to your bank account.'
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
              <h3 className="heading-4 text-nova-charcoal mb-3">Host Requirements</h3>
              <ul className="space-y-2 text-nova-charcoal-700">
                <li>Valid driver license and vehicle papers</li>
                <li>Vehicle photos and inspection checklist</li>
                <li>Phone and identity verification</li>
                <li>Community ratings above 4.5</li>
              </ul>
            </Card>
            <Card elevated>
              <div className="text-3xl mb-4"><CheckCircle size={32} className="text-nova-green" /></div>
              <h3 className="heading-4 text-nova-charcoal mb-3">Why Hosts Love FeyRide</h3>
              <ul className="space-y-2 text-nova-charcoal-700">
                <li>Flexible schedules with recurring routes</li>
                <li>Transparent pricing and fare control</li>
                <li>In-app support and safety tools</li>
                <li>Trust-building profiles and reviews</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-nova-charcoal mb-6">Ready to Start Hosting?</h2>
          <p className="subheading text-nova-charcoal-700 mb-8">
            Build a trusted route and earn on every trip.
          </p>
          <Link to="/register">
            <Button variant="primary" size="lg">Post Your Route</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}



import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { DollarSign, TrendingUp, Clock } from 'lucide-react';

export default function Earnings() {
  return (
    <div>
      <section className="bg-gradient-to-br from-nova-green-light to-white py-16 sm:py-20">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-nova-charcoal mb-6">Earnings</h1>
          <p className="subheading text-nova-charcoal-700 max-w-2xl mx-auto">
            See how hosts earn more by sharing their commute with verified riders.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                Icon: TrendingUp,
                title: 'Daily Earnings',
                desc: 'Earn N1500 - N6000 by filling 2-3 seats per trip.'
              },
              {
                Icon: Clock,
                title: 'Recurring Routes',
                desc: 'Set a weekly schedule to attract regular riders.'
              },
              {
                Icon: DollarSign,
                title: 'Weekly Payouts',
                desc: 'Automatic transfers every Friday, no manual requests.'
              }
            ].map((item, idx) => (
              <Card key={idx}>
                <div className="text-3xl mb-4"><item.Icon size={32} className="text-nova-green" /></div>
                <h3 className="font-bold text-nova-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-nova-charcoal-700">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-nova-charcoal-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card elevated>
              <h3 className="heading-4 text-nova-charcoal mb-3">Earnings Example</h3>
              <ul className="space-y-2 text-nova-charcoal-700">
                <li>Route: Lekki to Ikeja (weekday mornings)</li>
                <li>Seat price: N1200 per rider</li>
                <li>Seats filled: 3</li>
                <li>Total earnings: N3600 per trip</li>
                <li>Weekly total: N18,000 for 5 trips</li>
              </ul>
            </Card>
            <Card elevated>
              <h3 className="heading-4 text-nova-charcoal mb-3">Boost Your Earnings</h3>
              <ul className="space-y-2 text-nova-charcoal-700">
                <li>Offer consistent pickup times</li>
                <li>Keep ratings above 4.7</li>
                <li>Accept recurring ride requests</li>
                <li>Use larger vehicles for more seats</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-nova-charcoal mb-6">Ready to Earn?</h2>
          <p className="subheading text-nova-charcoal-700 mb-8">
            Complete verification and start hosting today.
          </p>
          <Link to="/register">
            <Button variant="primary" size="lg">Become a Host</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

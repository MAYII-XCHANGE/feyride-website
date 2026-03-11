import Card from '../components/Card';
import Button from '../components/Button';
import { CreditCard, DollarSign, TrendingDown } from 'lucide-react';
import { redirectToStoreByDevice } from '../utils/appStoreRedirect';

export default function Pricing() {
  return (
    <div>
      <section className="bg-gradient-to-br from-nova-green-light to-white py-16 sm:py-20">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-nova-charcoal mb-6">Pricing</h1>
          <p className="subheading text-nova-charcoal-700 max-w-2xl mx-auto">
            Transparent pricing that keeps rides affordable and rewards riders fairly.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card elevated>
              <div className="text-3xl mb-4"><TrendingDown size={32} className="text-nova-green" /></div>
              <h2 className="heading-4 text-nova-charcoal mb-3">Passenger Pricing</h2>
              <p className="text-nova-charcoal-700 mb-4">
                Passengers pay a simple per-seat price set by the rider, with a small service fee.
              </p>
              <ul className="space-y-2 text-nova-charcoal-700">
                <li>Typical seat price: N800 - N2000</li>
                <li>Service fee: 10-20% based on distance</li>
                <li>No surge pricing or hidden fees</li>
              </ul>
            </Card>

            <Card elevated>
              <div className="text-3xl mb-4"><DollarSign size={32} className="text-nova-green" /></div>
              <h2 className="heading-4 text-nova-charcoal mb-3">Rider Earnings</h2>
              <p className="text-nova-charcoal-700 mb-4">
                Riders keep most of the fare while we handle payments, verifications, and support.
              </p>
              <ul className="space-y-2 text-nova-charcoal-700">
                <li>Rider keeps 80-90% of every seat</li>
                <li>Instant payouts to your bank account</li>
                <li>Earn more with recurring routes</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-nova-charcoal-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                Icon: CreditCard,
                title: 'Secure Payments',
                desc: 'Card and bank transfers are encrypted end-to-end.'
              },
              {
                Icon: DollarSign,
                title: 'Fair Commission',
                desc: 'Lower fees than traditional ride-hailing.'
              },
              {
                Icon: TrendingDown,
                title: 'Predictable Pricing',
                desc: 'Fixed fare ranges based on distance and time.'
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

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-nova-charcoal mb-6">Ready to Share the Savings?</h2>
          <p className="subheading text-nova-charcoal-700 mb-8">
            Create an account and start booking today.
          </p>
          <Button variant="primary" size="lg" onClick={redirectToStoreByDevice}>
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
}


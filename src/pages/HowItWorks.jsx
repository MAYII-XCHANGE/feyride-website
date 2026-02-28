import Button from '../components/Button';
import Card from '../components/Card';
import { CheckCircle, Search, CreditCard, Lock, Truck, Star, MapPin, Mail, XCircle } from 'lucide-react';
import AppStoreBadge from '../components/AppStoreBadge';
import GooglePlayBadge from '../components/GooglePlayBadge';
import howItWorksData from '../data/howItWorks.json';

export default function HowItWorks() {
  const { guest, host } = howItWorksData.howItWorks;
  const iconMap = {
    CHECK: CheckCircle,
    SEARCH: Search,
    PAY: CreditCard,
    PIN: Lock,
    MAP: MapPin,
    STAR: Star,
    MAIL: Mail,
    CAR: Truck,
    EARN: CreditCard,
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-nova-green-light to-white py-16 sm:py-20">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-nova-charcoal mb-6">How FeyRide Works</h1>
          <p className="subheading text-nova-charcoal-700 max-w-2xl mx-auto">
            Simple, secure, and smart. Whether you're seeking a ride or sharing your commute, we've got you covered.
          </p>
        </div>
      </section>

      {/* Guest Journey */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-16">
            <h2 className="heading-2 text-nova-charcoal mb-4">Ride For Guests</h2>
            <p className="subheading text-nova-charcoal-700">Book. Pay. Ride. Save.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guest.map((item) => {
              const StepIcon = iconMap[item.icon] ?? CheckCircle;
              return (
              <Card key={item.step}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-nova-green text-nova-charcoal font-bold text-lg">
                      <StepIcon size={18} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-nova-charcoal mb-2">{item.title}</h3>
                    <p className="text-sm text-nova-charcoal-700">{item.description}</p>
                  </div>
                </div>
              </Card>
            )})}
          </div>
        </div>
      </section>

      {/* Host Journey */}
      <section className="section-padding bg-nova-charcoal-light">
        <div className="container-custom">
          <div className="mb-16">
            <h2 className="heading-2 text-nova-charcoal mb-4">Ride For Hosts</h2>
            <p className="subheading text-nova-charcoal-700">Share. Earn. Connect.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {host.map((item) => {
              const StepIcon = iconMap[item.icon] ?? CheckCircle;
              return (
              <Card key={item.step}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-nova-green text-nova-charcoal font-bold text-lg">
                      <StepIcon size={18} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-nova-charcoal mb-2">{item.title}</h3>
                    <p className="text-sm text-nova-charcoal-700">{item.description}</p>
                  </div>
                </div>
              </Card>
            )})}
          </div>
        </div>
      </section>

      {/* Compare Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-2 text-center text-nova-charcoal mb-16">Why Choose FeyRide?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card elevated>
              <h3 className="heading-3 text-nova-charcoal mb-6">Traditional Ride-Hailing</h3>
              <ul className="space-y-3">
                {[
                  'Expensive (60% commission)',
                  'Professional drivers only',
                  'Community connection',
                  'Lower fares',
                  'Predictable pricing',
                ].map((item, idx) => (
                  <li key={idx} className="text-nova-charcoal-700 flex items-start gap-2">
                    <XCircle size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card elevated className="bg-nova-charcoal text-white">
              <h3 className="heading-3 text-white mb-6">FeyRide Cost-Sharing</h3>
              <ul className="space-y-3">
                {[
                  'Affordable (10-20% commission)',
                  'Regular commuters like you',
                  'Build lasting community',
                  'Lower fares and lower cost',
                  'Fixed, transparent pricing',
                ].map((item, idx) => (
                  <li key={idx} className="text-nova-green font-semibold flex items-start gap-2">
                    <CheckCircle size={16} className="text-nova-green mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-nova-green-dark to-nova-green-darker text-white text-center">
        <div className="container-custom">
          <h2 className="heading-2 text-white mb-6">Get Started Today</h2>
          <p className="subheading text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of smart commuters saving time and money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <a 
              href="https://apps.apple.com/ng/app/FeyRide-rides/id1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity w-full sm:w-auto"
            >
              <AppStoreBadge className="h-14 w-full" />
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.FeyRiderider.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity w-full sm:w-auto"
            >
              <GooglePlayBadge className="h-14 w-full" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}




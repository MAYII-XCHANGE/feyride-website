import Card from '../components/Card';
import Button from '../components/Button';
import { SmartphoneIcon, AlertCircle, Star, Smartphone, Lock, AlertTriangle, CheckCircle, Shield, Phone, MapPin } from 'lucide-react';
import AppStoreBadge from '../components/AppStoreBadge';
import GooglePlayBadge from '../components/GooglePlayBadge';
import AnimatedNumber from '../components/AnimatedNumber';

export default function Safety() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-nova-green-light to-white py-16 sm:py-20">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-nova-charcoal mb-6">Safety & Trust</h1>
          <p className="subheading text-nova-charcoal-700 max-w-2xl mx-auto">
            Your safety is non-negotiable. We invest in security at every step.
          </p>
        </div>
      </section>

      {/* Verification */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-2 text-nova-charcoal text-center mb-16">Complete Verification Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card elevated>
              <div className="text-4xl mb-4"><Smartphone size={40} className="text-nova-green" /></div>
              <h3 className="heading-4 text-nova-charcoal mb-3">Phone & Email</h3>
              <p className="text-nova-charcoal-700">All users verify their phone and email for account security.</p>
            </Card>

            <Card elevated>
              <div className="text-4xl mb-4"><Shield size={40} className="text-nova-green" /></div>
              <h3 className="heading-4 text-nova-charcoal mb-3">Government ID</h3>
              <p className="text-nova-charcoal-700">Upload and verify your national ID or international passport.</p>
            </Card>

            <Card elevated>
              <div className="text-4xl mb-4"><SmartphoneIcon size={40} className="text-nova-green" /></div>
              <h3 className="heading-4 text-nova-charcoal mb-3">Facial Recognition</h3>
              <p className="text-nova-charcoal-700">Selfie verification matches your ID photo for authenticity.</p>
            </Card>

            <Card elevated>
              <div className="text-4xl mb-4"><Lock size={40} className="text-nova-green" /></div>
              <h3 className="heading-4 text-nova-charcoal mb-3">Vehicle Verification (Hosts)</h3>
              <p className="text-nova-charcoal-700">Vehicle photos and license verification for all riders.</p>
            </Card>

            <Card elevated>
              <div className="text-4xl mb-4"><AlertCircle size={40} className="text-nova-green" /></div>
              <h3 className="heading-4 text-nova-charcoal mb-3">License Check (Hosts)</h3>
              <p className="text-nova-charcoal-700">Valid driver's license verification for rider eligibility.</p>
            </Card>

            <Card elevated>
              <div className="text-4xl mb-4"><Shield size={40} className="text-nova-green" /></div>
              <h3 className="heading-4 text-nova-charcoal mb-3">Background Screening</h3>
              <p className="text-nova-charcoal-700">Regular safety checks and community reputation tracking.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="section-padding bg-nova-charcoal-light">
        <div className="container-custom">
          <h2 className="heading-2 text-nova-charcoal text-center mb-16">Safety Features You Can Trust</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                Icon: MapPin,
                title: 'Real-Time GPS Tracking',
                desc: 'Every trip is monitored live. Share location with emergency contacts.'
              },
              {
                Icon: AlertTriangle,
                title: '24/7 SOS Button',
                desc: 'One tap connects you to emergency support and nearby authorities.'
              },
              {
                Icon: Star,
                title: 'Two-Way Ratings',
                desc: 'Both riders and passengers rate each other to ensure community quality.'
              },
              {
                Icon: CheckCircle,
                title: 'Trip Verification PIN',
                desc: 'Unique PIN for each trip confirms identity at pickup and drop-off.'
              },
              {
                Icon: Lock,
                title: 'Encrypted Communication',
                desc: 'In-app chat is encrypted. Never share personal phone numbers.'
              },
              {
                Icon: AlertCircle,
                title: 'Reporting & Blocking',
                desc: 'Report inappropriate behavior. Violators are suspended immediately.'
              },
            ].map((feature, idx) => (
              <Card key={idx}>
                <div className="text-3xl mb-4"><feature.Icon size={32} className="text-nova-green" /></div>
                <h3 className="font-bold text-nova-charcoal mb-2">{feature.title}</h3>
                <p className="text-sm text-nova-charcoal-700">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-2 text-nova-charcoal text-center mb-16">We're Serious About Safety</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <p className="text-4xl font-bold text-nova-green">
                <AnimatedNumber value={0.02} decimals={2} suffix="%" />
              </p>
              <p className="text-lg font-semibold text-nova-charcoal">Safety Incident Rate</p>
              <p className="text-sm text-nova-charcoal-700">Among 500K+ trips</p>
            </div>

            <div className="space-y-4">
              <p className="text-4xl font-bold text-nova-green">
                <AnimatedNumber value={24} suffix="/7" />
              </p>
              <p className="text-lg font-semibold text-nova-charcoal">Support Available</p>
              <p className="text-sm text-nova-charcoal-700">Real people, real help</p>
            </div>

            <div className="space-y-4">
              <p className="text-4xl font-bold text-nova-green">
                <AnimatedNumber value={100} suffix="%" />
              </p>
              <p className="text-lg font-semibold text-nova-charcoal">Incident Investigation</p>
              <p className="text-sm text-nova-charcoal-700">We take every report seriously</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Do If */}
      <section className="section-padding bg-nova-charcoal-light">
        <div className="container-custom">
          <h2 className="heading-2 text-nova-charcoal text-center mb-16">What to Do If...</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                title: 'You Feel Unsafe During a Trip',
                actions: ['1. Press SOS button immediately', '2. Get to a safe, public location', '3. Contact emergency services', '4. Report to FeyRide support within 24 hours']
              },
              {
                title: 'You Want to Report Another User',
                actions: ['1. Document the incident details', '2. Use in-app reporting tool', '3. Attach evidence (screenshots, photos)', '4. Our team investigates within 24 hours']
              },
              {
                title: 'You\'re Uncomfortable With a Booking',
                actions: ['1. You can cancel anytime', '2. For safety concerns, use SOS', '3. Contact support before canceling', '4. We\'ll help you find alternatives']
              },
            ].map((item, idx) => (
              <Card key={idx} elevated>
                <h3 className="heading-4 text-nova-charcoal mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.actions.map((action, aIdx) => (
                    <li key={aIdx} className="text-nova-charcoal-700 flex items-start gap-3">
                      <span className="flex-shrink-0 text-nova-green font-bold">{action.split('.')[0]}.</span>
                      <span>{action.split('. ')[1]}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-nova-green-dark to-nova-green-darker text-white text-center">
        <div className="container-custom">
          <h2 className="heading-2 text-white mb-6">Trust FeyRide With Your Safety</h2>
          <p className="subheading text-white/90 mb-8">Join a community where everyone is verified and everyone is protected</p>
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




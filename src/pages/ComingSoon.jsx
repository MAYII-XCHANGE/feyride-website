import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function ComingSoon() {
  return (
    <div className="min-h-[70vh] flex items-center">
      <div className="container-custom text-center py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-nova-green mb-4">Coming Soon</p>
        <h1 className="heading-1 text-nova-charcoal mb-6">FeyRide App Launching Soon</h1>
        <p className="subheading text-nova-charcoal-700 max-w-2xl mx-auto mb-10">
          We are putting the final touches on iOS and Android. Scan again soon or explore the web experience.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/">
            <Button variant="primary" size="lg">Back to Home</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg">Join the Waitlist</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

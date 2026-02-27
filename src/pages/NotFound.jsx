import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Car, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-nova-charcoal-light">
      <div className="text-center space-y-6">
        <div className="text-8xl"><Car size={100} className="text-nova-green mx-auto" /></div>
        <h1 className="heading-1">404 - Page Not Found</h1>
        <p className="subheading text-gray-700 max-w-md">
          Looks like you took a wrong turn. This page doesn't exist, but your next ride might!
        </p>
        <Link to="/">
          <Button variant="primary" size="lg">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}


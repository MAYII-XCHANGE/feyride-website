import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import Button from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { handleFormError, handleFormSuccess } from '../utils/formHelpers';

export default function Login() {
  const navigate = useNavigate();
  const { login, isLoading, isAuthenticated } = useAuth();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleDemoLogin = async (userType) => {
    const credentials =
      userType === 'host'
        ? { email: 'host@example.com', password: 'Host@123' }
        : { email: 'rider@example.com', password: 'Rider@123' };

    try {
      await login(credentials);
      handleFormSuccess('Logged in successfully! Welcome back.');
      setTimeout(() => navigate('/profile'), 1000);
    } catch (error) {
      handleFormError(error);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-nova-blue-light to-white py-12 sm:py-16">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-nova-charcoal mb-4">Welcome Back</h1>
          <p className="subheading text-nova-charcoal-700 max-w-2xl mx-auto">
            Sign in to your FeyRide account.
          </p>
        </div>
      </section>

      {/* Login Actions */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-md mx-auto">
          <div className="space-y-4">
            <Button
              variant="primary"
              size="lg"
              type="button"
              disabled={isLoading}
              className="w-full group"
              onClick={() => handleDemoLogin('rider')}
            >
              {isLoading ? (
                <>
                  <span className="inline-block animate-spin mr-2">⏳</span>
                  Signing in as rider...
                </>
              ) : (
                <>
                  Sign In as Rider
                  <LogIn size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>

            <Button
              variant="outline"
              size="lg"
              type="button"
              disabled={isLoading}
              className="w-full group"
              onClick={() => handleDemoLogin('host')}
            >
              {isLoading ? (
                <>
                  <span className="inline-block animate-spin mr-2">⏳</span>
                  Signing in as host...
                </>
              ) : (
                <>
                  Sign In as Host
                  <LogIn size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>

            <p className="text-center text-sm text-nova-charcoal-700">
              Don't have an account?{' '}
              <Link to="/register" className="text-nova-blue font-semibold hover:underline">
                Create one here
              </Link>
            </p>
          </div>

          {/* Demo Credentials */}
          <div className="mt-8 p-4 bg-nova-charcoal-light rounded-lg border border-nova-charcoal-lighter">
            <p className="text-xs font-semibold text-nova-charcoal mb-3">Demo Credentials:</p>
            <div className="space-y-2 text-xs text-nova-charcoal-700">
              <div>
                <strong>Rider:</strong><br />
                Email: <code className="bg-white px-2 py-1 rounded">rider@example.com</code><br />
                Password: <code className="bg-white px-2 py-1 rounded">Rider@123</code>
              </div>
              <div className="pt-2 border-t border-nova-charcoal-lighter">
                <strong>Host:</strong><br />
                Email: <code className="bg-white px-2 py-1 rounded">host@example.com</code><br />
                Password: <code className="bg-white px-2 py-1 rounded">Host@123</code>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


import { useNavigate } from 'react-router-dom';
import { LogOut, User, Mail, Phone, Shield, Star } from 'lucide-react';
import ProtectedRoute from '../components/ProtectedRoute';
import Button from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { handleFormSuccess } from '../utils/formHelpers';

function ProfileContent() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    handleFormSuccess('Logged out successfully!');
    setTimeout(() => navigate('/'), 1000);
  };

  const userTypeLabel = user?.userType === 'host' ? 'Host' : 'Rider';
  const isBadgeVerified = user?.reviews > 0;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-nova-blue-light to-white py-12 sm:py-16">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-nova-charcoal mb-4">My Profile</h1>
          <p className="subheading text-nova-charcoal-700 max-w-2xl mx-auto">
            Manage your account and personal information.
          </p>
        </div>
      </section>

      {/* Profile Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Sidebar - Profile Summary */}
            <div className="md:col-span-1">
              <div className="bg-nova-blue-light rounded-2xl p-6 text-center border border-nova-blue/20">
                {/* Avatar */}
                <div className="w-20 h-20 bg-gradient-to-br from-nova-blue to-nova-blue-dark rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                  {user?.fullName?.charAt(0).toUpperCase()}
                </div>

                {/* Name & Type */}
                <h2 className="heading-4 text-nova-charcoal mb-2">{user?.fullName}</h2>
                <p className="text-sm text-nova-charcoal-700 mb-4">{userTypeLabel}</p>

                {/* Rating (if host or has reviews) */}
                {user?.rating && (
                  <div className="bg-white rounded-lg p-3 mb-4 border border-nova-charcoal-lighter">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(user.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-nova-charcoal-lighter'}
                        />
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-nova-charcoal">
                      {user.rating.toFixed(1)} stars ({user.reviews} reviews)
                    </p>
                  </div>
                )}

                {/* Verified Badge */}
                {isBadgeVerified && (
                  <div className="flex items-center justify-center gap-2 text-xs text-accent-success font-semibold mb-4">
                    <Shield size={16} className="fill-accent-success" />
                    Verified User
                  </div>
                )}

                {/* Logout Button */}
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleLogout}
                  className="w-full group"
                >
                  <LogOut size={16} className="group-hover:-translate-y-1 transition-transform" />
                  Logout
                </Button>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="space-y-6">
                {/* Profile Info Display */}
                <div className="bg-nova-charcoal-light rounded-xl p-6 border border-nova-charcoal-lighter">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="heading-4 text-nova-charcoal">Account Information</h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-white border border-nova-charcoal-lighter text-nova-charcoal-700">
                      Edit disabled
                    </span>
                  </div>

                  <div className="space-y-4">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <Mail size={20} className="text-nova-blue mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-nova-charcoal-700">Email address</p>
                        <p className="font-semibold text-nova-charcoal">{user?.email}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <Phone size={20} className="text-nova-blue mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-nova-charcoal-700">Phone number</p>
                        <p className="font-semibold text-nova-charcoal">{user?.phone}</p>
                      </div>
                    </div>

                    {/* Bio */}
                    {user?.bio && (
                      <div className="flex items-start gap-4">
                        <User size={20} className="text-nova-blue mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-nova-charcoal-700">Bio</p>
                          <p className="font-semibold text-nova-charcoal">{user.bio}</p>
                        </div>
                      </div>
                    )}

                    {/* Account Created */}
                    <div className="text-xs text-nova-charcoal-700 pt-4 border-t border-nova-charcoal-lighter">
                      Account created on {new Date(user?.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" size="sm" className="w-full">
                    List {user?.userType === 'host' ? 'My Routes' : 'My Rides'}
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                     Messages
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Profile() {
  return (
    <ProtectedRoute>
      <ProfileContent />
    </ProtectedRoute>
  );
}


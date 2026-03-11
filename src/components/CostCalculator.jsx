import { useState } from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';

export default function CostCalculator({ userType = 'guest' }) {
  const guestPresets = [
    { label: 'Short Trip', distance: 8, persons: 2 },
    { label: 'Daily Commute', distance: 20, persons: 3 },
    { label: 'Long Trip', distance: 40, persons: 4 }
  ];
  const hostPresets = [
    { label: 'Part-time', distance: 12, tripsPerWeek: 4 },
    { label: 'Regular', distance: 20, tripsPerWeek: 7 },
    { label: 'Full-time', distance: 35, tripsPerWeek: 10 }
  ];
  const [guestPreset, setGuestPreset] = useState(guestPresets[1]);
  const [hostPreset, setHostPreset] = useState(hostPresets[1]);

  if (userType === 'host') {
    // Host earnings calculator
    const costPerKm = 25;
    const costPerSeat = 800; // NGN 800 per seat average
    const seatsInCar = 4;
    const weeklyTrips = hostPreset.tripsPerWeek;
    
    const revenuePerTrip = costPerSeat * seatsInCar;
    const profitPerTrip = revenuePerTrip - ((costPerKm * hostPreset.distance * 0.3) / 4); // subtract fuel estimate
    const weeklyEarnings = profitPerTrip * weeklyTrips;
    const monthlyEarnings = weeklyEarnings * 4;

    return (
      <div className="bg-gradient-to-r from-nova-green-light to-nova-green/10 rounded-2xl p-8 border border-nova-green/20">
        <h3 className="text-2xl font-bold text-nova-charcoal mb-6">Calculate Your Earnings</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Presets */}
          <div className="space-y-6">
            <div>
              <p className="block text-sm font-semibold text-nova-charcoal mb-3">Select Rider plan</p>
              <div className="space-y-2">
                {hostPresets.map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => setHostPreset(preset)}
                    className={`w-full text-left px-4 py-3 rounded-lg border transition ${
                      hostPreset.label === preset.label
                        ? 'bg-nova-charcoal text-white border-nova-green'
                        : 'bg-white text-nova-charcoal border-nova-charcoal-lighter hover:border-nova-green'
                    }`}
                  >
                    {preset.label}: {preset.distance}km, {preset.tripsPerWeek} trips/week
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <div className="bg-nova-charcoal text-white rounded-xl p-4 border border-nova-green/30 shadow-md">
              <p className="text-sm text-white/80 mb-1">Per Trip Earnings</p>
              <p className="text-3xl font-bold text-nova-green">NGN {profitPerTrip.toFixed(0)}</p>
            </div>

            <div className="bg-nova-charcoal text-white rounded-xl p-4 border border-nova-green/20 shadow-md">
              <p className="text-sm text-white/80 mb-1">Weekly Earnings</p>
              <p className="text-3xl font-bold text-nova-green">NGN {weeklyEarnings.toFixed(0)}</p>
            </div>

            <div className="bg-nova-charcoal text-white rounded-xl p-4 border border-nova-green/30 shadow-md">
              <p className="text-sm mb-1 opacity-90 flex items-center gap-2"><TrendingUp size={16} /> Monthly Potential</p>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold">NGN {monthlyEarnings.toFixed(0)}</p>
                <p className="text-sm font-semibold">/ month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Guest savings calculator (default)
  const costPerKm = 25;
  const totalCost = guestPreset.distance * costPerKm;
  const costPerPerson = totalCost / guestPreset.persons;
  const uberEstimate = guestPreset.distance * 60; // Estimated Uber fare
  const savings = uberEstimate - costPerPerson;
  const savingsPercent = Math.round((savings / uberEstimate) * 100);

  return (
    <div className="bg-gradient-to-r from-nova-green-light to-nova-green/10 rounded-2xl p-8 border border-nova-green/20">
      <h3 className="text-2xl font-bold text-nova-charcoal mb-6">How Much Can You Save?</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Presets */}
        <div className="space-y-6">
          <div>
            <p className="block text-sm font-semibold text-nova-charcoal mb-3">Select Passenger plan</p>
            <div className="space-y-2">
              {guestPresets.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => setGuestPreset(preset)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition border ${
                    guestPreset.label === preset.label
                      ? 'bg-nova-charcoal text-white border-nova-green'
                      : 'bg-white border-nova-charcoal-lighter text-nova-charcoal hover:bg-nova-charcoal-light'
                  }`}
                >
                  {preset.label}: {preset.distance}km, {preset.persons} people
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className="bg-nova-charcoal text-white rounded-xl p-4 border border-nova-green/30 shadow-md">
            <p className="text-sm text-white/80 mb-1">FeyRide Cost per Person</p>
            <p className="text-3xl font-bold text-nova-green">NGN {costPerPerson.toFixed(0)}</p>
          </div>

          <div className="bg-nova-charcoal text-white rounded-xl p-4 border border-nova-green/20 shadow-md">
            <p className="text-sm text-white/80 mb-1">Traditional Ride Cost</p>
            <p className="text-3xl font-bold text-nova-charcoal-lighter line-through">NGN {uberEstimate.toFixed(0)}</p>
          </div>

          <div className="bg-nova-charcoal text-white rounded-xl p-4 border border-nova-green/30 shadow-md">
            <p className="text-sm mb-1 opacity-90 flex items-center gap-2"><TrendingDown size={16} /> You Save</p>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold">NGN {savings.toFixed(0)}</p>
              <p className="text-xl font-semibold">({savingsPercent}%)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




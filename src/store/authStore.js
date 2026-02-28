import { create } from 'zustand';

// Mock authentication - replace with real API calls
const mockUsers = [
  {
    id: '1',
    email: 'rider@example.com',
    password: 'Rider@123',
    fullName: 'John Rider',
    phone: '+2349012345678',
    userType: 'rider',
    bio: 'Always on time!',
    profileImage: null,
    rating: 4.8,
    reviews: 24,
    createdAt: new Date('2025-01-15')
  },
  {
    id: '2',
    email: 'host@example.com',
    password: 'Host@123',
    fullName: 'Jane Host',
    phone: '+2349087654321',
    userType: 'host',
    bio: 'Safe and reliable driver.',
    profileImage: null,
    rating: 4.9,
    reviews: 48,
    createdAt: new Date('2025-01-10')
  }
];

export const useAuthStore = create((set, get) => ({
  user: (() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  })(),
  isLoading: false,
  error: null,

  // Register a new user
  register: async (data) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check if user exists
      const exists = mockUsers.find(u => u.email === data.email);
      if (exists) {
        throw new Error('Email already registered');
      }

      // Create new user
      const newUser = {
        id: String(mockUsers.length + 1),
        ...data,
        rating: 5.0,
        reviews: 0,
        createdAt: new Date()
      };
      
      mockUsers.push(newUser);
      
      // Store user and token
      localStorage.setItem('user', JSON.stringify(newUser));
      localStorage.setItem('authToken', `token_${newUser.id}_${Date.now()}`);
      
      set({ user: newUser, error: null });
      return newUser;
    } catch (error) {
      set({ error: error.message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  // Login user
  login: async (credentials) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      const user = mockUsers.find(
        u => u.email === credentials.email && u.password === credentials.password
      );

      if (!user) {
        throw new Error('Invalid email or password');
      }

      // Store user and token
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('authToken', `token_${user.id}_${Date.now()}`);
      
      set({ user, error: null });
      return user;
    } catch (error) {
      set({ error: error.message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    set({ user: null, error: null });
  },

  // Update user profile
  updateProfile: async (updates) => {
    set({ isLoading: true, error: null });
    try {
      const state = get();
      if (!state.user) throw new Error('Not authenticated');

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      const updatedUser = { ...state.user, ...updates };
      
      // Update mock database
      const userIndex = mockUsers.findIndex(u => u.id === state.user.id);
      if (userIndex !== -1) {
        mockUsers[userIndex] = updatedUser;
      }

      localStorage.setItem('user', JSON.stringify(updatedUser));
      set({ user: updatedUser });
      return updatedUser;
    } catch (error) {
      set({ error: error.message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  // Clear error
  clearError: () => set({ error: null })
}));


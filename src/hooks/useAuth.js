import { useAuthStore } from '../store/authStore';

export const useAuth = () => {
  const { user, isLoading, error, register, login, logout, updateProfile, clearError } = useAuthStore();

  return {
    user,
    isLoading,
    error,
    isAuthenticated: !!user,
    userType: user?.userType,
    register,
    login,
    logout,
    updateProfile,
    clearError
  };
};

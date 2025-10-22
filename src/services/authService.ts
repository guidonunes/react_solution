import type { User } from '../types/User';

export const authService = {
  login(): User {
    // Mock login implementation
    return { id: 1, name: 'John Doe'};
  }
}

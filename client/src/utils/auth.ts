import jwt_decode, { JwtPayload } from 'jwt-decode';

class AuthService {
  getProfile() {

    const token = this.getToken();
    if (!token) return null;
    return jwt_decode<JwtPayload>(token);
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string) {
    try {
      const decoded = jwt_decode<JwtPayload>(token);
      if (!decoded.exp) {
        return true;
      }

      const expirationTime = decoded.exp * 1000;
      return Date.now() > expirationTime;
    } catch (error) {
      return true;
    }
  }

  getToken(): string {
    return localStorage.getItem('jwt') || '';
  }

  login(idToken: string) {
    localStorage.setItem('jwt', idToken);
    window.location.assign('/'); 
  }

  logout() {
    localStorage.removeItem('jwt');
    window.location.assign('/login');
  }
}

export default new AuthService();

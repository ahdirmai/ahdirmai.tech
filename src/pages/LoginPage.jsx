import { LoginForm } from '../components/LoginForm';

export function LoginPage({ onLogin }) {
  return <LoginForm onLogin={onLogin} />;
}
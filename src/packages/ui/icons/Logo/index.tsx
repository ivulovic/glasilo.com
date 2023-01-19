import LogoIcon from './LogoIcon';
import './style.scss';

const Logo = ({ className = '' }): JSX.Element => (
  <div className={`reactoso logo ${className}`}>
    <LogoIcon />
  </div>
);

export default Logo;

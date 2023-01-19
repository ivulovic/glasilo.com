import { NavLink } from 'react-router-dom';

import { useTranslation } from '@translations';

export default function NavLinks(): JSX.Element {
  const t = useTranslation();
  return (
    <>
      <NavLink to="/kovid19" className="nav-item">
        {t('covid19Title')}
      </NavLink>
      <NavLink to="/kvalitet-vazduha" className="nav-item">
        {t('airQualityTitle')}
      </NavLink>
      <NavLink to="/kovid-ambulante" className="nav-item">
        {t('ambulancesTitle')}
      </NavLink>
    </>
  );
}

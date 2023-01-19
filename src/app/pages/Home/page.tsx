import { useNavigate, Link } from 'react-router-dom';

import SearchInput from '@components/SearchInput';
import Thumbnail from '@components/Thumbnail';
import { HospitalIcon, Logo, PlantIcon, VirusIcon } from '@reactoso-ui';
import { useTranslation } from '@translations';
import './style.scss';
import LogoLetterIcon from 'packages/ui/icons/Logo/LogoLetterIcon';

export default function Page(): JSX.Element {
  const t = useTranslation();
  const navigate = useNavigate();
  const onNavigate = (term) => {
    return navigate('/search?q=' + encodeURIComponent(term));
  };
  return (
    <div className="page-wrapper home-page">
      <Link className="page-logo-wrapper" to={'/'}>
        <LogoLetterIcon />
        <Logo className="l" />
      </Link>
      <SearchInput onSelect={onNavigate} />
      <div className="quick-access">
        <Thumbnail link={'/kovid19'} icon={VirusIcon} title={'covid19Title'} />
        <Thumbnail link={'/kvalitet-vazduha'} icon={PlantIcon} title={'airQualityTitle'} />
        <Thumbnail link={'/kovid-ambulante'} icon={HospitalIcon} title={'ambulancesTitle'} />
      </div>
    </div>
  );
}

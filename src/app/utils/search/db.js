
const AirQualityPage = {
  path: 'kvalitet-vazduha',
  results: [
    {
      title: 'airQualityTitle',
      description: 'airQualityDescription',
      link: '/kvalitet-vazduha',
    },
  ],
};

const AmbulancesPage = {
  path: 'kovid-ambulante',
  results: [
    {
      title: 'ambulancesTitle',
      description: 'ambulancesDescription',
      link: '/kovid-ambulante',
    },
  ],
};

const Covid19Page = {
  path: 'kovid19',
  results: [
    {
      title: 'covid19Title',
      description: 'covid19Description',
      link: '/kovid19',
    },
    {
      title: 'statisticTitle',
      description: 'statisticDescription',
      link: `/kovid19`,
    },
    {
      title: 'ambulancesTitle',
      description: 'ambulancesDescription',
      link: `/kovid-ambulante`,
    },
  ],
};

const makeElement = (title, options) => ({
  title,
  ...options,
});

const makeEnElement = (title, options) => ({
  ...makeElement(title, options),
  lang: 'en',
});

const db = [
  makeEnElement('corona', Covid19Page),
  makeEnElement('coronavirus', Covid19Page),
  makeEnElement('corona virus', Covid19Page),
  makeEnElement('covid', Covid19Page),
  makeEnElement('covid19', Covid19Page),
  makeEnElement('covid 19', Covid19Page),
  makeEnElement('covid ambulances', AmbulancesPage),
  makeEnElement('ambulances', AmbulancesPage),
  makeEnElement('air quality', AirQualityPage),
  makeEnElement('air polution', AirQualityPage),
  //
  makeEnElement('корона', Covid19Page),
  makeEnElement('коронавирус', Covid19Page),
  makeEnElement('корона вирус', Covid19Page),
  makeEnElement('вирус корона', Covid19Page),
  makeEnElement('ковид', Covid19Page),
  makeEnElement('ковид амбуланте', Covid19Page),
  makeEnElement('амбуланте', Covid19Page),
  makeEnElement('дом здравља', Covid19Page),
  makeEnElement('ковид 19', Covid19Page),
  makeEnElement('ковид19', Covid19Page),
  makeEnElement('ваздух', AirQualityPage),
  makeEnElement('загађење ваздуха', AirQualityPage),
  makeEnElement('квалитет ваздуха', AirQualityPage),

  makeEnElement('virus korona', Covid19Page),
  makeEnElement('korona', Covid19Page),
  makeEnElement('koronavirus', Covid19Page),
  makeEnElement('korona virus', Covid19Page),
  makeEnElement('kovid', Covid19Page),
  makeEnElement('kovid ambulante', Covid19Page),
  makeEnElement('ambulante', Covid19Page),
  makeEnElement('dom zdravlja', Covid19Page),
  makeEnElement('kovid 19', Covid19Page),
  makeEnElement('kovid19', Covid19Page),
  makeEnElement('vazduh', AirQualityPage),
  makeEnElement('zagađenje vazduha', AirQualityPage),
  makeEnElement('zagadjenje vazduha', AirQualityPage),
  makeEnElement('kvalitet vazduha', AirQualityPage),
];

export default db;

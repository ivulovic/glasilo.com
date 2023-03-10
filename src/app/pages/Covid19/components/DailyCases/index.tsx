import { useState, useEffect } from 'react';

import { FormattedMessage, useTranslation } from '@translations';
import { months } from '@utils/date/covid';
import Subtitle from 'app/components/Subtitle';

import { ChartDataItem, ChartDataProps } from '../../types';
import LineChartSection from '../LineChartSection';

export default function DailyCases(props): JSX.Element {
  const { data: initialDailyData } = props;
  const [activeMonthDate, setActiveMonthDate] = useState<Date | string>(
    initialDailyData ? new Date(initialDailyData[initialDailyData.length - 1]?.date) : new Date(),
  );
  const [filteredData, setFilteredData] = useState<ChartDataProps>();
  const t = useTranslation();
  useEffect(() => {
    if (activeMonthDate && initialDailyData) {
      updateDataForMonth(initialDailyData, activeMonthDate);
    }
  }, [initialDailyData, activeMonthDate]);

  const updateDataForMonth = (data, date) => {
    const month = new Date(date).getMonth();
    const year = new Date(date).getFullYear();
    const deaths: Array<ChartDataItem> = [];
    const tested: Array<ChartDataItem> = [];
    const confirmed: Array<ChartDataItem> = [];
    const hospitalized: Array<ChartDataItem> = [];
    const onRespirator: Array<ChartDataItem> = [];
    data
      .filter((d) => new Date(d.date).getFullYear() === year && new Date(d.date).getMonth() === month)
      .forEach(({ date, positiveForDate, deathsForDate, testedForDate, hospitalizedForDate, onRespiratorForDate }) => {
        const d = new Date(date);
        const y = d.getFullYear();
        const m = d.getMonth();
        const day = d.getDate();
        if (m !== month && y !== year) return;
        const ts = Date.UTC(y, m, day);
        confirmed.push([ts, positiveForDate]);
        deaths.push([ts, deathsForDate]);
        tested.push([ts, testedForDate]);
        hospitalized.push([ts, hospitalizedForDate]);
        onRespirator.push([ts, onRespiratorForDate]);
      });
    setFilteredData({ confirmed, deaths, tested, hospitalized, onRespirator });
  };
  if (!initialDailyData.length) {
    return <></>;
  }
  const firstDate = initialDailyData[0].date;
  const newestDate = initialDailyData[initialDailyData.length - 1].date;
  const getDateString = (d) => {
    return new Date(d).toISOString().split('T')[0];
  };
  const decreaseDailyMonth = () => {
    const [y, m, d] = firstDate.split('-');
    const newDateTs = new Date(new Date(activeMonthDate).setMonth(new Date(activeMonthDate).getMonth() - 1)).setDate(
      parseInt(d),
    );
    if (newDateTs < new Date(firstDate).getTime()) {
      return;
    }
    const newDate = getDateString(newDateTs);
    setActiveMonthDate(newDate);
  };
  const increaseDailyMonth = () => {
    const [y, m, d] = newestDate.split('-');
    const newDateTs = new Date(new Date(activeMonthDate).setMonth(new Date(activeMonthDate).getMonth() + 1)).setDate(
      parseInt(d),
    );
    if (newDateTs > new Date().getTime()) {
      return;
    }
    const newDate = getDateString(newDateTs);
    setActiveMonthDate(newDate);
  };
  const dailyDateObj = new Date(activeMonthDate);
  return (
    <div>
      <Subtitle>
        <FormattedMessage id="dailyStatisticForMonth" /> {t(months[dailyDateObj.getMonth()])}{' '}
        {dailyDateObj.getFullYear()}
      </Subtitle>
      {filteredData && <LineChartSection data={filteredData} type="daily" />}
      <div className="chart-pagination">
        <button className="button" onClick={decreaseDailyMonth}>
          <FormattedMessage id="lastMonth" />
        </button>
        <button className="button" onClick={increaseDailyMonth}>
          <FormattedMessage id="nextMonth" />
        </button>
      </div>
    </div>
  );
}

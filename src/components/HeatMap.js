import React, { useState, useMemo } from 'react';
import { bool, array } from 'prop-types';
import * as S from '../styles/HeatMapWrapper.style';
import LoadingSpinner from '../styles/LoadingSpinner.style';
import WeekdayRows from './WeekdayRows';
import { groupPostsByDayHour } from '../hooks/useFetchPosts';
import { hours } from '../sharedVariables';

/*
  implement adaptivity + check styling issues(especially centering),
  accessibility,
  check cross-browser compatibility(especially with button for each hour),
  fix styling for button when focused and etc,
  implement tests,
  rewrite test for the hook, using reducer, so it is easy to match snapshot of posts,
  set a fixed timezone for testing env,
  add constants to hook,
  JSDoc description,
  rename variables,
  fix propTypes,
  fix linting,
  getBackgroundColor for posts from a style comp,
  theme variables,
  /search redirect to /search/javascript
*/

function HeatMap({ fetchedPosts, isLoaded, error }) {
  const transformedPosts = useMemo(() => groupPostsByDayHour(fetchedPosts), [fetchedPosts]);
  const [activeCell, setActiveCell] = useState({
    day: 0,
    hour: 12,
  });
  function dayHourClickHandler(weekDay, hour) {
    setActiveCell({ day: weekDay, hour });
  }
  const headerHours = hours.map((hour) => (
    <S.HeatMapHeaderHour key={hour}>{hour}</S.HeatMapHeaderHour>
  ));

  /* Handle loading and errors here, return loading spinner or error message */
  /* display an error if any */
  if (error) {
    return (
      <>
        Failed to fetch, check internet connection and subreddit name
      </>
    );
  }
  /* loading spinner while posts still being fetched */
  if (!isLoaded) {
    return (
      <LoadingSpinner />
    );
  }

  return (
    <>
      <S.HeatMapWrapper>
        <S.HeatMapHeader>
          <S.HeatMapHeaderHourWrapper>
            {headerHours}
          </S.HeatMapHeaderHourWrapper>
        </S.HeatMapHeader>

        <S.HeatMapBody>
          <WeekdayRows
            listOfPosts={transformedPosts}
            clickHandler={dayHourClickHandler}
            activeCell={activeCell}
          />
        </S.HeatMapBody>
      </S.HeatMapWrapper>
      <S.HeatMapTimeZone>
        All times are shown in your timezone:
        <S.TimeZoneBold>{` ${Intl.DateTimeFormat().resolvedOptions().timeZone}`}</S.TimeZoneBold>
      </S.HeatMapTimeZone>
    </>
  );
}

HeatMap.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  fetchedPosts: array.isRequired,
  isLoaded: bool.isRequired,
  // eslint-disable-next-line react/require-default-props, react/forbid-prop-types
  error: bool,
};

export default HeatMap;

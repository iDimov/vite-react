import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'
import clsx from 'clsx'
import s from './NoTrucksFound.module.css'

const NoTrucksFound = () => {
    const location = useLocation();
    const filters = useSelector((state: RootState) => state.filters);
    const locationFilter = filters.location;

    const getMessage = () => {
        if (location.pathname === '/favourites') {
            return 'No favourite trucks yet.';
        }
        if (locationFilter) {
            return `No trucks found in ${locationFilter}.`;
        }
        return 'No trucks found.';
    };

    const getSubMessage = () => {
        if (location.pathname === '/favourites') {
            return 'Start exploring and add your favourite trucks!';
        }
        if (locationFilter || filters.features?.length > 0 || filters.form) {
            return 'Try adjusting your filters or search in a different location.';
        }
        return 'Try searching in a specific location.';
    };

  return (
      <div className={s.container}>
          <div className={clsx(
          s.content,
          location.pathname === '/favourites' && s.favContent
        )}>
            <p className={s.p}>{getMessage()}</p>
            <p className={s.sub}>{getSubMessage()}</p>
          </div>
      </div>
  )
}

export default NoTrucksFound
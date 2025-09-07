import FilterTrucks from '../FilterTrucks/FilterTrucks'
import s from './FilterPanel.module.css'

const FilterPanel = () => {
  return (
      <div className={s.container}>
          <FilterTrucks/>
      </div>
  )
}

export default FilterPanel
import EquipmentList from '../EquipmentList/EquipmentList';
import { useSelector } from 'react-redux';
import { selectSelectedTruck } from '../../redux/trucks/selectors';
import s from './TrucksFeatures.module.css'


const TrucksFeatures = () => {

  const truck = useSelector(selectSelectedTruck); 
  return (
    <div className={s.container}>
  <EquipmentList truck={truck} />
  <h2 className={s.details}>Vehicle details</h2>
  <ul className={s.list}>
    <li className={s.item}>
      <p>Form</p>{truck?.form ?? '—'}
    </li>
    <li className={s.item}>
      <p>Length</p>{truck?.length ?? '—'}
    </li>
    <li className={s.item}>
      <p>Width</p>{truck?.width ?? '—'}
    </li>
    <li className={s.item}>
      <p>Height</p>{truck?.height ?? '—'}
    </li>
    <li className={s.item}>
      <p>Tank</p>{truck?.tank ?? '—'}
    </li>
    <li className={s.item}>
      <p>Consumption</p>{truck?.consumption ?? '—'}
    </li>
  </ul>
</div>

  )
}

export default TrucksFeatures
// import CityItem from './CityItem';
// import styles from './CityList.module.css';
// import Spinner from './Spinner';

// function CityList(props) {
//   if (props.isLoading) return <Spinner />;

//   return (
//     <ul className={styles.cityList}>
//       {props.cities.map((city) => (
//         <CityItem city={city} key={city.id} />
//       ))}
//     </ul>
//   );
// }


// export default CityList;

import styles from './CityList.module.css';
import Spinner from './Spinner';

function CityList({ cities, isLoading }) {
  
  if (isLoading) return <Spinner />;
  
  return (
    <ul className={styles.cityList}>
      <li>LIST</li>
    </ul>
  )
}

export default CityList


import React from 'react';
import styles from './FilterBar.module.css';

const FilterBar = ({ data, setJobsData }) => {
  const [text, setText] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [fullTimeOnly, setFullTimeOnly] = React.useState('');

  const [locationList, setLocationList] = React.useState([]);
  const [mobileFilters, setMobileFilters] = React.useState(false);

  React.useEffect(() => {
    const locations = data.map((item) => item.location);
    setLocationList(
      locations.filter((location, index, array) => {
        return array.indexOf(location) === index;
      })
    );
  }, [data]);

  function handleFilter(event) {
    event.preventDefault();
    let filteredData = data;

    if (text) {
      const selectedAttributes = [
        'company',
        'position',
        'description',
        'requirements',
        'role',
      ];
      filteredData = filteredData.filter((item) =>
        Object.entries(item).some(
          ([key, value]) =>
            selectedAttributes.includes(key) &&
            typeof value === 'string' &&
            value.toLowerCase().includes(text.toLowerCase())
        )
      );
    }

    if (location)
      filteredData = filteredData.filter((item) => item.location === location);

    if (fullTimeOnly)
      filteredData = filteredData.filter(
        (item) => item.contract === 'Full Time'
      );

    setJobsData(filteredData);
  }

  return (
    <div>
      <form className={styles.form} onSubmit={handleFilter}>
        <label style={{ display: 'none' }} htmlFor="text">
          Text
        </label>
        <input
          className={styles.text}
          type="text"
          id="text"
          placeholder="Filter by title, companies, expertise..."
          value={text}
          onChange={({ target }) => setText(target.value)}
        />
        <div
          className={`${styles.mobileFilters} ${
            mobileFilters ? styles.active : ''
          }`}
        >
          <select
            className={styles.location}
            value={location}
            onChange={({ target }) => setLocation(target.value)}
          >
            <option value="">Filter by location...</option>
            {locationList.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <label className={styles.fullTimeOnly}>
            <input
              type="checkbox"
              value="fullTime"
              checked={fullTimeOnly}
              onChange={({ target }) => setFullTimeOnly(target.checked)}
            />
            <span className={styles.checkmark}></span>
            Full Time Only
          </label>
        </div>
        <button
          className={styles.filterButton}
          type="button"
          onClick={() => setMobileFilters(!mobileFilters)}
        ></button>
        <button className={`${styles.submitButton} button`} type="submit">
          <span className={styles.buttonText}>Search</span>
          <span className={styles.buttonImage}></span>
        </button>
      </form>
    </div>
  );
};

export default FilterBar;

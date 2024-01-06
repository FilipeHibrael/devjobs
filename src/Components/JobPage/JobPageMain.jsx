import React from 'react';
import styles from './JobPageMain.module.css';

const JobPageMain = (props) => {
  return (
    <div className={styles.jobPageMain}>
      <div className={styles.intro}>
        <div>
          <div className={styles.info}>
            <span>{props.postedAt}</span>
            <span>{props.contract}</span>
          </div>
          <h1 className={styles.position}>{props.position}</h1>
          <span className={styles.location}>{props.location}</span>
        </div>
        <a
          className="button"
          href={props.apply}
          target="_blank"
          rel="noreferrer"
        >
          Apply Now
        </a>
      </div>
      <p className={styles.description}>{props.description}</p>
      <div className={styles.requirements}>
        <h2>Requirements</h2>
        <p>{props.requirements.content}</p>
        <ul className={styles.descriptionList}>
          {props.requirements.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.role}>
        <h2>What You Will Do</h2>
        <p>{props.role.content}</p>
        <ul className={styles.roleList}>
          {props.role.items.map((item, index) => (
            <li key={index}><span>{index+1}</span> {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobPageMain;

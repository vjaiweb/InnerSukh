import React from 'react';

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f8f8f8',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    marginTop: '20px',
    fontSize: '1.2rem',
    color: '#333',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  listItem: {
    marginBottom: '10px',
    fontSize: '1rem',
    color: '#444',
  },
  strong: {
    fontWeight: 'bold',
    color: '#222',
  },
};

const Helplines = () => {
  const governmentHelplines = [
    {
      name: 'Vandrevala Foundation Helpline',
      number: '1860-2662-345',
    },
    {
      name: 'Roshni Helpline',
      number: '91-22-25706000',
    },
    {
      name: 'Snehi',
      number: '91-22-2772 6770 / 91-22-2772 6771',
    },
  ];

  const mentalHealthCounselingNumbers = [
    {
      name: 'iCall Helpline (Tata Institute of Social Sciences)',
      number: '022-25563291 / 022-25563292',
    },
    {
      name: 'VIMHANS Mental Health Helpline',
      number: '011-26194950 / 011-26194960',
    },
  ];

  const topPsychiatrists = [
    {
      name: 'Dr. Alok Sarin',
      number: '123-456-7890',
    },
    {
      name: 'Dr. Anjali Chhabria',
      number: '987-654-3210',
    },
    {
      name: 'Dr. Sameer Zaveri',
      number: '567-890-1234',
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Mental Health Helplines in India</h2>
      <ul style={styles.list}>
        {governmentHelplines.map((helpline, index) => (
          <li key={index} style={styles.listItem}>
            <strong style={styles.strong}>{helpline.name}:</strong> {helpline.number}
          </li>
        ))}
      </ul>

      <h2 style={styles.heading}>Mental Health Counseling Numbers</h2>
      <ul style={styles.list}>
        {mentalHealthCounselingNumbers.map((counseling, index) => (
          <li key={index} style={styles.listItem}>
            <strong style={styles.strong}>{counseling.name}:</strong> {counseling.number}
          </li>
        ))}
      </ul>

      <h2 style={styles.heading}>Top Psychiatrists in India</h2>
      <ul style={styles.list}>
        {topPsychiatrists.map((psychiatrist, index) => (
          <li key={index} style={styles.listItem}>
            <strong style={styles.strong}>{psychiatrist.name}:</strong> {psychiatrist.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Helplines;

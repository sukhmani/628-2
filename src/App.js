import React, { useReducer, useEffect } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // Using useEffect to change the background color based on the count value
  useEffect(() => {
    document.body.style.backgroundColor = state.count % 2 === 0 ? 'lightblue' : 'lightcoral';
  }, [state.count]);

  return (
    <div style={styles.container}>
      <p style={styles.countText}>{state.count}</p>
      
      {/* Buttons positioned in a row */}
      <div style={styles.buttonRow}>
        <button 
          style={styles.button} 
          onClick={() => dispatch({ type: 'decrement' })}
        >
          <span style={styles.buttonText}>-</span>
        </button>

        <button 
          style={styles.button} 
          onClick={() => dispatch({ type: 'increment' })}
        >
          <span style={styles.buttonText}>+</span>
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  countText: {
    fontSize: '40px',
    marginBottom: '20px',
  },
  buttonRow: {
    display: 'flex',
    gap: '20px',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: '20px 40px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
  },
  buttonText: {
    fontSize: '30px',
    color: 'white',
    fontWeight: 'bold',
  },
};

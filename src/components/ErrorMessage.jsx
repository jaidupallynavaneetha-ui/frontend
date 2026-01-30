function ErrorMessage({ message }) {
  return (
    <div style={{ textAlign: 'center', padding: '40px', color: 'red', backgroundColor: '#ffebee', borderRadius: '8px', margin: '20px' }}>
      Error: {message || 'Something went wrong'}
    </div>
  );
}

export default ErrorMessage;

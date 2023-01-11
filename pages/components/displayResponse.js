const DisplayResponse = ({ response }) => {
  return (
    <>{response ? <div className="gpt-response">{response}</div> : null}</>
  );
};
export default DisplayResponse;

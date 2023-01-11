const DisplayResponse = ({response}) =>{
    return (<>
    {response ? <div>{response}</div>: null}
    </>)
}
export default DisplayResponse;
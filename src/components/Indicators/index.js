import './style.css';

function Indicators({arr}) {
    return (
        <div className='indicators'>
            {arr.map(item => <div className="indicator"></div>)}
        </div>
    )
}

export default Indicators

import './App.css'

function PowerBbank(){
return(
    <div className='powerbank'>
        <div className='power'>
            <p>Power</p>
            <div className='inner-power'>
                <div className='power-slider'></div>
            </div>
        </div>
        <div className='volume-slider'>
            <input type='range' min= '0' max= '0' step= '1' />
        </div>
        <div className='display'>
        </div>
        <div className='bank'>
            <p>Bank</p>
            <div className='bank-container'>
<div className='inner-bank'>
            </div>
            
            </div>
        </div>

    </div>
)
}
export default PowerBbank
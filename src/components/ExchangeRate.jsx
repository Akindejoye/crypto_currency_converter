const ExchangeRate = ({ exchangeRate, primaryCurrency, secondaryCurrency }) => {
    return ( 
        <div className="exchange-rate">
            <h3 style={{fontSize: '2rem', marginTop: '1rem', color:'blue'}}>Exchage Rate</h3>
            <h1 style={{fontSize: '3rem', marginTop: '1rem'}}>{exchangeRate}</h1>
            <p style={{fontSize: '1.3rem', marginTop: '1rem', color:'red'}}>{primaryCurrency} to {secondaryCurrency}</p>
        </div>
     );
}
 
export default ExchangeRate;
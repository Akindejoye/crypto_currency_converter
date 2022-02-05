const ExchangeRate = ({ exchangeRate, primaryCurrency, secondaryCurrency }) => {
    return ( 
        <div className="exchange-rate">
            <h3>Exchage Rate</h3>
            <h1>{exchangeRate}</h1>
            <p>{primaryCurrency} to {secondaryCurrency}</p>
        </div>
     );
}
 
export default ExchangeRate;
import { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import axios from 'axios';

const CurrencyConverter = () => {

    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA'];
    const [primaryCurrency, setPrimaryCurrency] = useState('BTC');
    const [secondaryCurrency, setSecondaryCurrency] = useState('BTC');
    const [livePrimaryCurrency, setLivePrimaryCurrency] = useState('BTC');
    const [liveSecondaryCurrency, setLiveSecondaryCurrency] = useState('BTC');
    const [amount, setAmount] = useState(1);
    const [exchangeRate, setExchangeRate] = useState(0);
    const [result, setResult] = useState(0);
    

    const convert = () => {
        const options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: {to_currency: secondaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', from_currency: primaryCurrency},
            headers: {
              'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
              'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
            }
          };

          axios.request(options).then((response) => {
            console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
            setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
            setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount);
            setLivePrimaryCurrency(primaryCurrency)
            setLiveSecondaryCurrency(secondaryCurrency)
        }).catch((error) => {
            console.error(error);
        });
    }

    return ( 
        <div className="currency-converter">
            <h2>CurrencyConverter</h2>
            <div className="input-box">
                <table>
                        <tbody>
                            <tr>
                                <td>Primary Currency:</td>
                                <td>
                                    <input
                                        type="number"
                                        value={amount}
                                        name= "currency-amount-1"
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <select
                                        type="number"
                                        value={primaryCurrency}
                                        name= "currency-option-1"
                                        className="currency-options"
                                        onChange={(e) => setPrimaryCurrency(e.target.value)}
                                    >
                                        {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Secondary Currency:</td>
                                <td>
                                    <input
                                        type="number"
                                        value={result}
                                        name= "currency-amount-2"
                                        disabled={true}
                                        />
                                </td>
                                <td>
                                    <select
                                        type="number"
                                        value={secondaryCurrency}
                                        name= "currency-option-2"
                                        className="currency-options"
                                        onChange={(e) => setSecondaryCurrency(e.target.value)}
                                    >
                                        {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button id='convert-button' onClick={convert}>Convert</button>
            </div>
            <ExchangeRate
                exchangeRate={exchangeRate}
                primaryCurrency={livePrimaryCurrency} 
                secondaryCurrency={liveSecondaryCurrency}
            />
        </div>
     );
}
 
export default CurrencyConverter;
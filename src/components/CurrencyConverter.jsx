import { useState } from "react";
import ExchangeRate from "./ExchangeRate";

const CurrencyConverter = () => {

    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA'];
    const [primaryCurrency, setPrimaryCurrency] = useState('BTC');
    const [secondaryCurrency, setSecondaryCurrency] = useState('BTC');

    console.log(secondaryCurrency);
    return ( 
        <div className="currency-converter">
            <h2>CurrencyConverter</h2>
            <div className="input-box">
                <table>
                        <tr>
                            <td>Primary Currency:</td>
                            <td>
                                <input
                                    type="number"
                                    value={''}
                                    name= "currency-amount-1"
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
                                    value={''}
                                    name= "currency-amount-2"
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
                </table>
            </div>
            <ExchangeRate />
        </div>
     );
}
 
export default CurrencyConverter;
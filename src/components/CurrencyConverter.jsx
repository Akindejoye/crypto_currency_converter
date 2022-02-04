import ExchangeRate from "./ExchangeRate";

const CurrencyConverter = () => {
    return ( 
        <div className="currency-converter">
            <h2>CurrencyConverter</h2>
            <div className="input-box">
                <table>
                    <body>
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
                                    value={''}
                                    name= "currency-option-1"
                                    className="currency-options"
                                >
                                    <option></option>
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
                                    value={''}
                                    name= "currency-option-2"
                                    className="currency-options"
                                >
                                    <option></option>
                                </select>
                            </td>
                        </tr>
                    </body>
                </table>
            </div>
            <ExchangeRate />
        </div>
     );
}
 
export default CurrencyConverter;
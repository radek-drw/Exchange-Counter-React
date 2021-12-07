const Currency = props => {
   const { title, ratio, amount, price } = props;
   const value = (amount / ratio * price).toFixed(2);

   return (
      <h3>{title} {amount <= 0 ? null : value}</h3>
   )
}

class ExchangeCounter extends React.Component {

   state = {
      amount: '',
      product: 'petrol'
   }

   static defaultProps = {
      currencies: [
         {
            id: 1,
            name: 'zloty',
            ratio: 1,
            title: 'Value in polish zloty is:'
         },
         {
            id: 2,
            name: 'euro',
            ratio: 4.56,
            title: 'Value in euros is:'
         },
         {
            id: 3,
            name: 'dollar',
            ratio: 3.67,
            title: 'Value in dollars is:'
         },
         {
            id: 4,
            name: 'pound',
            ratio: 5.12,
            title: 'Value in pounds is:'
         },
      ],
      prices: {
         electricity: .51,
         petrol: 5.24,
         apples: 2.99
      }
   }

   handleInput = e => {
      this.setState({
         amount: e.target.value
      })
   }

   handleSelect = e => {
      this.setState({
         product: e.target.value
      })
   }

   productUnit(product) {
      if (product === 'electricity') return <span> kWh</span>
      else if (product === 'petrol') return <span> litres</span>
      else if (product === 'apples') return <span> kilograms</span>
      else return null
   }

   productPrice = product => {
      return this.props.prices[product]
   }

   render() {
      const { amount, product } = this.state;

      const currencies = this.props.currencies.map(currency => (
         <Currency
            key={currency.id}
            title={currency.title}
            ratio={currency.ratio}
            amount={amount}
            price={this.productPrice(product)}
         />
      ))

      return (
         <div>

            <label>Select product:
               <select value={product} onChange={this.handleSelect}>
                  <option value="electricity">Electricity</option>
                  <option value="petrol">Petrol</option>
                  <option value="apples">Apples</option>
               </select>
            </label>

            <br />

            <label>Enter a value:
               <input
                  type="number"
                  onChange={this.handleInput}
                  value={amount}
               />
               {this.productUnit(product)}
            </label>

            {currencies}

         </div>
      )
   }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById('root'));
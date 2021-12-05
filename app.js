const Currency = props => {
  const { amount, ratio, title, char } = props;
  const value = (amount / ratio).toFixed(2);

  return (
    <h3>{title}{amount <= 0 ? '' : `${char} ${value}`}</h3>
  )
}

class ExchangeCounter extends React.Component {

  state = {
    amount: ''
  }

  currencies = [
    {
      id: 1,
      name: 'euro',
      ratio: 4.6,
      title: 'Value in euros: ',
      char: '€'
    },
    {
      id: 2,
      name: 'dollar',
      ratio: 3.7,
      title: 'Value in dollars: ',
      char: '$'
    },
    {
      id: 3,
      name: 'pound',
      ratio: 5.15,
      title: 'Value in pounds: ',
      char: '£'
    }
  ];

  handleChange = (e) => {
    this.setState({
      amount: e.target.value
    })
  }

  render() {

    const currencies = this.currencies.map(currency => (
      <Currency
        amount={this.state.amount}
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        char={currency.char}
      />
    ))

    return (
      <div>

        <label>Enter a value PLN:
          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </label>

        {currencies}

      </div>
    )
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById('root'));
const Currency = props => {
  const { amount, ratio, title, char } = props;
  const value = (amount / ratio).toFixed(2);

  return (
    <h3>{title}{amount <= 0 ? '' : `${char} ${value}`}</h3>
  )
}

class ExchangeCounter extends React.Component {

  state = {
    amount: '',
    ratioDollar: 3.7,
    ratioEuro: 4.6
  }

  handleChange = (e) => {
    this.setState({
      amount: e.target.value
    })
  }

  render() {
    return (
      <div>

        <label>Podaj wartość PLN:
          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </label>

        <Currency
          amount={this.state.amount}
          ratio={this.state.ratioDollar}
          title='Wartość w dolarach: '
          char='$'
        />

        <Currency
          amount={this.state.amount}
          ratio={this.state.ratioEuro}
          title='Wartość w euro: '
          char='€'
        />

      </div>
    )
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById('root'));
import "../../Page/BuyPage/BuyPage.css"
const BuyMonthly = () =>{
  return (
    <div className="buy-monthly">
    <h4 className="monthly-title">
    Estimate your monthly savings*
    </h4>
    <ul className="monthly-list">
      <li className="monthly-item">
        <input  type="number" className="monthly-input" />
        <p>Miles Driven Daily</p>
        </li>
        <li className="monthly-item">
          <div className="monthly-border">
            <p className="monthly-save">
              You save</p>
              <p className="monthly-cost">
                <sup>$</sup>0.00</p>
                <p>
                  Per Month*
                </p>
            </div>
          </li>
          <li className="monthly-item">
        <input  type="number" 
        className="monthly-input" />
        <p>Current Combined MPG</p>
        </li>
        </ul>
        <p 
        className="monthly-subtext">
        Enter your daily mileage and combined MPG to see how much you could save.
        </p>
    </div>
  )
}

export default BuyMonthly;
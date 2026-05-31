import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="investment-calculator-logo" />
      <h1>Ivestment Calculator</h1>
    </header>
  );
}

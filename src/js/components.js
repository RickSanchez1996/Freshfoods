class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer>
    <div class="logo-container">
      <img src="../images/logo.png" alt="fresh foods logo" height="100">
      <h2>Fresh Foods</h2>
    </div>
    <div class="social-media">
    <a href="https://www.facebook.com/" target="_blank" class="fa fa-facebook" name="facebook"></a>
    <a href="https://www.twitter.com/" target="_blank" class="fa fa-twitter" name="twitter"></a>
    <a href="https://www.instagram.com/" target="_blank" class="fa fa-instagram" name="instagram"></a>
    <p>&copy; 2023 Fresh Foods</p>
  </div>
    <nav><a href="./index.html">Home</a><a href="./savings.html">Savings</a><a href="./contact.html">Contact</a></nav>
  </footer>`;
  }
}
if (!customElements.get("custom-footer")) {
  customElements.define("custom-footer", CustomFooter);
}
class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header>
    <div class="logo-container">
      <img src="../images/logo.png" alt="fresh foods logo" height="100">
      <h1>Fresh Foods</h1>
    </div>
    <nav><a href="./index.html">Home</a><a href="./savings.html">Savings</a><a href="./contact.html">Contact</a><a href="javascript:void(0)" class="sign-up animBtn ">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Sign Up
        </a></nav>
  </header>`;
  }
}
if (!customElements.get("custom-header")) {
  customElements.define("custom-header", CustomHeader);
}

class CustomTable extends HTMLElement {
  connectedCallback() {
    // 2 column 4 row table
    this.innerHTML = `<table>
    <h2>Potential Savings</h2>
    <thead>
      <tr>
        <th>Monthly Spend</th>
        <th>Reward</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>$100 - $199</td>
        <td>2.5%</td>
      </tr>
      <tr>
        <td>$200 - $499</td>
        <td>5.0%</td>
      </tr>
      <tr>
        <td>$500 - $999</td>
        <td>7.5%</td>
      </tr>
      <tr>
        <td>$1000 or over</td>
        <td>10%</td>
      </tr>
    </tbody>
    </table>`;
  }
}
if (!customElements.get("custom-table")) {
  customElements.define("custom-table", CustomTable);
}

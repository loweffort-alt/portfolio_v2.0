import ContactImage from "./components/image.js";

const Layout = () => {
  return `
      <div>
        <h1>Contact me!</h1>
        <form>
          <div class="Name-Email">
            <div class="textContainer">
              <input type="text" name="name" id="form-name" required />
              <label class="lbl-name">
                <span class="text-name">Name</span>
              </label>
            </div>
            <div class="textContainer">
              <input type="text" name="phone" required id="form-phone" />
              <label class="lbl-name">
                <span class="text-name">Phone</span>
              </label>
            </div>
          </div>
          <div class="textContainer">
            <input type="email" name="email" required id="form-email" />
            <label class="lbl-name">
              <span class="text-name">Email</span>
            </label>
          </div>
          <div class="textContainer">
            <input type="text" name="message" required id="form-message" />
            <label class="lbl-name">
              <span class="text-name">Message</span>
            </label>
          </div>
          <div class="ButtonContainer">
            <button id="submit">Send</button>
          </div>
        </form>
      </div>
      ${ContactImage()}
  `;
};

export default Layout;

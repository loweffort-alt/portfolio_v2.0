import Frontend from "./components/frontend.js";
import Backend from "./components/backend.js";

const Layout = () => {
  return `
      <div class="frontend">
        <p>Frontend-Skills</p>
        ${Frontend()}
      </div>
      <div class="backend">
        <p>Backend-Skills</p>
        ${Backend()}
      </div>
	`;
};

export default Layout;

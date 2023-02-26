import { createApp } from "vue";
import components from "./vue/components/index.js";
// Import Tailwind CSS
import "./scss/main.scss";

const renderVueApps = () => {
  const vueRoots = document.querySelectorAll("[data-vue-root]");
  vueRoots.forEach((root) => {
    const app = createApp(components[root.dataset.vueRoot]);
    app.mount(root);
  });
};
if (["interactive", "complete"].includes(document.readyState)) {
  renderVueApps();
} else {
  window.addEventListener("load", () => {
    renderVueApps();
  });
}

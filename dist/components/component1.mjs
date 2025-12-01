// components/component1.js
import React from "react";
import { jsx } from "react/jsx-runtime";
function FirstComponent() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "This is a dummy paragraph." }) });
}
var component1_default = FirstComponent;
export {
  component1_default as default
};

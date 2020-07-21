import store from "../store";

function validate(urlAction) {
  const permissions = JSON.parse(localStorage.getItem("user")).adminpermits;

  const result = permissions.find((item) => {
    return item.id.includes(urlAction);
  });
  if (typeof result === "object") {
    store.dispatch("activeWarningNotice", false);
    return true;
  } else {
    store.dispatch("activeWarningNotice", true);
    return false;
  }
}

export { validate };

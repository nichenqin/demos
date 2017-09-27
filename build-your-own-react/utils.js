function isStatelessFunc(func) {
  return !isClass(func) && typeof func === "function";
}

function isClass(func) {
  return (
    typeof func === "function" &&
    /^class\s/.test(Function.prototype.toString.call(func))
  );
}

function shouldAddEventListener(propName) {
  return /^on.*$/.test(propName);
}
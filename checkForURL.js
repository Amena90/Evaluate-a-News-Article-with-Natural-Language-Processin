function checkForURL(inputText) {
  const urlPattern = /^(https?:\/\/)?([\w.-]+)+[\w-]+(\/[\w-]*)*$/;
  return urlPattern.test(inputText);
}
export { checkForURL };
const checkEmptyField = (url) => {
  if (url === "") {
    return false;
  } else if (url == null) {
    return false;
  }
  return true;
};

module.exports = checkEmptyField;

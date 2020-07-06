const checkArgument = (isArgumentValid, errorMessage) => {
  if (!isArgumentValid) {
    throw new Error(errorMessage);
  }
};

const requireNonNull = (value, errorMessage) => {
  if (value === null) {
    throw new Error(errorMessage);
  }
  return value;
};

const isIterable = (value) => {
  if (value == null) {
    return false;
  }
  return typeof value[Symbol.iterator] === 'function';
}

export {
  checkArgument,
  requireNonNull,
  isIterable,
};
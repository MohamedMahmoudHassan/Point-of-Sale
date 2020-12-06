import { toInteger } from "lodash";

const formatToCurrencyPart = (value, isLastPart) => {
  const stringValue = value.toString();
  if (isLastPart) return stringValue;

  switch (stringValue.length) {
    case 1:
      return `00${stringValue}`;
    case 2:
      return `0${stringValue}`;
    default:
      return stringValue;
  }
};

export default value => {
  const ret = [];

  while (value) {
    ret.push(formatToCurrencyPart(value % 1000, value < 1000));
    value = toInteger(value / 1000);
  }

  if (!ret.length) return "";
  return `${ret.reverse().join()}.00`;
};

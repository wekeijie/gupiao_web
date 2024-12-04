import { setItem, getItem, removeItem } from "./storage";
export const httpErrorFormat = (errors) => {
  let message = "";

  if (!errors || Object.keys(errors).length === 0) {
    return "Network link failed, please try again!";
  } else if (
    errors.response &&
    errors.response.data &&
    errors.response.data.errors
  ) {
    const errorData = errors.response.data.errors;
    Object.keys(errorData).forEach((key) => {
      message += errorData[key][0] + ";\n\r";
    });
  } else if (errors.message) {
    message += errors.message;
  } else {
    message = "An unknown error occurred.";
  }

  return message;
};

export const marketDataFormat = (input, fixed = 2) => {
  return parseFloat((input / Math.pow(10, fixed)).toFixed(fixed));
};

export const chartDataFormat = (
  close,
  height,
  low,
  open,
  timestamp,
  volume
) => {
  return {
    close: close,
    high: height,
    low: low,
    open: open,
    timestamp: timestamp * 1000,
    volume: volume,
  };
};

export const symbolChartCodeFormat = (code, prefix) => {
  if (prefix == 0) {
    return code + ".SZ";
  }
  if (prefix == 1) {
    return code + ".SH";
  }
  if (prefix == 116) {
    return code + ".hk";
  }
  return code;
};

export const symbolCodeFormat = (code, prefix) => {
  if (prefix == 0) {
    return "SZ" + code;
  }
  if (prefix == 1) {
    return "SH" + code;
  }
  if (prefix == 116) {
    return code + ".hk";
  }
  return code;
};

export const fuyingAmount = (buy_price, sell_price, number) => {
  if (sell_price == 0) {
    return 0;
  }
  return ((sell_price - buy_price) * number).toFixed(2);
};

export const extractTxtValue = (input) => {
  let returnojb = {}; // Define returnojb object

  switch (input) {
    case 1:
      returnojb.txt = "开盘竞价";
      break;
    case 2:
      returnojb.txt = "交易中";
      break;
    case 3:
      returnojb.txt = "盘中休市";
      break;
    case 4:
      returnojb.txt = "收盘竞价";
      break;
    case 5:
      returnojb.txt = "已收盘";
      break;
    case 6:
      returnojb.txt = "停牌";
      break;
    case 7:
      returnojb.txt = "退市";
      break;
    case 8:
      returnojb.txt = "暂停上市";
      break;
    case 9:
      returnojb.txt = "未上市";
      break;
    case 10:
      returnojb.txt = "未开盘";
      break;
    case 11:
      returnojb.txt = "盘前"; //美股
      break;
    case 12:
      returnojb.txt = "盘后"; //美股
      break;
    case 13:
      returnojb.txt = "休市";
      break;
    case 14:
      returnojb.txt = "盘中停牌";
      break;
    case 15:
      returnojb.txt = "非交易代码";
      break;
    case 16:
      returnojb.txt = "波动性中断";
      break;
    case 17:
      returnojb.txt = "盘后交易启动"; //沪深
      break;
    case 18:
      returnojb.txt = "盘后集中撮合交易"; //沪深
      break;
    case 19:
      returnojb.txt = "盘后固定价格交易"; //沪深
      break;
    default:
      returnojb.txt = "状态错误";
      break;
  }
  return returnojb.txt;
};

export const setContractID = (orderIndex) => {
  setItem("contractID", orderIndex);
};

export const getContractID = () => {
  return getItem("contractID");
};

export const rmContractID = (id) => {
  const order_id = getContractID();
  if (order_id == id) {
    removeItem("contractID");
  }
};

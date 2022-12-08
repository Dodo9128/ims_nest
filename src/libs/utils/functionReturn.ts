export interface IResultReturn {
  result: "ok" | "fail";
  message: string | null;
  data: object | null;
}

export const sendOk = (msg: string, data: object) => {
  const returnObject: IResultReturn = {
    result: "ok",
    message: msg,
    data: data,
  };
  return returnObject;
};

export const sendFail = (msg: string, data: object) => {
  const returnObject: IResultReturn = {
    result: "fail",
    message: msg,
    data: data,
  };
  return returnObject;
};

export const objectToStringForDebug = (result: object) => {
  return JSON.stringify(result);
};

/**
 * current Timezone timestamp maker
 *
 * @return "YYYY-MM-DD HH:mm:ss"
 */
export const currentTimeMaker = () => {
  const offset = new Date().getTimezoneOffset() * 60000;

  const currentTime = new Date(new Date().getTime() - offset).toISOString();

  return `${currentTime.substring(0, 10)} ${currentTime.substring(11, 19)}`;
};

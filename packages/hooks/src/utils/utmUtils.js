import { cookieUtils as Cookie } from "@/packages/utils/tailwindUtils";

const getUtmParamsFromUrl = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  return Object.fromEntries(
    Object.entries(params).filter(key => key[0].startsWith("utm_"))
  );
};

const setCookie = (name, params) => {
  const cookie = new Cookie();
  if (params && Object.keys(params).length) {
    const paramsString = JSON.stringify(params);
    let hostName = "";
    if (window.location.hostname.includes("bsstag.com")) {
      hostName = ".bsstag.com";
    } else if (window.location.hostname.includes("browserstack.com")) {
      hostName = ".browserstack.com";
    }
    cookie.create(name, paramsString, 0.0209, hostName);
  }
};

export const setUtmParams = () => {
  const params = getUtmParamsFromUrl();
  setCookie("user_utm_data", params);
};

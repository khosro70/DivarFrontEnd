interface setCookiesInterface {
  message?: string;
  accessToken: string;
  refreshToken: string;
}

export const setCookies = (tokens: setCookiesInterface) => {
  document.cookie = `DivarAccessToken=${tokens.accessToken}; max-age=${
    1 * 24 * 3600
  };path=/`;
  document.cookie = `DivarRefreshToken=${tokens.refreshToken}; max-age=${
    30 * 24 * 3600
  };path=/`;
};

function getCookie(cname: string) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export { getCookie };

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const callApi = async (
  method: string,
  endpoint: string,
  params?: any,
  token?: string
) => {
  const heads: any = {};

  if (token) {
    heads["Authorization"] = `Token ${token}`;
  }

  heads["Content-Type"] = "application/json";
  heads["Accept"] = "application/json";
  heads["Referer"] = baseUrl;
  if (process.env.NODE_ENV === "production") {
    heads["Credentials"] = "include";
  }

  const options: any = {
    method: method,
    headers: heads,
    ...(params?.["body"] && { body: JSON.stringify(params["body"]) }),
    ...(params?.["next"] && { next: params["next"] }),
  };

  const url = `${baseUrl}${endpoint}`;

  try {
    const response = await fetch(url, options);
    let res;

    try {
      res = await response.json?.();
    } catch (error) {}

    return {
      response: res,
      status: response.status,
    };
  } catch (error: any) {
    console.log(error.message);
  }
};

const liveHost = "https://us-central1-meals-1d8e6.cloudfunctions.net";
const localHost = "http://localhost:5001/meals-1d8e6/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";
export const host = isDevelopment ? localHost : liveHost;

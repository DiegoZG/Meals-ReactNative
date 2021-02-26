import React, { useState, useEffect, createContext } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContext = ({ children }) => {
  const [keyword, setKeyword] = useState(null);
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: () => null,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

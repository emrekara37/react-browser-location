import { useState, useEffect } from "react";
export default () => {
  const [location, setLocation] = useState(["", ""]);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLocation([position.coords.latitude, position.coords.longitude]);
      });
    }
  }, []);
  return location;
};

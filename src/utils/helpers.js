import * as Location from "expo-location";

export const getCurrentLocation = async () => {
  const response = { status: false, location: null };
  const resultPermissions = await Location.requestForegroundPermissionsAsync();
  if (resultPermissions.status === "denied") {
    Alert.alert("You must give permission to use location");
    return response;
  }
  const position = await Location.getCurrentPositionAsync({});
  const location = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  };
  (response.status = true), (response.location = location);
  return response;
};

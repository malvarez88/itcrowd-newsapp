import { Image } from "react-native";

export function LogoTitle() {
  return (
    <Image
      style={{ width: 120, height: 30, objectFit: "contain" }}
      source={require("../assets/newsapp-white.png")}
    />
  );
}

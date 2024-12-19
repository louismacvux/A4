import { Text } from "react-native";

const MyText = ({ children }) => {
  return (
    <Text>
      <Text style={{ fontSize: 18 }}>{children}</Text>
    </Text>
  );
};

export default MyText;

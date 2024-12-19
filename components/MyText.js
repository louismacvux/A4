import { Text } from "react-native";

const MyText = ({ children, style }) => {
  return (
    <Text>
      <Text style={[{ fontSize: 18 }, style]}>{children}</Text>
    </Text>
  );
};

export default MyText;

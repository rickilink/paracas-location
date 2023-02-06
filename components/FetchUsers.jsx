import { useEffect } from "react";
import { ActivityIndicator, Button, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slices/userSlice";
import { useNavigation } from "@react-navigation/native";

export const FetchUsers = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View className="flex-1 mt-10 justify-center items-center">
      <Button title={"Reload"} onPress={() => dispatch(fetchUsers())} />
      <Button title={"Home"} onPress={() => navigation.navigate("Home")} />
      {users.map((user) => {
        return (
          <View key={user.id}>
            <View>
              <View>
                <Text>
                  {user.first_name} {user.last_name}
                </Text>
              </View>
              <View>
                <Text>{user.email}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

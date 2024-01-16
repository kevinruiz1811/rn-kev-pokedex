import React from "react";
import { View } from "react-native";

import LoginForm from "../auth/LoginForm";
import UserData from "../auth/UserData";
import UseAuth from "../hooks/UseAuth";

const AccountScreen = () => {
	const { auth } = UseAuth();

	return <View>{auth ? <UserData /> : <LoginForm />}</View>;
};

export default AccountScreen;

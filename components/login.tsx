import { View, StyleSheet, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.card}>
                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.subtitle}>Sign in to your account</Text>
                
                <View style={styles.inputContainer}>
                    <View style={styles.inputIcon}>
                        <Text style={styles.iconText}>👤</Text>
                    </View>
                    <TextInput 
                        placeholder="Username"
                        placeholderTextColor="#999"
                        style={styles.input}
                        value={username}
                        onChangeText={setUsername}
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.inputIcon}>
                        <Text style={styles.iconText}>🔒</Text>
                    </View>
                    <TextInput 
                        placeholder="Password"
                        placeholderTextColor="#999"
                        style={styles.input}
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity 
                        onPress={() => setShowPassword(!showPassword)}
                        style={styles.eyeButton}
                    >
                        <Text style={styles.eyeIcon}>
                            {showPassword ? "🙈" : "👁️"}
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.forgotButton}>
                    <Text style={styles.forgotText}>Forgot password?</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f9fa",
        justifyContent: "center",
        paddingHorizontal: 24,
    },
    card: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#1a1a1a",
        textAlign: "center",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        marginBottom: 32,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
        borderRadius: 12,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#e9ecef",
        overflow: "hidden",
    },
    inputIcon: {
        padding: 12,
        paddingHorizontal: 16,
        backgroundColor: "#e9ecef",
    },
    iconText: {
        fontSize: 16,
    },
    input: {
        flex: 1,
        paddingVertical: 14,
        paddingHorizontal: 12,
        fontSize: 16,
        color: "#1a1a1a",
    },
    eyeButton: {
        padding: 12,
        paddingHorizontal: 16,
    },
    eyeIcon: {
        fontSize: 16,
    },
    loginButton: {
        backgroundColor: "#007AFF",
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: "center",
        marginTop: 8,
        shadowColor: "#007AFF",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    loginButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
    forgotButton: {
        alignItems: "center",
        marginTop: 16,
    },
    forgotText: {
        color: "#007AFF",
        fontSize: 14,
        fontWeight: "500",
    },
});

export default Login;
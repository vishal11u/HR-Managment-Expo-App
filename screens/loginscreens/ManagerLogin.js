import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

const schema = yup.object().shape({
  email: yup.string().required('Email or Username is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const ManagerLogin = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigation();

  const onSubmit = data => {
    if (data.email !== "abc123" || data.password !== "123456") {
      Alert.alert("Invalid Username and Password")
    } else {
      console.log(data);
      navigate.navigate("DrawerNavigator")
    }
  };

  const handleGoBack = () => {
    navigate.goBack();
    console.log('Go back pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.circleContainerTop}>
        <View style={styles.circleLarge}></View>
        <View style={styles.circleSmall}></View>
      </View>
      <View style={styles.circleContainerBottom}>
        <View style={styles.circleLarge}></View>
        <View style={styles.circleSmall}></View>
      </View>
      <View style={styles.formContainer}>
        <Image
          source={{ uri: 'https://img.freepik.com/free-vector/boss-man-concept-illustration_114360-19846.jpg?t=st=1717261717~exp=1717265317~hmac=330da47853c0f48794a9e62f67cb42c40c8a83cbca45afa1b55f3cc577d4c093&w=740' }}
          style={styles.logo}
        />
        <View style={styles.header}>
          <Text style={styles.headerText}>Manager Login</Text>
        </View>
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={[styles.input, errors.email && { borderColor: 'red' }]}
                  placeholder="Email or Username"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                {errors.email && <Text className="text-red-500 -mt-4 mb-3">{errors.email.message}</Text>}
              </>
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={[styles.input, errors.password && { borderColor: 'red' }]}
                  placeholder="Password"
                  secureTextEntry
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                {errors.password && <Text className="text-red-500 -mt-4 mb-4">{errors.password.message}</Text>}
              </>
            )}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
            <Text style={styles.goBackButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
    paddingTop: 50,
  },
  circleContainerTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 100,
    height: 100,
    zIndex: 10
  },
  circleContainerBottom: {
    position: 'absolute',
    bottom: 5,
    right: 0,
    width: 100,
    height: 100,
  },
  circleLarge: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#B0B0B0',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  circleSmall: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#D3D3D3',
    position: 'absolute',
    top: 50,
    left: 70,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 320,
    height: 320,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 5,
  },
  input: {
    height: 50,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    height: 50,
    backgroundColor: '#333333',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#1E90FF',
    textAlign: 'center',
    fontSize: 16,
  },
  goBackButton: {
    height: 50,
    backgroundColor: '#cccccc',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  goBackButtonText: {
    color: '#333333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ManagerLogin;

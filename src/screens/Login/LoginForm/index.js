import React from 'react';
import { View } from 'react-native';
import { CustomButton, FloatingLabelTextInput, Loader } from 'src/components';
import locales from 'src/constants/localization';
import PropTypes from 'prop-types';
import styles from 'src/screens/Login/LoginForm/styles';

const renderSubmitButton = (isLoading, authHandler) => {
  if (isLoading) {
    return <Loader viewStyle={styles.loader} />;
  }
  return <CustomButton viewStyle={styles.customButtonView} onPress={authHandler} text={locales.login} />;
};

const LoginForm = props => {
  const { email, password, isLoading, textInputRef, handleFieldInput, authHandler } = props;
  return (
    <View style={styles.inputContainer}>
      <FloatingLabelTextInput
        onSubmitEditing={() => textInputRef.current.focus()}
        customContainerStyle={styles.input}
        floatingLabel={locales.email}
        value={email}
        autoComplete={'off'}
        autoCorrect={false}
        onChangeText={value => handleFieldInput(value, 'email')}
        returnKeyType={'next'}
        blurOnSubmit={false}
        autoFocus={false}
        keyboardType={'email-address'}
      />
      <FloatingLabelTextInput
        textInputRef={textInputRef}
        floatingLabel={locales.password}
        value={password}
        customContainerStyle={styles.input}
        autoCorrect={false}
        secureTextEntry={true}
        onChangeText={value => handleFieldInput(value, 'password')}
        returnKeyType={'go'}
        onSubmitEditing={authHandler}
      />
      {renderSubmitButton(isLoading, authHandler)}
    </View>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  textInputRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
  handleFieldInput: PropTypes.func.isRequired,
  authHandler: PropTypes.func.isRequired
};

export default React.memo(LoginForm);

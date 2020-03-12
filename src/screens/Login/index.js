import React, { useRef, useState } from 'react';
import { ImageBackground, Keyboard, Platform } from 'react-native';
import { KeyboardAvoidAndDismissView } from 'src/components';
import LoginForm from 'src/screens/Login/LoginForm';
import { connect } from 'react-redux';
import { authenticateUser } from 'src/store/actions/userActions';
import { StringUtils } from 'src/utils';
import locales from 'src/constants/localization';
import backgroundImage from 'src/assets/images/background/background.jpg';
import PropTypes from 'prop-types';
import styles from 'src/screens/Login/styles';
import { checkIfLoadingSelector } from 'src/store/selectors';
import { userActionTypes } from 'src/constants/actionTypes';

const Login = props => {
  const textInputRef = useRef(null);
  const [fields, setFields] = useState({
    email: '',
    password: ''
  });

  const handleFieldInput = (value, fieldName) => {
    setFields({ ...fields, [fieldName]: value });
  };

  /**
   * Handles user authentication.
   * If authentication unsuccessful, alerts user.
   */
  const authHandler = async () => {
    const { email, password } = fields;
    if (StringUtils.areNotEmpty(email, password)) {
      Keyboard.dismiss();
      props.authenticateUser(email, password);
    } else {
      alert(locales.formInvalid);
    }
  };
  //RENDER
  const { email, password } = fields;
  const { isLoading } = props;
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <KeyboardAvoidAndDismissView
        viewStyle={styles.container}
        behavior={Platform.select({ ios: 'padding', android: '' })}>
        <LoginForm {...{ email, password, isLoading, textInputRef, handleFieldInput, authHandler }} />
      </KeyboardAvoidAndDismissView>
    </ImageBackground>
  );
};

Login.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  authenticateUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ isLoading: checkIfLoadingSelector(state)([userActionTypes.AUTH_USER]) });

const mapDispatchToProps = {
  authenticateUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

import { Alert } from 'react-native';
import { AxiosError } from 'axios';

export const showErrorAlert = (error: AxiosError) => {
  if (error.status === 400) {
    Alert.alert('Something went wrong', 'Please check your inputs and try again');
    return;
  }
  Alert.alert(error.message);
};

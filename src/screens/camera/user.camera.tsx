import React, { PureComponent, useRef } from 'react';
import {connect} from 'react-redux';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import {getPhoto} from '../todo-list/todo.actions';
import { NavigationInjectedProps } from 'react-navigation';
import { ROUTES } from '../../constants/routes'

const UserCameraComp = (props: any) => {
    const [
        { cameraRef, type, isRecording },
        { recordVideo, setIsRecording, takePicture },
      ] = useCamera(props);

const takePict = async () => {
    if (cameraRef) {
        const options = { quality: 0.5, base64: false };
        const data = await takePicture(options);
        props.getPhoto(data.uri)
        console.log(data.uri);
        //props.navigation.navigate(ROUTES.ToDo);
    }
};

    return (
        <View style={styles.container}>
            <RNCamera
                ref={ cameraRef } 
                style={styles.preview}
                type={RNCamera.Constants.Type.front}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                onGoogleVisionBarcodesDetected={({ barcodes }) => {
                    console.log(barcodes);
                }}
            />
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={takePict} style={styles.capture}>
                    <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const mapDispatchToProps = { getPhoto };
  
export const UserCamera = connect(null, mapDispatchToProps)(UserCameraComp);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});
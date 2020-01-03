import React from 'react';
import { View, Modal } from 'react-native';

interface IItemModal {
    isVisible: boolean | undefined,
    content: React.ReactChild | null
}

export const ItemModal = (props: IItemModal) => {
    return(
        <View style={{marginTop: 22}}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={props.isVisible}
          >
              {props.content}
        </Modal>
      </View>
    )

}
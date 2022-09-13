import React from "react";
import { Modal, View } from "react-native";

const CustomModal = ({caca, pene, children}) => {
    return (
        <View>
            <Modal
            animationType={caca}
            visible = {pene}
            >
                {children}
            </Modal>
        </View>
    )
}

export default CustomModal;
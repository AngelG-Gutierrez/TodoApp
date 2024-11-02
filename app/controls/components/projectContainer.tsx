import CheckBox from "@react-native-community/checkbox";
import { useState } from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import DashedLine from "react-native-dashed-line";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function ProjectContainer(){
    return(
        <View>
            <View style={styles.viewProject}>
                <View>
                    <View>
                        <TouchableOpacity>
                            <Icon size={20} name="check-circle"></Icon>
                        </TouchableOpacity>
                    </View>
                    <Text>Proyecto TO DO APP</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewProject:{
        borderRadius:20,
        borderColor:'rgba(128, 128, 128, .3)',
        borderWidth:1,
        width:200,
        height:300
    },


})
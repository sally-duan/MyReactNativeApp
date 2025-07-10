import {Button, Input, Status, Layout, Text} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';
import React from 'react';

const TodoForm = ({onFormSubmit})=>{
const [value, setValue]= React.useState("");
const handleSubmit = ()=>{

    onFormSubmit(
{
    title:value,
    completed: false
});
setValue("");
}

return (

<Layout style = {styles.rowContainer} level = "1">
<Input
style = {styles.Input}
// eslint-disable-next-line react/no-unknown-property
Status = 'basic'
placeholder ='add todo'
onChangeText = {nextValue =>setValue(nextValue)}
/>


<View style = {styles.controlContainer}> 

    <Button size='tiny' onPress ={handleSubmit}>SUBMIT</Button>
</View>
</Layout>
)
};



export default TodoForm;

const styles = StyleSheet.create(
    {
        Input: {
            flex:1,
            margin:2
        },
        rowContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },

        controlContainer : {
            borderRadius:4,
            margin:2,
            padding:6,
            backgroundColor:'#3366FF'
        },
        button: {},
        container:{
            flex:5,
            flexDirection : 'row'

        },
        layout:{
            flex:1,
            justifyContent : 'center',
            alignItems:'center'
        }


    }
)



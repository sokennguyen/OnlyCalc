import { View, TouchableHighlight, Text } from 'react-native'

const Operator = ({equation, setEquation, value}) => {
    const operators = ['+','-','x','/']
    const opOnPress = () => {
        if (value=='CE')
        {
            setEquation('0')
            return
        }
        console.log(!isNaN(equation[equation.length-1]))
        if (!isNaN(equation[equation.length-1]))
        {
            setEquation(equation.concat(value))
            return
        }
        else 
        {
            setEquation(equation.substring(0,equation.length-1)+value) // /.$/ is regex end of string
            return
        }
    }
    return  <View style={{flex:1}}>
                <TouchableHighlight
                    style={{
                        width:'100%',
                        height:'100%',
                    }}
                    onPress={opOnPress}
                    underlayColor='white'>
                        <View style={{ flex:1 }}>
                            <Text style={{
                                width:'100%',
                                height:'100%',
                                fontSize:30,
                                fontWeight:'bold',
                                textAlign:'center',
                                justifyContent:'center',
                                backgroundColor:'orange',
                                }}
                            >{value}</Text>
                        </View>
                </TouchableHighlight>
            </View>
}

export default Operator

import { View, TouchableHighlight, Text } from 'react-native'

const NumButton = ({equation,setEquation,value}) => {
    const operators = ['+','-','x','/']
    const calculate = () => {
        let found = false;
        let i = 0;
        while (!found)
        {
            if (equation.lastIndexOf(NaN)!='.') 
            {
                i=equation.lastIndexOf(NaN)
                found=true
            }
        }
        const x = parseInt(equation.substring(0,i))
        const y = parseInt(equation.substring(i+1))
        const op = equation[i]
        let result = 0;
        //switch 
        setEquation()
    }
    const numOnPress = () => {
        for (i=0;i<operators.length;i++) 
        {
            if (equation.lastIndexOf(i))
            {
                const latestNum = equation.substring(equation[equation.lastIndexOf(i)],equation.length-1)
            }
            else 
            {
                const latestNum = equation
            }
        }
        if (value=='=') 
        {
            setEquation=calculate()
            return
        }
        if (equation==0)    
            setEquation(value.toString())
        else if (equation[equation.length-1]!='.')
            setEquation(equation.concat(value.toString()))
        else if (equation[equation.length-1]=='.' && !isNaN(value))
            setEquation(equation.concat(value.toString()))

    }
    return  <View style={{flex:1}}>
                <TouchableHighlight
                    style={{
                        width:'100%',
                        height:'100%',
                    }}
                    onPress={numOnPress}
                    onLongPress={numOnPress}
                    underlayColor='white'>
                        <View style={{ flex:1 }}>
                            <Text style={{
                                width:'100%',
                                height:'100%',
                                fontSize:50,
                                fontWeight:'bold',
                                textAlign:'center',
                                justifyContent:'center',
                                backgroundColor:'pink',
                                }}
                            >{value}</Text>
                        </View>
                </TouchableHighlight>
            </View>
}

export default NumButton

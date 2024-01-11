import { Button, View, Text, TouchableHighlight} from 'react-native'
import NumButton from './NumButton'

const Numpad = (props) => {
    return (
        <View style={{flex:1}}>
            <View style={{
                    flex:1,
                    flexDirection:'row'
             }}> 
                <NumButton equation={props.equation} setEquation={props.setEquation} value={7}/>
                <NumButton equation={props.equation} setEquation={props.setEquation} value={8}/>
                <NumButton equation={props.equation} setEquation={props.setEquation} value={9}/>
            </View>
            <View style={{
                    flex:1,
                    flexDirection:'row',
             }}> 
                <NumButton equation={props.equation} setEquation={props.setEquation} value={4}/>
                <NumButton equation={props.equation} setEquation={props.setEquation} value={5}/>
                <NumButton equation={props.equation} setEquation={props.setEquation} value={6}/>
            </View>
            <View style={{
                    flex:1,
                    flexDirection:'row',
                    backgroundColor:'green',
             }}> 
                <NumButton equation={props.equation} setEquation={props.setEquation} value={1}/>
                <NumButton equation={props.equation} setEquation={props.setEquation} value={2}/>
                <NumButton equation={props.equation} setEquation={props.setEquation} value={3}/>
            </View>
            <View style={{
                    flex:1,
                    flexDirection:'row',
                    backgroundColor:'green',
             }}> 
                <NumButton equation={props.equation} setEquation={props.setEquation} value={0}/>
                <NumButton equation={props.equation} setEquation={props.setEquation} value={'.'}/>
                <NumButton equation={props.equation} setEquation={props.setEquation} value={'='}/>
            </View>
        </View>
    )
}

export default Numpad

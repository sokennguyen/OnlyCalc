import Operator from './Operator'
import {View} from 'react-native'

const ListOperator = (props) => {
    return (
        <View style={{flex:1}}>
            <Operator equation={props.equation} setEquation={props.setEquation} value={'CE'}/>
            <Operator equation={props.equation} setEquation={props.setEquation} value={'+'}/>
            <Operator equation={props.equation} setEquation={props.setEquation} value={'-'}/>
            <Operator equation={props.equation} setEquation={props.setEquation} value={'x'}/>
            <Operator equation={props.equation} setEquation={props.setEquation} value={'/'}/>
        </View>
    )
}

export default ListOperator

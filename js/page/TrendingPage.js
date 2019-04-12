import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ListView, Image, Button} from 'react-native';
import {connect} from 'react-redux';
import actions from '../action/index';
class TrendingPage extends Component<Props> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Button
                title="Learn More"
                onPress={()=>{this.props.onThemeChange('#096')}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,

    },
    cellViewStyle: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    leftViewStyle: {
        flex:0.2,
        justifyContent:'center',
        alignItems:'center'

    },
    rightViewStyle: {
        flex:0.8,
        borderColor:'rgba(100,53,201,0.1)',
        borderBottomWidth: 1
    },
    bottomViewStyle: {
        flexDirection: 'row'
    },
    itemViewStyle: {
        marginRight: 26
    },
    titleStyle:{
        fontWeight:'bold'
    }
});
const mapStateToProps=state=>({});
const mapDispathToProps=dispatch=>({
    onThemeChange: theme=>dispatch(actions.onThemeChange(theme))
});
export default connect(mapStateToProps,mapDispathToProps)(TrendingPage)
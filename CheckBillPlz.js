
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

var CheckBillPlz = React.createClass({

  getInitialState: function () {
    return {
      amount: '',
      ppl:'',
      big:'',
      bigAmount:'',
      result:''
    };
  },

  render: function() {
    var content = null;
    var contentBig = null;
    var resultAmount = null;
    var totalSmallppl = null;
    var totalSmallAmnt = null;


    //-- Check user input
    if (this.state.amount != '' && this.state.ppl != '' && this.state.ppl != 0) {

      //-- Calculate the amount for small people
      if (this.state.bigAmount != '' && this.state.big != ''){
        this.totalSmallppl = (this.state.ppl-this.state.big)
        this.totalSmallAmnt = (this.state.amount-this.state.bigAmount)
        this.resultAmount =  this.totalSmallAmnt / this.totalSmallppl
      } else {
        this.totalSmallppl = this.state.ppl
        this.totalSmallAmnt = this.state.amount
        this.resultAmount = this.state.amount / this.state.ppl
      }

      content = <Text style={styles.valResult}>
      สมาชิก {this.totalSmallppl} คน จ่ายคนละ : {this.resultAmount}
      </Text>

    } else {
      content = <Text style={styles.instructions}>ค่าอาหารจะแสดงตรงนี้จ้า</Text>
    }

    // Show the big result section
    if (this.state.bigAmount != '' && this.state.big != '' && this.state.big != 0) {
      contentBig = <Text style={styles.valResult}>
      เจ้าภาพ {this.state.big} คน จ่ายคนละ : {this.state.bigAmount / this.state.big}
      </Text>

    }

    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
        <Strong>Welcome to CheckBillPlz App!</Strong>
      </Text>
      <Text style={styles.instructions}>
        สุดยอดโปรแกรมหารค่าข้าวที่ดีที่สุดบนโลกนี้
      </Text>
      <TextInput style={styles.valInput}
        ref= "amount"
        returnKeyType = 'go'
        keyboardType='numeric'
        placeholder='ค่าอาหารทั้งหมด....(บาท)'
        autoFocus={true}
        onChangeText={(amount) => this.setState({amount})}
        value={this.state.amount} />
      <TextInput style={styles.valInput}
        ref= "ppl"
        returnKeyType = 'go'
        keyboardType='numeric'
        placeholder='จำนวนสมาชิกทั้งหมด....(คน)'
        onChangeText={(ppl) => this.setState({ppl})}
        value={this.state.ppl} />
      <TextInput style={styles.valInput}
        returnKeyType = 'go'
        keyboardType='numeric'
        placeholder='จำนวนเจ้าภาพ....(คน)'
        onChangeText={(big) => this.setState({big})}
        value={this.state.big} />
      <TextInput style={styles.valInput}
        returnKeyType = 'go'
        keyboardType='numeric'
        placeholder='เจ้าภาพออกเงิน....(บาท)'
        onChangeText={(bigAmount) => this.setState({bigAmount})}
        value={this.state.bigAmount}  />
      {content}
      {contentBig}
      </View>
    );
  }
});

var baseFontSize = 12;

var Strong = React.createClass({
  render: function() {
    return (
      <Text style={styles.bold}>
      {this.props.children}
      </Text>
    )
  }
});



const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    padding: 10,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  heading: {
    fontSize: baseFontSize*2,
    textAlign: 'center',
    margin: 10,
    color: '#0000CC',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  valInput: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 0,
    color: '#333333',
  },
  valResult: {
    fontSize: 20,
    padding: 4,
    margin: 10,
    marginTop: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
});

module.exports = CheckBillPlz;

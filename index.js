import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import Constant from 'Constant'

class MonthYearsPicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false,
            years: new Date().getFullYear(),
            selectedMonth: Constant.month[new Date().getMonth()],
        }
    }

    render() {
        const month = Constant.month
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.isShow}
                onRequestClose={this.props.onRequestClose}
            >
                <TouchableOpacity style={{ flex: 1 }} onPress={this.props.onRequestClose}>
                    <View />
                </TouchableOpacity>
                <View style={{ height: 300, backgroundColor: "#FFFFFF" }}>
                    <View style={{ padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => this.setState({ years: this.state.years - 1 }, this.props.years(this.state.years))}>
                            <Text>Prev</Text>
                        </TouchableOpacity>
                        <Text>{this.state.years}</Text>
                        <TouchableOpacity onPress={() => this.setState({ years: this.state.years + 1 }, this.props.years(this.state.years))}>
                            <Text>Next</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 1, backgroundColor: "#000000" }} />
                    <View style={{ marginHorizontal: 30, marginVertical: 20, flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center' }}>
                        {month.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => {
                                    this.setState({ selectedMonth: item.key })
                                    this.props.month(item)
                                    this.props.years(this.state.years)
                                }} style={styles.monthLabel}>
                                    <Text style={{ textAlign: 'center', fontSize: this.state.selectedMonth == item.key ? 25 : 15 }}>{item.name}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </View>
            </Modal>
        )
    }
}

export default { MonthYearsPicker }
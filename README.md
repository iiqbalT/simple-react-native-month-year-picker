# simple-react-native-month-year-picker
Simple react native month year picker with modal

Simple react native month year picker with modal is a simple component inspired from <a href="https://github.com/elinahovakimyan/react-native-month-picker#readme">react-native-month-picker</a>.

# install
```
npm install simple-react-native-month-year-picker --save
```

# how to use
```javascript
import MonthYearsPicker from simple-react-native-month-year-picker
```

```javascript
<MontYearsPicker
    isShow={this.state.pickerMonth}
    onRequestClose={() => this.setState({ pickerMonth: false })}
    years={(years) => console.log(years)}
    month={(month) => console.log(month)}
/>
```
# react-native-simple-month-year-picker
Simple react native month year picker with modal

Simple react native month year picker with modal is a simple component inspired from <a href="https://github.com/elinahovakimyan/react-native-month-picker#readme">react-native-month-picker</a>.

# install
```
npm install react-native-simple-month-year-picker --save
```

# how to use
```javascript
import MonthYearPicker from 'react-native-simple-month-year-picker';
```

```javascript
<MonthYearPicker
    isShow={isShow}
    close={() => setIsShow(false)} //setState isShow to false
    onChangeYear={(year) => console.log(year)}
    onChangeMonth={(month) => {
        console.log(month)
    }}
/>
```

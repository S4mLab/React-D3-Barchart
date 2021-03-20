# Bar Chart

in the barchart, the `rect` component has 4 attr
1. x: the horizontal starting point, the default at the top left corner
2. y: the vertical starting point, default at also at the top left corner and then going down
3. width: the width of a bar, how wide it can be. In the horizontal barchart, the width will represent the data of that specific category
4. height: in vertical barchart, the height represent the value

>> in vertical chart: height represents the value of a category
>> in horizontal chart: width represents the value
>> so depend on your case, their role can be switched

`scaleBand`
Scale band is use to calcualte and fit all the value of the independent scale

`Band Scale` 
for ordinal attributes
it provides something called `bandwidth`
`bandwidth` is the width of one bar

`scaleLinear`
Scale linear is use to calculate the height of value bar of a category

`Horizontal bar chart`
x: 0
y: scaleBand
width: scaleLinear - represent the data
height: same for every bar

linear scale: scale the data
band scale: scale the categories

`Vertical bar chart`
x: scaleBand
y: height
width: same for all bars
height: linear scale - represent data

linear scale: scale the data
band scale: scale the categories
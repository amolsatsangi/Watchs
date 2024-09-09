# Digital and Analog Watch Implementations

This repository contains the implementation of both a **Digital** and an **Analog** watch using web technologies like HTML, CSS, and JavaScript. These watches showcase how basic timekeeping functionality can be visualized using frontend development techniques.

## Features

### 1. **Digital Watch**
- Displays the current time (hours, minutes, and seconds) in a digital format.
- Uses JavaScript to dynamically update the time every second.
- Styled using modern CSS for a clean and minimalistic design.
- See Implementation [here](http://kausani.me/Watchs/Digital%20Watch/index.html)<br>
- See code [here](https://github.com/amolsatsangi/Watchs/tree/main/Digital%20Watch)<br>
<img src="Digital%20Watch/Capture2.PNG">

### 2. **Analog Watch**
- A real-time analog clock with moving hour, minute, and second hands.
- The watch face and hand movements are styled and animated using CSS.
- JavaScript updates the positions of the hands to reflect the current time.
- Implementation [here](http://kausani.me/Watchs/Analog%20Watch/index.html) <br>
- code [here](https://github.com/amolsatsangi/Watchs/tree/main/Analog%20Watch)<br>
<img src="Analog%20Watch/Capture.PNG">

## Technologies Used

- **HTML5**: For the structure of the watches.
- **CSS3**: For styling, animations, and visual design.
- **JavaScript**: For real-time clock functionality and updating the time dynamically.

## Repository Structure


- **digital_watch.html**: The digital watch implementation.
- **analog_watch.html**: The analog watch implementation.
- **styles/**: Contains the CSS files for both watches.
- **scripts/**: Contains the JavaScript files for both watches.

## How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/amolsatsangi/Watchs.git
cd Watchs
```
2. Open either digital_watch.html or analog_watch.html in your web browser to view the respective watch.

## How the Watches Work

### Digital Watch
- The Digital Watch uses JavaScript’s setInterval() function to update the time every second. The time is formatted and displayed in an easy-to-read digital format using the Date() object.
### Analog Watch
- The Analog Watch calculates the rotation angles for the hour, minute, and second hands based on the current time. CSS transforms and transitions are applied to animate the hands smoothly around the clock face.

## Future Improvements

- **Add Alarms**: A potential feature to add an alarm functionality to both watches.
- **Custom Themes** : Implementing themes or color schemes that the user can choose from.

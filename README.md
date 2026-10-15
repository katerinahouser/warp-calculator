# Warp Calculator

A simple web-based calculator for determining warp requirements and reed compatibility for weaving projects.

## About

Warp Calculator helps weavers calculate warp requirements, explore how to choose a sett, and determine the average number of warp ends per reed dent.

The website includes three features:

- **Warp Calculator:** Calculate total warp ends and yardage.
- **Sett Guide:** Explore yarn measurements, weave structures, fabric density, and reed selection through interactive reference cards.
- **Reed Compatibility Helper:** Calculate the average number of warp ends per dent based on your desired sett and reed size.

## Why I Made It

Warp calculations are simple but repetitive. I created this project to make these calculations quicker and more accessible while providing useful references for planning a weaving project.

## How to Use

### Warp Calculator

1. Enter the width of your project in the reed (inches).
2. Enter your sett in ends per inch (EPI).
3. Enter the length of your warp (yards).
4. Select **Calculate** to see your warp requirements.
5. Select **Clear** to reset the calculator.

### Sett Guide

Select any of the four reference cards to learn more about measuring yarn, choosing a weave structure, adjusting fabric density, and checking reed compatibility. Select a card again to return to its original view.

### Reed Compatibility Helper

1. Enter your desired sett (EPI).
2. Enter your reed size in dents per inch (DPI).
3. Select **Calculate** to find the average number of ends per dent.
4. Select **Clear** to reset the helper.

## How It Works

**Total warp ends**

`Width in reed × Sett`

**Total warp yards**

`Total warp ends × Length of warp`

**Average ends per dent**

`Desired sett (EPI) ÷ Reed size (DPI)`

The reed compatibility calculation provides an average, not a complete denting sequence. Actual threading may require distributing different numbers of ends across dents.

## Built With

HTML, CSS, and JavaScript.

The project is intentionally lightweight and does not require external libraries or frameworks.

## Help & Feedback

If you find an issue or have a suggestion, open an issue in this GitHub repository.

## Maintainer

Designed and developed by [Katerina](https://katerinah.com).
# jquery.parallaxmouse

Version 1.0.0

## Summary

A jQuery plugin for parallaxing elements based on mouse movement.

## Features

* Maximum range configuration
* Per element movement rate
* Movement inversion

## Author

Wil Neeley ( [@wilneeley](http://twitter.com/wilneeley) / [github.com](https://github.com/Xaxis) )

## Usage

Include `jquery.parallaxmouse.min.js` after jQuery.

## Get Started

```html
<div id="galaxy">
    <img id="star1" src="images/star1.png" class="top left">
    <img id="star2" src="images/star2.png" class="top">
    <img id="star3" src="images/star3.png" class="">
</div>
```

jQuery.parallaxmouse uses class names to determine the styling origin direction for each element. If an element is 
positioned from the `left` in CSS make sure to add the `left` class. Likewise for the `top`, use the `top` class. If an 
element is positioned from the `right`, don't include the `left` class. If the element is positioned from the `bottom` 
don't include the `top` class.

```javascript
jQuery(window).parallaxmouse({
    invert: true,
    range: 400,
    elms: [
        {el: $('#star1'), rate: 0.2},
        {el: $('#star2'), rate: 0.4},
        {el: $('#star3'), rate: 0.1},
    ]
});
```

The jQuery selected element is the element the parallax mouse motion is relative to.

Configuration is simple: The `invert` property specifies the direction of movement relative to mouse movement, the
`range` property specifies the maximum distance an element can possibly travel in any direction, and the `elms` property
holds the array of objects you use to specify which elements are being parallaxed. 

Each element object contains a reference to the element you would like to parallax and a `rate` property which specifies
how fast an element is to travel through its range.

## Positioning CSS

```css
#galaxy {
    width: 100%;
    height: 400px;
    max-height: 400px;
    position: relative;
    background: #2f2f6d;
    overflow: hidden;
}
#star1 {
    position: absolute;
    top: 150px;
    left: 200px;
}
#star2 {
    position: absolute;
    top: 150px;
    right: 200px;
}
#star3 {
    position: absolute;
    bottom: 150px;
    right: 200px;
}
```

When setting your elements initial positions in CSS you must set their position property to `absolute`. 
jQuery.parallaxmouse only works with pixel values.


## Examples

See `test/test.html`.

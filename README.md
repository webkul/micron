[![Micron.JS](https://webkul.com/blog/wp-content/uploads/2018/01/micron-logo.png)](https://webkul.github.io/micron)

### Check [Interactive Doc](https://webkul.github.io/micron/docs.html) on Website.
---

# Introduction
Micron.JS is a micro interaction library which can be used to add Interactions to different DOM Elements. Micron.JS animates an element using CSS power and the interactive behaviours are controlled by JavaScript.

Micron.JS is easy to adapt and can bring interactions to life using html5 data attributes or a chain of JavaScript methods.

# Getting Started
To get started with Micron.JS, you need to include both `micron.min.css` * (which have all ready to use interaction animations) and `micron.min.js`
If you don't need all the available interactions, you can simply include the respective `*.min.css` file only.

# Installation
Compiled CSS and JavaScript minified files can be directly linked from [UNPKG](https://unpkg.com/#/) CDN or Micron.JS can be included within your workflow using your favorite package managers as well.

## Link from UNPKG CDN
Include both the Micron CSS and JavaScript files in the header section of your document.

```html
<link href="https://unpkg.com/webkul-micron@1.1.6/dist/css/micron.min.css" type="text/css" rel="stylesheet">
<script src="https://unpkg.com/webkul-micron@1.1.6/dist/script/micron.min.js" type="text/javascript"></script>
```

## Package Managers
You can use either npm or bower to get the Micron.JS package.

Copy and Paste the command below in your terminal to get package with npm -
```cli
npm install webkul-micron
```

Load the package with the code below:
```javascript
const micron = require('webkul-micron');
```

Copy and Paste the command below in your terminal to get package with bower -
```cli
bower install webkul-micron
```

# Usage
Micron JS is very easy and quick to use.

## Adding an Interaction
Add the `data-micron="interaction"` attribute to the respective element and Voila! you are already there.

**Example Code**

```html
<a href="#!" class="button" data-micron="bounce">Label</a>
```

## Controlling Duration
Micron Interactions defaults to ".45" seconds. Add the data-micron-duration="number" attribute to control the duration of the defined interaction.

**Example Code**

```html
<a href="#!" class="button" data-micron="bounce" data-micron-duration=".95">Label</a>
```

## Controlling Timing or Ease
Micron Interactions defaults to "ease-in-out". Add the data-micron-timing="@type" attribute to control the easing of the defined interaction.

For now, `@type` only supports the easings mentioned below-

`linear`

`ease-in`

`ease-out`

`ease-in-out`

**Example Code**

```html
<a href="#!" class="button" data-micron="bounce" data-micron-timing="ease-in">Label</a>
```

## Bind Interaction
Add `data-micron-bind="true"` & `data-micron-id="name"` to the defined triggering element, and interaction will be applied to the element which reference to the defined id attribute.

**Example Code**

```html
<a href="#!" class="button" data-micron="bounce" data-micron-bind="true" data-micron-id="me">Label</a>
<a href="#!" class="button" id="me">Binded</a>
```

# Access inside JavaScript
Call micron chained methods to apply interactions to any DOM Element, right in your custom block of JavaScript Code.

```javascript
micron.getEle("").interaction("").duration("").timing("");
```
Pass an argument with `selector name` which can either be id or a class to `getEle()` method.

Pass an argument with `interaction name` to `interaction()` method.

Pass an argument which is a `number` to `duration()` method.

Pass an argument with `type of ease` to `timing()` method.

**Example Code**

```javascript
function myFunc(){
    micron.getEle("#me").interaction("bounce").duration(".45").timing("ease-out");
 }

//Call Interaction
myFunc();
```

# Interactions
Currently, Micron.JS supports the interactions mentioned below, head back to the [homepage](https://webkul.github.io/micron) to see all interactions in the real action.

`data-micron="shake"`

`data-micron="fade"`

`data-micron="jelly"`

`data-micron="bounce"`

`data-micron="tada"`

`data-micron="groove"`

`data-micron="swing"`

`data-micron="squeeze"`

`data-micron="flicker"`

`data-micron="jerk"`

`data-micron="blink"`

`data-micron="pop"`

# Customization
You can even add your very own css interaction to Micron.JS.

First include the code mentioned below in your css file.

```css
.mjs-linear{animation-timing-function:cubic-bezier(0,0,1,1)}.mjs-ease-in{animation-timing-function:cubic-bezier(.4,0,1,1)}.mjs-ease-out{animation-timing-function:cubic-bezier(0,0,.2,1)}.mjs-ease-in-out{animation-timing-function:cubic-bezier(.4,0,.2,1)}
```

Create a class with `.mjs-` prefix. Call the keyframe css animation inside it. Use the interaction with your `class name` without `.mjs-` prefix.

**Example Code**

```css
 /*Define a Class*/
 .mjs-custom{
    animation: custom-action;
 }

 @keyframes custom-action{
    from { . . . }
    to { . . . }
 }
```

Now use interaction with `data-micron="custom"`

# Credits
&copy; Copyright 2018 [Webkul Software](https://webkul.com), All rights reserved.

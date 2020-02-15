# Svelte Tooltip

### Table of contents

* [Getting Started](#getting-started)
	* [Instalation](#instalation)
	* [Usage](#usage)
* [Properties](#properties)
	* [active](#active)
	* [color](#color)
	* [directional props](#directional-props)
		* [top](#top)
		* [right](#right)
		* [bottom](#bottom)
		* [left](#left)
	* [tip](#tip)
* [Useful tips](#useful-tips)
	* [changing text color](#changing-text-color)

### Getting Started
#### Instalation
To install Svelte Tooltip into your svelte project use your package manager npm/yarn run one of the following commands on your terminal.

```npm install svelte-tooltip``` or ```yarn add svelte-tooltip```

#### Usage
Svelte Tooltip is really simple to use, first you need to import it on a script section
```
<script>
	import SvelteTooltip from 'svelte-tooltip';
</script>
```
and then use it on your component html template, passing as slot whatever you want to trigger the tooltip when hovered, usually these is going to be a button, icon, image, or a link.
``` 
<SvelteTooltip tip="view on github" bottom >
	<button>Click me</button>
</SvelteTooltip>
```
**Important: ** make sure to allways use one and just one directional prop, top, right, bottom, or left , those will position the tooltip according to the slot will passed, and not setting any or setting multiple will cause undefined behavior.

### Properties
#### active
The active allows you to programmatically display a tooltip rather than waiting to a user hover, it's expected type is boolean and it defaults to false.

```<SvelteTooltip tip="this is visible" left active>```

#### color

The default Svelte Tooltip background-color is #757575, however you can easily change that with the color property, it's type is String and any css valid color is also valid for this property.
```
<SvelteTooltip tip="change the color" top color="#FFB74D">
```

### Directional Props
The directional props allows you to position your tooltip in relation to the slot you give to the tooltip. As mentioned above SvelteTooltip should take **exactly** one directional prop. 
#### top
```<SvelteTooltip tip="I'm on the top" top >```
#### right
```<SvelteTooltip tip="I'm on the right" right >```
#### bottom
```<SvelteTooltip tip="I'm on the bottom" bottom >```
#### left
```<SvelteTooltip tip="I'm on the left" left >```


#### tip
tip property is the actual text displayed inside the tooltip.
```
<SvelteTooltip tip="view on github" bottom >
```
### Useful tips
#### Changing text color
Svelte tooltip has no default way of changing it's text color, however since the tooltip component inherits the text color from it's parent. The recomended way to set the text color is by wrapping the tooltip inside a div and use the css color attribute on it.
```
<style>
.wrapper {
  color: #fafafa;
}
</style>

<div class="wrapper">
	<SvelteTooltip tip="white text" bottom  color="#EF6C00">
		<button>Click me</button>
	</SvelteTooltip>
</div>
```

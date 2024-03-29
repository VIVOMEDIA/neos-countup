[![Latest Stable Version](https://poser.pugx.org/vivomedia/neos-countup/v/stable)](https://packagist.org/packages/vivomedia/neos-countup)
[![Total Downloads](https://poser.pugx.org/vivomedia/neos-countup/downloads)](https://packagist.org/packages/vivomedia/neos-countup)
[![License](https://poser.pugx.org/vivomedia/neos-countup/license)](https://packagist.org/packages/vivomedia/neos-countup)

# VIVOMEDIA Count Up Plugin for Neos CMS

## What it provides
Node types for Neos CMS to easily add CountUp animated numerical facts. You can configure start and end of the animation and their duration.

The CountUp animation starts as far as the element reaches the viewport of the user.

## Dependencies
* jQuery 2.x needs to be installed. But can easily be replaced by other frameworks. 
* countUp.js is included in this package. 

# Install
Install via composer
```bash
composer require vivomedia/neos-countup
```

## Configuration

If you like to add your own JS implementation, you can prevent the automatic include with this configuration. 

```yaml
VIVOMEDIA:
  CountUp:
    javascript:
      include: false
```

# Usage
## NodeTypes
You can use the NodeType `VIVOMEDIA.CountUp:CountUp` to add the CountUp functionality to your website. The NodeType is configurable through the neos property inspector. 

## AFX Component
The AFX component `VIVOMEDIA.CountUp:CountUpComponent` allows you to integrate the CountUp functionality to your own packages.

## Features
* Animation
  * Start number
  * End number
  * Duration in ms
* Content
  * Prefix
  * Suffix
* Format 
  * Thousand separator
  * Decimal separator
  * Decimal places

# Upgrade from 1.0
As the thousend separator default `,` has been removed and made configurable, you need to run the node migration if you want to keep the `,` as separator or want to use a empty separator.
```
# Migrate 1000000 => 1,000,000
./flow node:migrate 20230626175747

# Migrate 1000000 => 1000000
./flow node:migrate 20230627125821
```


# Screenshots
### Inspector 
![Inspector](./Documentation/inspector.png "Neos CMS Inspector")


### Example 
![Inspector](./Documentation/countup.gif "Neos CMS Inspector")



# Copyright

**countUp.js**

This package uses the countUp.js library. Thanks to the author [inorganik](https://github.com/inorganik).  

Repository: https://github.com/inorganik/countUp.js

**isInViewport**

This package uses the isInViewport function. Thanks to the author [Chris Ferdinandi](https://gomakethings.com)

# RegEx Tutorial (using RGB color values)

This is a brief tutorial on the basic components of Regular Expressions (RegEx). RegEx can be used in almost all coding languages and in text editors to match and/or replace text. Unlike seaching for literal strings or characters, RegEx allows for a more general search criteria and can range in complexity from searching for any combination of alphanumerics to very specific combinations of characters such as those that comprise phone numbers or email addresses. This tutorial will use a RegEx that matches RGB color values. 

## Summary
The RGB color value RegEx will serve as an entry into almost all the basic RegEx components. The RGB color value example usedd in this tutorial includes almost all the main components, including: quantifiers, grouping constructs, bracket expressions, character classes, OR operators, flags, and character escapes. The RegEx under consideration here does not include anchors because we want it to be able to match RGB values that are preceded or followed by other text, however, these anchors could be included. This will be disccused more in the following sections. 

So, without further ado, the RegEx we will be dissecting is:

```
/rgb\((?:(\d{1,2}|1\d{1,2}|2[0-4][0-9]|25[0-5]), ?)(?:(\d{1,2}|1\d{1,2}|2[0-4][0-9]|25[0-5]), ?)(?:(\d{1,2}|1\d{1,2}|2[0-4][0-9]|25[0-5]))\)/g
```
It will match the following highlighted sequences:\n
<mark>rgb(123, 24, 0)</mark>\n
This is an rgb color value: <mark>rgb(255,255,255)</mark>, it is very nice!\n
rgb(255,255,256)\n
The above value will not be matched.\n
It will also not match RGB(111,123,145) or rgb(300,123,111)\n
But <mark>rgb(03,123,03)</mark> will be matched.\n
And the below value will be matched as well\n
<mark>rgb(55,240,33)</mark>\n


## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Grouping Constructs](#grouping-constructs)
- [Bracket Expressions](#bracket-expressions)
- [Character Classes](#character-classes)
- [The OR Operator](#the-or-operator)
- [Flags](#flags)
- [Character Escapes](#character-escapes)

## Regex Components

### Anchors

### Quantifiers

### Grouping Constructs

### Bracket Expressions

### Character Classes

### The OR Operator

### Flags

### Character Escapes

## Author

A short section about the author with a link to the author's GitHub profile (replace with your information and a link to your profile)

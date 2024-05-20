# raTabs

## raTabs origin and features

raTabs was born from the pain that creating a tab component was for the authors.

Why would you need raTabs?

First of all, RatAbs improves your **usability´s** website by allowing your customers to make less clicks in order to change pages. In addition, a tab component allows you to have a more organize interface by creating a structure for all your content and shape a more consistent user experience.

Secondly, having a tab component will allow you to polish your website´s performance because instead of dowloading all the information at once, only the information´s selected page will be downloaded.

## CSS variables

raTabs uses css custom properties due to:

1. Css custom properties are directly used by your browser and can be edited at the moment by your browser´s developer´s tools.
2. Custom properties can be access and with all values can be easily changed with Javascript.
3. Custom properties are very convenient if you want to create dynamic themes with different colors.

All raTabs custom properties are divided into Custom Properties and User Custom Properties:

**Custom Properties** these are the base custom properties with all their values.

1. **Colors** :
   --raTabs-color-darkgreen: darkgreen;
   --raTabs-color-beige: beige;
   --raTabs-color-gray: gray;
   --raTabs-color-lightgray: lightgray;
2. **Borders** :
   --raTabs-border-style-solid: solid;
   --raTabs-border-width: 1px;
   --raTabs-border-color-darkgreen: darkgreen;
   --raTabs-border-none: none;
3. **Paddings** :
   --raTabs-padding-top: 12px;
   --raTabs-padding-bottom: 12px;
   --raTabs-padding-right: 30px;
   --raTabs-padding-left: 30px;
   --raTabs-padding: 10px;
4. **Gaps** :
   --raTabs-gap: 0;
5. **Cursor** :
   --raTabs-cursor-pointer: pointer;
   --raTabs-cursor-not-allowed: not-allowed;

**User Custom Properties** these are the same custom properties but where are being actively used.

1. **User colors** :
   --raTabs-color-text: var(--raTabs-border-color-darkgreen);
   --raTabs-color-bg: var(--raTabs-border-color-beige);
   --raTabs-color-text-active: var(--raTabs-border-color-beige);
   --raTabs-color-bg-active: var(--raTabs-border-color-darkgreen);
   --raTabs-color-text-desibled: var(--raTabs-color-gray);
   --raTabs-color-bg-desibled: var(--raTabs-color-lightgray);
2. **User border** :
   --raTabs-border-style-tabpanel: var(--raTabs-border-style-solid);
   --raTabs-border-width-tabpanel: var(--raTabs-border-width);
   --raTabs-border-color-tabpanel: var(--raTabs-border-color-darkgreen);
   --raTabs-border-none-items: var(--raTabs-border-none);
3. **User paddings** :
   --raTabs-padding-tabs-items: var(--raTabs-padding-top)
   var(--raTabs-padding-right) var(--raTabs-padding-bottom)
   var(--raTabs-padding-left);
   --raTabs-padding-tabpanel: var(--raTabs-padding);
4. **User gaps** :
   --raTabs-gap-tablist: var(--raTabs-gap);
5. **User cursor** :
   --raTabs-cursor-item-active: var(--raTabs-cursor-pointer);
   --raTabs-cursor-item-disabled: var(--raTabs-cursor-not-allowed);

## How to install raTabs

### Authors

raTabs was created by the outstanding efforts of ID3 students at ESAT, under the supervision of the almighty lord Wakkos.

**Authors**:

1. marboqmar
2. mirandiwiis
3. cocoraptor
4. deibidu
5. jocofe
6. sumikyu
7. vicentetr91
8. xuanidev
9. migromcab
10. LauraGutierrezGG
11.
12.
13. Wakkos

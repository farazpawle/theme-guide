---
title: Headers and the announcement bar
updated: 2026-10-21
---

# Headers and the announcement bar

The bar at the top of every page: your logo, your menu, search, the account icon and the cart. {{ site.theme_name }} has five header styles, one announcement bar and one search drop-down.
{: .lede}

- 5 header styles
- Add section › Header
- Header area, shown on every page
- Announcement bar and search are set in Theme settings
{: .facts}

| On this page | What it covers |
| --- | --- |
| [Choosing and changing a header](#choosing-and-changing-a-header) | Where the header lives and how to swap one style for another |
| [Aurora glow](#aurora-glow), [Centered stack](#centered-stack), [Floating capsule](#floating-capsule), [Nebula float](#nebula-float), [Sidecar](#sidecar) | The five styles, one entry each |
| [Announcement bar](#announcement-bar) | The message strip above the header |
| [Search suggestions](#search-suggestions) | The drop-down that appears as a shopper types |
| [Light and dark mode switch and the account icon](#light-and-dark-mode-switch-and-the-account-icon) | The two small icons in the bar |
| [Menus](#menus) | Building your main menu and footer menu, drop-downs and mega menus |

The country and language pickers live in the footer: see [Footers](footers.md#country-and-language-pickers).

## Choosing and changing a header

Your header is not a setting. It is a section in the *Header* area at the top of the editor's section list, and you keep exactly one there. To change style you remove the current header and add another.

1. In your Shopify admin, open *Online Store > Themes*.
2. Next to {{ site.theme_name }}, select *Edit theme*.
3. In the left bar, find the *Header* area at the top of the section list. Select the header inside it to change its settings.
4. To change style, select the header, then *Remove section*. In the *Header* area, select *Add section* and pick a style from the *Header* heading of the list.
5. Select *Save*.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/headers/editor-add-section-header-desktop-light.webp' | relative_url }}" alt="The theme editor's left bar with the Add section picker open under Header, listing the five headers: Aurora glow, Centered stack, Floating capsule, Nebula float and Sidecar" width="965" height="684" loading="lazy">
    <figcaption>The Add section picker under Header lists the five headers</figcaption>
  </figure>
</div>

Your logo, its width and the keep-on-screen option are not on the header. They are in Theme settings:

- **Logo** and **Logo width** are under **Brand**. With no logo, the header shows your store name as text.
- **Keep the header on screen** is under **Header**. The bar stays at the top as the page scrolls; the announcement bar scrolls away.

Settings you type into one header are not carried over to the next, so write down anything you want to keep before you swap.

> *Every style has the same basics.* Each one has a **Color scheme**, a **Main menu** and a **Customer account menu**, and each shows the light and dark mode switch (when it is on) and the account icon (when your store has customer accounts).

> *Phones fold the menu.* On phones and tablets every style puts the menu behind a menu button. On a phone the bar shows your store name, the account icon and the cart; search is the first row of the opened menu.

## Aurora glow

A bar with a soft glow of light behind it, your store name on the left and your menu in a rounded pill on the right. It suits a dark color scheme.
{: .lede}

- Add section › Header › Aurora glow
- 1 look
- No blocks
{: .facts}

### Looks

{% include looks.html folder="headers" file="aurora-glow" name="Aurora glow header" looks="Standard" plain="true" about="Store name on the left, the menu, mode switch, search, account and cart in a rounded pill on the right, with the announcement bar above." %}

### Where to find it

In the *Header* area of the editor: select *Add section*, then **Aurora glow**. See [Choosing and changing a header](#choosing-and-changing-a-header) for the steps.

### Settings

Keep one header in the header area. To change style, remove this header and add another.

#### At the top

| Setting | What it changes |
| --- | --- |
| **Color scheme** | The colors of the bar and the announcement strip. A dark scheme is what the glow is designed for. |
| **Main menu** | The menu shown in the pill. Menus are built in your admin: see [Menus](#menus). |
| **Customer account menu** | The links shown under the account icon. |
{: .settings}

#### Actions

| Setting | What it changes |
| --- | --- |
| **Show search** | Shows the search icon in the bar. |
{: .settings}

#### Glow

| Setting | What it changes |
| --- | --- |
| **Glow strength** | How bright the glow behind the bar is, from 0 to 100%. |
{: .settings}

### Blocks

This header has no blocks. Its links come from the menu you choose.

### Tips and limits

> *A long menu folds itself.* When your menu and store name no longer fit on one line, the bar switches to the menu button by itself, even on a wide screen.

> *A long store name shrinks, then wraps.* It is never cut off with dots.

> *Pair it with a dark scheme.* The glow reads best on a dark **Color scheme**; on a light scheme it is barely visible.

## Centered stack

Your store name centered on its own line, the menu on a row below it, and an optional thin row of small links above.
{: .lede}

- Add section › Header › Centered stack
- 1 look
- No blocks
{: .facts}

### Looks

{% include looks.html folder="headers" file="centered-stack" name="Centered stack header" looks="Standard" plain="true" about="A thin links strip on top, the store name centered, icons on the right and the menu on its own row below." %}

### Where to find it

In the *Header* area of the editor: select *Add section*, then **Centered stack**. See [Choosing and changing a header](#choosing-and-changing-a-header) for the steps.

### Settings

Keep one header in the header area. To change style, remove this header and add another.

#### At the top

| Setting | What it changes |
| --- | --- |
| **Color scheme** | The colors of the bar, the announcement strip and the links strip. |
| **Main menu** | The menu on its own row under the store name. On tablets and phones it folds into the menu button. |
| **Customer account menu** | The links shown under the account icon. |
{: .settings}

#### Links strip

A thin row of small links above the store name, for things like order tracking and help. Shown on computers only. On tablets and phones these links move to the bottom of the menu.

| Setting | What it changes |
| --- | --- |
| **Show the links strip** | Turns the strip on or off. |
| **Links on the left** | A menu whose links sit at the left end of the strip. Items below the first level are not shown. |
| **Links on the right** | A menu whose links sit at the right end of the strip. Items below the first level are not shown. |
{: .settings}

#### Actions

| Setting | What it changes |
| --- | --- |
| **Show search** | Shows the search icon in the bar. |
{: .settings}

#### Store name

| Setting | What it changes |
| --- | --- |
| **Letter spacing** | Spaces out the letters of your store name, from 0 to 12px. On phones and tablets the spacing is scaled down to suit the smaller name. A logo picture is not affected. |
{: .settings}

### Blocks

This header has no blocks. Its links come from the menus you choose.

### Tips and limits

> *Leave a strip menu empty to hide it.* A **Links on the left** or **Links on the right** menu that is the same as your **Main menu** is not repeated.

> *A good fit for a large menu.* With the menu on its own row there is room for many items, and an item with links below it opens a drop-down or columns (see [Menus](#menus)).

> *A long store name shrinks, then wraps.* It gets smaller to fit, then moves onto a second line. It is never cut off with dots.

## Floating capsule

A rounded bar that floats above the page. The menu button opens a full-screen menu on every screen size.
{: .lede}

- Add section › Header › Floating capsule
- 1 look
- No blocks
{: .facts}

### Looks

{% include looks.html folder="headers" file="floating-capsule" name="Floating capsule header" looks="Standard" plain="true" about="A rounded bar floating over the page with the menu button on the left, the store name centered and the icons on the right." %}

### Where to find it

In the *Header* area of the editor: select *Add section*, then **Floating capsule**. See [Choosing and changing a header](#choosing-and-changing-a-header) for the steps.

### Settings

Keep one header in the header area. To change style, remove this header and add another.

#### At the top

| Setting | What it changes |
| --- | --- |
| **Color scheme** | The capsule's colors. The menu panel inverts it, so the capsule reads as floating on top of the menu. |
| **Main menu** | Shown as a full-screen menu. Items with links below them fold open in place. |
| **Footer links** | A short list along the bottom of the menu, for things like sign in, order tracking and help. Items below the first level are not shown. Leave empty to hide it. |
| **Customer account menu** | The links shown under the account icon. |
{: .settings}

This header has no announcement bar. A full-width strip above a floating bar works against the style, so the shop-wide announcement is not shown here.

#### Actions

| Setting | What it changes |
| --- | --- |
| **Show search** | Shows search on tablets and phones. The wide bar keeps only the menu, the store name and two icons, so visitors on a computer reach search from the search page. |
{: .settings}

#### Capsule

| Setting | What it changes |
| --- | --- |
| **Corner radius** | How round the capsule is, from 0 to 40px. The highest value gives a full pill at every screen size. |
| **Elevation** | How far the capsule floats above the page, from 0 to 100. Zero removes the shadow. |
{: .settings}

### Blocks

This header has no blocks. Its links come from the menus you choose.

### Tips and limits

> *No announcement bar here.* If you use the announcement bar, pick another style.

> *No drop-downs.* The menu opens full screen and sub-items fold open under their parent, so the mega menu setting does not apply to this style.

> *Search on computers.* The search icon shows on tablets and phones only. Make sure the search page is easy to reach from your menu.

> *A long store name shrinks, then wraps.* In the bar and at the top of the opened menu it gets smaller to fit, then moves onto a second line. It is never cut off with dots.

## Nebula float

Controls that float straight on the page with no bar behind them: the store name on the left, the menu centered and the icons on the right. It suits a home page that opens on a full-screen picture or a dark scene.
{: .lede}

- Add section › Header › Nebula float
- 1 look
- No blocks
{: .facts}

### Looks

{% include looks.html folder="headers" file="nebula-float" name="Nebula float header" looks="Standard" plain="true" about="No bar: the store name, a centered menu and the icons float over a full-screen picture, with a soft shading behind them." %}

### Where to find it

In the *Header* area of the editor: select *Add section*, then **Nebula float**. See [Choosing and changing a header](#choosing-and-changing-a-header) for the steps.

### Settings

Keep one header in the header area. To change style, remove this header and add another.

#### At the top

| Setting | What it changes |
| --- | --- |
| **Color scheme** | The colors of the bar, the announcement and the menu panels. A dark scheme is what the light is designed for. |
| **Main menu** | Shown centered on the bar. On tablets and phones it folds into the menu button. |
| **Customer account menu** | The links shown under the account icon. |
{: .settings}

#### Search

Search is always on for this style. On computers and tablets it is the magnifier beside the cart, and on phones it is the first row of the menu.

#### Light

| Setting | What it changes |
| --- | --- |
| **Bar background** | Options: **None — float on the page** (no strip and no line, just the controls on the page's own color at every scroll position, with a soft shading behind them to keep the menu readable) or **Fill with the scheme color**. None suits a shop whose first section is a full-screen picture or a dark scene. |
| **Light strength** | How strong the glow behind the controls is, from 0 to 100%. |
{: .settings}

### Blocks

This header has no blocks. Its links come from the menu you choose.

### Tips and limits

> *Open on a picture.* Put a full-screen picture or a dark scene first on the page, such as a **Slideshow** or **Hero scroll**, so the floating controls have something to float over.

> *A wide menu folds early.* If your menu would wrap onto a second row, the bar switches to the menu button instead.

> *A long store name shrinks, then wraps.* On phones and tablets it gets smaller to fit, then moves onto a second line. It is never cut off with dots.

## Sidecar

A bar whose menu slides in from the left as a drawer, on every screen size. It suits large menus.
{: .lede}

- Add section › Header › Sidecar
- 1 look
- No blocks
{: .facts}

### Looks

{% include looks.html folder="headers" file="sidecar" name="Sidecar header" looks="Standard" plain="true" about="Store name on the left, a Menu button that opens a drawer, then the mode switch, search, account and cart on the right." %}

### Where to find it

In the *Header* area of the editor: select *Add section*, then **Sidecar**. See [Choosing and changing a header](#choosing-and-changing-a-header) for the steps.

### Settings

Keep one header in the header area. To change style, remove this header and add another.

#### At the top

| Setting | What it changes |
| --- | --- |
| **Color scheme** | Colors the bar and the announcement strip above it. |
| **Main menu** | The menu inside the drawer. |
| **Drawer footer links** | A short list along the bottom of the drawer, such as delivery or contact. The account link is added for you. |
| **Customer account menu** | The links shown under the account icon. |
{: .settings}

#### Actions

| Setting | What it changes |
| --- | --- |
| **Show search** | Shows the search icon in the bar. |
{: .settings}

#### Bar

| Setting | What it changes |
| --- | --- |
| **Bar height** | How tall the bar is, from 64 to 120px. Computers only (screens wider than 1100px); narrower screens use a fixed compact bar. |
{: .settings}

#### Navigation drawer

| Setting | What it changes |
| --- | --- |
| **Drawer color scheme** | The colors of the panel that slides in from the left. A scheme that contrasts with the bar reads best. |
{: .settings}

### Blocks

This header has no blocks. Its links come from the menus you choose.

### Tips and limits

> *No drop-downs.* Everything is in the drawer, with sub-items folding open under their parent, so the mega menu setting does not apply to this style.

> *Contrast the drawer.* A **Drawer color scheme** that differs from the bar's makes the drawer stand out as a separate panel.

> *A long store name shrinks, then wraps.* In the bar and at the top of the drawer it gets smaller to fit, then moves onto a second line. It is never cut off with dots.

## Announcement bar

One strip above the header with a short message, an offer or delivery information. It is shop-wide: you write it once and every page shows it.
{: .lede}

- Theme settings › Announcement bar
- 1 look
- No blocks
{: .facts}

### Looks

{% include looks.html folder="headers" file="announcement-bar" name="Announcement bar" looks="Standard" plain="true" about="A dark strip above the header with a short underlined message and a close button." %}

### Where to find it

1. In your Shopify admin, open *Online Store > Themes*, then select *Edit theme* next to {{ site.theme_name }}.
2. In the left bar, select the gear icon (*Theme settings*).
3. Select **Announcement bar**.
4. Change the settings, then select *Save*.

### Settings

| Setting | What it changes |
| --- | --- |
| **Show the announcement bar** | Turns the strip on or off. |
| **Message** | The text in the strip. Basic formatting such as bold or italic is allowed. |
| **Link** | Where the message goes when selected. The whole message becomes the link, so links and formatting typed inside the message are left out. |
| **Let visitors close it** | Adds a close button. A closed bar stays closed until you change the message. |
| **Background** | The strip's background color. Leave both colors empty to follow the button colors of the header's color scheme. |
| **Foreground** | The color of the words and the close button. |
{: .settings}

### Blocks

This section has no blocks. It is one message.

### Tips and limits

> *Keep it short.* One line reads best, especially on a phone, where a long message wraps onto several lines.

> *Not on every style.* Aurora glow, Centered stack, Nebula float and Sidecar show the bar. **Floating capsule** does not.

> *The default colors are the button colors.* With no colors set, the strip uses the button colors of the header's scheme, so on a dark header it is a light strip. Set **Background** and **Foreground** to change that.

> *It scrolls away.* The bar is not kept on screen when the page scrolls, even when **Keep the header on screen** is on.

## Search suggestions

The drop-down under the header's search box. Before anyone types it shows your popular searches. As they type it shows matching products, and optionally collections, pages and blog posts, with the matching letters in bold.
{: .lede}

- Theme settings › Search
- 1 look
- No blocks
{: .facts}

### Looks

{% include looks.html folder="headers" file="search-suggestions" name="Search suggestions drop-down" looks="Standard" plain="true" about="The open drop-down under the search box, listing matching products with their prices." %}

{% include looks.html folder="headers" file="search-suggestions" name="Search suggestions" looks="Standard" plain="true" about="The header's search box open with popular searches before typing and matching products as the shopper types." %}

### Where to find it

1. In your Shopify admin, open *Online Store > Themes*, then select *Edit theme* next to {{ site.theme_name }}.
2. In the left bar, select the gear icon (*Theme settings*).
3. Select **Search**. The suggestions are under *Search as you type* and *Search behavior*.
4. Change the settings, then select *Save*.

### Settings

#### Search as you type

| Setting | What it changes |
| --- | --- |
| **Suggest results as the shopper types** | Shows matching results in a drop-down while the shopper types, in every search box in the theme. The three settings below do nothing while this is off. |
| **Show price** | Adds the price to each product suggestion. |
| **Show SKU** | Adds the SKU to each product suggestion. |
| **Show vendor** | Adds the maker's name to each product suggestion. |
{: .settings}

#### Search behavior

| Setting | What it changes |
| --- | --- |
| **Popular searches** | One term per line. Shown as quick links in the header's search box before anything is typed, and on the search page when nothing was found. |
| **Search across** | Options: **Products only** or **Everything** (products, collections, pages and blog posts). |
{: .settings}

### Blocks

This feature has no blocks. It is the same drop-down for every header.

### Tips and limits

> *One setting for every header.* You turn suggestions on or off once here. No header has a search setting of its own beyond **Show search**.

> *Nothing drops down?* Check that **Suggest results as the shopper types** is on. With it off, the search box works but shows no suggestions.

> *Floating capsule on a computer.* That style shows its search icon on tablets and phones only, so on a computer shoppers use the search page instead.

## Light and dark mode switch and the account icon

Two small icons in the header bar.
{: .lede}

- Mode switch: Theme settings › Colors
- Account icon: turned on in your Shopify admin
- Every header style shows both
{: .facts}

### The light and dark mode switch

The switch lets a shopper choose Light, Dark or their own device's setting. It is on by default; turn it off if you want a fixed look.

1. Open the gear icon (*Theme settings*) in the editor.
2. Select **Colors**, then find *Light and dark mode*.
3. Use **Show the mode switch** to turn it on or off. **Default mode** sets what a visitor sees the first time.

On computers it is an icon in the header bar. On phones and tablets it is a row called *Appearance* inside the menu. Each press goes to Light, then Dark, then back to the shopper's device setting. The choice is remembered on that shopper's device. How the dark colors are made is explained in [Theme settings](theme-settings.md#how-light-and-dark-mode-works).

{% include looks.html folder="headers" file="mode-switch" name="Light and dark mode switch" looks="Standard" plain="true" about="the sun icon in the header bar on a computer, and the Appearance row in the open menu on a phone." %}

### The account icon

A small person icon. A shopper who selects it sees an account panel: sign-in options when they are signed out, and their account links (by default Orders and Profile) once signed in.

- It appears when customer accounts are turned on, in your Shopify admin under *Settings > Customer accounts*. Without customer accounts, the icon is left out rather than shown dead.
- It sits in the header bar on computers and on phones, next to the cart.
- **Customer account menu**, a setting on every header, chooses which links the panel lists. It starts as Shopify's own customer account menu. You can add, remove or reorder its links in your admin under *Content > Menus*.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/headers/account-panel-desktop-light.webp' | relative_url }}" alt="The account panel open under the account icon in the header, with sign-in options, an email box and Orders and Profile buttons" width="1440" height="900" loading="lazy">
    <figcaption>The account panel, signed out</figcaption>
  </figure>
</div>

> *Leave the account menu alone at first.* The default already links to the right account pages. Change it only if you want an extra link.

> *Cannot find the switch?* Check that **Show the mode switch** is on under **Colors**.

## Menus

Your menus are built in your Shopify admin, not in the theme editor. The theme lists them in the header and the footer.

### Building a menu

1. In your Shopify admin, open *Content > Menus*.
2. Select the menu to change. The main menu is called *Main menu* and the footer menu is called *Footer menu*.
3. Select *Add menu item*, type its name and choose where it goes (a collection, a page, a product, a blog post or a web address).
4. To make an item a drop-down, drag it slightly to the right under its parent. Do it once more for a third level.
5. Select *Save menu*.

Then, in the editor, choose the menu:

| Where | Setting | Starts as |
| --- | --- | --- |
| Header | **Main menu** | The menu called *Main menu* |
| Header, some styles | **Drawer footer links**, **Footer links**, **Links on the left** and **Links on the right** | The same *Main menu*: a short list shown only when you pick a different menu |
| Header | **Customer account menu** | Shopify's customer account menu |
| Footer link column | **Footer menu** | The menu called *Footer menu* |
{: .settings}

### Drop-downs and mega menus

A menu can go three levels deep. How each header shows it:

| Header | Menu on a computer | One level below | Two levels below |
| --- | --- | --- | --- |
| Aurora glow | In a pill on the right | A drop-down list | Columns with the mega menu on, an indented list with it off |
| Centered stack | A row under the store name | A drop-down list | Columns with the mega menu on, an indented list with it off |
| Floating capsule | A full-screen menu | Fold open in place | Fold open in place |
| Nebula float | Centered on the bar | A drop-down card | Columns with the mega menu on, an indented list with it off |
| Sidecar | A drawer from the left | Fold open in place | Fold open in place |
{: .settings}

Turn the mega menu on or off with **Enable the horizontal mega menu** under **Header** in Theme settings: with it on, an item with two levels below it opens as columns instead of a single list. It applies to **Aurora glow**, **Centered stack** and **Nebula float**.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/headers/drop-down-desktop-light.webp' | relative_url }}" alt="The Shop item of the Aurora glow header open as a drop-down list of four collections" width="1440" height="900" loading="lazy">
    <figcaption>A drop-down list open under the Shop item</figcaption>
  </figure>
</div>

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/headers/mega-menu-desktop-light.webp' | relative_url }}" alt="The Shop item of the Aurora glow header open as a mega menu: four collections are the column headings and their sub-items are listed under them" width="1440" height="900" loading="lazy">
    <figcaption>A mega menu open under the Shop item, with two levels below it</figcaption>
  </figure>
</div>

On phones and tablets every style folds the menu behind the menu button, and all three levels stay reachable. On a touch screen wider than 1100px, such as a tablet held sideways, the first tap on an item with a drop-down opens it, and a second tap follows the link.

### Tips and limits

> *Keep the top level short.* Five to seven items fit best. A very long top level makes the menu fold into the menu button even on a wide screen.

> *Give every top item a link.* An item with a drop-down still goes to its own page when selected, so point it somewhere useful.

> *The footer menu starts small.* On a new store the *Footer menu* may hold only a link to the search page. Add the pages you want, such as shipping, returns and contact.

> *Menus belong to your store.* A menu is the same whichever theme you use, so changing a header style never loses your links.

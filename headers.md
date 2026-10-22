---
title: Headers and the announcement bar
updated: 2026-10-22
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

> *Phones fold the menu.* On a phone every style puts the menu behind a button. Four styles then show a bar with your store name, the account icon and the cart, and search is the first row of the opened menu. **Centered stack** has no bar on a phone: your store name sits alone at the top and the menu, search, account and cart are in a bar at the foot of the screen. On a tablet, **Nebula float** keeps its *Browse* button, which opens its picture panel.

## Aurora glow

A bar with a soft glow of light behind it, your store name on the left and your menu in a rounded pill on the right. Pointing at a menu item grows the bar down into a full-width sheet with pictures. It suits a dark color scheme.
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
| **Main menu** | The menu shown in the pill. An item with links below it opens a full-width sheet: its links listed on the left, and the one the shopper points at shows its own links and its picture on the right. Menus are built in your admin: see [Menus](#menus). |
| **Customer account menu** | The links shown under the account icon. |
{: .settings}

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/headers/drop-down-desktop-light.webp' | relative_url }}" alt="The Shop item of the Aurora glow header open as a full-width sheet: numbered links on the left, and the chosen one's links and picture on the right" width="1440" height="900" loading="lazy">
    <figcaption>The menu sheet open under the Shop item</figcaption>
  </figure>
</div>

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

> *Pictures come from what each link points to.* A link to a collection or a product shows its featured image, a link to a blog post shows the post's image, and any other link shows a soft glow with its name instead. On tablets the menu button opens the same links as tabs, with small pictures.

> *The mega menu setting does not apply.* Every item already opens the full-width sheet, with all three levels.

> *A long store name shrinks, then wraps.* It is never cut off with dots.

> *Pair it with a dark scheme.* The glow reads best on a dark **Color scheme**; on a light scheme it is barely visible.

## Centered stack

Your store name centered on its own line at the top, and a rounded bar at the foot of the screen that holds the menu, search, account and cart. An optional thin row of small links sits above the name.
{: .lede}

- Add section › Header › Centered stack
- 1 look
- No blocks
{: .facts}

### Looks

{% include looks.html folder="headers" file="centered-stack" name="Centered stack header" looks="Standard" plain="true" about="A thin links strip on top and the store name centered, with the menu, search, account and cart in a rounded bar floating at the foot of the screen." %}

#### The foot bar and its sheets

On a phone, or when the menu is too long for the bar, the *Menu* button opens a sheet that rises from the foot bar with your menu, the light and dark switch and your account link. Search opens the same way, as a sheet, on every screen size.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/headers/centered-stack-search-desktop-light.webp' | relative_url }}" alt="The Centered stack header on a computer with the search sheet open above the foot bar, showing a search box and a Search button" width="1440" height="900" loading="lazy">
    <figcaption>The search sheet rising from the foot bar on a computer</figcaption>
  </figure>
  <figure class="shot shot--phone">
    <img src="{{ '/assets/images/headers/centered-stack-sheet-phone-light.webp' | relative_url }}" alt="The Centered stack header on a phone with the menu sheet open above the foot bar, listing the menu items, the Appearance row and the Account link" width="375" height="812" loading="lazy">
    <figcaption>The menu sheet on a phone</figcaption>
  </figure>
</div>

### Where to find it

In the *Header* area of the editor: select *Add section*, then **Centered stack**. See [Choosing and changing a header](#choosing-and-changing-a-header) for the steps.

### Settings

Keep one header in the header area. To change style, remove this header and add another.

#### At the top

| Setting | What it changes |
| --- | --- |
| **Color scheme** | The colors of the name line, the foot bar, the announcement strip and the links strip. |
| **Main menu** | Shown in the foot bar on computers; drop-downs rise from it. On tablets and phones, or when the menu is too long to fit, the bar shows a *Menu* button that opens a sheet rising from the bottom, with every level folding open. |
| **Customer account menu** | The links shown under the account icon. |
{: .settings}

#### Links strip

A thin row of small links above the store name, for things like order tracking and help. Shown on computers only. On tablets and phones these links move to the bottom of the menu sheet.

| Setting | What it changes |
| --- | --- |
| **Show the links strip** | Turns the strip on or off. |
| **Links on the left** | A menu whose links sit at the left end of the strip. Items below the first level are not shown. |
| **Links on the right** | A menu whose links sit at the right end of the strip. Items below the first level are not shown. |
{: .settings}

#### Actions

| Setting | What it changes |
| --- | --- |
| **Show search** | Shows the search icon in the foot bar. Search opens as a sheet rising from the bottom, on every screen size. |
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

> *A long menu folds itself.* When the items would not fit in the foot bar, it shows the *Menu* button instead, even on a wide screen. An item with links below it opens a drop-down or columns (see [Menus](#menus)).

> *The foot bar stays out of the way.* It leaves the bottom corners free for chat widgets and lifts above other bars fixed to the bottom of the screen, such as the product page's buy bar or the cart's checkout bar.

> *A long store name shrinks, then wraps.* It gets smaller to fit, then moves onto a second line. It is never cut off with dots.

> *Keep the header on screen.* With this on, the store name line stays at the top; the foot bar is always on screen.

## Floating capsule

A rounded bar that floats above the page. The menu button opens a full-screen menu on every screen size, with each level of your menu side by side in columns and a large picture of the item in focus.
{: .lede}

- Add section › Header › Floating capsule
- 1 look
- No blocks
{: .facts}

### Looks

{% include looks.html folder="headers" file="floating-capsule" name="Floating capsule header" looks="Standard" plain="true" about="A rounded bar floating over the page with the menu button on the left, the store name centered and the icons on the right." %}

#### The full-screen menu

On a computer the menu shows each level as a column: your top items, then the links under the one you pick, then the links under those, and a large picture of the item in focus. Resting the pointer on an item picks it; clicking it then opens its page. On tablets and phones the top items sit in a side rail, and the picked item's picture and links show beside it, with the third level listed under each link.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/headers/floating-capsule-menu-desktop-light.webp' | relative_url }}" alt="The Floating capsule menu open on a computer: top items in the first column with Shop picked, its collections in the second column with the first one picked, and a large picture of that collection on the right" width="1440" height="900" loading="lazy">
    <figcaption>The menu's columns on a computer</figcaption>
  </figure>
  <figure class="shot shot--phone">
    <img src="{{ '/assets/images/headers/floating-capsule-menu-phone-light.webp' | relative_url }}" alt="The Floating capsule menu open on a phone: top items in a rail on the left, and the picked item's banner and links on the right" width="375" height="812" loading="lazy">
    <figcaption>The menu on a phone</figcaption>
  </figure>
</div>

### Where to find it

In the *Header* area of the editor: select *Add section*, then **Floating capsule**. See [Choosing and changing a header](#choosing-and-changing-a-header) for the steps.

### Settings

Keep one header in the header area. To change style, remove this header and add another.

#### At the top

| Setting | What it changes |
| --- | --- |
| **Color scheme** | The colors of the capsule, the full-screen menu and the search card. |
| **Main menu** | Shown as a full-screen menu, one column per level. On tablets and phones the top items sit in a side rail. |
| **Show main menu pictures** | Shows the picture of the linked collection, product or blog post in the main menu. A link without one shows its parent's picture, or a tile with its first letter. Turn it off for a menu of words only. |
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

> *No drop-downs.* The menu opens full screen with its levels side by side, so the mega menu setting does not apply to this style.

> *Pictures come from what each link points to.* Link a menu item to a collection or product with a picture and the menu shows it. Pages, blogs and web addresses have none, so they show their parent's picture or a letter tile.

> *Every item is a link.* The first click, tap or Enter on an item with links below it shows those links; a second one opens its page. Each list also starts with an *All* link to the item's own page.

> *Search on computers.* The search icon shows on tablets and phones only. Make sure the search page is easy to reach from your menu.

> *A long store name shrinks, then wraps.* In the bar and at the top of the opened menu it gets smaller to fit, then moves onto a second line. It is never cut off with dots.

## Nebula float

Controls that float straight on the page with no bar behind them: the store name on the left, a *Browse* button and the icons on the right. *Browse* opens a panel of picture tiles that walks your menu one level at a time. It suits a home page that opens on a full-screen picture or a dark scene.
{: .lede}

- Add section › Header › Nebula float
- 1 look
- No blocks
{: .facts}

### Looks

{% include looks.html folder="headers" file="nebula-float" name="Nebula float header" looks="Standard" plain="true" about="No bar: the store name, a Browse button and the icons float over a full-screen picture, with a soft shading behind them." %}

### Where to find it

In the *Header* area of the editor: select *Add section*, then **Nebula float**. See [Choosing and changing a header](#choosing-and-changing-a-header) for the steps.

### Settings

Keep one header in the header area. To change style, remove this header and add another.

#### At the top

| Setting | What it changes |
| --- | --- |
| **Color scheme** | The colors of the bar, the announcement and the menu panels. A dark scheme is what the light is designed for. |
| **Main menu** | Opens from the *Browse* button as picture tiles, one level at a time. A tile shows the linked collection's, product's or blog post's picture; any other link shows the light. On phones it folds into the menu button. |
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

#### The Browse panel

Press *Browse* and a panel opens under the bar. The first row of picture tiles is your top-level menu. Pressing a tile that has links below it slides to the next row, with a *Back* button and an *All* link (such as *All Shop*) to the item itself; the third level is a plain list of links, because a Shopify menu goes no deeper. *Escape* steps back one level, then closes the panel. On phones *Browse* is replaced by the menu button, which opens a sheet of folding rows instead.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/headers/nebula-float-browse-desktop-light.webp' | relative_url }}" alt="The Nebula float header with the Browse panel open: a row of picture tiles, one for each menu item or collection" width="1440" height="900" loading="lazy">
    <figcaption>The Browse panel open on a computer</figcaption>
  </figure>
  <figure class="shot shot--phone">
    <img src="{{ '/assets/images/headers/nebula-float-browse-phone-light.webp' | relative_url }}" alt="The Nebula float header's menu on a phone: a sheet of folding rows, with search as the first row" width="375" height="812" loading="lazy">
    <figcaption>On a phone the menu is a sheet of folding rows</figcaption>
  </figure>
</div>

### Blocks

This header has no blocks. Its links come from the menu you choose.

### Tips and limits

> *Pictures come from your store.* Link menu items to collections or products that have a picture, and the tiles fill themselves. Links to pages or web addresses show the soft light instead.

> *Open on a picture.* Put a full-screen picture or a dark scene first on the page, such as a **Slideshow** or **Hero scroll**, so the floating controls have something to float over.

> *No mega menu.* The mega menu setting does not apply here: *Browse* always shows one level at a time.

> *A long store name shrinks, then wraps.* On phones and tablets it gets smaller to fit, then moves onto a second line. It is never cut off with dots.

## Sidecar

On a computer, your menu stays open as a column docked at the left of the page, with the page beside it. On tablets and phones it is a bar whose menu slides in from the left as a drawer. It suits large menus.
{: .lede}

- Add section › Header › Sidecar
- 1 look
- No blocks
{: .facts}

### Looks

{% include looks.html folder="headers" file="sidecar" name="Sidecar header" looks="Standard" plain="true" about="On a computer, a dark column docked at the left with the store name, the icons, a search field and the menu, and the page beside it. On a phone, a bar with a Menu button, the store name, account and cart." %}

#### The docked column and the phone drawer

From 1101px wide there is no bar: the column holds your store name, the mode switch, account and cart icons, a search field and your menu, and it never closes. An item with links below it folds open in the column. Everything else on the page sits beside it. Below 1101px the column becomes the drawer: the *Menu* button in the bar slides it in from the left.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/headers/sidecar-product-desktop-light.webp' | relative_url }}" alt="The Sidecar header on a computer with a product page beside the docked column, and the Shop item folded open in the column to show its links" width="1440" height="900" loading="lazy">
    <figcaption>The docked column on a product page, with Shop folded open</figcaption>
  </figure>
  <figure class="shot shot--phone">
    <img src="{{ '/assets/images/headers/sidecar-drawer-phone-light.webp' | relative_url }}" alt="The Sidecar header on a phone with the drawer open, showing a search box, the menu items, the Appearance row and the Account link" width="375" height="812" loading="lazy">
    <figcaption>The same menu as a drawer on a phone</figcaption>
  </figure>
</div>

### Where to find it

In the *Header* area of the editor: select *Add section*, then **Sidecar**. See [Choosing and changing a header](#choosing-and-changing-a-header) for the steps.

### Settings

Keep one header in the header area. To change style, remove this header and add another.

#### At the top

| Setting | What it changes |
| --- | --- |
| **Color scheme** | Colors the bar on phones and tablets, and the announcement strip above the page. |
| **Main menu** | The menu in the column on computers and in the drawer on tablets and phones. |
| **Drawer footer links** | A short list along the bottom of the column and the drawer, such as delivery or contact. The account link is added for you. Your **Main menu** is not repeated here, so pick a different menu. |
| **Customer account menu** | The links shown under the account icon. |
{: .settings}

#### Actions

| Setting | What it changes |
| --- | --- |
| **Show search** | Shows the search field in the column on computers, and the search icon on tablets and phones. |
{: .settings}

#### Bar

| Setting | What it changes |
| --- | --- |
| **Bar height** | How tall the bar is, from 64 to 120px. Tablets only (501 to 1100px): phones use a fixed compact bar, and computers have no bar because the menu is a column. |
{: .settings}

#### Navigation drawer

| Setting | What it changes |
| --- | --- |
| **Drawer color scheme** | The colors of the menu column on computers and of the panel that slides in from the left on tablets and phones. A scheme that contrasts with the page reads best. |
{: .settings}

### Blocks

This header has no blocks. Its links come from the menus you choose.

### Tips and limits

> *No drop-downs.* Everything is in the column or drawer, with sub-items folding open under their parent, so the mega menu setting does not apply to this style.

> *Contrast the column.* A **Drawer color scheme** that differs from the page's makes the column stand out as a separate panel.

> *The column takes 300px.* Computers lose that much page width, and the page, its fixed bars and its sheets sit in what is left. Full-screen layers such as quick view cover the column on purpose.

> *Keep the header on screen.* The column is always on screen on a computer. On tablets and phones the setting keeps the bar at the top.

> *Older browsers keep the bar.* A browser too old to dock the column shows the bar and drawer at every width, like a phone.

> *Left to right only.* The column is always on the left, so it is not suited to stores written right to left.

> *A long store name shrinks, then wraps.* In the column, the bar and the drawer it gets smaller to fit, then moves onto a second line. It is never cut off with dots.

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

On computers it is an icon in the header bar (in the menu column, for **Sidecar**). On phones and tablets it is a row called *Appearance* inside the menu. Each press goes to Light, then Dark, then back to the shopper's device setting. The choice is remembered on that shopper's device. How the dark colors are made is explained in [Theme settings](theme-settings.md#how-light-and-dark-mode-works).

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
| Aurora glow | In a pill on the right | A full-width sheet: links listed on the left | The chosen link's own links and picture on the right |
| Centered stack | In the bar at the foot of the screen | A drop-down list rising from the bar | Columns with the mega menu on, an indented list with it off |
| Floating capsule | A full-screen menu | Fold open in place | Fold open in place |
| Nebula float | A *Browse* button that opens a panel | A row of picture tiles | A plain list in the next step of the panel |
| Sidecar | A column docked at the left; a drawer from the left on tablets and phones | Fold open in place | Fold open in place |
{: .settings}

Turn the mega menu on or off with **Enable the horizontal mega menu** under **Header** in Theme settings: with it on, an item with two levels below it opens as columns instead of a single list. It applies to **Centered stack**; **Aurora glow** opens every item as a full-width sheet with pictures, **Nebula float** walks its menu one level at a time, and **Floating capsule** and **Sidecar** fold sub-items open in their menu or column instead. Keyboard users open a drop-down with Enter or Space; in **Aurora glow** the arrow keys also move along the menu and through the sheet's links.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/headers/drop-down-desktop-light.webp' | relative_url }}" alt="The Shop item of the Aurora glow header open as a full-width sheet: numbered links on the left, and the chosen one's links and picture on the right" width="1440" height="900" loading="lazy">
    <figcaption>Aurora glow's menu sheet open under the Shop item</figcaption>
  </figure>
</div>

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/headers/mega-menu-desktop-light.webp' | relative_url }}" alt="The Shop item of the Centered stack header open as a mega menu: the links below Shop are the column headings and their sub-items are listed under them" width="1440" height="900" loading="lazy">
    <figcaption>A mega menu open under the Shop item, with two levels below it</figcaption>
  </figure>
</div>

On phones and tablets the menu folds behind a button, and all three levels stay reachable. **Nebula float** keeps its *Browse* button on tablets, and **Centered stack** opens its menu as a sheet rising from the foot bar. On a touch screen wider than 1100px, such as a tablet held sideways, the first tap on an item with a drop-down opens it, and a second tap follows the link.

### Tips and limits

> *Keep the top level short.* Five to seven items fit best. A very long top level makes the menu fold into the menu button even on a wide screen.

> *Give every top item a link.* An item with a drop-down still goes to its own page when selected, so point it somewhere useful.

> *The footer menu starts small.* On a new store the *Footer menu* may hold only a link to the search page. Add the pages you want, such as shipping, returns and contact.

> *Menus belong to your store.* A menu is the same whichever theme you use, so changing a header style never loses your links.

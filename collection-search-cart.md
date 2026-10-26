---
title: Collection, search and cart pages
updated: 2026-10-26
---

# Collection, search and cart pages

The pages where shoppers browse, search and check out: a collection, the list of all collections, search results and the cart. Each one is a page template you open from the editor's page selector, with a choice of looks. The card used for every product comes from [Theme settings](theme-settings.md#product-cards).
{: .lede}

- Collection, collections list, search and cart pages
- 5 looks for Collection and Search, 3 for Cart
- Open each from the page selector at the top of the editor
- Filters come from the Shopify Search & Discovery app
{: .facts}

| On this page | What it covers |
| --- | --- |
| [Opening a page template in the editor](#opening-a-page-template-in-the-editor) | The steps that apply to every page below |
| [Collection page](#collection-page) | One collection's products, in five looks |
| [Collections list page](#collections-list-page) | The page that lists every collection |
| [Search page](#search-page) | Search results, in five looks |
| [Filters and sorting](#filters-and-sorting) | Filtering and sorting on the collection and search pages |
| [Cart page](#cart-page) | The bag, in three looks, with the order note |
| [Product cards](#product-cards) | The card shown for every product, set once in Theme settings |

## Opening a page template in the editor

These pages are not added from *Add section*. Each template already holds its main section; you open the template and change that section's settings.

1. In your Shopify admin, open *Online Store > Themes*.
2. Next to {{ site.theme_name }}, select *Edit theme*.
3. In the page selector at the top of the editor, choose the page: *Collections > Default collection*, *Collections list*, *Search* or *Cart*.
4. Select the page's section in the left bar to change its settings.
5. Select *Save*.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/collection/editor-page-selector-desktop-light.webp' | relative_url }}" alt="The editor's page selector open, listing Home page, Products, Collections, Collections list, Gift card, Cart, Checkout and customer accounts, Pages, Blogs, Blog posts, Search and Password" width="480" height="530" loading="lazy">
    <figcaption>The page selector, with Collections, Collections list, Cart and Search</figcaption>
  </figure>
</div>

> *Presets start on different looks.* The {{ site.theme_name }} preset opens Collection and Search in **Split** and Cart in **Receipt**. Oakwood starts on **Index** and **Compact table**. Petal starts on **Lookbook** and **Editorial**. You can change any of them.

## Collection page

One collection's products, with its name, picture and description, filters and sorting. Choose from five looks: the colors, fonts, buttons and product cards always follow your theme settings.
{: .lede}

- Page selector › Collections › Default collection
- 5 looks
- No blocks
{: .facts}

### Looks

{% include looks.html folder="collection" file="collection" name="Collection page" looks="Lookbook,Split,Mosaic,Index,Dealt cards" about="A cover picture that lays back as it scrolls away, a giant title, and picture-first cards in rows.|Computers hold the collection picture, title and description on the left while the products scroll on the right; phones stack them.|The title, picture and description form one tile inside the product grid, with product type tabs along the top.|A numbered catalog list of rows, each with a small picture, name, type and price.|A centered title with Filter and Sort as a pair, then a clean grid of square pictures that land one by one like dealt cards." %}

- **Lookbook**: a cover picture that lays back into the page as it scrolls away, a giant title, and picture-first cards with a round bag button on the picture. The pictures settle into their frames as each row arrives. *Filter* and *Sort* float in a pill at the bottom of the screen while the products are on screen.
- **Split**: on computers the picture, title and description hold still on the left while the products scroll on the right. On phones and tablets they stack. A strip with *Filter*, the count and *Sort* stays in view.
- **Mosaic**: the title, picture and description are one tile inside the product grid, with products starting beside it. When the product type filter is set up, product types appear as tabs, so one tap filters. On phones and tablets the tabs stay on one line and slide sideways, with a fade at the edge that has more, so many long product types never fill the screen.
- **Index**: a numbered catalog list. Each row shows a number, a small picture, the name, the type, the price and a button. On computers a larger picture follows the mouse along the rows.
- **Dealt cards**: a centered title, *Filter* and *Sort* as a centered pair, and a grid of square pictures with full-width buttons. Each card lands with a small tilt, like a card dealt onto a table.

### Where to find it

Open the editor as in [Opening a page template in the editor](#opening-a-page-template-in-the-editor), choose *Collections > Default collection* and select the **Collection** section. To give some collections a different page, create a new template there and assign it to those collections in your Shopify admin.

### Settings

#### Layout

| Setting | What it changes |
| --- | --- |
| **Look** | How the page is laid out. Options: **Lookbook**, **Split**, **Mosaic**, **Index**, **Dealt cards**. |
| **Products per page** | How many products show before the page links, from 8 to 48. |
| **Picture shape** | Shapes the product pictures. Options: **Rectangle**, **Arch**, **Blob**, **Chevron**, **Diamond**, **Parallelogram**, **Circle**. Not shown for **Index**, which keeps plain pictures. |
| **Show the vendor** | Shows the maker's name on each product. |
| **Scroll animation** | Options: **Off for visitors who reduce motion**, **Always animate**. See [Motion](getting-started.md#motion). |
{: .settings}

#### Banner

| Setting | What it changes |
| --- | --- |
| **Show the heading** | Turned off, the collection's name is hidden from view but still read out by screen readers and search engines. |
| **Heading** | Replaces the collection's own name, on this page only. Shown when **Show the heading** is on. |
| **Show the collection image** | Shows the collection's own image with its heading. A collection with no image shows nothing in its place. |
{: .settings}

#### Filtering and sorting

| Setting | What it changes |
| --- | --- |
| **Let shoppers sort** | Shows the sort control. |
| **Price bands** | Quick price choices beside the *From* and *To* boxes. List prices in your own currency, separated by commas, for example `50, 100`. Leave empty to show only the two boxes. |
{: .settings}

See [Filters and sorting](#filters-and-sorting) for how the filters themselves are chosen.

### Blocks

This section has no blocks. The products, name, picture and description come from the collection you are looking at.

### Tips and limits

> *Edit the collection itself in your admin.* The name, picture, description and the products are set in *Products > Collections*. Here you only choose how the page looks.

> *The page works without scripts.* If a visitor's browser blocks scripts, filtering and sorting still work, and the page shows its finished still layout.

> *Mosaic's tabs need a filter.* Its product type tabs come from the product type filter in Search & Discovery. With that filter not set up, the tabs are left out and the page still works.

> *Long names are never cut off.* Product names show in full on collection pages.

## Collections list page

The page that lists every collection in your shop, as picture tiles.
{: .lede}

- Page selector › Collections list
- 3 looks (Stack, Lookbook, Mosaic)
- Uses the **Collection tiles** section
- No blocks
{: .facts}

### Looks

{% include looks.html folder="collection" file="collections-list" name="Collections list page" looks="Standard" plain="true" about="Every collection as a picture tile, with its name and product count." %}

The page uses the same **Collection tiles** section as the home page, in its **Stack**, **Lookbook** and **Mosaic** looks: see the pictures in [Collection tiles](sections.md#collection-tiles).

### Where to find it

Open the editor as in [Opening a page template in the editor](#opening-a-page-template-in-the-editor), choose *Collections list* and select the **Collection tiles** section. You can add more sections above or below it with *Add section*.

### Settings

On this page the section lists every collection in your shop, so the **Collections** picker is not used.

#### Layout

| Setting | What it changes |
| --- | --- |
| **Look** | Options: **Stack** (fans out each collection's picture with two of its products), **Lookbook** (a large spread with its description), **Mosaic** (keeps every picture's own shape). |
| **Columns on desktop** | How many tiles sit side by side on a computer, from 2 to 5. Not shown for **Lookbook**. |
| **Columns on mobile** | Options: **1**, **2**. Not shown for **Lookbook**. |
| **Image ratio** | The shape of each picture. Options: **Square**, **Portrait**, **Landscape**. Only for **Stack**. |
| **Scroll animation** | Options: **Off for visitors who reduce motion**, **Always animate**. |
{: .settings}

#### Content

| Setting | What it changes |
| --- | --- |
| **Heading** | The heading above the tiles. Leave empty for none; on this page it is "Collections" if you leave it empty. |
| **Collections** | Not used on this page. |
| **Collections per page** | How many collections show before the page links, from 8 to 48. This page only. |
| **Show product count** | Shows how many products each collection holds. |
{: .settings}

#### Colors

| Setting | What it changes |
| --- | --- |
| **Color scheme** | The colors of the section. |
{: .settings}

#### Padding

| Setting | What it changes |
| --- | --- |
| **Top padding** | Space above the section, from 0 to 100px. |
| **Bottom padding** | Space below the section, from 0 to 100px. |
{: .settings}

### Blocks

This section has no blocks. The tiles come from your collections.

### Tips and limits

> *A collection needs a picture.* The tiles use each collection's own picture. Add one in *Products > Collections* so no tile looks empty.

## Search page

The results page a shopper reaches after searching, with the same five looks as the collection page, filters, sorting and a helpful page when nothing is found.
{: .lede}

- Page selector › Search
- 5 looks
- No blocks
{: .facts}

### Looks

{% include looks.html folder="collection" file="search" name="Search page" looks="Lookbook,Split,Mosaic,Index,Dealt cards" about="The search words as the headline field above picture-first result cards.|The search field and the kinds of result beside a held title, with results scrolling on the right.|A tile carrying the search field at its foot, inside the grid of results.|One numbered list of every kind of result, with the kind named in a column.|The search words as the title, with the field and the kinds under it, then square cards that land one by one." %}

The looks match the collection page's: see [Collection page](#looks) for what each one does. On the search page each look also offers the search field and a choice of what to show.

### Where to find it

Open the editor as in [Opening a page template in the editor](#opening-a-page-template-in-the-editor), choose *Search* and select the **Search** section.

### Settings

#### Layout

| Setting | What it changes |
| --- | --- |
| **Look** | How the page is laid out. Options: **Lookbook**, **Split**, **Mosaic**, **Index**, **Dealt cards**. |
| **Results per page** | How many results show before the page links, from 8 to 48. |
| **Picture shape** | Shapes the product pictures. Options: **Rectangle**, **Arch**, **Blob**, **Chevron**, **Diamond**, **Parallelogram**, **Circle**. Not shown for **Index**. |
| **Show the vendor** | Shows the maker's name on each product. |
| **Scroll animation** | Options: **Off for visitors who reduce motion**, **Always animate**. |
{: .settings}

#### Filtering and sorting

| Setting | What it changes |
| --- | --- |
| **Let shoppers sort** | Shows the sort control. |
| **Price bands** | Quick price choices beside the *From* and *To* boxes, in your own currency, separated by commas, for example `50, 100`. Leave empty to show only the two boxes. |
{: .settings}

#### No results

| Setting | What it changes |
| --- | --- |
| **Suggest products from** | A collection whose products are shown under the "nothing found" message, so a shopper who found nothing still has somewhere to go. The first eight products of the collection are shown. |
{: .settings}

### Blocks

This section has no blocks.

### Tips and limits

> *What the search looks through is a theme setting.* **Search across** (Products only or Everything) and the drop-down that suggests results while a shopper types are set in [Theme settings](theme-settings.md#search-behavior), not on this page.

> *Popular searches.* The terms you list in **Popular searches** also appear on this page, under a "Popular searches" heading, when nothing was found.

> *Pages without text.* A page whose content is empty shows a page icon where other pages show the start of their text.

> *Collections are never listed as results.* Search results show products, pages and blog posts. The suggestions drop-down can show collections.

> *Filters narrow a search too.* The same Search & Discovery filters you set up for collections apply to search results.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/collection/search-nothing-found-desktop-light.webp' | relative_url }}" alt="The search page when nothing is found: the message Nothing found, and a You might like row of suggested products below it" width="1440" height="1180" loading="lazy">
    <figcaption>Nothing found, with suggested products</figcaption>
  </figure>
</div>

## Filters and sorting

The *Filter* and *Sort* controls on the collection and search pages.
{: .lede}

### Filters

Filters (price, availability, product type, vendor, color, size and more) are chosen in the free Shopify Search & Discovery app, not in the theme.

1. In your Shopify admin, open *Apps > Search & Discovery*.
2. Select *Filters*.
3. Add, reorder or remove filters. The page shows whichever you set up; a filter with nothing to choose from is left out.

Shoppers open the filters with the *Filter* button. On phones they rise in a sheet from the bottom. The price filter has *From* and *To* boxes, and your **Price bands** add quick choices beside them; the band that matches the chosen range is marked as chosen. The choices a shopper has made show as removable pills with a *Clear all* link.

{% include looks.html folder="collection" file="filter-sheet" name="Filter sheet" looks="Standard" plain="true" about="the filter sheet open with the Availability and Price filters and In stock chosen." %}

### Sorting

With **Let shoppers sort** on, shoppers can order products by the choices your shop offers, such as best selling, price, name and date. The default order of a collection is set on the collection itself in your Shopify admin.

On phones up to 500 pixels wide the *Sort by* label is hidden, and the box shows the chosen order by name, such as *Alphabetically, A-Z*.

### Tips and limits

> *Filters need Search & Discovery.* Set the filters up there; the theme only displays them. Without any, the page still lists products and can be sorted.

> *Both pages share their controls.* **Let shoppers sort** and **Price bands** are separate settings on each page, so set them on both.

## Cart page

The shopper's bag: every item, quantities, the totals and the way to checkout. Choose from three looks.
{: .lede}

- Page selector › Cart
- 3 looks
- Blocks: apps and Custom Liquid
{: .facts}

### Looks

{% include looks.html folder="collection" file="cart" name="Cart page" looks="Receipt,Editorial,Compact table" about="One centered receipt with ruled rows and a running tally, with a checkout bar along the bottom edge.|Each item as a large picture beside big type, then one calm totals panel.|Short dense rows, with the totals panel kept at the side on computers." %}

- **Receipt**: one centered receipt with ruled rows and the total at its foot. A checkout bar sits on the bottom edge of the screen while the page's own *Checkout* button is still well below the screen, and steps away once that button is in view or about to be, and whenever it would cover the order note.
- **Editorial**: each item is a large picture beside big type, on alternating sides, then one calm totals panel. *Skip to total* in the heading and a small *Checkout* pill in the corner keep checkout close on a long bag.
- **Compact table**: short dense rows. On computers the totals panel stays at the side, and a total and *Checkout* strip sits under the heading.

### Where to find it

Open the editor as in [Opening a page template in the editor](#opening-a-page-template-in-the-editor), choose *Cart* and select the **Cart** section. The preview shows your bag; add a product to your own cart first so there is something to see.

### Settings

#### Layout

| Setting | What it changes |
| --- | --- |
| **Look** | How the cart page is laid out. Options: **Receipt**, **Editorial**, **Compact table**. |
| **Scroll animation** | Options: **Off for visitors who reduce motion**, **Always animate**. |
{: .settings}

#### Colors

| Setting | What it changes |
| --- | --- |
| **Color scheme** | The colors of the page. |
{: .settings}

### Blocks

Add blocks under the **Cart** section with *Add block*. They appear with the totals.

| Block | What it shows |
| --- | --- |
| App block | A block from an app you installed. Apps add their own blocks here. |
| **Custom Liquid** | Code an app asks you to paste. Its one setting, **Liquid**, is checked when you save, so a mistake is refused instead of breaking the page. |

### The order note

A note box on the cart page lets shoppers add delivery instructions or anything else you should know. It is sent with the order. It is switched on in Theme settings, under **Cart**, with **Let shoppers add a note**. The same group has **Show vendor** and **Empty cart suggestions**: see [Cart in Theme settings](theme-settings.md#cart).

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/collection/cart-order-note-desktop-light.webp' | relative_url }}" alt="The cart page with one item and, under the total, the Order note box beside the Checkout button" width="1440" height="900" loading="lazy">
    <figcaption>The order note box on the cart page</figcaption>
  </figure>
</div>

### What shoppers can do

- Change quantities and remove items. A product with a minimum, maximum or volume pricing shows those rules as words. Typing a quantity and then pressing the minus, plus or bin buttons keeps what was typed (the order note too), and the page comes back at the same place with the same button selected.
- Be told when they ask for more than you have. For a product that tracks stock and does not sell past zero, the quantity box stops at what is in stock, the plus button dims with the line "All N available are in your bag", and a larger typed number is refused with "Only N available" instead of being saved. Products that do not track stock, or that you let sell past zero, have no limit.
- See each item's discounts and subscriptions (a subscription line shows the price without the plan struck through and how much the plan saves), the bag's own discounts next to the total, and a line saying whether tax and delivery are included or worked out at checkout.
- Reach checkout from the bar, pill or button of the look you chose. Express checkout buttons (Shop Pay, Apple Pay and others) appear when your shop offers them.
- Find suggested products when the bag is empty, from the collection you pick in Theme settings.

### Tips and limits

> *The page works without scripts.* Quantities, remove and checkout all work with scripts blocked, and the browser still refuses a number above the stock. Scripts add the bar, the pill, the pinned panel, the movement, the "Only N available" wording and keeping typed edits when a plus, minus or bin button is pressed. Without scripts those three buttons are links, so press *Update bag* before using them or a typed number is lost.

> *Enter in a quantity box updates the bag.* It never sends the shopper to checkout, in any look.

> *Discount codes are entered at checkout.* The cart page shows discounts that already apply, but does not take a code.

> *Products from other stores are grouped.* If your shop sells products from other Shopify stores, the bag splits into "Sold by" groups, with a note that your discounts and free delivery do not apply to the others.

> *Add a product before you test.* An empty bag shows the empty message and suggestions, not the look you chose.

## Product cards

The card shown for every product, on the home page, collection and search pages and in an empty cart. Set it once in Theme settings and every card matches.
{: .lede}

- Gear icon › Product cards
- Standard or Card style
- No blocks
{: .facts}

### Looks

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/settings/product-card-style-standard-desktop-light.webp' | relative_url }}" alt="Four product cards in Standard style" width="1440" height="642" loading="lazy">
    <figcaption>Style: Standard</figcaption>
  </figure>
</div>

<div class="pair" style="margin-top:18px">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/settings/product-card-style-card-desktop-light.webp' | relative_url }}" alt="The same four product cards in Card style" width="1440" height="634" loading="lazy">
    <figcaption>Style: Card</figcaption>
  </figure>
</div>
<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/settings/product-card-shape-square-desktop-light.webp' | relative_url }}" alt="Four product cards with square pictures" width="1440" height="562" loading="lazy">
    <figcaption>Image shape: Square</figcaption>
  </figure>
</div>

<div class="pair" style="margin-top:18px">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/settings/product-card-shape-portrait-desktop-light.webp' | relative_url }}" alt="Four product cards with portrait pictures" width="1440" height="723" loading="lazy">
    <figcaption>Image shape: Portrait</figcaption>
  </figure>
</div>

<div class="pair" style="margin-top:18px">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/settings/product-card-shape-landscape-desktop-light.webp' | relative_url }}" alt="Four product cards with landscape pictures" width="1440" height="481" loading="lazy">
    <figcaption>Image shape: Landscape</figcaption>
  </figure>
</div>

<div class="pair" style="margin-top:18px">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/settings/product-card-shape-wide-desktop-light.webp' | relative_url }}" alt="Four product cards with wide pictures" width="1440" height="421" loading="lazy">
    <figcaption>Image shape: Wide</figcaption>
  </figure>
</div>
<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/collection/product-card-hover-zoom-desktop-light.webp' | relative_url }}" alt="Two collection cards with the pointer over the second one, whose picture is slightly zoomed in" width="810" height="640" loading="lazy">
    <figcaption>Hover style: Zoom the picture</figcaption>
  </figure>
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/collection/product-card-hover-second-picture-desktop-light.webp' | relative_url }}" alt="The same cards with the pointer over the second one, which now shows its second picture" width="810" height="640" loading="lazy">
    <figcaption>Hover style: Show the second picture</figcaption>
  </figure>
</div>
<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/collection/product-card-sold-out-label-desktop-light.webp' | relative_url }}" alt="A collection page where the sold out dress has a Sold out label and a button that cannot be pressed" width="1440" height="900" loading="lazy">
    <figcaption>Sold out products: Show sold out</figcaption>
  </figure>
</div>

<div class="pair" style="margin-top:18px">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/collection/product-card-sold-out-inquiry-desktop-light.webp' | relative_url }}" alt="The same collection page where the sold out dress keeps its Sold out label and shows an Inquire now button" width="1440" height="900" loading="lazy">
    <figcaption>Sold out products: Show an inquiry button</figcaption>
  </figure>
</div>

Standard puts the picture, name and price straight on the page. Card puts the product on a framed card in its own color scheme.

A sold out product's button is drawn flat, in soft gray lettering with a faint border and no accent color, so it reads as unavailable next to the live buttons while staying legible.

### Where to find it

Open *Theme settings* (the gear icon) in the editor, then select **Product cards**. See [Where to find Theme settings](theme-settings.md#where-to-find-them).

### Settings

The full list of settings, in the editor's order, is in [Product cards](theme-settings.md#product-cards) on the Theme settings page. In short:

| Group | What it changes |
| --- | --- |
| **Layout** | **Style** (**Standard** or **Card**), **Alignment** and **Product name lines**. |
| **Image** | **Image shape**, **Custom shape from an image** and **Crop images to fill**. |
| **Hover** | **Hover style**: **Zoom the picture**, **Show the second picture** or **No hover effect**. |
| **Surface** | **Color scheme**, **Border**, **Corner rounding** and **Elevation** for a framed card. |
| **Sold out** | **Sold out products**, **Inquiry button label** and **Inquiry button link**. |
{: .settings}

### Blocks

This group has no blocks.

### Tips and limits

> *Collection and search cards differ.* The collection and search pages use their own card layout. They follow **Alignment** (the Index look keeps its own rows), **Image shape**, **Custom shape from an image**, **Crop images to fill**, **Hover style**, the sale badge and **Sold out products**; **Style** and **Color scheme** apply on the home page, Related products and the empty cart only, and the editor says so under each.

> *The sale badge is set elsewhere.* The badge on reduced products is under Sale badge in [Search](theme-settings.md#sale-badge) in Theme settings.

> *Hover does nothing on touch.* Phones and tablets have no hover, so they ignore **Hover style**.

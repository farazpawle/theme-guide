---
title: Product page
updated: 2026-10-24
---

# Product page

The page every product opens on: its pictures, name, price, options and buy buttons, then the details a shopper reads before choosing. {{ site.theme_name }} builds it from one Product section with three looks and four layouts, and sixteen blocks you add, remove and reorder.
{: .lede}

- Editor: *Products > Default product*
- 3 looks and 4 layouts
- 16 blocks, plus app blocks
- Related products is its own section
{: .facts}

| On this page | What it covers |
| --- | --- |
| [Product section](#product-section) | The three looks, the four layouts and the section's settings |
| [Product blocks: name, price and facts](#product-blocks-name-price-and-facts) | Product name, Price, Text line, SKU, Stock level, Rating |
| [Product blocks: choosing and buying](#product-blocks-choosing-and-buying) | Variant picker (with swatches), Quantity, Buy buttons, Store pickup |
| [Product blocks: more to read](#product-blocks-more-to-read) | Goes well with, Description, Collapsible panel, Share, Icon row, Custom Liquid |
| [Related products](#related-products) | The section of suggestions below the product |
| [Quick view from a product card](#quick-view-from-a-product-card) | The preview panel that opens over the page |
| [Gift card products](#gift-card-products) | Letting a buyer send a gift card to someone else |
| [Product media](#product-media) | Pictures, enlarging, videos, 3D models and "View in your space" |
| [Extra product templates](#extra-product-templates) | A second product layout for some products |
| [App blocks](#app-blocks) | Where apps can add their own blocks |

How product cards look wherever products are listed, and the sold out inquiry button, are set in [Theme settings](theme-settings.md#product-cards).

## Product section

The section that draws the whole product page: the pictures on one side and a column of blocks on the other. The same section also works on the home page to show one chosen product, where it gives you two more looks.
{: .lede}

- Product page: *Products > Default product*
- Home page: Add section › Product, or Featured product
- 3 looks, 4 layouts
- 16 blocks and app blocks, up to 24 in all
{: .facts}

### Looks

The **Look** setting appears once you pick a **Product**. On the product page itself, the product is whichever one the shopper opened, so the page always uses the **Product page** look and you choose a layout instead.

{% include looks.html folder="product" file="product" name="Product section" looks="Product page,3D ring,Banner with a buy card" about="The pictures beside the details column, with the name, price, options and buy buttons.|The product's pictures turning on a ring beside the buy details.|A large picture with the details on a card laid over it." %}

- **Product page**: the pictures sit beside the details. This is the look every product page uses.
- **3D ring**: the pictures turn on a ring that a shopper drags or steps through with arrows. It needs three or more pictures, videos or 3D models. With fewer, it shows one large one.
- **Banner with a buy card**: a large picture with the details on a card laid over it, for a spotlight on the home page. If you show the breadcrumb on it, the breadcrumb sits on a small card of the page color so it stays readable over the band.

### Layouts

The four layouts change how the **Product page** look is arranged. Pick one with the **Layout** setting.

{% include looks.html folder="product" file="product-layout" name="Product page layout" looks="Classic,Filmstrip,Long read,Spec sheet" about="The pictures with a row of small thumbnails beside the details column.|Every picture in a column on the left that rolls on as the details are read.|One centered column like a magazine story, with a buy bar at the foot of the screen.|The page as a ledger, with the pictures as plates and each block as a ruled row." %}

- **Classic**: one large picture with thumbnails, the details beside it, and the description, panels and share links in a full-width band underneath. It suits any product.
- **Filmstrip**: every picture at once. On computers the pictures fill the left half of the window and hold still while the details are read, then roll on one by one. On phones and tablets they become a swipe row. It suits four or more pictures.
- **Long read**: one centered column, like a story. The lead picture opens the page wide, then the buy card, then the details with the other pictures between them. A buy bar stays at the foot of the screen whenever the page's own Add to bag button is out of view. On the buy card, the accent-colored words and borders (the chosen option, Buy it now) and the stock line are drawn a little deeper than elsewhere so they stay easy to read on the card, in light and dark mode. It suits one to three pictures.
- **Spec sheet**: the page as a ledger. The pictures are numbered plates on the left and every block is a ruled row on the right. It suits products sold on their sizes and materials.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/product/editor-product-blocks-desktop-light.webp' | relative_url }}" alt="The editor's left bar on the Default product page with the Product section open, listing its blocks from Product name and Price down to the collapsible panels, with an Add block button on top" width="305" height="844" loading="lazy">
    <figcaption>The Product section's block list</figcaption>
  </figure>
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/product/editor-product-settings-desktop-light.webp' | relative_url }}" alt="The settings of the Product section: Product, Layout set to Filmstrip, Show the trail at the top, and Enlarging a picture" width="305" height="844" loading="lazy">
    <figcaption>The Product section's settings</figcaption>
  </figure>
</div>

### Where to find it

1. In your Shopify admin, open *Online Store > Themes*, then select *Edit theme* next to {{ site.theme_name }}.
2. At the top of the editor, open the page selector and choose *Products > Default product*. The Product section is already on the page.
3. To show one product on another page, open the *Home page*, select *Add section*, then **Product** or **Featured product**, and pick the **Product**.
4. Change the settings, then select *Save*.

### Settings

#### At the top

| Setting | What it changes |
| --- | --- |
| **Product** | Leave empty on product pages to show that page's product. Pick a product to show it anywhere else, such as the home page. |
| **Look** | Shown once a **Product** is picked. Options: **Product page**, **3D ring**, **Banner with a buy card**. |
| **Layout** | Shown on the product page, or when **Look** is **Product page**. Options: **Classic**, **Filmstrip**, **Long read**, **Spec sheet**. |
| **Show the trail at the top** | A row of links, such as Home, Products and the product's name, so shoppers can step back. Shown when no **Product** is picked, and when the **Look** is **Banner with a buy card**. It draws only on the product's own page, not on the home page. |
{: .settings}

#### Pictures

| Setting | What it changes |
| --- | --- |
| **Enlarging a picture** | What happens when a shopper selects a picture. Options: **Full screen** (a full-screen view opens on a click), **Magnify** (the picture enlarges under the pointer; it does nothing on a touch screen, where there is no pointer to follow) or **Off**. |
{: .settings}

### Blocks

The section takes the blocks below, in any order, up to 24 in all. Each is described in the sections that follow: [name, price and facts](#product-blocks-name-price-and-facts), [choosing and buying](#product-blocks-choosing-and-buying) and [more to read](#product-blocks-more-to-read). Apps can add their own: see [App blocks](#app-blocks).

To add, remove or reorder a block, open the section in the left bar of the editor, then use *Add block*, drag a block by its handle, or select a block and choose *Remove block*.

### Tips and limits

> *Start with the default.* A new product page already holds a sensible stack of blocks: the maker, name, price, rating, SKU, options, stock level, quantity, buy buttons, pickup, goes well with, description, panels and share links. Change it a block at a time.

> *Pick the layout from the pictures.* **Filmstrip** shows every picture, so it needs four or more to look full. **Long read** works with one to three. **Classic** works with any number.

> *One product name only.* The **Product name** block is the page's heading. Add it once; a second one gives the page two main headings, which is poor for screen readers and search engines.

> *The colors follow your theme.* The Product section has no color scheme of its own. It uses your theme colors and the light and dark mode switch, so the page matches the rest of your store.

> *The 3D ring and the banner are for the home page.* Their **Look** setting only appears once a **Product** is picked, which is what a home page spotlight does.

## Product blocks: name, price and facts

The first six blocks give the shopper the basics. Add them in the Product section with *Add block*.
{: .lede}

- Add block › Product name, Price, Text line, SKU, Stock level or Rating
- Available in the Product section
- Shown in the details column
{: .facts}

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/product/details-top-desktop-light.webp' | relative_url }}" alt="The top of the product details: the vendor line, the product name, the price with a Save 19 percent badge, the line No reviews yet, and the SKU" width="680" height="290" loading="lazy">
    <figcaption>The top of the details column</figcaption>
  </figure>
</div>

### Product name

The product's title, as the page's main heading. It is never cut short. This block has no settings.

### Price

The price of the chosen option. When the product is on sale it shows the regular price crossed out beside the sale price and a "Save" percentage. Where the product is sold by weight or volume it shows the unit price. Where your shop offers Shop Pay Installments, the banner shows beneath. A short note underneath says "Tax included" when your prices include tax, and that delivery is worked out at checkout (linked to your delivery policy when you have one). This block has no settings.

The price changes as the shopper picks a different option, and the change is read out to screen readers.

### Text line

One line of text above or below the other blocks: your own words, or each product's own **Vendor** or **Product type**, so one block covers every product.

| Setting | What it changes |
| --- | --- |
| **Text source** | Where the words come from. Options: **Your own words**, **Vendor**, **Product type**. Vendor and product type come from each product. |
| **Text** | Your words. Shown when **Text source** is **Your own words**. |
| **Link it** | Makes the vendor or product type a link to everything else by that maker, or of that kind. Leave off in a store with only one. Shown when **Text source** is **Vendor** or **Product type**. |
| **Type style** | Options: **Normal text**, **Subheading**, **Uppercase**. |
{: .settings}

### SKU

The chosen option's SKU, in a small label. It changes when the shopper picks another option, and hides when the option has no SKU.

| Setting | What it changes |
| --- | --- |
| **Type style** | Options: **Normal text**, **Subheading**, **Uppercase**. |
{: .settings}

### Stock level

A line that says whether the chosen option is in stock, running low or sold out.

| Setting | What it changes |
| --- | --- |
| **Low stock below** | How few must be left before the line says stock is low, from 0 to 100. It only counts where you track inventory. |
| **Say how many are left** | Off shows only that stock is low. On gives the number, such as "Only 3 left", which is more convincing but tells competitors what you hold. |
| **Type style** | Options: **Normal text**, **Subheading**, **Uppercase**. |
{: .settings}

### Rating

Star ratings and the review count. It shows nothing at all until you name a review app in Theme settings, under **Product page** (see [Product page settings](theme-settings.md#product-page)). With an app named and no reviews yet, it says "No reviews yet". This block has no settings of its own.

### Tips and limits

> *Stock level needs inventory tracking.* In a store that does not track inventory the line says "In stock" and nothing more, because a quantity would be a guess. Turn tracking on for a product in its *Inventory* section in your admin.

> *Overselling is respected.* A product set to keep selling when it runs out still says it is available.

> *Why is there no rating?* The **Rating** block hides until a review app is chosen in Theme settings, so a store without reviews never shows an empty promise.

> *Pick the product type or vendor, not words.* A **Text line** set to **Vendor** fills itself from every product. Your own words would repeat on all of them.

## Product blocks: choosing and buying

The blocks a shopper uses to pick an option and add it to their bag.
{: .lede}

- Add block › Variant picker, Quantity, Buy buttons or Store pickup
- Available in the Product section
- Shown in the details column
{: .facts}

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/product/variant-picker-pills-desktop-light.webp' | relative_url }}" alt="The variant picker as pills for sizes S, M, L and XL, with XL crossed out because it is unavailable" width="637" height="80" loading="lazy">
    <figcaption>Pills, with an unavailable option crossed out</figcaption>
  </figure>
</div>

<div class="pair" style="margin-top:18px">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/product/variant-picker-dropdown-desktop-light.webp' | relative_url }}" alt="The variant picker as a dropdown showing size S" width="680" height="96" loading="lazy">
    <figcaption>Dropdown</figcaption>
  </figure>
</div>

<div class="pair" style="margin-top:18px">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/product/variant-picker-swatches-desktop-light.webp' | relative_url }}" alt="The variant picker as color swatches: three round chips in blue, beige and green, with blue chosen" width="680" height="100" loading="lazy">
    <figcaption>Color swatches</figcaption>
  </figure>
</div>

### Variant picker

One group for each option the product has, such as size or color, shown as pills or a dropdown. A product can have up to three options (a Shopify limit). A value that cannot be had with the choices already made is crossed out and dimmed, and stays selectable: choosing it takes the shopper to the nearest option that does exist. The price, pictures, SKU, stock level and pickup line all follow the choice. The chosen pill is outlined and lettered in the accent color; in dark mode its letters are drawn a touch lighter so they stay easy to read.

| Setting | What it changes |
| --- | --- |
| **Picker style** | Pills suit a handful of values. A dropdown suits a long list, and any option with more than about eight. Options: **Pills**, **Dropdown**. |
| **Swatch shape** | Shows a value as its color or image. Shown when **Picker style** is **Pills**. Options: **Circle**, **Square**, **No swatch**. |
{: .settings}

#### Color and image swatches

A swatch is a small colored or pictured chip in place of a word. To use them:

1. In your Shopify admin, open the product.
2. Connect the option to a category metafield, such as Color. [Shopify explains how](https://help.shopify.com/en/manual/custom-data/metafields/category-metafields/using-category-metafields).
3. Give each entry a color or an image.
4. In the editor, leave **Swatch shape** on **Circle** or **Square**.

Values without a color or image show as pills. Choose **No swatch** to turn swatches off.

### Quantity

The number box with plus and minus buttons. Your minimums, maximums and volume prices are set on the product itself and show here as plain text ("Minimum 2", "In multiples of 6", "10 or more: $9 each"), so a shopper sees them before the number jumps. On a sold out option the number box and both buttons are switched off, since nothing can be bought. This block has no settings.

### Buy buttons

The Add to bag button, and, when your shop offers them, the express checkout buttons below it.

| Setting | What it changes |
| --- | --- |
| **Show the express checkout button** | Shop Pay, Apple Pay and the rest, whichever the shopper's device offers. It takes them straight to checkout with one item. |
| **Ask who a gift card is for** | Only ever shown on a gift card product. See [Gift card products](#gift-card-products). |
| **Note under the buttons** | One short line, such as a returns window or a delivery promise. Leave empty for none. |
{: .settings}

The block also holds the sold out button. A sold out option shows a "Sold out" button that cannot be pressed, and no express checkout buttons. To show an inquiry button instead, turn it on in Theme settings, under **Product page**, and set its wording and link under **Product cards**: see [Theme settings](theme-settings.md#product-page). It stays hidden until a link is set.

### Store pickup

Whether the chosen option can be collected from your stores, and which ones. A link opens a window listing every pickup location with its availability, address and phone number. With one location the link reads "View store information"; with more, "Check availability at other stores". This block has no settings.

The block appears once local pickup is turned on for a location under *Settings > Shipping and delivery* in your admin, and only for options in stock at a pickup location.

### Tips and limits

> *Add the Quantity and Buy buttons together.* The buy buttons are what put the product in the bag. The quantity box and the option picker only choose what goes in, so a page with them but no **Buy buttons** cannot add anything.

> *More than eight values?* Choose **Dropdown**. A long row of pills is hard to scan, and on a phone it wraps into many lines.

> *Crossed out is not gone.* A crossed-out value means that combination is unavailable, not that the value is missing. A dropdown cannot cross out, so it lists the value as "Unavailable".

> *Nothing about pickup?* Check that pickup is turned on for a location, and that the location holds the chosen option in stock.

## Product blocks: more to read

The blocks that tell a shopper more about the product, and the one that holds anything an app asks you to paste.
{: .lede}

- Add block › Goes well with, Description, Collapsible panel, Share, Icon row or Custom Liquid
- Available in the Product section
- Description, Collapsible panel and Share fill the full-width band below the pictures
{: .facts}

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/product/more-to-read-desktop-light.webp' | relative_url }}" alt="The full-width band under the pictures: the description, two always-open panels (Care and Shipping and returns), a closed row panel called How it fits, and the share links" width="1392" height="590" loading="lazy">
    <figcaption>The band under the pictures</figcaption>
  </figure>
</div>

### Goes well with

The products you picked as complementary to this one, each with its picture, name, price and a button to add it to the bag.

| Setting | What it changes |
| --- | --- |
| **Heading** | The title above the list. |
| **Maximum products** | How many to show, from 1 to 10. |
{: .settings}

You pick the complementary products for each product in the free *Shopify Search & Discovery* app. The block stays hidden on any product with none picked. In the editor it shows a hint saying where to pick them, so it is never an invisible block.

### Description

The product's own description, from the product itself. It is drawn in the full-width band below the pictures rather than beside them, and it shows nothing when the product has no description. This block has no settings.

### Collapsible panel

A heading that opens to your own text, to a page such as your delivery or returns policy, or to both. Add as many as you like.

| Setting | What it changes |
| --- | --- |
| **Heading** | The panel's title. Leave empty to use the title of the page below. |
| **Content** | The text shown inside. |
| **Page** | A page whose content is shown after the content above, not instead of it. Leave **Content** empty to show only the page. |
{: .settings}

#### Panel style

| Setting | What it changes |
| --- | --- |
| **Always open** | Draws the panel as a bordered card that cannot be collapsed, for the details every shopper wants such as specifications or delivery. Leave off and it is a row that opens on a click. |
| **Label on the right** | A short word beside the heading, such as Included or Policy. Shown when **Always open** is on. |
| **Icon** | A small icon beside the heading. Options: **No icon**, **Document**, **Delivery van**, **Return arrow**, **Exchange**, **Ruler**, **Washing**, **Leaf**, **Parcel**, **Payment card**, **Padlock**, **Shield**, **Award**, **Information**, **Question mark**, **Chat bubble**, **Clock**, **Globe**, **Map pin**, **Price tag**, **Gift**. |
{: .settings}

### Share

A row of ways to share the product: a button that copies the link, and links to Facebook, X and Pinterest. The link shared is the one for the option the shopper has chosen. Everything except the copy button is an ordinary link, so the row still works with scripts blocked.

| Setting | What it changes |
| --- | --- |
| **Label** | The word before the buttons. |
{: .settings}

### Icon row

Up to three short promises, each with an icon, such as delivery, returns and a guarantee.

| Setting | What it changes |
| --- | --- |
| **Direction** | Options: **Horizontal**, **Vertical**. On a phone the row always becomes a stack, because three columns on a small screen leave four words a line. |
{: .settings}

The block has three groups of settings, headed **First**, **Second** and **Third**. Each has the same three settings. A promise with no words is left out, so filling in one gives one.

| Setting | What it changes |
| --- | --- |
| **Text** | The promise. Basic formatting such as bold or italic is allowed. |
| **Icon** | Options: **No icon**, **Delivery van**, **Stopwatch**, **Return arrow**, **Exchange**, **Shield**, **Padlock**, **Award**, **Tick in a circle**, **Headset**, **Leaf**, **Gift**, **Payment card**, **Parcel**, **Clock**, **Globe**, **Ruler**, **Washing**. |
| **Image instead** | Replaces the icon, for a badge or a mark the icon set cannot draw, such as a payment badge. |
{: .settings}

### Custom Liquid

A block of your own code, placed exactly where you put the block, with no wrapper or spacing of its own. It is for anything an app asks you to paste.

| Setting | What it changes |
| --- | --- |
| **Liquid** | The code. It is checked when you save, so a mistake is refused here rather than breaking the page. |
{: .settings}

### Tips and limits

> *Always-open panels for what everyone needs.* Use **Always open** for specifications and delivery, and plain rows for the rest, such as care or sizing. Fewer open cards keep the page short.

> *Point a panel at your policy page.* Pick your shipping or returns page in **Page** and leave **Content** empty. When you update the policy, every product shows it.

> *Goes well with is empty?* Pick products for it in Shopify Search & Discovery. Until you do, shoppers see nothing and you see a hint in the editor.

> *Keep the icon row short.* Four or five words fit beside an icon. A long sentence wraps to many lines, especially on a phone.

> *No support for pasted code.* The **Custom Liquid** block runs whatever you paste. We cannot help with code that comes from an app or another source. Duplicate your theme before trying a new snippet, and ask a Shopify Partner if you are unsure.

## Related products

A grid of products Shopify chooses from the one on the page, so a shopper who is not sure has somewhere to go next.
{: .lede}

- Add section › Related products
- 1 look
- No blocks
{: .facts}

### Looks

{% include looks.html folder="product" file="related-products" name="Related products" looks="Standard" plain="true" about="A heading above a row of product cards, four across on a computer." %}

The cards use the same design as the rest of your store, set in [Theme settings](theme-settings.md#product-cards) under **Product cards**. The grid is four across on computers and two across on tablets and phones.

### Where to find it

1. In your Shopify admin, open *Online Store > Themes*, then select *Edit theme* next to {{ site.theme_name }}.
2. At the top of the editor, choose *Products > Default product*.
3. Related products is already below the product. To add it to another product template, select *Add section*, then **Related products**.
4. Change the settings, then select *Save*.

This section can only be added to product templates.

### Settings

#### At the top

Shopify chooses these from the product shown on the page. The whole section is left out when it has nothing to suggest.

| Setting | What it changes |
| --- | --- |
| **Heading** | The title above the grid. |
| **Products to show** | How many products, from 2 to 8. |
{: .settings}

#### Padding

| Setting | What it changes |
| --- | --- |
| **Top padding** | Space above the section, from 0 to 100px. |
| **Bottom padding** | Space below the section, from 0 to 100px. |
{: .settings}

### Blocks

This section has no blocks. The products are chosen by Shopify.

### Tips and limits

> *It may be missing, on purpose.* The section disappears from the page when Shopify has nothing to suggest, heading and all. This is normal on a very new store. In the editor it stays and shows a hint, so you can still select it.

> *Shopify decides which products.* The suggestions get better as your store gains orders. You cannot pick them by hand here. To pick by hand, use the **Goes well with** block, which shows products you choose.

> *Pick an even number.* The grid is two across on tablets and phones, so an even number of products fills the last row.

## Quick view from a product card

A preview panel that opens over the page when a shopper selects a product card, so they can look closer without leaving the page.
{: .lede}

- Home page: Featured products › **Open a preview panel on click**
- 1 look
- No blocks
{: .facts}

### Looks

{% include looks.html folder="product" file="quick-view" name="Quick view" looks="Standard" plain="true" about="A panel open over the page with the product's large picture and thumbnails, its name, price, a short description and a View product link." %}

The panel shows the product's pictures (and any videos and 3D models, played only when a shopper presses them), its type, name and price, the first forty words of its description, and a "View product" link to the full page. It has no option picker and no Add to bag button, because it could not add a chosen option; shoppers go to the product page to buy.

The panel is built the first time a shopper opens it, not with the page, so a home page with many products stays light. If it cannot load, the card simply goes to the product page. From the keyboard, focus starts on the Close button and the page behind stays still while the panel is open.

### Where to find it

1. In your Shopify admin, open *Online Store > Themes*, then select *Edit theme* next to {{ site.theme_name }}.
2. On the *Home page*, select a **Featured products** section.
3. Turn **Open a preview panel on click** on or off.
4. Select *Save*.

### Settings

The quick view is controlled by one setting of the **Featured products** section.

| Setting | What it changes |
| --- | --- |
| **Open a preview panel on click** | Clicking a product opens its picture, price and description over the page. With this off, and wherever the panel cannot run, clicking goes straight to the product. |
| **Show price** | Shows the price on each product and in the panel. |
{: .settings}

### Blocks

This feature has no blocks.

### Tips and limits

> *Only Featured products has it.* The collection page, the search page and the Related products grid always go straight to the product.

> *Turn it off for products with many options.* A shopper cannot pick a size in the panel, so for products where the choice matters most, going straight to the product page saves a step.

> *The panel closes with Escape.* It also has a close button, and the shopper is returned to where they were.

## Gift card products

A gift card is a product like any other, but its buyer can send it to someone else, with a message and a date.
{: .lede}

- Buy buttons › **Ask who a gift card is for**
- Only appears on gift card products
- Uses Shopify's own gift card delivery
{: .facts}

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/product/gift-card-recipient-desktop-light.webp' | relative_url }}" alt="The buy area of a gift card with Send this as a gift ticked, showing the Recipient email, Recipient name, Message and Send on fields above the Add to bag button" width="680" height="935" loading="lazy">
    <figcaption>On a computer</figcaption>
  </figure>
  <figure class="shot shot--phone">
    <img src="{{ '/assets/images/product/gift-card-recipient-phone-light.webp' | relative_url }}" alt="The same gift card buy area on a phone, with the four recipient fields open" width="375" height="812" loading="lazy">
    <figcaption>On a phone</figcaption>
  </figure>
</div>

### Setting it up

1. In your Shopify admin, open *Products > Gift cards*, then select *Add a gift card product*. [Shopify explains the steps](https://help.shopify.com/en/manual/products/gift-card-products/add-update-gift-card-products).
2. In the theme editor, open *Products > Default product* and select the **Buy buttons** block.
3. Make sure **Ask who a gift card is for** is on (it is on by default).

Other products never show the fields, and neither does a sold out gift card, since nothing can be sent.

### What the buyer sees

Under the options, a tick box reads "Send this as a gift". Until it is ticked, nothing is sent, so a shopper buying a card for themselves never sends an empty message. Ticking it opens four fields (a screen reader hears that the tick box has opened or closed them):

| Field | What it does |
| --- | --- |
| Recipient email | Where the gift card is sent. Required. |
| Recipient name | The name shown in the email. |
| Message | A note to the recipient, up to 200 characters. |
| Send on | The day the email goes out, from today to 90 days ahead (Shopify's limit). It follows the buyer's own time zone. |
{: .settings}

If something is missing, the page reloads with the message and the fields still filled in (except the send date).

### Tips and limits

> *The recipient email is what makes it a gift.* Without it, the card goes to the buyer, as it would for any gift card.

> *Wording comes from your email templates.* The email the recipient gets is a Shopify notification. Edit its wording under *Settings > Notifications* in your admin. See [Gift card page](content-pages.md#gift-card-page) for the page they open from it.

> *Turn the setting off to skip it.* With **Ask who a gift card is for** off, gift cards behave like any other product: they go to the buyer.

## Product media

Everything a product can show beside its details: pictures, videos, 3D models and "View in your space". Add them to the product in your Shopify admin; the page shows them all.
{: .lede}

- Added in your admin, under the product's *Media*
- Enlarging is set in the Product section, under **Pictures**
- Works in every look and layout
{: .facts}

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/product/media-video-desktop-light.webp' | relative_url }}" alt="A product whose first picture is a video, with a round play button over the picture" width="1440" height="900" loading="lazy">
    <figcaption>A video, with a play button on its picture</figcaption>
  </figure>
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/product/media-3d-desktop-light.webp' | relative_url }}" alt="A product whose second picture is a 3D model of a halved avocado, with a round play button to start the model" width="1440" height="900" loading="lazy">
    <figcaption>A 3D model, with a button to start it</figcaption>
  </figure>
</div>

### Pictures

Every picture added to the product is shown. They need not match: pictures of different shapes sit in the same frame without being cropped. In **Classic** a row of thumbnails sits under or beside the picture; in the other layouts see [Layouts](#layouts). Each thumbnail carries a label for screen readers.

When a shopper picks an option that has its own picture, the gallery turns to it.

### Enlarging a picture

**Enlarging a picture**, in the Product section's **Pictures** group, chooses the behavior:

- **Full screen**: selecting a picture opens a large view. Close returns to the page.
- **Magnify**: the picture enlarges under the pointer. It does nothing on a phone or tablet, where there is no pointer to follow.
- **Off**: pictures stay as they are.

### Videos

Videos you add to the product (uploaded to Shopify, or from YouTube or Vimeo) appear as thumbnails marked with a play symbol. Nothing loads until the shopper presses the play button on the picture, so a video costs the page no speed. Controls include play, pause and mute. A shopper who presses play with the keyboard lands on the video itself, ready for the next key.

### 3D models and "View in your space"

A 3D model appears as a thumbnail marked with a box symbol and a play button on its picture. Pressing it lets the shopper turn the model and zoom in.

On a phone or tablet that supports it, a "View in your space" button appears on the model. It places the product in the room through the device's camera. Shopify hides the button on devices that cannot do this, such as most computers.

To add a model, open the product in your admin and add a media file: Shopify accepts GLB and USDZ. [Shopify lists the requirements](https://help.shopify.com/en/manual/products/product-media/product-media-types).

### Tips and limits

> *The 3D ring needs three.* On the home page, the **3D ring** look needs three or more pictures, videos or 3D models. With fewer it shows one large picture.

> *A phone loads the model on demand.* On a phone the model and its "View in your space" button appear only after the play button is pressed. If you look for the button on arrival, it is not there yet.

> *Put the best picture first.* The page opens on the product's first picture, or on the chosen option's own picture when it has one.

> *A video is not a picture.* A shopper who never presses play never sees it, so show the key facts in the pictures, too.

> *Test AR on a real phone.* "View in your space" cannot be checked on a computer. Use your own phone to see how a model sits in a room.

## Extra product templates

A second product layout for some products: a different look, different blocks, or a plainer page for a product that needs less. Every product uses the default template until you assign another.
{: .lede}

- Editor: *Products > Create template*
- Assigned in your admin, on each product
- Only for the published theme
{: .facts}

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/product/editor-create-template-desktop-light.webp' | relative_url }}" alt="The editor's page selector with Products open: Default product, assigned to 14 products, and the Create template option below it" width="480" height="260" loading="lazy">
    <figcaption>Products in the page selector, with Create template</figcaption>
  </figure>
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/product/admin-theme-template-field-desktop-light.webp' | relative_url }}" alt="On a product in the Shopify admin, the Theme template field set to Default product" width="320" height="315" loading="lazy">
    <figcaption>The Theme template field on a product in the admin</figcaption>
  </figure>
</div>

### Making a template

1. In your Shopify admin, open *Online Store > Themes*, then select *Edit theme* next to {{ site.theme_name }}.
2. At the top of the editor, open the page selector and choose *Products > Create template*.
3. In the *Create a template* dialog, type a name, such as `long-read`, and select *Create template*.
4. Change the template as you like: a different **Layout**, other blocks, or fewer.
5. Select *Save*.

### Assigning it to products

1. In your Shopify admin, open *Products* and select a product.
2. In the *Theme template* field (in the product's *Online store* box), choose your new template.
3. Select *Save*.

Do this for each product that should use it.

### Tips and limits

> *Only the published theme's templates can be assigned.* If you make a template in a copy of your theme, publish the copy before choosing it on products.

> *Check Related products.* If your new template does not have it, add it with *Add section*, then **Related products**.

> *Good uses.* A **Long read** page for one-of-a-kind items, a **Spec sheet** for products sold on measurements, and a simple page with only **Product name**, **Price**, **Variant picker**, **Quantity** and **Buy buttons** for everything else.

> *Other stores' products.* The theme also includes a plain page that Shopify uses by itself for products sold by other stores. You do not assign it.

## App blocks

Apps such as reviews, subscriptions, size charts or wishlists can add their own block to your pages, without any code.
{: .lede}

- Add block › *Apps* (in the Product section, the cart page and the Custom section)
- Needs the app installed
- Blocks come from the app, not the theme
{: .facts}

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/product/editor-add-block-apps-desktop-light.webp' | relative_url }}" alt="The Add block picker in the Product section, on its Apps tab, listing the app blocks the store has and a Browse apps built for themes link" width="945" height="840" loading="lazy">
    <figcaption>Add block, then the Apps tab</figcaption>
  </figure>
</div>

### Where apps can add blocks

| Where | How |
| --- | --- |
| **Product** section, on the product page | Select the section, then *Add block*, and pick the app under *Apps*. |
| The cart page | Select the **Cart** section, then *Add block*, and pick the app under *Apps*. |
| **Custom section**, on the home page | Select the section, then *Add block*, and pick the app under *Apps*. In a **Custom section** an app block takes a full row and cannot go inside a **Frame**. |
{: .settings}

### Adding an app's block

1. Install the app from the Shopify App Store.
2. In the theme editor, open the page and select the section named above.
3. Select *Add block*, and under *Apps* choose the app's block.
4. Move it where you want it, then select *Save*.

If the app asks you to paste code instead of giving a block, use the **Custom Liquid** block, which both the product page and the cart page have.

### Tips and limits

> *No Apps group?* The app is not installed, or it has no block for that page. Check the app's own help.

> *Subscriptions and similar apps.* Apps that add selling plans work with the product page's option changes. Add the app's block, then check a purchase.

> *No support for app code.* We cannot support code or blocks that come from an app. Contact the app's maker for help with how it looks or acts.

> *A wide app may be cut.* In a **Custom section**, an app block wider than its row is clipped sideways rather than scrolled. Check it on a phone.

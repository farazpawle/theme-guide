---
title: How-to guides
updated: 2026-10-20
---

# How-to guides

Step-by-step recipes for the jobs most shops do. Each one links to the full
settings in the rest of the guide.
{: .lede}

## Build your home page from an empty template

Every preset ships a home page already filled in. To start from nothing,
remove its sections and add your own.

1. In your Shopify admin, open *Online Store > Themes* and select
   *Edit theme* next to {{ site.theme_name }}.
2. The editor opens on the home page. In the left bar, select a section,
   then select *Remove section* at the foot of its settings. Repeat for
   every section you do not want. The header and footer stay: they are
   shared by every page.
3. Select *Add section* and pick a section. Each one starts with sample
   blocks so you can see its shape straight away.
4. Fill in its text and pictures, then add the next section. Drag sections
   in the left bar to change their order.
5. Select *Save*. Nothing reaches your live shop until you save, and
   nothing reaches it at all until the theme is published.

{% include looks.html folder="settings" file="presets" name="Preset home page" looks="Seloriq,Oakwood,Petal" about="Clothing: a scrolling hero and featured products.|Home goods: warm wood tones and collection tiles.|Beauty: a soft scroll story and trust badges." %}

> *Put a full-screen opener first.* **Hero scroll**, **Scroll story** and **Slideshow** are made to open the page. **Hero scroll** shows its brand logo strip and gives the page its main heading only when it is the first section.

> *A good order to start from.* An opener, then **Featured products**, then **Collection tiles** or **Collection index**, then a story (**Story rows** or **Stacking cards**), then **Testimonials**, and **Email signup** last. Every section is described in [Home page sections](sections.md).

## Set up collection filters

Filters are chosen in Shopify's free *Search & Discovery* app. The theme
shows whatever you set up there, on collection and search pages alike.

1. Install *Shopify Search & Discovery* from the Shopify App Store, if it
   is not installed yet.
2. In your Shopify admin, open *Apps > Search & Discovery > Filters*.
3. Select *Add filter*, then *Select source* and pick one, such as product
   type, brand (vendor), a product option (size) or a category metafield
   (color), and select *Save*. *Availability* and *Price* are added for you
   when the app is installed.
4. Drag the filters into the order you want, then save. To take one away,
   open it and select *Remove*.
5. Open a collection in your shop and select *Filter* to check them.

{% include looks.html folder="collection" file="filter-sheet" name="Filter sheet" looks="Standard" plain="true" about="the filter sheet open with the Availability and Price filters and In stock chosen." %}

> *Color filters can show swatches.* Use the *Color* category metafield as the filter's source (see [Set up color swatches](#set-up-color-swatches)), and each color that has a swatch shows as a small round swatch. A color without one shows as a tick box.

> *Quick price choices.* On the collection page's settings, type prices into **Price bands**, separated by commas (for example 50, 100), to add quick choices beside the *From* and *To* boxes. Leave it empty to show only the boxes. Do the same on the search page.

> *No filters yet?* The *Filter* button is hidden until at least one filter has something to choose from. Sorting still works.

## Set up color swatches

Swatches show each color as a small chip in place of its name. The colors
come from your products, not from the theme.

1. In your Shopify admin, open a product and set its *Category* (for
   example *Apparel & Accessories > Clothing > Dresses*).
2. Under *Variants*, open the color option, select the *Connect metafield*
   icon beside *Option name*, and pick *Color*.
3. Give each color entry its color (or a small picture, for patterns).
4. Save the product.
5. In the theme editor, open a product page, select the **Variant picker**
   block and check that **Picker style** is **Pills** and **Swatch shape**
   is **Circle** or **Square**.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/product/variant-picker-swatches-desktop-light.webp' | relative_url }}" alt="The variant picker as color swatches: three round chips in blue, beige and green, with blue chosen" width="680" height="100" loading="lazy">
    <figcaption>Swatches in the Variant picker</figcaption>
  </figure>
</div>

> *Values without a color show as pills.* A value with no color or picture is shown as a text pill. Choose **No swatch** to show every value as a pill.

> *A dropdown has no swatches.* With **Picker style** set to **Dropdown**, colors are listed by name.

> *Product cards do not show swatches.* Swatches appear on the product page and in color filters.

Full details: [Variant picker](product-page.md#variant-picker).

## Show star ratings from a reviews app

The **Rating** block shows stars and a review count under the product name,
read from the rating your reviews app saves on each product.

1. Install a reviews app that saves its ratings to Shopify's standard
   product rating fields. Many reviews apps do; check the app's settings
   or its help pages.
2. In the theme editor, open Theme settings (the gear icon), then
   **Product page**, and set **Reviews from** to **Shopify product
   reviews**.
3. Open a product page, select *Add block* in the **Product** section and
   add the **Rating** block. Drag it under the price. The shipped product
   template already has a **Rating** block under **Price**.
4. Select *Save*.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/product/details-top-desktop-light.webp' | relative_url }}" alt="The top of the product details: the vendor line, the product name, the price with a Save 19 percent badge, the line No reviews yet, and the SKU" width="680" height="290" loading="lazy">
    <figcaption>The Rating block on a product with no reviews yet</figcaption>
  </figure>
</div>

*Use the app's own block instead* when the app shows its own stars or a
full reviews list: select *Add block* in the **Product** section, open the
*Apps* tab and pick the app's block.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/product/editor-add-block-apps-desktop-light.webp' | relative_url }}" alt="The Add block picker in the Product section, on its Apps tab, listing the app blocks the store has and a Browse apps built for themes link" width="945" height="840" loading="lazy">
    <figcaption>The Apps tab of Add block</figcaption>
  </figure>
</div>

> *Stars show on the product page only.* Product cards do not show ratings.

> *Nothing shows?* With **Reviews from** on **None** the block draws nothing. With it set and no reviews yet, it says so.

## Add a size chart or shipping info

A **Collapsible panel** block holds a heading that opens to your own text,
to a page, or both. Use one page for your size chart and another for
delivery and returns, and every product shows the same content.

1. In your Shopify admin, open *Online Store > Pages* and create a page
   called, for example, Size chart. Add your table or picture and save.
2. In the theme editor, open a product page.
3. In the **Product** section, select *Add block* and pick **Panel, how it
   fits** (it comes with the ruler icon), or **Panel, shipping** for
   delivery info.
4. In the block, set **Heading** and pick your page under **Page**. Leave
   **Content** empty to show only the page.
5. Under **Panel style**, **Panel, how it fits** starts as a row that opens
   on a click. **Panel, shipping** is added with **Always open** on, so turn
   **Always open** off if you want a row that opens on a click.
6. Select *Save*.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/product/more-to-read-desktop-light.webp' | relative_url }}" alt="The full-width band under the pictures: the description, two always-open panels (Care and Shipping and returns), a closed row panel called How it fits, and the share links" width="1392" height="590" loading="lazy">
    <figcaption>Two always-open panels and a How it fits row that opens on a click</figcaption>
  </figure>
</div>

> *A size chart for some products only.* Make an extra product template with the panel and give it to those products. See [Extra product templates](product-page.md#extra-product-templates).

Full details: [Collapsible panel](product-page.md#collapsible-panel).

## Show sale and sold-out badges

Both badges are automatic. You only need to price and stock your products.

### Sale badge

1. In your Shopify admin, open a product and set a *Compare-at* price
   higher than its *Price*. Save.
2. In the theme editor, open Theme settings, then **Search**, and find
   **Sale badge**. It is set there, but it shows on product cards
   everywhere. Make sure **Show a sale badge** is on.
3. Choose **Badge style**: **Sale label** or **Percentage off**.
4. Optional: set **Minimum discount** to hide the badge on small
   reductions.

On the product page, the **Price** block shows the saving under the price.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/product/details-top-desktop-light.webp' | relative_url }}" alt="The top of the product details: the product name and the price with a Save 19 percent badge" width="680" height="290" loading="lazy">
    <figcaption>The saving under the price on a product page</figcaption>
  </figure>
</div>

### Sold out badge

1. A product shows as sold out when every variant is out of stock: the
   product tracks inventory, the quantity is 0, and *Sell when out of stock*
   is off.
2. In Theme settings, under **Product cards**, **Sold out products**
   chooses between **Show sold out** and **Show an inquiry
   button**. The inquiry button needs an **Inquiry button link**, such as
   your contact page.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/collection/product-card-sold-out-label-desktop-light.webp' | relative_url }}" alt="A collection page where the sold out dress has a Sold out label and a button that cannot be pressed" width="1440" height="900" loading="lazy">
    <figcaption>A sold out product card</figcaption>
  </figure>
</div>

> *Never both.* A sold out product never shows the sale badge.

Full details: [Sale badge](theme-settings.md#sale-badge) and [Sold out](theme-settings.md#sold-out).

## Picture sizes

Upload pictures at least as wide as below, so they stay sharp on large
screens. Bigger files are fine: Shopify makes smaller copies for phones.

| Where | Shape it shows | Upload at least |
| --- | --- | --- |
| **Hero scroll**, **Scroll story**, **Slideshow** | Fills the screen, cropped to fit | 3000 px wide (about 3000 × 1600) |
| **Video** cover picture | Follows **Video shape** | 2400 px wide |
| **Custom section** picture | Fills the section, cropped to fit | 2400 px wide |
| **Image gallery** | Follows its **Picture shape** | 1800 px wide |
| **Story rows**, **Stacking cards**, **Collection tiles**, **Collection index**, **FAQ** | Follows the section's shape or height setting | 1600 px wide |
| **Horizontal scroll cards** | Tall cards | 1600 × 2000 |
| **Expanding panels** | Tall panels | 900 × 1400 (1600 wide for the background) |
| **Email signup** | 3:2, in the picture-beside-the-words look | 1400 px wide |
| **Blog** page | Follows **Picture shape** | 1400 px wide |
| **Blog posts** and blog cards | Shown cropped by the card | 1400 px wide |
| Blog post cover | 16:9 | 2400 px wide |
| Product pictures | Keeps each picture's own shape | 1600 px wide; use one shape for all of a product's pictures |
| Product cards | Follows **Image shape** in Theme settings | 1200 px wide |
| **Logo list** logos | Any shape | 600 px wide, transparent background |
| **Testimonials** photo | Small circle | 160 × 160 |
| Shop logo | Any shape | 600 px wide |
| Favicon | Square | 180 × 180 |
{: .settings}

> *Keep the subject in the middle.* Sections that fill the screen crop the edges, more so on phones. Set a focal point on the picture in *Content > Files* to choose what stays in view.

> *Want the picture's own shape?* Many sections have a shape or height setting with **Automatic**, **As uploaded** or **Adapt to picture**. For product cards, set **Image shape** to **Automatic**.

## Search engines and social sharing

What search engines and social sites show for your shop comes from your
Shopify admin. The theme passes it on.

1. *Shop title and description:* open *Online Store > Preferences*. Under
   *Social sharing image and SEO*, fill in *Home page title* and
   *Meta description*, the words shown in search results for your home
   page. Save.
2. *Social sharing picture:* on the same page, add the picture shown when
   your shop's link is shared. 1200 × 628 suits most social sites.
3. *Products, collections, pages and blog posts:* open each one in your
   admin and edit its *Search engine listing*: a page title (about 60
   characters) and a description (about 160 characters).
4. *Favicon:* the small icon in the browser tab. In the theme editor,
   open Theme settings, then **Brand**, and pick a square picture under
   **Favicon**.

> *Product pictures share themselves.* A shared product or blog post link shows its own first picture.

> *Avoid changing addresses.* Changing a product's URL handle often can drop it from search results. Shopify offers to add a redirect when you do.

## Update to a new version of the theme

Updates never touch your live shop. Shopify makes an updated copy that you
check before publishing.

1. In your Shopify admin, open *Online Store > Themes*. When an update is
   ready, a notice shows in place of the version number.
2. Select the notice. Read the release notes (also on
   [Release notes](release-notes.md)), then select *Add to draft themes*.
3. Shopify makes a copy called "Updated copy of {{ site.theme_name }}".
   Everything you set in the theme editor comes with it: settings,
   sections, blocks, templates and text.
4. Preview the copy and check your main pages.
5. Select *Publish* on the copy when you are happy.

> *Edited the code?* Code changes come with the update only when they do not clash with it; the theme card tells you. Keep a copy of any code you changed, so you can add it again.

> *Updates need a Theme Store copy.* Only a theme added from the Shopify Theme Store gets updates. An uploaded copy does not.

## Move from another theme

Your products, collections, pages, blog posts and menus stay as they are
when you change theme. The look, the sections and the theme settings are
set up again in the new theme.

1. Back up your current theme: in *Online Store > Themes*, open its *...*
   menu and select *Duplicate*.
2. Add {{ site.theme_name }} from the Shopify Theme Store and pick a preset
   (see [Getting started](getting-started.md)). It is added as a draft, so
   your shop does not change.
3. Select *Edit theme*. Set your logo and colors in Theme settings, then
   build the home page (see [above](#build-your-home-page-from-an-empty-template)).
4. Pick your menus in the header and footer sections.
5. Turn your apps on again: app blocks are added with *Add block* > *Apps*,
   and app embeds with the *App embeds* icon in the left bar.
6. Preview the theme on a computer and a phone. When you are happy, select
   *Publish*. Your old theme stays in your library, so you can go back.

> *Custom code does not move.* Code added to your old theme by hand or by an app stays in that theme.

---
title: Theme settings
updated: 2026-10-20
---

# Theme settings

Settings that apply to your whole shop: logo, colors, fonts, product cards, search and more. Change one here and every page follows.
{: .lede}

- 16 groups
- Open them from the gear icon in the theme editor
- Applies to every page
{: .facts}

## Where to find them

1. In your Shopify admin, open *Online Store > Themes*.
2. Next to {{ site.theme_name }}, select *Edit theme*.
3. In the left bar of the editor, select the gear icon (*Theme settings*).
4. Select a group to open it. The groups are listed in the order below.
5. Select *Save* when you are done.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/settings/editor-theme-settings-desktop-light.webp' | relative_url }}" alt="The Theme settings panel in the editor, listing the groups from Announcement bar and Background down to Typography" width="305" height="844" loading="lazy">
    <figcaption>The Theme settings panel and its groups</figcaption>
  </figure>
</div>

A section's own settings come first: when a section has its own **Color scheme** or **Transparent background** setting, the section wins over the theme setting. Theme settings are the shop-wide starting point.

| Group | What it controls |
| --- | --- |
| [Announcement bar](#announcement-bar) | The message strip above the header |
| [Background](#background) | A picture behind the whole page |
| [Blog cards](#blog-cards) | How blog posts look in lists |
| [Brand](#brand) | Logo and favicon |
| [Cart](#cart) | Cart note, vendor name and empty-cart suggestions |
| [Colors](#colors) | Color schemes, input corners and light/dark mode |
| [Content containers](#content-containers) | Border, corners and shadow of panels |
| [Currency format](#currency-format) | Currency code and the country selector |
| [Footer](#footer) | The footer logo |
| [Header](#header) | Sticky header and the mega menu |
| [Layout](#layout) | Page width, side margin and space between sections |
| [Product cards](#product-cards) | The card used wherever products are listed |
| [Product page](#product-page) | Reviews and the sold out inquiry button |
| [Search](#search) | Search as you type, popular searches and the sale badge |
| [Social media](#social-media) | Links shown in the footer |
| [Typography](#typography) | Heading and body fonts and sizes |

Two more parts of the theme are not groups here but are explained on this page: [Motion](#motion) (set per section) and [Languages](#languages).

## Announcement bar

One strip above the header, shown on every page. Every header style shows it except **Floating capsule**.

| Setting | What it changes |
| --- | --- |
| **Show the announcement bar** | Turns the strip on or off. |
| **Message** | The text in the strip. Basic formatting such as bold or italic is allowed. |
| **Link** | Where the message goes when selected. The whole message becomes the link, so links and formatting inside the message are left out. |
| **Let visitors close it** | Adds a close button. A closed bar stays closed until you change the message. |
| **Background** | The strip's background color. Leave both colors empty to follow the button colors of the header's color scheme. |
| **Foreground** | The color of the words and the close button. |
{: .settings}

> *Keep it short.* One line of news, an offer or delivery information reads best, especially on a phone.

{% include looks.html folder="headers" file="announcement-bar" name="Announcement bar" looks="Standard" plain="true" about="a short message above the header with a close button." %}

## Background

A picture behind the whole page.

| Setting | What it changes |
| --- | --- |
| **Background image** | The picture. It stays in place while the page scrolls and fills the screen, using the focal point you set on the picture. It shows behind transparent sections. Text keeps the page color scheme, so pick a picture the text reads clearly on. |
| **Make all sections transparent** | Lets the page background show through every section that does not set its own. |
{: .settings}

> *Transparent sections need a picture.* With **Make all sections transparent** on but no **Background image**, sections simply show the page color. A section's own **Transparent background** setting makes just that one section transparent; it cannot turn off this theme-wide switch.

## Blog cards

How blog posts look in the **Blog posts** section, on the blog page and wherever a post card is shown.

| Setting | What it changes |
| --- | --- |
| **Alignment** | Left, center or right alignment of the words on each card. |
| **Color scheme** | The colors of a framed card. Only used when the card has a surface (see **Style**). |
| **Image padding** | Space between the card's edge and its picture, from 0 to 20px. Only used when the card has a surface. |
| **Style** | Options: **Standard** (picture and words straight on the page) or **Card** (a framed card in the color scheme you pick). |
{: .settings}

### Surface

| Setting | What it changes |
| --- | --- |
| **Border** | The card's outline thickness, from 0 to 8px. Its color comes from the color scheme. |
| **Corner rounding** | How round the card's corners are, from 0 to 40px. |
| **Elevation** | The card's shadow, from 0 to 100%. One slider sets how far it falls, how soft it is and how dark. Zero means no shadow. |
{: .settings}

> *The Blog page decides too.* The **Ring** and **Stack** looks of the blog page always draw framed cards. The **Wave** look follows **Style**.

## Brand

| Setting | What it changes |
| --- | --- |
| **Favicon** | The small icon in the browser tab. It is also used as the home-screen icon when a shopper saves your store on a phone, and is cropped square, so start from a square image. |
| **Logo** | Shown in the header, and on the password page and the gift card page. Leave empty to show your store name as text instead. Any shape works. |
| **Logo width** | How wide the logo is, from 50 to 300px. In a narrow header the logo shrinks to fit. |
{: .settings}

## Cart

| Setting | What it changes |
| --- | --- |
| **Empty cart suggestions** | A collection whose first four products are suggested when the cart is empty. Leave empty to show nothing. |
| **Let shoppers add a note** | Shows a note box on the cart page for instructions with the order. |
| **Show vendor** | Shows the maker's name above each product name in the cart. |
{: .settings}

## Colors

Color schemes, the page's own colors, the roundness of typing boxes and the light and dark mode. The two explanations below cover how a scheme and the mode switch work.

### Color schemes

A scheme is stored in the list at the top of this group. Select a scheme there to edit its colors, or select *Add scheme* to make another.

| Setting | What it changes |
| --- | --- |
| **Page color scheme** | The colors of the page itself, and of every section that does not choose a scheme of its own. |
| **Input corner radius** | Rounds the corners of every typing box: search, the email signup and the contact form. From 0 to 10px. |
{: .settings}

### Light and dark mode

Every section that uses a color scheme follows this, and so does every page that uses none. The two full-screen scroll sections, **Hero scroll** and **Scroll story**, keep their own dark stage on purpose.

| Setting | What it changes |
| --- | --- |
| **Default mode** | Options: **Light**, **Dark** or **Follow the visitor's device**. The mode a visitor sees the first time. |
| **Show the mode switch** | Adds a switch so a visitor can choose. On computers it is an icon in the header; on phones and tablets it is a row inside the menu. A visitor's choice is remembered on their device and wins over **Default mode**, except in the theme editor. |
{: .settings}

### How color schemes work

A color scheme is a small set of colors that a section can wear. Every section with a **Color scheme** setting lets you pick one, so one edit to a scheme repaints every section using it.

Each scheme has six colors, in three groups as the editor shows them.

#### Surface

| Color | Used for |
| --- | --- |
| **Background** | The section's background. |
| **Background gradient** | An optional gradient. It replaces the solid background when set. |
{: .settings}

#### Text and links

| Color | Used for |
| --- | --- |
| **Foreground** | Text and lines. |
| **Accent** | Links, icons, focus rings and active states such as badges, selected options and active dots. |
{: .settings}

#### Buttons

| Color | Used for |
| --- | --- |
| **Button** | The fill of main buttons. |
| **Button label color** | The words on main buttons. |
{: .settings}

You only choose these colors. Card fills, borders, dimmed text and shadows are worked out from them, so they follow any change you make.

- **Page color scheme** sets the colors of the page itself. Sections with no scheme of their own follow it.
- You can have up to 21 schemes.
- Use the same scheme on neighboring sections to make them read as one band, and a different one to set a section apart.
- Every highlight in the theme (badges, bars, active dots, selected options) uses the scheme's **Accent**. There is no separate accent setting on sections, so set your brand color once.

> *Check contrast.* Pick a **Foreground** that reads clearly on the **Background** and a **Button label color** that reads on the **Button**. The theme keeps the dark mode versions readable for you, but your light colors are your own.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/settings/modes-home-desktop-light.webp' | relative_url }}" alt="A home page band in light mode" width="1440" height="900" loading="lazy">
    <figcaption>Light mode</figcaption>
  </figure>
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/settings/modes-home-desktop-dark.webp' | relative_url }}" alt="The same band in dark mode, built by the theme from the light colors" width="1440" height="900" loading="lazy">
    <figcaption>Dark mode</figcaption>
  </figure>
</div>

### How light and dark mode works

You set the light colors only. The theme builds the dark version of every scheme for you and keeps its text readable.

- A scheme with a light background turns dark: the dark background is made from your text color (a little lighter), and your background color becomes the text. Accent and button colors are lightened just enough to stay readable on the dark background.
- A scheme that is already dark stays dark and goes a touch deeper. A dark band on a light page is therefore still dark in dark mode.
- A gradient is dropped in dark mode and the solid color is used, because a gradient made for light colors can look like a stain on a dark page.
- Two light schemes that differ only slightly are kept a shade apart in dark mode, so they still look like two schemes.
- **Hero scroll** and **Scroll story** keep their own dark colors in both modes.
- The switch is a three-step icon: each press goes to Light, then Dark, then the visitor's own device setting.

A visitor's choice is stored on their device, so it follows them back to your store. In the theme editor the stored choice is ignored: to preview dark mode while editing, set **Default mode** to **Dark**, then put it back if you want another default.

> *Refresh to see the dark version.* The editor cannot preview dark colors live. After you change a scheme, refresh the preview to see how its dark version turned out.

> *Pictures do not change.* Your photos, logo and videos look the same in both modes, so choose a logo that stays readable on both a light and a dark page.

## Content containers

The look of panels and framed pictures across the theme.

### Surface

| Setting | What it changes |
| --- | --- |
| **Border** | Outline thickness, from 0 to 8px. The color comes from the color scheme. |
| **Corner rounding** | Roundness of panels and picture frames, from 0 to 40px. It shapes the pictures in **Video**, **Slideshow**, **Image gallery** and **Logo list** as well as panels in the cart, contact form, email signup, FAQ and product page. |
| **Elevation** | A shadow under panels, from 0 to 100%. One slider sets how far it falls, how soft it is and how dark. Zero means no shadow. |
{: .settings}

## Currency format

For example, $1.00 USD rather than $1.00.

| Setting | What it changes |
| --- | --- |
| **Show the currency code** | Shows the code after prices: $1.00 USD. Useful when you sell in more than one currency. |
| **Show country/region selector** | Lets a shopper choose the country they buy from, which sets their currency. It appears only when your store sells to more than one country, set in *Settings > Markets* in your Shopify admin. A language selector appears by itself when your store offers more than one language. |
{: .settings}

## Footer

| Setting | What it changes |
| --- | --- |
| **Footer logo** | The logo used in the **Curtain** footer. Leave empty to reuse the header logo. |
{: .settings}

The footer styles are covered in [Footers](footers.md).

## Header

| Setting | What it changes |
| --- | --- |
| **Keep the header on screen** | The bar stays at the top of the screen as the page scrolls. The announcement bar scrolls away with the page. |
| **Enable the horizontal mega menu** | A menu item with two levels below it opens as columns instead of a single list. Used by **Aurora glow**, **Centered stack** and **Nebula float**. |
{: .settings}

The header's style is chosen by the header section itself: see [Headers](headers.md).

## Layout

| Setting | What it changes |
| --- | --- |
| **Page margin** | The least space kept at the left and right of the page, from 10 to 100px. |
| **Page width** | The widest the content gets on large screens, from 1000 to 1600px. |
| **Space between sections** | A gap between one section and the next in the main part of a page, from 0 to 100px. Zero leaves them touching, so they separate by their own backgrounds. |
{: .settings}

## Product cards

The product card appears wherever products are listed. Set it once here and every card matches.

The home page's **Featured products**, **Related products** and the suggestions in an empty cart use every setting below. The collection and search pages use their own card layout and follow **Image shape**, **Custom shape from an image**, **Crop images to fill**, **Hover style**, the sale badge and **Sold out products**.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/settings/product-card-style-standard-desktop-light.webp' | relative_url }}" alt="A row of four product cards in Standard style, with the pictures, names and prices straight on the page" width="1440" height="642" loading="lazy">
    <figcaption>Style: Standard</figcaption>
  </figure>
</div>

<div class="pair" style="margin-top:18px">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/settings/product-card-style-card-desktop-light.webp' | relative_url }}" alt="The same four product cards in Card style, each product on a framed card" width="1440" height="634" loading="lazy">
    <figcaption>Style: Card</figcaption>
  </figure>
</div>

<div class="pair" style="margin-top:18px">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/settings/product-card-shape-square-desktop-light.webp' | relative_url }}" alt="Four product cards with square pictures" width="1440" height="562" loading="lazy">
    <figcaption>Image shape: Square</figcaption>
  </figure>
</div>

<div class="pair" style="margin-top:18px">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/settings/product-card-shape-portrait-desktop-light.webp' | relative_url }}" alt="Four product cards with tall portrait pictures" width="1440" height="723" loading="lazy">
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
    <img src="{{ '/assets/images/settings/product-card-shape-wide-desktop-light.webp' | relative_url }}" alt="Four product cards with wide, shallow pictures" width="1440" height="421" loading="lazy">
    <figcaption>Image shape: Wide</figcaption>
  </figure>
</div>

### Layout

| Setting | What it changes |
| --- | --- |
| **Style** | Options: **Standard** (the picture, name and price sit straight on the band) or **Card** (the product sits on a framed card in its own color scheme). |
| **Alignment** | Left, center or right alignment of the name and price. |
| **Product name lines** | How many lines a long name may take. Options: **Automatic**, **1 line**, **2 lines**, **3 lines**. Collection and search pages always show the full product name. |
{: .settings}

### Image

| Setting | What it changes |
| --- | --- |
| **Image shape** | Crops every card picture to the same shape. Options: **Automatic** (the section decides), **Square**, **Portrait**, **Landscape**, **Wide**. |
| **Custom shape from an image** | Optional. Upload an image and its proportions become the shape of every card, overriding **Image shape**. |
| **Crop images to fill** | On, pictures fill the whole shape. Off, the whole picture fits inside the shape with space around it when its shape differs. |
{: .settings}

### Hover

| Setting | What it changes |
| --- | --- |
| **Hover style** | What a card does under a mouse. Options: **Zoom the picture**, **Show the second picture**, **No hover effect**. On a product with only one picture, **Show the second picture** zooms instead. Phones and tablets have no hover, so they ignore this. |
{: .settings}

### Surface

| Setting | What it changes |
| --- | --- |
| **Color scheme** | The colors of a card. Used when **Style** is **Card**. |
| **Border** | Outline thickness, from 0 to 8px. Used when **Style** is **Card**. |
| **Corner rounding** | Roundness of the card and its picture, from 0 to 40px. |
| **Elevation** | A shadow under the card, from 0 to 100%. Used when **Style** is **Card**. Zero means no shadow. |
{: .settings}

### Sold out

| Setting | What it changes |
| --- | --- |
| **Sold out products** | Options: **Show sold out** (the card shows a Sold out label) or **Show an inquiry button** (the card shows a button in place of the buy control). |
| **Inquiry button label** | The words on the button. Leave empty to use "Inquire now". |
| **Inquiry button link** | Where the button goes, for example your contact page. With no link, the inquiry button is not shown, and the card falls back to the Sold out label. |
{: .settings}

> *The sale badge has its own settings.* The badge on reduced products is set in [Search](#sale-badge), under Sale badge.

## Product page

### Reviews

| Setting | What it changes |
| --- | --- |
| **Reviews from** | Options: **None** or **Shopify product reviews**. With **Shopify product reviews**, the **Rating** block on the product page shows stars and the review count. With **None**, the block shows nothing. |
{: .settings}

### Sold out

| Setting | What it changes |
| --- | --- |
| **Show an inquiry button on the product page** | On a sold out product, an inquiry button takes the place of the buy button. It uses **Inquiry button label** and **Inquiry button link** from Product cards, and does not appear until a link is set. |
{: .settings}

## Search

### Sale badge

A badge on product cards that are reduced from their compare-at price. It is set here, but it shows on product cards everywhere, not only in search.

| Setting | What it changes |
| --- | --- |
| **Badge style** | Options: **Sale label** (the word Sale) or **Percentage off** (for example 20% off). A product whose variants have different prices always shows the label, because one number would not be true for all of them. |
| **Minimum discount** | Hides the badge below this percentage. Zero shows it on every reduced product. The percentage is rounded down, so a badge never overstates a saving. |
| **Show a sale badge** | Turns the badge on or off. A sold out product never shows it. |
{: .settings}

### Search as you type

| Setting | What it changes |
| --- | --- |
| **Suggest results as the shopper types** | Shows matching results in a drop-down while the shopper types, in every search box in the theme. The three settings below do nothing while this is off. |
| **Show price** | Adds the price to each product suggestion. |
| **Show SKU** | Adds the SKU to each product suggestion. |
| **Show vendor** | Adds the maker's name to each product suggestion. |
{: .settings}

### Search behavior

| Setting | What it changes |
| --- | --- |
| **Popular searches** | One term per line. Shown as quick links in the header's search box before anything is typed, and on the search page when nothing was found. |
| **Search across** | Options: **Products only** or **Everything** (products, collections, pages and blog posts). |
{: .settings}

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/headers/search-suggestions-desktop-light.webp' | relative_url }}" alt="The search drop-down open under the search box, listing suggested products" width="1440" height="900" loading="lazy">
    <figcaption>The search drop-down with suggestions</figcaption>
  </figure>
</div>

## Social media

Only the platforms with a link filled in are shown, so there is nothing to add or reorder.

| Setting | What it changes |
| --- | --- |
| **Facebook** | Link to your Facebook page. |
| **Instagram** | Link to your Instagram profile. |
| **LinkedIn** | Link to your LinkedIn page. |
| **Pinterest** | Link to your Pinterest profile. |
| **TikTok** | Link to your TikTok account. |
| **X** | Link to your X profile. |
| **YouTube** | Link to your YouTube channel. |
{: .settings}

The links show as icons in the footer, in whichever footer style you use.

## Typography

### Body text

| Setting | What it changes |
| --- | --- |
| **Body font** | The font for all text other than headings. |
| **Body size** | Scales body text from 100 to 130%. 100% is the theme's own size. |
{: .settings}

### Headings

| Setting | What it changes |
| --- | --- |
| **Heading font** | The font for headings. |
| **Heading size** | Scales headings from 100 to 150%. 100% is the theme's own size. |
{: .settings}

Fonts come from Shopify's font library, so they load fast and need no license of your own.

## Motion

Your {{ site.theme_name }} pages move in a few ways, and every way respects visitors who ask their device for less movement.

### What moves

- *Reveals.* Words, cards and pictures arrive as they scroll into view. Most play back in reverse when you scroll up.
- *Scroll-driven scenes.* In **Hero scroll**, **Scroll story**, **Stacking cards**, **Horizontal scroll cards**, **Collection index** and the pinned deck look of **Pricing**, your own scrolling drives the movement: scroll down and it plays, scroll up and it rewinds.
- *Things that move on their own.* **Slideshow** slides can change by themselves, and the logo strip in **Hero scroll** and the **Logo list** drift or flip.
- *Hover effects.* Product cards zoom or show a second picture, and buttons and links react to a mouse. These run only on devices that have a mouse; phones and tablets skip them.
- *Menus and drawers* slide or fade open.

### When a visitor has reduced motion turned on

Phones, tablets and computers have a "reduce motion" setting in their accessibility options. When a visitor has it on:

- Sections that move on scroll show their finished layout instead, with nothing moving. For example, **Horizontal scroll cards** become a plain stacked list, **Collection index** becomes a plain list with still pictures, and **Video** shows no silent preview.
- **Slideshow** slides change without movement, and never change by themselves.
- Hover zooms stop, and menus and drawers open without sliding.
- Two scenes keep their pinned scroll, because it follows the visitor's own scrolling: **Scroll story** and **Stacking cards**. They lose the extras on top, such as the camera drift and the entrance fades.

This happens by itself. You do not need to set anything.

### The Motion, Animation and Scroll animation settings

Most sections that move have a setting to override this. It has two options:

| Setting | What it changes |
| --- | --- |
| **Off for visitors who reduce motion** | The default. Visitors who have reduce motion on see the section still. |
| **Always animate** | Shows the movement to everyone, including visitors who asked for less. |
{: .settings}

The setting is called **Scroll animation**, **Animation** or **Motion**, depending on the section:

| Label | Sections |
| --- | --- |
| **Scroll animation** | **Page not found**, **Article**, **Blog posts**, **Blog**, **Cart**, **Scroll story**, **Collection index**, **Collection tiles**, **Collection**, **Contact**, **Page**, **Featured products**, **Curtain** and **Big link** footers, **Hero scroll**, **Stacking cards**, **Horizontal scroll cards**, **Search**, **Testimonials** |
| **Animation** | **Expanding panels**, **Video**, **Logo list**, **Password**, **Image gallery**, **Slideshow** |
| **Motion** | **Email signup**, **Pricing**, **Story rows** |
{: .settings}

Sections that have no setting, such as the headers, the **Showcase** footer, **FAQ**, **Custom section** and **Product**, always follow the visitor's device.

Three sections have their own motion setting on top of this:

| Setting | What it changes |
| --- | --- |
| **Scroll animation** (in **Email signup**) | Options: **Words and floating drawings**, **Words only**, **None**. The heading's words rise one by one and the email box slides in. The drawings are faint envelopes and paper planes on computers. Set separately from **Motion**, which covers the visitor's device setting. |
| **Animation** (in **Trust badges**) | Options: **None**, **Fade up**, **Fade up, draw the icons, type the headings**. Visitors who ask for reduced motion see the finished band straight away. |
| **Caption entrance** (on the **Scroll story** **Caption** block) | The move a caption makes as it fades in, and the reverse as it fades out. Options: **Rise up**, **Drop down**, **Slide in from the left**, **Slide in from the right**, **Zoom in**, **Blur in**, **Fade only — no movement**. Scroll drives it; nothing runs on its own. |
{: .settings}

> *If a section looks still on your own screen.* Check whether your own device has reduce motion switched on before assuming something is broken. Choose **Always animate** on that section to see the movement while you edit, then put it back so visitors who asked for less are respected.

> *The Add section list does not scroll.* The preview that appears when you pick a section from *Add section* never scrolls, so scroll effects show their finished layout there. Scroll the real page in the editor to see them move.

> *Be kind with Always animate.* Some visitors turn reduce motion on because movement makes them unwell. Use **Always animate** only where the movement carries meaning, such as a scene that explains your product.

## Languages

{{ site.theme_name }} comes in English. You can still sell in other languages: Shopify's free app, Translate & Adapt, lets you translate your store's words.

### What gets translated

- *Your own text*, such as headings, button labels, the announcement message and the words you typed into sections and blocks.
- *The theme's built-in words*, such as "Sold out", cart messages and form labels.
- *Your products, collections, pages and blog posts*, which are not part of the theme but are translated in the same app.

If a field has no translation, shoppers see it in your store's main language.

### Translate your store

1. In your Shopify admin, open *Settings > Languages*.
2. Select *Add language*, choose the language, then select *Next*. Turn on each domain you want it on, then select *Done*. Translate & Adapt is installed for you the first time.
3. Open *Apps > Translate & Adapt* and choose the language.
4. Select the resource you want to translate, enter your translation and select *Save*. For the theme's own text, choose the resource for your theme.
5. To let the app fill in missing text, select *Auto-translate*, then *Translate*. Read the result before you publish it. Shopify's automatic translation covers a maximum of two languages.
6. Back in *Settings > Languages*, publish the language.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/settings/translate-and-adapt-desktop-light.webp' | relative_url }}" alt="Translate & Adapt open on Default theme content: a list of theme text groups on the left, and for each text its original wording and an empty box for the translation" width="1422" height="810" loading="lazy">
    <figcaption>Translate & Adapt on the theme's own text: the original wording sits beside the box for your translation</figcaption>
  </figure>
</div>

When your store has more than one published language, a language selector appears by itself next to the country selector (see [Currency format](#currency-format)). You do not need to turn it on.

> *Leave the code alone.* In text that contains HTML tags such as `<strong>` or text in curly brackets, translate only the words around them, never the tags or the brackets.

> *The editor stays in English.* The theme editor's own labels, such as **Color scheme**, are shown in English. Only what shoppers see is translated.

### Right-to-left languages

{{ site.theme_name }} does not support right-to-left languages such as Arabic, Hebrew, Persian and Urdu. It does not switch the page's reading direction, so these languages would show in a left-to-right layout. If you need one of them, [ask support](support.md) before you commit, so we can tell you where things stand.

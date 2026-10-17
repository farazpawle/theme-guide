---
title: Home page sections
---

# Home page sections

[Back to the guide](index.md)

Add a section from *Add section* in the theme editor. Most of these are made
for the home page; **Contact** also works on pages, and **Product** and
**Custom Liquid** work elsewhere too.

Settings shared by almost every section:

- **Color scheme**: the colors the section uses (see
  [Theme settings](theme-settings.md#colors)).
- **Transparent background**: lets the page background show through.
- **Top padding** and **Bottom padding**: space above and below.
- **Scroll animation**, **Animation** or **Motion**: **Off for visitors
  who reduce motion** or **Always animate** (see
  [Getting started](getting-started.md#motion)).
- **Look**: many sections offer two or three looks. A look changes the
  layout and the movement; colors, fonts and buttons always follow your
  theme settings.

On this page:

- [Opening a page](#opening-a-page): Hero scroll, Slideshow, Scroll story, Video
- [Showing products](#showing-products): Featured products, Product, Collection tiles, Collection index
- [Telling your story](#telling-your-story): Story rows, Expanding panels, Stacking cards, Horizontal scroll cards, Image gallery
- [Building trust](#building-trust): Testimonials, Trust badges, Logo list, FAQ, Pricing
- [Staying in touch](#staying-in-touch): Contact, Email signup, Blog posts
- [Building your own](#building-your-own): Custom section, Custom Liquid

## Opening a page

### Hero scroll

Full-screen slides that change as the shopper scrolls, each with a tagline,
heading, text and up to two buttons.

- Add a **Slide** block for each slide. Each has a **Background image**
  (3000 x 1600px recommended), an **Image focal point**, and its own text
  and button settings.
- **Content position** places the text; a slide can override it.
- **Scroll distance per slide**: higher is slower, but pushes the rest of
  the page further down.
- **Show progress indicators**: a bar per slide that fills as the shopper
  scrolls.
- **Show brand strip**: a moving row of brand logos along the bottom. Add a
  **Brand logo** block for each brand. **Strip style** and **Logo
  movement** change how it moves.
- **Image overlay darkness** keeps text readable over bright pictures.

This section keeps its own dark colors in both light and dark mode, set in
its **Colors** settings.

### Slideshow

Slides that change on their own or with arrows.

- **Look**: **Curtain** (full-width pictures with text over them),
  **Split** (picture beside the text) or **Gallery** (slides inside the page
  width, with the next and previous ones peeking in).
- Add a **Slide** block for each slide. **Picture on phones** lets you
  choose a different crop for small screens.
- **Height**: **Adapt to first picture**, **Medium** or **Full screen**.
- **Change slides automatically** and **Change slides every**. Shoppers can
  pause it.
- **Darken pictures** keeps the text readable.

### Scroll story

One full-screen picture or video that the camera moves through as the
shopper scrolls, with captions fading in and out.

- **Video** plays frame by frame with the scroll. Keep it short: 5 to 10
  seconds, no sound. **Video (portrait screens)** is a portrait cut for
  phones. Without a video, the **Image** gets the same camera move.
- **Camera move** sets how the shot drifts and how the light changes.
- **Scene length**: how much scrolling the scene takes. Longer is slower.
- Add a **Caption** block for each line of text. **Fades in at** and
  **Fades out by** set where in the scroll it appears.
- **Footage fit**, **Zoom** and **Part to keep in view** control how the
  footage fills the screen.

### Video

A video from your files, YouTube or Vimeo.

- **Look**: **Aperture** (the video opens out of a narrow window),
  **Screening** (a cinema screen that stands up as it arrives) or **Mosaic**
  (the cover picture assembles from tiles).
- **Source**: **Upload** or **YouTube or Vimeo link**.
- **Video**: the file to play when the source is **Upload**. Captions must
  be part of the video file itself, or come from YouTube or Vimeo when you
  use a link.
- **Cover picture**: shown until the video plays.
- **Start**: **When the play button is pressed** or **As a silent preview**
  that loops without sound.
- **Dim the page while playing**.

## Showing products

### Featured products

Products from one collection.

- **Collection** and **Number of products**.
- **Look**: **Shelf** (products rise onto shelves row by row) or **Arc**
  (one curved row, turned with arrows or a swipe).
- **Open a preview panel on click**: clicking a product opens its
  pictures, price and description over the page, without leaving it.
- **Give each product its own color**: a different tint behind each
  picture.

How each product card looks is set once in Theme settings, under **Product
cards**.

### Product

One product with its buy buttons, anywhere on the home page. Add it as
**Product** or **Product spotlight**, then pick the **Product** to show.
Its settings and blocks are the same as the product page's: see
[Product page](product-page.md).

### Collection tiles

Collections as picture tiles.

- **Look**: **Stack** (each collection's picture fanned out with two of its
  products), **Lookbook** (a large spread with the collection's description)
  or **Mosaic** (each picture keeps its own shape).
- **Collections**: pick the ones to show. On the collections page this
  section lists every collection instead.
- **Columns on desktop**, **Columns on mobile** and **Image ratio**.

### Collection index

A list of collections. On computers the list stays in place and each
collection's picture opens as the shopper scrolls.

- Add a **Collection** block for each one. Its **Name**, **Badge** (such
  as New or Sale) and **Picture** default to the collection's own.
- **Show row numbers** and **Show product counts**.
- **Scroll distance per collection**: higher is slower.

## Telling your story

### Story rows

Rows of a picture beside words.

- **Layout**: **Picture beside the words**, **Picture holds while the words
  scroll** or **Numbered chapters**.
- Add a **Row** block for each row, with an **Image**, **Caption**,
  **Heading**, **Text** and an optional button.
- **Picture position**: alternate sides or keep to one side.
- **Row entrance** sets how each row arrives. A row can override it.
- **Ripple the pictures** moves the pictures like cloth in a breeze.

### Expanding panels

A row of tall panels. The shopper opens one at a time, and the open panel
grows to show its picture and description.

- Add a **Panel** block for each. Give it a **Heading**, **Description**,
  **Image**, and a **Link** to make the open panel clickable.
- **Open panel width**: how much of the row the open panel takes.
- **Move to the next panel every**: 0 turns auto-advance off.

The panels are always dark, by design.

### Stacking cards

Large cards that stack on top of each other as the shopper scrolls, under a
heading that stays in place.

- Add a **Card** block for each. Pick a **Product** and turn on **Use the
  product's own details** to fill the card from the product, or type your
  own **Heading**, **Price**, **Description** and **Card image**.
- **Feature this card** gives a card the featured colors. Usually the last
  card.
- On phones and tablets the cards become a plain list.

### Horizontal scroll cards

Picture cards that move sideways as the shopper scrolls down.

- Add a **Card** block for each, with a **Card image** (1600 x 2000px
  recommended), **Tagline**, **Heading**, **Description** and **Link**.
- **Card width** and **Scroll distance per card**.
- Visitors who reduce motion see a plain list of cards.

### Image gallery

A gallery of pictures.

- **Look**: **Drift** (columns glide at different speeds), **Reveal** (a
  grid led by one large picture) or **Reel** (one long row that swipes).
- Add a **Picture** block for each, with a **Caption** and an optional
  **Link**.
- **Open pictures larger when pressed**: a full-screen view with arrows.

## Building trust

### Testimonials

Quotes from your customers.

- **Look**: **Crossing rows** (cards that slide in from the sides) or
  **Chat** (messages beside each customer's photo).
- Add a **Quote** block for each, with the **Quote**, **Name**, **Role or
  location**, **Photo**, **Star rating** and the **Product bought**. Use
  only real quotes and the rating each customer actually gave.

### Trust badges

A band of short promises, such as delivery, returns or secure payment.

- Add a **Badge** block for each, with a **Heading**, **Text** and
  **Icon**. **Automatic — a different one in each place** gives each badge
  a different icon. You can use your own **Icon image** or **SVG code**.
- **Animation**: **None**, **Fade up**, or **Fade up, draw the icons, type
  the headings**.

### Logo list

The logos of brands you stock, press that featured you, or partners.

- **Look**: **Drift**, **Flipboard** or **Spotlight**.
- Add a **Logo** block for each, with a **Brand name** and an optional
  **Link**.
- **Logo color**: **Text color** redraws every logo in the scheme's text
  color. It needs logos with a see-through background, such as .png or .svg.

### FAQ

Questions and answers that open on a click.

- Add a **Question** block for each, with an **Answer**, or an **Answer
  from a page** to reuse a page you already wrote.
- **Group questions into topics**: give questions a **Topic** and buttons
  appear to filter them.
- **Row style**, **Open one answer at a time** and **Open the first
  answer**.
- An optional **Image** beside the questions.

### Pricing

Plans side by side, for memberships, services or packages.

- **Layout**: **Tier cards**, **Comparison table**, **Plan rows**,
  **Spotlight** or **3D deck**.
- Add a **Plan** block for each. Type the **Monthly price** and **Yearly
  price** exactly as they should read, including the currency.
- **Features**: one per line. Start a line with a hyphen to show it as not
  included. Write *Name: value* to give each plan its own value on one row
  of the comparison table.
- **Highlight this plan** lifts one plan out of the row.
- **Show the billing toggle** adds a monthly and yearly switch.

The prices are plain text. The **Button link** of each plan decides where
it goes, such as a product page.

## Staying in touch

### Contact

A contact form. It also works on any page.

- **Look**: **Split** (ways to reach you in a panel beside the form),
  **Letter** (the form on one sheet of paper) or **Steps** (one question at
  a time).
- Add an **Inquiry type** block for each kind of question (an order, a
  return, wholesale). Its **Extra questions** appear only when that type is
  chosen.
- Add a **Way to reach you** block for each phone number, email address,
  address or opening hours.
- **Show a WhatsApp button** with your **WhatsApp number**, including the
  country code.
- **Map image** with a link to your maps page.

Shopify sends every message to your store's sender email address, set in
*Settings > Notifications*.

### Email signup

A newsletter signup. People who sign up are added to your customers, ready
for Shopify Email or another email app.

- **Layout**: **Centered band**, **Split — words beside the box**,
  **Inline strip**, **Image beside content**, **Card panel** or **Bordered
  rule**.
- **Reassurance line**: a short line under the box, such as how often you
  write.

### Blog posts

The latest posts from one blog.

- **Blog** and **Number of posts**.
- **Look**: **Fan** (posts dealt out like cards) or **Thread** (a line
  draws down through the posts).

How each post card looks is set in Theme settings, under **Blog cards**.

## Building your own

### Custom section

Build your own layout from pieces. Add it as **Custom section**, or start
from a ready-made arrangement: **Banner**, **Picture and text**, **Three
columns**, **Two columns** or **Call to action**.

- **Layout**: **One column**, **Picture beside the words** or **Words over
  the picture**, with an optional **Picture** or **Video**.
- Pieces you can add: **Heading**, **Text**, **Buttons**, **Picture**,
  **Feature grid** (holding **Feature** blocks with an icon, heading and
  text), **Spacer**, **Divider** and **Custom Liquid**.
- **Frame** groups pieces side by side or one under another. Set its
  **Width on a computer** to build columns.

### Custom Liquid

For code an app or a developer gives you. It runs as written, so test it on
a duplicate of your theme first. Custom code is not covered by support.

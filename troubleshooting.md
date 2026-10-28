---
title: Troubleshooting
updated: 2026-10-28
---

# Troubleshooting

Common problems and how to fix them. Most are a setting or a missing piece
of content, not a fault in the theme.
{: .lede}

## My changes are not on my live shop

- Select *Save* in the theme editor. Changes are kept only when saved.
- Check that you edited the published theme. In *Online Store > Themes*, the
  theme at the top is the live one; changes to a draft copy show only when
  that copy is published.
- Refresh the page on your shop. Your browser may be showing an older copy.

## Motion

### A section looks still

Your device probably has reduced motion turned on, and the theme respects
that by default. Set the section's motion setting to **Always animate**
while you check it, then switch back. See [Motion](getting-started.md#motion).

### A page moves on my shop but not in the editor

The editor preview shows some looks finished and still, such as the moving
looks of content pages. Check the movement on your shop or with the theme's
*Preview*.

### The 3D deck in Pricing does not hold the screen

It holds the screen only when the screen is tall enough for the whole
scene. On a short screen it shows the plain layout instead. See
[Pricing](sections.md#pricing).

## Pictures

### My pictures are cropped

Sections that fill the screen crop the edges, more so on phones. Keep the
subject in the middle, or set a focal point on the picture in *Content >
Files*. For product cards, set **Picture shape** to **Automatic** in Theme
settings, under **Product cards**. In a section, look for a shape or height
setting with **Adapt to picture**, **As uploaded** or **Automatic**. See
[Picture sizes](how-to.md#picture-sizes).

### Pictures look blurry

Upload a bigger file. Each section's best size is in
[Picture sizes](how-to.md#picture-sizes).

### Logos turn into solid blocks

**Logo color** set to **Text color** redraws each logo in one color. It
needs logos with a see-through background, such as .png or .svg files.

## Something is missing

### A section shows nothing on my shop

Several sections hide themselves when they have nothing to show, so an
empty box never reaches shoppers. In the editor they show sample content,
so you can still judge the look.

- **Collection tiles**: pick at least one collection.
- **Blog posts**: the blog needs at least one post.
- **Related products**: Shopify has nothing to suggest yet, which is normal
  on a new shop.
- **Goes well with**: pick its products in Shopify Search & Discovery.

### A button or link does not show

A link shows only when it has both its words and its address, such as
**Button label** and **Button link**, or **Link text** and **Link**. Fill in
both.

### The Filter button is missing

Filters come from the free *Search & Discovery* app. The button appears once
at least one filter has something to choose from. See
[Set up collection filters](how-to.md#set-up-collection-filters).

### No star ratings

In Theme settings, under **Product page**, set **Reviews from**, and add
the **Rating** block to the product page. Ratings show on the product page
only. See [Show star ratings from a reviews app](how-to.md#show-star-ratings-from-a-reviews-app).

### Colors show as words, not swatches

The color option needs to be connected to the *Color* category metafield,
with a color for each entry. Check also that the **Variant picker** has
**Picker style** set to **Pills**. See
[Set up color swatches](how-to.md#set-up-color-swatches).

### No sale badge

- The product needs a *Compare-at* price higher than its price.
- A sold out product never shows it.
- Check **Show a sale badge** and **Minimum discount** in Theme settings,
  under **Search**.

### The inquiry button does not show on a sold out product

It needs an **Inquiry button link**, in Theme settings under **Product
cards**. Without one, the product shows the Sold out label.

### No country or currency picker

It appears only when your shop sells to more than one country (*Settings >
Markets* in your admin) and **Show country/region selector** is on in Theme
settings, under **Currency format**. See
[Country and language pickers](footers.md#country-and-language-pickers).

### No social or payment icons in the footer

Social icons need a link in Theme settings, under **Social media**. Payment
icons need payment methods set up in your admin. A new shop may show none
yet. See [Footer extras](footers.md#footer-extras).

### The search drop-down shows nothing

Check that **Suggest results as the shopper types** is on, in Theme
settings under **Search**.

### Comments do not show on blog posts

Turn comments on for the blog in your admin, in *Online Store > Blog posts >
Manage blogs*.

### Nothing about store pickup

Pickup needs to be turned on for a location, and that location needs the
chosen option in stock.

### The app I installed has no block

The app may have no block for that page. In *Add block*, open the *Apps*
tab; if the app is not there, check the app's own help. Some apps use an
app embed instead, in the *App embeds* icon of the editor's left bar.

## Colors and dark mode

### Dark mode did not change when I edited a color

The dark colors are made from your light ones when the page loads. Save,
then refresh the editor preview.

### Text is hard to read on a picture

Pick a calmer picture or a different text color for that section. Dark
photos behind dark text, or light behind light, are the usual cause.

## Still stuck?

Check the [frequently asked questions](faq.md), then
[send us a message](support.md). We reply within {{ site.reply_time }}.

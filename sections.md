---
title: Home page sections
updated: 2026-10-21
---

# Home page sections

Add a section from *Add section* in the theme editor. The sections on this page are made for the home page; **Collection tiles** also works on the collections list page, **Contact** also works on pages, and **Custom Liquid** can go on any page. Each entry shows every look on a computer and a phone, says where to find the section, lists its settings in the order the editor shows them, and ends with tips.

Names in bold, such as **Color scheme**, are written exactly as they appear in the theme editor. A setting that only matters in one look or layout is hidden in the editor until you pick that look, and its table row says so.

## Find a section

### Opening a page

- [Slideshow](#slideshow): Big pictures with text that change on their own or with arrows.
- [Hero scroll](#hero-scroll): Full-screen slides that change as the shopper scrolls, with an optional brand strip.
- [Scroll story](#scroll-story): A video or picture the camera moves through as you scroll, with captions.
- [Video](#video): A video from your files, YouTube or Vimeo, opened with a scroll effect.

### Showing products

- [Featured products](#featured-products): A row of products from one collection, on shelves or turning on an arc.
- [Collection tiles](#collection-tiles): Collections as picture tiles: Stack, Lookbook or Mosaic.
- [Collection index](#collection-index): A big list of collections with a picture that opens as you scroll.

### Telling your story

- [Horizontal scroll cards](#horizontal-scroll-cards): Picture cards that slide sideways as you scroll down.
- [Stacking cards](#stacking-cards): Large cards that stack on top of each other as you scroll.
- [Story rows](#story-rows): Rows of a picture beside words, in three layouts.
- [Expanding panels](#expanding-panels): A row of tall panels; the open one grows to show its picture.
- [Image gallery](#image-gallery): A gallery of pictures that glide, unroll or swipe.

### Building trust

- [Logo list](#logo-list): The logos of brands you stock, press that featured you, or partners.
- [Testimonials](#testimonials): Quotes from customers as sliding cards or chat messages.
- [Trust badges](#trust-badges): A band of short promises with icons: delivery, returns, secure payment.
- [Pricing](#pricing): Plans side by side in five layouts, with a monthly and yearly switch.
- [FAQ](#faq): Questions and answers that open on a click, in three row styles.

### Staying in touch

- [Email signup](#email-signup): A newsletter signup in six layouts.
- [Blog posts](#blog-posts): The latest posts from one blog as a dealt deck or a drawn line.
- [Contact](#contact): A contact form with ways to reach you, in three looks.

### Building your own

- [Custom section](#custom-section): Build your own layout from headings, text, buttons, pictures and more.
- [Custom Liquid](#custom-liquid): A box for code from an app or a developer.

### Somewhere else

- **Product** and **Related products** are described in the [Product page](product-page.md) guide.

## Settings most sections share

- **Color scheme**: the colors the section uses (see [Theme settings](theme-settings.md#colors)).
- **Transparent background**: lets the page background show through.
- **Top padding** and **Bottom padding**: space above and below.
- **Scroll animation**, **Animation** or **Motion**: **Off for visitors who reduce motion** or **Always animate** (see [Getting started](getting-started.md#motion)).
- **Look**: many sections offer two or three looks. A look changes the layout and the movement; colors, fonts and buttons always follow your theme settings.

## Slideshow

Big pictures with a line of text that change on their own or when the shopper uses the arrows.
{: .lede}

- Add section › Slideshow
- 3 looks
- 1 block type
- Home page only
{: .facts}

### Looks

{% include looks.html folder="sections" file="slideshow" name="Slideshow" looks="Curtain,Split,Gallery" about="Full-width pictures with the text over them, the next picture drawn across like a curtain.|The picture beside the text, which sits on the color scheme, with the pictures moving like a film strip.|Slides inside the page width, with the next and previous ones peeking in at the sides and the text under each picture." %}

### Where to find it

1. In your Shopify admin, go to *Online Store > Themes* and select *Edit theme* next to this theme.
2. Open the home page in the editor.
3. Select *Add section* and choose **Slideshow**.

This section is for the home page only. It is not offered on other pages.

### Settings

#### Layout

| Setting | What it changes |
| --- | --- |
| **Look** | Changes the layout and the movement. **Curtain**: full-width pictures with the text over them; the next picture is drawn across like a curtain. **Split**: the picture beside the text, which sits on the color scheme; the pictures move like a film strip, and on phones the picture goes above the text. **Gallery**: slides inside the page width with the next and previous ones peeking in at the sides and the text under each picture; its picture corners follow the rounding in Theme settings, under **Content containers**. Default: **Curtain**. |
| **Height** | How tall the slides are. **Adapt to first picture** keeps the shape of your first picture; the other two give the slideshow a set height. Options: **Adapt to first picture**, **Medium** (default), **Full screen**. |
| **Text alignment** | Whether the words line up on the left or in the center. Options: **Left** (default), **Center**. |
{: .settings}

#### Autoplay

| Setting | What it changes |
| --- | --- |
| **Change slides automatically** | Moves to the next slide on its own. Shoppers can pause it, and it waits while the pointer is over a slide. Off by default. |
| **Change slides every** | How long each slide stays before the next one arrives. Range 3 to 10 s, default 5 s. Shows only when **Change slides automatically** is on. |
{: .settings}

#### Style

| Setting | What it changes |
| --- | --- |
| **Color scheme** | The colors behind the slides. **Curtain** keeps white text over the picture and uses the scheme for the page behind it. **Split** uses it for the text side and **Gallery** for the whole section. |
| **Darken pictures** | Lays a dark layer over the pictures so the text stays readable on bright ones. 0 removes it. Range 0 to 90%, default 55%. Shows only when **Look** is **Curtain**. |
| **Animation** | Whether slides change with movement. Visitors who reduce motion on their device see slides change without movement, and slides never change by themselves for them. **Always animate** shows the movement to everyone. Options: **Off for visitors who reduce motion** (default), **Always animate**. |
{: .settings}

### Blocks

Each slide is a block. Add one per slide. You can add up to 10.

#### Slide block

One slide: a picture, a short text and up to two buttons.

##### Picture

| Setting | What it changes |
| --- | --- |
| **Picture** | The slide picture. 2400 × 1350 px is recommended. It is also used on phones unless you add a picture for phones. |
| **Picture on phones** | A different crop for screens up to 500 px wide. A 3:4 shape (taller than wide) works well. |
{: .settings}

##### Content

| Setting | What it changes |
| --- | --- |
| **Subheading** | A small line above the heading. |
| **Heading** | The slide's main line. |
| **Text** | One or two lines under the heading. |
{: .settings}

##### Buttons

| Setting | What it changes |
| --- | --- |
| **Button label** | The words on the button. The button shows only when it also has a link. |
| **Button link** | Where the button goes. |
| **Second button label** | The words on a second button. Leave empty for one button only. |
| **Second button link** | Where the second button goes. |
{: .settings}

### Tips and limits

> **Give phones their own crop.** A wide picture can lose its subject on a small screen. Add a taller picture under **Picture on phones** and the slide uses it on screens up to 500 px wide.

> **The first heading matters to search engines.** When the slideshow is the first section on your home page, the heading of its first slide is the page's main heading. Make it say what your shop sells.

> **Reduced motion.** Visitors who switch on reduce motion for their device see slides change without movement, and slides never change by themselves. **Always animate** in the **Animation** setting overrides that for everyone.

> **Keep the text short.** In **Curtain** the words sit over the picture. A line or two of text and one button read best, and **Darken pictures** keeps them readable on bright photos.

## Hero scroll

Full-screen slides that change as the shopper scrolls, each with a tagline, heading, text and up to two buttons, with an optional moving strip of brand logos along the bottom.
{: .lede}

- Add section › Hero scroll
- 3 looks
- 2 block types
- Home page only
{: .facts}

### Looks

{% include looks.html folder="sections" file="hero-scroll" name="Hero scroll" looks="Runway,Chips,Drum" about="The brand logo strip lies on a surface that tilts away from the viewer.|Each brand logo sits on its own raised tile in the strip.|The brand logo strip wraps around a turning barrel." %}

The three looks here are the three **Strip style** options, which change how the brand strip along the bottom is drawn. The strip only shows when **Show brand strip** is on and the section has **Brand logo** blocks.

### Where to find it

1. In your Shopify admin, go to *Online Store > Themes* and select *Edit theme* next to this theme.
2. Open the home page in the editor.
3. Select *Add section* and choose **Hero scroll**.

This section is for the home page only. It is not offered on other pages.

### Settings

#### Layout

| Setting | What it changes |
| --- | --- |
| **Content position** | Where the text sits on every slide. Each slide can override it in its own settings. Options: **Top left**, **Top**, **Top right**, **Left**, **Center**, **Right**, **Bottom left** (default), **Bottom**, **Bottom right**. |
{: .settings}

#### Scrolling

| Setting | What it changes |
| --- | --- |
| **Scroll distance per slide** | How far the shopper scrolls before the next slide takes over. Higher is slower and more cinematic, but pushes the rest of the page further down. Range 60 to 160 vh, default 100 vh. |
| **Show progress indicators** | The active bar fills as the shopper scrolls through the slide. On by default. |
| **Scroll animation** | Whether the movement plays for visitors whose device is set to reduce motion. They normally see the finished layout without movement; **Always animate** plays it for everyone, including you if reduce motion is on for your own device. Options: **Off for visitors who reduce motion** (default), **Always animate**. |
{: .settings}

#### Brand strip

| Setting | What it changes |
| --- | --- |
| **Show brand strip** | A moving row of brand logos across the bottom of the hero. Add a brand logo block for each one. On by default. |
| **Strip style** | Runway lays the row on a surface tilting away. Chips gives each logo a raised tile. Drum wraps the row around a turning barrel. Options: **Runway, a surface tilting away** (default), **Chips, a raised tile each**, **Drum, wrapped around a barrel**. Shows only when **Show brand strip** is on. |
| **Logo movement** | Spotlight sends a beam down the row so each logo lights up in turn. Flip turns each logo over. Options: **Spotlight** (default), **Drift**, **Wave**, **Flip**, **None**. Shows only when **Show brand strip** is on. |
| **Strip height** | Trimmed automatically on tablets and phones so it never swallows the slide. Range 56 to 140 px, default 92 px. Shows only when **Show brand strip** is on. |
| **Space above the strip** | The break between the picture and the logos. Range 0 to 40 px, default 6 px. Shows only when **Show brand strip** is on. |
| **Space below the strip** | Lifts the strip off the bottom edge of the hero. 0 keeps it flush. Range 0 to 40 px, default 0 px. Shows only when **Show brand strip** is on. |
| **Time for one full loop** | Higher is slower. Hovering the strip pauses it. Range 10 to 70 s, default 34 s. Shows only when **Show brand strip** is on. |
| **Movement size** | How far each logo travels. 0 holds them still. Range 0 to 26 px, default 10 px. Shows only when **Show brand strip** is on and **Logo movement** is neither **None** nor **Flip**. |
| **Logo brightness** | How bright the logos are at rest. They go to full brightness on hover, and as the spotlight passes. Range 30 to 100%, default 62%. Shows only when **Show brand strip** is on. |
| **Strip background** | The color of the strip behind the logos. Leave empty to match the section background. Shows only when **Show brand strip** is on. |
| **Strip text color** | The color of the strip text. Colors the pause button and the sample logos shown until a logo picture is chosen. Leave empty for white. Shows only when **Show brand strip** is on. |
{: .settings}

#### Colors

| Setting | What it changes |
| --- | --- |
| **Image overlay darkness** | Darkens the slide pictures so the text stays readable. Range 0 to 90%, default 45%. |
| **Section background** | The color behind the slide pictures. It only shows where a picture does not reach. |
| **Text color** | The base color for every text group. Each group can override it in its own settings. |
| **Tagline pill background** | The background color of the small pill that holds the tagline above the heading. |
| **Tagline pill background strength** | How strongly the pill color shows, from faint to solid. Range 0 to 100%, default 8%. |
| **Primary button background** | The fill color of the first button. |
| **Primary button label color** | The text color of the first button. |
| **Secondary button background strength** | How strong the fill behind the secondary button is. It uses the accent color. Range 0 to 100%, default 6%. |
| **Secondary button label color** | The text color of the second button. |
| **Secondary button border** | The border color of the second button. |
| **Secondary button border strength** | How strong the border around the second button is. Range 0 to 100%, default 50%. |
| **Progress bar track strength** | How faint the unfilled part of the bar is. It uses the accent color. Range 0 to 100%, default 25%. |
| **Transparent background** | Lets the page background show through this section. When it is off, the section follows **Make all sections transparent** in Theme settings. Off by default. |
{: .settings}

#### Slide counter

| Setting | What it changes |
| --- | --- |
| **Slide counter size** | Makes the slide counter smaller or larger. 1× is the normal size, which stays responsive. Range 0.6 to 2×, default 1×. |
| **Slide counter color** | The color of the slide counter. Leave empty to use the section text color. |
{: .settings}

### Blocks

Slides and brand logos are both blocks. Add a **Slide** for each slide and a **Brand logo** for each logo in the strip. You can add up to 20.

#### Slide block

One full-screen slide.

##### Layout

| Setting | What it changes |
| --- | --- |
| **Content position** | Where this slide's text sits. Leave on same as section to follow the section setting. Options: **Same as section** (default), **Top left**, **Top**, **Top right**, **Left**, **Center**, **Right**, **Bottom left**, **Bottom**, **Bottom right**. |
{: .settings}

##### Content

| Setting | What it changes |
| --- | --- |
| **Tagline** | A small label above the heading. |
| **Heading** | The slide's main line. |
| **Heading size** | How large the heading is. Options: **Medium**, **Large** (default), **Extra large**. |
| **Subheading** | One short sentence under the heading. |
{: .settings}

##### Buttons

| Setting | What it changes |
| --- | --- |
| **Primary button label** | The words on the first button. A button shows only when it has both a label and a link. |
| **Primary button link** | Where the first button goes. |
| **Secondary button label** | The words on the second button. It shows only when it also has a link. |
| **Secondary button link** | Where the second button goes. |
{: .settings}

##### Image

| Setting | What it changes |
| --- | --- |
| **Background image** | The slide picture. 3000 × 1600 px is recommended. Leave empty to show a placeholder. |
| **Image focal point** | Which part of the picture stays in view when the slide crops it. Options: **Center** (default), **Top**, **Bottom**, **Left**, **Right**. |
{: .settings}

##### Tagline style

| Setting | What it changes |
| --- | --- |
| **Tagline size** | Makes the tagline smaller or larger. 1× is the normal size, which stays responsive. Range 0.6 to 2×, default 1×. |
| **Tagline weight** | How bold the tagline is. **Theme default** keeps the weight the chosen font comes with. Options: **Theme default** (default), **Light (300)**, **Normal (400)**, **Medium (500)**, **Semi-bold (600)**, **Bold (700)**. |
| **Tagline letter spacing** | The space between the letters of the tagline. 0 keeps the design's own spacing. Range -2 to 6 px, default 0 px. |
| **Tagline color** | The color of the tagline. Leave empty to use the section text color. |
{: .settings}

##### Heading style

| Setting | What it changes |
| --- | --- |
| **Heading size adjustment** | Makes the heading smaller or larger. 1× is the normal size, which stays responsive. Range 0.6 to 2×, default 1×. |
| **Heading weight** | How bold the heading is. **Theme default** keeps the weight the chosen font comes with. Options: **Theme default** (default), **Light (300)**, **Normal (400)**, **Medium (500)**, **Semi-bold (600)**, **Bold (700)**. |
| **Heading letter spacing** | The space between the letters of the heading. 0 keeps the design's own spacing. Range -2 to 6 px, default 0 px. |
| **Heading color** | The color of the heading. Leave empty to use the section text color. |
| **Heading shadow strength** | How strong the shadow behind the heading is. 0 turns the shadow off. Range 0 to 100%, default 40%. |
| **Heading shadow offset X** | How far the shadow is pushed sideways. Negative values push it left. Range -20 to 20 px, default 0 px. Shows only when **Heading shadow strength** is above 0. |
| **Heading shadow offset Y** | How far the shadow is pushed down. Negative values push it up. Range -20 to 20 px, default 2 px. Shows only when **Heading shadow strength** is above 0. |
| **Heading shadow blur** | How soft the edge of the shadow is. Range 0 to 60 px, default 24 px. Shows only when **Heading shadow strength** is above 0. |
| **Heading shadow color** | The color of the heading shadow. Leave empty for black. Shows only when **Heading shadow strength** is above 0. |
{: .settings}

##### Subheading style

| Setting | What it changes |
| --- | --- |
| **Subheading size** | Makes the subheading smaller or larger. 1× is the normal size, which stays responsive. Range 0.6 to 2×, default 1×. |
| **Subheading weight** | How bold the subheading is. **Theme default** keeps the weight the chosen font comes with. Options: **Theme default** (default), **Light (300)**, **Normal (400)**, **Medium (500)**, **Semi-bold (600)**, **Bold (700)**. |
| **Subheading letter spacing** | The space between the letters of the subheading. 0 keeps the design's own spacing. Range -2 to 6 px, default 0 px. |
| **Subheading color** | The color of the subheading. Leave empty to use the section text color. |
{: .settings}

##### Button label style

| Setting | What it changes |
| --- | --- |
| **Button size** | Makes the button smaller or larger. 1× is the normal size, which stays responsive. Range 0.6 to 2×, default 1×. |
| **Button weight** | How bold the button is. **Theme default** keeps the weight the chosen font comes with. Options: **Theme default** (default), **Light (300)**, **Normal (400)**, **Medium (500)**, **Semi-bold (600)**, **Bold (700)**. |
| **Button letter spacing** | The space between the letters of the button. 0 keeps the design's own spacing. Range -2 to 6 px, default 0 px. |
{: .settings}

#### Brand logo block

One logo in the moving strip along the bottom. It shows only when **Show brand strip** is on.

| Setting | What it changes |
| --- | --- |
| **Logo** | The brand's logo picture. Leave empty for a sample card while you gather the artwork. |
| **Brand name** | The brand's name. Screen readers read it out, and it is used if the picture fails to load. |
| **Link** | Optional. Sends shoppers to the brand's page, such as its collection. |
{: .settings}

### Tips and limits

> **Always dark.** Hero scroll keeps its own dark colors in both light and dark mode. Change them under **Colors** in the section.

> **Slides first, logos after.** Keep your **Slide** blocks above your **Brand logo** blocks in the list so the first slide loads quickly.

> **Mind the picture size.** A 3000 × 1600 px picture is plenty. Larger files slow the page down for every visitor.

> **Scroll distance moves the rest of the page.** A higher **Scroll distance per slide** feels slower and more cinematic, but pushes everything below the hero further down.

> **The first title is the page heading.** When Hero scroll opens your home page, the title of its first slide is the main heading of the page for search engines.

> **No picture in the block picker.** When you add a **Slide** block, the editor may say "No preview available". The slide still works; **Brand logo** previews normally.

## Scroll story

One full-screen video or picture that a camera seems to move through as the shopper scrolls, with captions that fade in and out along the way.
{: .lede}

- Add section › Scroll story
- 1 block type
- Home page only
{: .facts}

### Looks

{% include looks.html folder="sections" file="scroll-story" name="Scroll story" looks="Scroll story" plain="true" about="Dark full-screen footage with a large caption in the lower left and a progress line along the bottom." %}

### Where to find it

1. In your Shopify admin, go to *Online Store > Themes* and select *Edit theme* next to this theme.
2. Open the home page in the editor.
3. Select *Add section* and choose **Scroll story**.

This section is for the home page only. It is not offered on other pages.

### Settings

#### Footage

| Setting | What it changes |
| --- | --- |
| **Video** | The footage. It plays frame by frame as the shopper scrolls, so keep it short and small: 5 to 10 seconds, no sound. Leave empty to use a picture instead. |
| **Video (portrait screens)** | A portrait or square cut of the same clip for phones and portrait tablets. Without one, a wide clip loses most of its width on a phone. Keep it the same length as the main video. |
| **Image** | The picture used when there is no video. It gets the same camera move. 3000 × 1700 px is recommended. |
| **Footage width** | How wide the footage is. Putting it down one side narrows it to a column and leaves the other side free for the text. Computers only; phones and tablets always run full width. Options: **Full width** (default), **Down the left side**, **Down the right side**. |
| **Footage column width** | How wide the footage column is. It keeps the full height of the screen, so a narrow column crops a wide shot more. Use **Part to keep in view** to choose what stays. Range 30 to 90%, default 55%. Shows only when **Footage width** is not **Full width**. |
| **Footage fit** | How the footage fills the screen. **Fill the screen — crop the edges** crops it to cover. **Show the whole frame — bars at the sides** keeps all of it and fills the gaps with the background color. **Stretch to fit — no bars, no crop, distorts** fills the screen but squashes the picture. Default: **Fill the screen — crop the edges**. |
| **Remove black bars in the video** | For a clip that has black bars baked into the picture, which no crop setting can reach. It reads the footage and zooms just past the bars, on top of **Zoom**. Leave it off if your footage has no bars. Off by default. |
| **Zoom** | Scales the footage on top of the camera move. Turn it up to push side bars off the screen; it crops instead of distorting. Below 100% the footage no longer reaches the edges, so the background color shows around it. Range 50 to 200%, default 100%. |
| **Part to keep in view** | Filling the screen always cuts something off. This picks what survives. Options: **Center** (default), **Top**, **Bottom**, **Left**, **Right**, **Top left**, **Top right**, **Bottom left**, **Bottom right**. |
{: .settings}

#### Portrait screens

| Setting | What it changes |
| --- | --- |
| **Footage fit (portrait)** | The same choice for portrait screens. **Fill the screen — crop the edges** crops it to cover, **Show the whole frame — bars above and below** keeps all of it, and **Stretch to fit — no bars, no crop, distorts** squashes it to fill. Default: **Fill the screen — crop the edges**. |
| **Zoom (portrait)** | Scales the footage on portrait screens. Below 100% it stops reaching the edges and the background color shows around it. Range 50 to 200%, default 100%. |
{: .settings}

#### Scene

| Setting | What it changes |
| --- | --- |
| **Camera move** | How the shot drifts and how the light changes across the scroll. Options: **Aerial — wide drift, cooling out** (default), **Entrance — push in, opens up**, **Golden hour — slow pan, warm**. |
| **Scene length** | How much scrolling the scene takes, in screens. Longer is slower, but pushes the rest of the page further down. Range 200 to 800 vh, default 680 vh. |
| **Show progress bar** | A progress bar along the bottom. Its dots jump to each caption. On by default. |
| **Scroll hint** | A small prompt that fades out as soon as the shopper starts scrolling. Leave empty to hide it. |
| **Scroll animation** | Visitors who reduce motion on their device see the scene without the camera drift, the dust and the easing; the pinned scroll itself always runs. **Always animate** shows all of it to everyone. Options: **Off for visitors who reduce motion** (default), **Always animate**. |
{: .settings}

#### Colors

| Setting | What it changes |
| --- | --- |
| **Background color** | Shows before the footage loads and behind any bars around it. |
| **Text color** | The color of the captions. |
| **Overlay strength** | Lays the background color over the footage so the text stays readable on pale pictures. 0 removes it. Range 0 to 90%, default 70%. |
| **Transparent background** | Lets the page background show through this section. When it is off, the section follows **Make all sections transparent** in Theme settings. Off by default. |
{: .settings}

### Blocks

Each caption is a block. Add one per line of text. You can add up to 6.

#### Caption block

One caption that fades in and out at a point in the scroll.

##### At the top

| Setting | What it changes |
| --- | --- |
| **Heading** | The caption's main line. |
| **Text** | A line or two under the heading. |
| **Position on screen** | Which corner of the screen the caption appears in. Options: **Bottom left** (default), **Bottom right**, **Top left**, **Top right**. |
| **Caption entrance** | The move it makes as it fades in, and the reverse as it fades out. Scroll drives it — nothing runs on its own. Options: **Rise up** (default), **Drop down**, **Slide in from the left**, **Slide in from the right**, **Zoom in**, **Blur in**, **Fade only — no movement**. |
{: .settings}

##### Heading style

| Setting | What it changes |
| --- | --- |
| **Heading size** | How large the heading is. Options: **Small**, **Medium** (default), **Large**. |
| **Heading weight** | How bold the heading is. **Theme default** keeps the weight the chosen font comes with. Options: **Theme default** (default), **Light (300)**, **Normal (400)**, **Medium (500)**, **Semi-bold (600)**, **Bold (700)**. |
| **Heading letter spacing** | The space between the letters of the heading. 0 keeps the design's own spacing. Range -4 to 8 px, default 0 px. |
| **Heading color** | The color of the heading. Leave empty to follow the section's text color. |
{: .settings}

##### Text style

| Setting | What it changes |
| --- | --- |
| **Text size** | How large the text is. Options: **Small**, **Medium** (default), **Large**. |
| **Text weight** | How bold the text is. **Theme default** keeps the weight the chosen font comes with. Options: **Theme default** (default), **Light (300)**, **Normal (400)**, **Medium (500)**, **Semi-bold (600)**, **Bold (700)**. |
| **Text letter spacing** | The space between the letters of the text. 0 keeps the design's own spacing. Range -4 to 8 px, default 0 px. |
| **Text color** | The color of the text. Leave empty to follow the section's text color. |
{: .settings}

##### Timing

| Setting | What it changes |
| --- | --- |
| **Fades in at** | How far through the scene this caption starts appearing. Below 0 means it is already on screen at the top. Range -20 to 100%, default -12%. |
| **Fades out by** | How far through the scene the caption has finished fading out. It stays fully visible halfway between the two points. Range 0 to 100%, default 26%. |
{: .settings}

### Tips and limits

> **Keep footage short and small.** Use 5 to 10 seconds with no sound. Long or heavy files make the scrolling stutter and slow the page.

> **Add a portrait cut for phones.** Without **Video (portrait screens)**, a wide clip loses most of its width on a phone.

> **No video? Use a picture.** The **Image** gets the same camera move, so the section works without any footage.

> **Reduced motion.** Visitors who reduce motion still get the pinned scroll and the captions, only without the camera drift, dust and easing.

> **Captions stay readable.** The text is light on a dark stage. If your footage is pale, raise **Overlay strength**.

## Featured products

A row of products from one collection, standing on shelves or turning on a curved arc.
{: .lede}

- Add section › Featured products
- 2 looks
- No blocks
- Home page only
{: .facts}

### Looks

{% include looks.html folder="sections" file="featured-products" name="Featured products" looks="Shelf,Arc" about="Products standing on shelves in a grid, rising into place row by row as the page scrolls.|One curved row of products across the whole screen, turned with arrows or a swipe." %}

### Where to find it

1. In your Shopify admin, go to *Online Store > Themes* and select *Edit theme* next to this theme.
2. Open the home page in the editor.
3. Select *Add section* and choose **Featured products**.

This section is for the home page only. It is not offered on other pages.

### Settings

#### At the top

| Setting | What it changes |
| --- | --- |
| **Collection** | The collection whose products are shown. |
| **Number of products** | How many products to show, taken from the start of the collection's order. Range 2 to 12, default 8. |
| **Look** | **Shelf**: products stand on shelves and rise into place row by row as the page scrolls. **Arc**: one curved row across the whole screen, turned with arrows or a swipe. Default: **Shelf**. |
| **Columns on computers** | How many columns sit side by side on a computer. Tablets and phones show fewer. Options: **3**, **4** (default). Shows only when **Look** is **Shelf**. |
{: .settings}

#### Heading

| Setting | What it changes |
| --- | --- |
| **Subheading** | A small line above the heading. |
| **Heading** | The section heading. |
| **Text** | A short paragraph under the heading. Bulleted and numbered lists, links, bold text and small headings are styled the same as the text on your pages and blog posts. |
| **Show link to the whole collection** | Adds a link beside the heading that goes to the whole collection. On by default. |
{: .settings}

#### Product cards

How a product card looks — its alignment, color scheme, surface, picture shape and product name length — is set once in Theme settings under Product cards, so every product in the store matches.

| Setting | What it changes |
| --- | --- |
| **Show product type** | The small line under the name. A product with no type set shows nothing rather than a blank line. On by default. |
| **Show price** | Shows each product's price under its name. On by default. |
| **Open a preview panel on click** | Clicking a product opens its picture, price and description over the page. With this off, and wherever the panel cannot run, clicking goes straight to the product. On by default. |
| **Give each product its own color** | Cycles a tint from the color scheme behind each picture, so a row of products is a row of colors. On by default. |
{: .settings}

#### Color scheme

| Setting | What it changes |
| --- | --- |
| **Color scheme** | Which of your color schemes the section uses for its background and text. You make schemes in Theme settings, under **Colors**. |
{: .settings}

#### Motion

| Setting | What it changes |
| --- | --- |
| **Scroll animation** | Whether the shelves and the arc move as the page scrolls. They play back when scrolling up. Visitors who reduce motion on their device see them still unless you choose **Always animate**. Options: **Off for visitors who reduce motion** (default), **Always animate**. |
{: .settings}

#### Padding

| Setting | What it changes |
| --- | --- |
| **Top** | The space above the section. Range 0 to 200 px, default 96 px. |
| **Bottom** | The space below the section. Range 0 to 200 px, default 96 px. |
{: .settings}

### Blocks

This section has no blocks. It fills itself from the collection you choose.

### Tips and limits

> **Arrows need two products.** In **Arc**, the arrows and the counter appear only when the collection has two or more products.

> **Cards look the same everywhere.** How a product card looks is set once in Theme settings, under **Product cards**, so every product in your shop matches.

> **The preview panel needs the script.** With **Open a preview panel on click** on, a click opens the product over the page. Where the panel cannot open, the click goes straight to the product page.

> **Sold out and sale badges are automatic.** A product with every variant sold out shows a "Sold out" label, and a discounted product shows a "Sale" badge, without any setting.

## Collection tiles

Collections shown as picture tiles. On the collections list page it shows every collection in your store.
{: .lede}

- Add section › Collection tiles
- 3 looks
- No blocks
- Home page and collections list page
{: .facts}

### Looks

{% include looks.html folder="sections" file="collection-tiles" name="Collection tiles" looks="Stack,Lookbook,Mosaic" about="Each collection's picture fanned out in front of two of its products.|A large spread for each collection, with a big picture beside its name, description and a button.|Tiles of different shapes, each keeping its own picture's shape." %}

### Where to find it

1. In your Shopify admin, go to *Online Store > Themes* and select *Edit theme* next to this theme.
2. Open the home page, or the collections list page, in the editor.
3. Select *Add section* and choose **Collection tiles**.

This section is for the home page and for the collections list page (the page that lists all your collections). It is not offered on other pages.

### Settings

#### At the top

On the collections page this lists every collection in your store. Anywhere else it shows the collections you pick.

#### Layout

| Setting | What it changes |
| --- | --- |
| **Look** | **Stack** fans out each collection's picture with two of its products. **Lookbook** gives each collection a large spread with its description. **Mosaic** keeps every picture's own shape. Default: **Stack**. |
| **Columns on desktop** | How many tiles sit side by side on a computer. Range 2 to 5, default 4. Shows only when **Look** is not **Lookbook**. |
| **Columns on mobile** | How many tiles sit side by side on a phone. Options: **1**, **2** (default). Shows only when **Look** is not **Lookbook**. |
| **Image ratio** | The shape of each tile's picture. Options: **Square** (default), **Portrait**, **Landscape**. Shows only when **Look** is **Stack**. |
| **Scroll animation** | Whether the movement plays for visitors whose device is set to reduce motion. They normally see the finished layout without movement; **Always animate** plays it for everyone, including you if reduce motion is on for your own device. Options: **Off for visitors who reduce motion** (default), **Always animate**. |
{: .settings}

#### Content

| Setting | What it changes |
| --- | --- |
| **Heading** | Leave empty for no heading. On the collections page it defaults to "Collections". |
| **Collections** | The collections to show as tiles. Not used on the collections list page, which always lists every collection. |
| **Collections per page** | How many collections show on each page of the collections list page. Collections list page only. Range 8 to 48, default 24. |
| **Show product count** | Shows how many products each collection holds. On by default. |
{: .settings}

#### Colors

| Setting | What it changes |
| --- | --- |
| **Color scheme** | Which of your color schemes the section uses for its background and text. You make schemes in Theme settings, under **Colors**. |
{: .settings}

#### Padding

| Setting | What it changes |
| --- | --- |
| **Top padding** | The space above the section. Range 0 to 100 px, default 36 px. |
| **Bottom padding** | The space below the section. Range 0 to 100 px, default 36 px. |
{: .settings}

### Blocks

This section has no blocks. You choose the collections in the settings above.

### Tips and limits

> **Choose collections that have a picture.** A tile with no picture shows the first letter of the collection's name instead.

> **Nothing picked, nothing shown.** On the home page, if you pick no collections, your live store shows nothing at all, not even the heading. The editor shows sample tiles so you can see the look.

> **Stack shows products too.** **Stack** draws up to two of each collection's products behind its picture, so empty collections show the picture alone.

> **Names are never cut short.** Long collection names wrap onto more lines, and the tiles in a row stay lined up.

## Collection index

A big list of collections. On a computer the list stays in place and each collection's picture opens as the shopper scrolls.
{: .lede}

- Add section › Collection index
- 1 block type
- Home page only
{: .facts}

### Looks

{% include looks.html folder="sections" file="collection-index" name="Collection index" looks="Collection index" plain="true" about="A numbered list of collection names in large type on the left, with one large picture on the right and a View all button beside the heading." %}

### Where to find it

1. In your Shopify admin, go to *Online Store > Themes* and select *Edit theme* next to this theme.
2. Open the home page in the editor.
3. Select *Add section* and choose **Collection index**.

This section is for the home page only. It is not offered on other pages.

### Settings

#### Content

| Setting | What it changes |
| --- | --- |
| **Tagline** | A small line above the heading. |
| **Heading** | The section heading. |
| **View all label** | Shown beside the heading. Leave the label empty to hide it. |
| **View all link** | Where the View all button goes. |
{: .settings}

#### Rows

| Setting | What it changes |
| --- | --- |
| **Show row numbers** | Numbers each row: 01, 02, 03 and so on. On by default. |
| **Show product counts** | Shows how many products each collection holds. On by default. |
| **Picture corner rounding** | How round the corners of the pictures are. Range 0 to 40 px, default 18 px. |
{: .settings}

#### Motion

| Setting | What it changes |
| --- | --- |
| **Scroll animation** | On a computer the list stays in place while the pictures open as you scroll. Visitors who reduce motion on their device see a plain list with still pictures; **Always animate** shows the movement to everyone. Options: **Off for visitors who reduce motion** (default), **Always animate**. |
| **Scroll distance per collection** | How far the shopper scrolls to move from one collection to the next while the list is pinned. Higher is slower, but pushes the rest of the page further down. Range 20 to 100 vh, default 40 vh. |
{: .settings}

#### Layout

| Setting | What it changes |
| --- | --- |
| **Top padding** | The space above the section. Range 0 to 100 px, default 48 px. |
| **Bottom padding** | The space below the section. Range 0 to 100 px, default 48 px. |
{: .settings}

#### Colors

| Setting | What it changes |
| --- | --- |
| **Color scheme** | Which of your color schemes the section uses for its background and text. You make schemes in Theme settings, under **Colors**. |
{: .settings}

### Blocks

Each row is a block. Add one per collection. You can add up to 12.

#### Collection block

One collection in the list.

| Setting | What it changes |
| --- | --- |
| **Collection** | The collection this row links to. |
| **Name** | The name shown for the row. Leave empty to use the collection's own name. |
| **Badge** | A short word shown beside the name, such as New or Sale. Leave empty for none. |
| **Picture** | The picture shown when this row is open. Leave empty to use the collection's own picture. |
{: .settings}

### Tips and limits

> **The pin needs a big screen.** The list stays in place and the pictures open as you scroll on computers. On tablets and phones the list is a plain list.

> **Scroll distance moves the page down.** A higher **Scroll distance per collection** is slower, but pushes the rest of the page further down.

> **Rows fill themselves in.** Leave **Name** and **Picture** empty and each row uses the collection's own name and picture.

## Horizontal scroll cards

Tall picture cards that slide sideways as the shopper scrolls down, beside an intro with a heading and a line of text.
{: .lede}

- Add section › Horizontal scroll cards
- 1 block type
- Home page only
{: .facts}

### Looks

{% include looks.html folder="sections" file="horizontal-scroll-cards" name="Horizontal scroll cards" looks="Horizontal scroll cards" plain="true" about="A large heading and a line of text on the left with picture cards sliding in from the right, each with a small label, a name and a short description." %}

### Where to find it

1. In your Shopify admin, go to *Online Store > Themes* and select *Edit theme* next to this theme.
2. Open the home page in the editor.
3. Select *Add section* and choose **Horizontal scroll cards**.

This section is for the home page only. It is not offered on other pages.

### Settings

#### Intro

| Setting | What it changes |
| --- | --- |
| **Heading** | The intro heading. It wraps across lines on its own because the intro column is narrow. Put a word in italics to set it in the contrasting body font. |
| **Subheading** | A line of text under the heading. |
| **Scroll hint** | A small prompt at the bottom left while the cards are pinned. Leave empty to hide it. |
{: .settings}

#### Heading style

| Setting | What it changes |
| --- | --- |
| **Heading size** | How large the heading is. Options: **Small**, **Medium** (default), **Large**. |
| **Heading weight** | How bold the heading is. **Theme default** keeps the weight the chosen font comes with. Options: **Theme default** (default), **Light (300)**, **Normal (400)**, **Medium (500)**, **Semi-bold (600)**, **Bold (700)**. |
| **Heading color** | The color of the heading. It also colors the small scroll hint, so pick a color that stands out clearly from the background. Leave empty to follow the color scheme. |
{: .settings}

#### Subheading style

| Setting | What it changes |
| --- | --- |
| **Subheading size** | How large the subheading is. Options: **Small**, **Medium** (default), **Large**. |
| **Subheading weight** | How bold the subheading is. **Theme default** keeps the weight the chosen font comes with. Options: **Theme default** (default), **Light (300)**, **Normal (400)**, **Medium (500)**, **Semi-bold (600)**, **Bold (700)**. |
| **Subheading color** | The color of the subheading. Leave empty to follow the color scheme. |
{: .settings}

#### Motion

| Setting | What it changes |
| --- | --- |
| **Scroll animation** | Visitors who reduce motion on their device see a plain stacked list of cards instead of the sideways movement. **Always animate** shows the movement to everyone. Options: **Off for visitors who reduce motion** (default), **Always animate**. |
{: .settings}

#### Layout

| Setting | What it changes |
| --- | --- |
| **Card width** | How much of the screen one card fills on desktop. Wider means fewer cards visible at once. Range 34 to 70 vw, default 54 vw. |
| **Scroll distance per card** | How far the shopper scrolls to move past one card. Higher is slower and more cinematic, but pushes the rest of the page further down. Range 60 to 200 vh, default 120 vh. |
| **Top padding** | The space above the section. Range 0 to 100 px, default 28 px. |
| **Bottom padding** | The space below the section. Range 0 to 100 px, default 28 px. |
{: .settings}

#### Colors

| Setting | What it changes |
| --- | --- |
| **Color scheme** | The section background and the intro text. Card text stays light because it sits on a photograph. |
| **Transparent background** | Lets the page background show through this section. When it is off, the section follows **Make all sections transparent** in Theme settings. Off by default. |
{: .settings}

### Blocks

Each card is a block. Add one per card. You can add up to 6.

#### Card block

One picture card.

##### Content

| Setting | What it changes |
| --- | --- |
| **Tagline** | A small label above the card heading. |
| **Heading** | The card's name. |
| **Description** | One sentence about it. |
| **Link** | Where the card's arrow goes. |
| **Link accessibility label** | Describes where the arrow goes for screen readers. Defaults to the card heading. |
{: .settings}

##### Heading style

| Setting | What it changes |
| --- | --- |
| **Heading size** | How large the heading is. Options: **Small**, **Medium** (default), **Large**. |
| **Heading weight** | How bold the heading is. **Theme default** keeps the weight the chosen font comes with. Options: **Theme default** (default), **Light (300)**, **Normal (400)**, **Medium (500)**, **Semi-bold (600)**, **Bold (700)**. |
| **Heading color** | The color of the card heading. Leave empty to use the card's default light text. |
{: .settings}

##### Description styling

| Setting | What it changes |
| --- | --- |
| **Description size** | How large the description is. Options: **Small**, **Medium** (default), **Large**. |
| **Description weight** | How bold the description is. **Theme default** keeps the weight the chosen font comes with. Options: **Theme default** (default), **Light (300)**, **Normal (400)**, **Medium (500)**, **Semi-bold (600)**, **Bold (700)**. |
| **Description color** | The color of the description. Leave empty to use the card's default light text. |
{: .settings}

##### Tagline styling

| Setting | What it changes |
| --- | --- |
| **Tagline color** | The color of the tagline. Leave empty to use the card's default light text. |
{: .settings}

##### Image

| Setting | What it changes |
| --- | --- |
| **Card image** | Fills the whole card. 1600 × 2000 px recommended. Leave empty to show a placeholder. |
| **Image fit** | Fill crops the image to cover the card. Show the complete image may leave gaps. Options: **Fill the chosen size (crops)** (default), **Show the complete image**. |
| **Image zoom** | How far the picture is zoomed in. 100% shows it at the normal size. Range 100 to 160%, default 100%. |
| **Horizontal position** | Which part of the picture stays in view when it is cropped sideways. 0% shows the left, 100% the right. Range 0 to 100%, default 50%. |
| **Vertical position** | Which part of the picture stays in view when it is cropped top and bottom. 0% shows the top, 100% the bottom. Range 0 to 100%, default 50%. |
{: .settings}

### Tips and limits

> **Replace the sample words.** A new card starts with sample text such as "Short label" and "Name the range". Overwrite them before you publish.

> **Use tall pictures.** A card picture of 1600 × 2000 px fills the card well. Use **Horizontal position** and **Vertical position** to choose what stays in view.

> **Keep the heading readable.** The cards pass behind the heading as they slide. Pick pictures and a **Heading color** that keep the heading easy to read as they pass.

> **Reduced motion shows a list.** Visitors who reduce motion on their device see the cards one under another instead of sliding sideways.

> **Scroll distance pushes the page down.** A higher **Scroll distance per card** feels slower, but pushes the rest of the page further down.

## Stacking cards

Large product cards that stack on top of each other as the shopper scrolls, under a heading that stays in place.
{: .lede}

- Add section › Stacking cards
- 1 block type
- Home page only
{: .facts}

### Looks

{% include looks.html folder="sections" file="stacking-cards" name="Stacking cards" looks="Stacking cards" plain="true" about="A heading and intro above a large card with a picture on the left and a product name, price and description on the right." %}

### Where to find it

1. In your Shopify admin, go to *Online Store > Themes* and select *Edit theme* next to this theme.
2. Open the home page in the editor.
3. Select *Add section* and choose **Stacking cards**.

This section is for the home page only. It is not offered on other pages.

### Settings

#### Intro

| Setting | What it changes |
| --- | --- |
| **Tagline** | Small label above the heading. Leave empty to hide. |
| **Heading** | The section heading. It appears one line at a time; if you use bold or italics in it, it fades in as a whole instead. |
| **Intro text** | Sits to the right of the heading on desktop. Leave empty to hide. |
{: .settings}

#### Heading style

| Setting | What it changes |
| --- | --- |
| **Heading size** | How large the heading is. Options: **Small**, **Medium** (default), **Large**. |
| **Heading weight** | How bold the heading is. **Theme default** keeps the weight the chosen font comes with. Options: **Theme default** (default), **Light (300)**, **Normal (400)**, **Medium (500)**, **Semi-bold (600)**, **Bold (700)**. |
| **Heading letter spacing** | The space between the letters of the heading. 0 keeps the design's own spacing. Range -4 to 8 px, default 0 px. |
| **Intro alignment** | Whether the intro lines up on the left, in the center or on the right. Options: **Left** (default), **Center**, **Right**. |
| **Heading color** | The color of the heading. Leave empty to follow the color scheme. |
{: .settings}

#### Cards

| Setting | What it changes |
| --- | --- |
| **Card width** | How far the cards stretch across the screen. The heading above them follows the same width. Only changes anything on a screen wide enough to reach it. Options: **Page width**, **Wide** (default), **Extra wide**, **Full width**. |
| **Card image height** | Applies at 1100px and below, where the cards are a plain list. On desktop the card fills the screen under the heading instead. Range 240 to 640 px, default 480 px. |
| **Gap below the heading** | Space between the pinned heading and the card parked under it. Each card after the first parks a little lower, which is what fans the stack out. Desktop only. Range 0 to 80 px, default 24 px. |
| **Show progress dashes** | A short dash per card down the left of the screen, marking the one in front. Desktop only, and only while the cards are stacking. On by default. |
{: .settings}

#### Card colors

| Setting | What it changes |
| --- | --- |
| **Card background** | The background color of every card. |
| **Card text** | The text color on every card. |
| **Button background** | The fill color of the card buttons. |
| **Button label color** | The text color on the card buttons. |
{: .settings}

#### Featured card colors

| Setting | What it changes |
| --- | --- |
| **Featured card background** | The background color of the featured card. |
| **Featured card text** | The text color on the featured card. |
| **Featured button background** | The fill color of the button on the featured card. |
| **Featured button label color** | The text color of the button on the featured card. |
{: .settings}

#### Card text style

| Setting | What it changes |
| --- | --- |
| **Category label size** | Makes the category label smaller or larger. 1× is the normal size, which stays responsive. Range 0.6 to 2×, default 1×. |
| **Category label color** | The color of the category label. Leave empty to follow the card colors above. |
| **Price size** | Makes the price smaller or larger. 1× is the normal size, which stays responsive. Range 0.6 to 2×, default 1×. |
| **Price color** | The color of the price. Leave empty to follow the card colors above. |
| **Heading size** | Makes the heading smaller or larger. 1× is the normal size, which stays responsive. Range 0.6 to 2×, default 1×. |
| **Heading color** | The color of the heading. Leave empty to follow the card colors above. |
| **Description size** | Makes the description smaller or larger. 1× is the normal size, which stays responsive. Range 0.6 to 2×, default 1×. |
| **Description color** | The color of the description. Leave empty to follow the card colors above. |
| **Number badge size** | Makes the number badge smaller or larger. 1× is the normal size, which stays responsive. Range 0.6 to 2×, default 1×. |
| **Number badge color** | The color of the number badge. Leave empty for white, or on a featured card for that card's button label color. |
| **Link text size** | Makes the link text smaller or larger. 1× is the normal size, which stays responsive. Range 0.6 to 2×, default 1×. |
| **Link text color** | The color of the link text. Covers both link styles. Leave empty to follow the card text color, or on the button style that card's button label color. |
{: .settings}

#### Colors

| Setting | What it changes |
| --- | --- |
| **Color scheme** | The band behind the cards, and the intro text on it. |
| **Transparent background** | Lets the page background show through this section. When it is off, the section follows **Make all sections transparent** in Theme settings. Off by default. |
| **Scroll animation** | Visitors who reduce motion on their device see the cards without the entrance reveals, the picture drift and the fading of covered cards. The stacking itself always runs, because it follows their own scrolling. **Always animate** shows all of it to everyone. Options: **Off for visitors who reduce motion** (default), **Always animate**. |
{: .settings}

#### Padding

| Setting | What it changes |
| --- | --- |
| **Top padding** | The space above the section. Range 0 to 100 px, default 80 px. |
| **Bottom padding** | The space below the section. Range 0 to 100 px, default 80 px. |
{: .settings}

### Blocks

Each card is a block. Add one per card. You can add up to 6.

#### Card block

One card. Pick a product to fill it automatically, or type your own words and picture.

##### Product

| Setting | What it changes |
| --- | --- |
| **Product** | The product this card shows. |
| **Use the product's own details** | On: the card shows that product's photo, name, price and description, and its link goes straight to the product page. Off: the card uses whatever you type below. Does nothing until you pick a product above. On by default. |
{: .settings}

##### Content

| Setting | What it changes |
| --- | --- |
| **Category label** | A small label at the top of the card. |
| **Price** | The price shown on the card. It is free text, so write it however you price it. |
| **Heading** | The product's name. |
| **Description** | Two or three lines about it. |
| **Number badge** | Sits on the image. Leave empty to number the cards automatically. |
{: .settings}

##### Link

| Setting | What it changes |
| --- | --- |
| **Link text** | Shows only when the card has a link. Leave empty to hide the link. |
| **Link** | Where the link goes. A card built from a product ignores it and always links to its own product page. |
| **Link style** | Whether the link under the description is a plain text link or a button. Options: **Text link** (default), **Button**. |
{: .settings}

##### Appearance

| Setting | What it changes |
| --- | --- |
| **Feature this card** | Switches the card to the featured colors and accent badge. Usually the last card. Off by default. |
{: .settings}

##### Image

| Setting | What it changes |
| --- | --- |
| **Card image** | The card picture. 1600 × 1000 px is recommended. A card built from a product shows the product's own photo instead. |
| **Image horizontal position** | Which part of the picture stays in view when it is cropped sideways. 0% shows the left, 100% the right. Range 0 to 100%, default 50%. |
| **Image vertical position** | Which part of the picture stays in view when it is cropped top and bottom. 0% shows the top, 100% the bottom. Range 0 to 100%, default 50%. |
{: .settings}

### Tips and limits

> **Phones and tablets get a list.** On screens up to 1100 px wide the cards are a plain list, one after another, and **Card image height** sets how tall each picture is.

> **Fill a card from a product.** Pick a **Product** and leave **Use the product's own details** on to show its photo, name, price and description, with a link straight to the product page.

> **Feature one card.** **Feature this card** switches a card to the featured colors and an accent badge. It is usually the last card.

> **A link needs words and an address.** The link or button under a card shows only when it has both **Link text** and a **Link**.

## Story rows

Rows that each pair a picture with words: a caption, a heading, a short text and an optional button.
{: .lede}

- Add section › Story rows
- 3 looks
- 1 block type
- Home page only
{: .facts}

### Looks

{% include looks.html folder="sections" file="story-rows" name="Story rows" looks="Picture beside the words,Picture holds while the words scroll,Numbered chapters" about="Pictures and words side by side, swapping sides row by row.|One picture that holds in place while the words scroll past beside it.|Large numbered chapters, each with a caption, a heading, a short text and a link beside its picture." %}

The three looks are the three **Layout** options.

### Where to find it

1. In your Shopify admin, go to *Online Store > Themes* and select *Edit theme* next to this theme.
2. Open the home page in the editor.
3. Select *Add section* and choose **Story rows**.

This section is for the home page only. It is not offered on other pages.

### Settings

#### Layout

| Setting | What it changes |
| --- | --- |
| **Layout** | How each row is arranged. The rest of the settings follow whichever you pick. Options: **Picture beside the words**, **Picture holds while the words scroll**, **Numbered chapters** (default). |
| **Picture position** | Alternating swaps sides row by row. Below 1101px every row stacks with the picture on top. Options: **Alternate, starting on the left** (default), **Alternate, starting on the right**, **Always on the left**, **Always on the right**. Shows only when **Layout** is not **Numbered chapters**. |
| **Picture height** | How tall the pictures are. **Automatic** keeps the shape of the picture you uploaded. Options: **Automatic** (default), **Small**, **Medium**, **Large**. Shows only when **Layout** is not **Picture holds while the words scroll**. |
| **Picture width** | How much of the row the picture takes. The words fill what is left. Options: **Small**, **Medium** (default), **Large**. Shows only when **Layout** is not **Numbered chapters**. |
| **Picture corners** | Rounds the picture, its border and its shadow together. Theme default follows Theme settings. Options: **Theme default**, **Square**, **Slightly rounded**, **Rounded** (default), **Extra rounded**. |
| **Words sit** | Where the words line up against the picture beside them. Options: **Top**, **Middle** (default), **Bottom**. Shows only when **Layout** is **Picture beside the words**. |
| **Text alignment** | How the words line up on computers and tablets: left, center or right. Options: **Left** (default), **Center**, **Right**. |
| **Text alignment on a phone** | How the words line up on phones. Options: **Left** (default), **Center**, **Right**. |
{: .settings}

#### Typography

| Setting | What it changes |
| --- | --- |
| **Heading size** | How large the heading is. Options: **Small**, **Medium** (default), **Large**, **Extra large**, **Huge**. |
| **Text style** | Whether the row text uses the normal body style or the larger subheading style. Options: **Normal text** (default), **Subheading**. |
| **Button style** | Whether the row buttons look like primary or secondary buttons. Options: **Primary**, **Secondary** (default). |
{: .settings}

#### Colors

| Setting | What it changes |
| --- | --- |
| **Section colors** | The color scheme behind the whole section. |
| **Row colors** | The color scheme of the panel behind the words. Set it to the same scheme as **Section colors** and the panel disappears. |
| **Transparent background** | Lets the page background show through this section. When it is off, the section follows **Make all sections transparent** in Theme settings. Off by default. |
{: .settings}

#### Scroll animation

| Setting | What it changes |
| --- | --- |
| **Row entrance** | How each row arrives as it scrolls into view. **Split - each half from its own side** brings the picture in from its own side and the words from the other, so alternating rows mirror each other. The others move the whole row at once. Default: **Split - each half from its own side**. |
| **Delay between picture and words** | Whichever half sits on the left arrives first. Zero brings both in together. Each row is timed on its own. Range 0 to 400 ms, default 100 ms. Shows only when **Row entrance** is not **None**. |
| **Duration** | How long each row takes to arrive. Range 0.2 to 2 s, default 0.6 s. Shows only when **Row entrance** is not **None**. |
| **Movement curve** | The feel of the arrival, from smooth to springy. Options: **Smooth** (default), **Fast, then settle**, **Gentle**, **Overshoot**, **Even**. Shows only when **Row entrance** is not **None**. |
| **Motion** | Whether the movement plays for visitors whose device is set to reduce motion. They normally see the finished layout without movement; **Always animate** plays it for everyone, including you if reduce motion is on for your own device. Options: **Off for visitors who reduce motion** (default), **Always animate**. |
{: .settings}

#### Fabric ripple

| Setting | What it changes |
| --- | --- |
| **Ripple the pictures** | Moves the pictures like cloth in a breeze. Off by default. |
| **Fastened along** | The edge the cloth hangs from. It stays still there and swings most at the opposite edge. Nothing lets the whole sheet float, which reads more like liquid than cloth. Options: **Top edge** (default), **Bottom edge**, **Left edge**, **Right edge**, **Nothing - it floats free**. Shows only when **Ripple the pictures** is on. |
| **Wave strength** | How deep the folds are, and how much light and shadow they catch. Range 0 to 100%, default 45%. Shows only when **Ripple the pictures** is on. |
| **Fold size** | Higher means fewer, broader folds. Lower means tighter crinkles. Range 1 to 10, default 5. Shows only when **Ripple the pictures** is on. |
| **Speed** | How fast the cloth moves. 1× is the normal speed. Range 0.2 to 2×, default 1×. Shows only when **Ripple the pictures** is on. |
| **Cursor ripple** | How hard the cursor pushes the cloth. Zero leaves only the breeze. Range 0 to 100%, default 60%. Shows only when **Ripple the pictures** is on. |
{: .settings}

#### Picture border and shadow

| Setting | What it changes |
| --- | --- |
| **Border** | The thickness of the border. 0 means no border. Its color comes from the color scheme. Range 0 to 8 px, default 0 px. |
| **Elevation** | How strongly a shadow lifts it off the page. 0 means no shadow. Range 0 to 100%, default 0%. |
{: .settings}

#### Button border and shadow

Shows only when **Layout** is not **Numbered chapters**.

| Setting | What it changes |
| --- | --- |
| **Border** | The thickness of the border. 0 means no border. Its color comes from the color scheme. Range 0 to 8 px, default 0 px. |
| **Corner rounding** | How round the corners are. 0 gives square corners. Range 0 to 40 px, default 0 px. |
| **Elevation** | How strongly a shadow lifts it off the page. 0 means no shadow. Range 0 to 100%, default 0%. |
{: .settings}

#### Padding

| Setting | What it changes |
| --- | --- |
| **Space above** | The space above the section. Range 0 to 100 px, default 36 px. |
| **Space below** | The space below the section. Range 0 to 100 px, default 36 px. |
{: .settings}

### Blocks

Each row is a block. Add one per row.

#### Row block

One row: a picture, a caption, a heading, a text and an optional button.

##### At the top

| Setting | What it changes |
| --- | --- |
| **Image** | The row's picture. |
| **Caption** | A small label above the heading, such as a chapter name. |
| **Heading** | The row's heading. |
| **Text** | The row's words. |
| **Button label** | The words on the button. The button shows only when it also has a link. |
| **Button link** | Where the button goes. |
{: .settings}

##### Caption style

| Setting | What it changes |
| --- | --- |
| **Font weight** | How bold the caption is. Options: **Theme default** (default), **Light (300)**, **Normal (400)**, **Medium (500)**, **Semi-bold (600)**, **Bold (700)**. |
| **Font size** | Makes the caption smaller or larger. 1× is the normal size, which stays responsive. Range 0.6 to 2×, default 1×. |
| **Letter spacing** | The space between the letters of the caption. Any value other than 0 replaces the spacing built into the caption style. Range -2 to 6 px, default 0 px. |
| **Alignment** | How the caption lines up. **Theme default** follows the section's **Text alignment**. Options: **Theme default** (default), **Left**, **Center**, **Right**. |
| **Text color** | The color of the caption. Leave empty to follow the color scheme. |
{: .settings}

##### Heading style

| Setting | What it changes |
| --- | --- |
| **Font weight** | How bold the heading is. Options: **Theme default** (default), **Light (300)**, **Normal (400)**, **Medium (500)**, **Semi-bold (600)**, **Bold (700)**. |
| **Letter spacing** | The space between the letters of the heading. Range -2 to 6 px, default 0 px. |
| **Alignment** | How the heading lines up. **Theme default** follows the section's **Text alignment**. Options: **Theme default** (default), **Left**, **Center**, **Right**. |
| **Text color** | The color of the heading. Leave empty to follow the color scheme. |
{: .settings}

##### Text style

| Setting | What it changes |
| --- | --- |
| **Font weight** | How bold the row text is. Options: **Theme default** (default), **Light (300)**, **Normal (400)**, **Medium (500)**, **Semi-bold (600)**, **Bold (700)**. |
| **Font size** | Makes the row text smaller or larger. 1× is the normal size, which stays responsive. Range 0.6 to 2×, default 1×. |
| **Letter spacing** | The space between the letters of the row text. Range -2 to 6 px, default 0 px. |
| **Alignment** | How the row text lines up. **Theme default** follows the section's **Text alignment**. Options: **Theme default** (default), **Left**, **Center**, **Right**. |
| **Text color** | The color of the row text. Leave empty to follow the color scheme. |
{: .settings}

##### Scroll animation

| Setting | What it changes |
| --- | --- |
| **Row entrance** | Overrides the section's **Row entrance** for this row only. The timing stays shared. Options: **Same as the section** (default), **None**, **Split - each half from its own side**, **Fade only — no movement**, **Rise up**, **Drop down**, **Slide in from the left**, **Slide in from the right**, **Zoom in**, **Zoom out**. |
{: .settings}

##### Fabric ripple

| Setting | What it changes |
| --- | --- |
| **Fabric ripple** | Choose **Off** to turn the section's ripple off for this row only. Strength and speed are set once in the section settings. Options: **Same as the section** (default), **Off**. |
{: .settings}

### Tips and limits

> **Some settings depend on the layout.** **Picture position** is hidden in **Numbered chapters**, where the picture always sits beside its words, and **Words sit** shows only in **Picture beside the words**. The button style controls are hidden in **Numbered chapters**, which draws the button as an underlined link.

> **Rows stack on smaller screens.** Side-by-side rows stack below 1101 px wide, with the picture on top and the words under it.

> **A button needs both parts.** A row button shows only when it has a **Button label** and a **Button link**.

> **Override one row.** Each **Row** block can change its own **Row entrance** or turn the ripple off, while the timing and strength stay shared across the section.

## Expanding panels

A row of tall panels. The shopper opens one at a time, and the open panel grows to show its picture and description.
{: .lede}

- Add section › Expanding panels
- 1 block type
- Home page only
{: .facts}

### Looks

{% include looks.html folder="sections" file="expanding-panels" name="Expanding panels" looks="Expanding panels" plain="true" about="Dark tall panels in a row, one open and wide with its picture, a short description and a button, the others narrow with their titles." %}

### Where to find it

1. In your Shopify admin, go to *Online Store > Themes* and select *Edit theme* next to this theme.
2. Open the home page in the editor.
3. Select *Add section* and choose **Expanding panels**.

This section is for the home page only. It is not offered on other pages.

### Settings

#### Layout

| Setting | What it changes |
| --- | --- |
| **Full-width panels** | The panels span the whole screen edge to edge instead of sitting in a centered frame. The dots move onto the right edge. On by default. |
| **Open panel width** | How much of the frame the open panel takes. The rest share what is left. Range 30 to 70%, default 40%. |
{: .settings}

#### Colors

| Setting | What it changes |
| --- | --- |
| **Color scheme** | The color of the band above the panels. The panels themselves are always dark, so a light scheme leaves that band a different color from them. |
| **Transparent background** | Lets the page background show through this section. When it is off, the section follows **Make all sections transparent** in Theme settings. Off by default. |
| **Show drifting particles** | A faint dust layer behind the frame. Off for visitors who ask for reduced motion. On by default. |
{: .settings}

#### Motion

| Setting | What it changes |
| --- | --- |
| **Animation** | Whether the movement plays for visitors whose device is set to reduce motion. They normally see the finished layout without movement; **Always animate** plays it for everyone, including you if reduce motion is on for your own device. Options: **Off for visitors who reduce motion** (default), **Always animate**. |
| **Move to the next panel every** | 0 turns auto-advance off. Always off for visitors who ask for reduced motion. Range 0 to 9 s, default 3.5 s. |
{: .settings}

#### Padding

| Setting | What it changes |
| --- | --- |
| **Top padding** | The space above the section. Range 0 to 100 px, default 0 px. |
| **Bottom padding** | The space below the section. Range 0 to 100 px, default 0 px. |
{: .settings}

### Blocks

Each panel is a block. Add one per panel. You can add up to 6.

#### Panel block

One panel in the row.

##### Content

| Setting | What it changes |
| --- | --- |
| **Badge** | The small pill above the heading. Leave empty to number the panel automatically — 01, 02, 03. |
| **Heading** | The panel's title. Press Enter to break it across lines. |
| **Description** | Sits along the bottom of the panel and fades in when the panel opens. Press Enter to break across lines. Leave empty to hide. |
| **Button label** | The words on the button inside the open panel. The button shows only when the panel has a link. |
| **Link** | Where the button goes. Leave empty for a panel that only reads. |
{: .settings}

##### Heading style

| Setting | What it changes |
| --- | --- |
| **Size** | Makes the heading smaller or larger. 1× is the designed size, which already scales with the screen. Range 0.6 to 5×, default 1×. |
| **Weight** | How bold the heading is. Leave on **Theme default** to keep the weight the chosen font comes with. Options: **Theme default** (default), **Light (300)**, **Normal (400)**, **Medium (500)**, **Semi-bold (600)**, **Bold (700)**. |
| **Letter spacing** | The space between the letters of the heading. Range -1 to 6 px, default 0 px. |
| **Alignment** | How the heading lines up in the panel. Options: **Left** (default), **Center**, **Right**. |
| **Color** | The color of the heading. Leave empty to keep the designed color. |
{: .settings}

##### Description style

| Setting | What it changes |
| --- | --- |
| **Size** | Makes the description smaller or larger. 1× is the designed size, which already scales with the screen. Range 0.6 to 5×, default 1×. |
| **Weight** | How bold the description is. Leave on **Theme default** to keep the weight the chosen font comes with. Options: **Theme default** (default), **Light (300)**, **Normal (400)**, **Medium (500)**, **Semi-bold (600)**, **Bold (700)**. |
| **Letter spacing** | The space between the letters of the description. Range -1 to 6 px, default 0 px. |
| **Alignment** | How the description lines up in the panel. Options: **Left** (default), **Center**, **Right**. |
| **Color** | The color of the description. Leave empty to keep the designed color. |
{: .settings}

##### Image

| Setting | What it changes |
| --- | --- |
| **Image** | The panel's picture. |
| **Image horizontal position** | Which part of the picture stays in view when it is cropped sideways. 0% shows the left, 100% the right. Range 0 to 100%, default 50%. |
| **Image vertical position** | Which part of the picture stays in view when it is cropped top and bottom. 0% shows the top, 100% the bottom. Range 0 to 100%, default 100%. |
{: .settings}

##### Background

| Setting | What it changes |
| --- | --- |
| **Background color** | The color of the background. Leave empty to keep the designed backdrop. |
| **Background gradient** | A gradient behind the panel. It sits on top of the background color. |
| **Background image** | A picture that fills the whole panel. It sits on top of the color and the gradient. |
| **Background image darkness** | Darkens the background image so the heading stays readable. Ignored when no background image is set. Range 0 to 100%, default 40%. |
{: .settings}

### Tips and limits

> **Always dark, on purpose.** The panels keep their dark look in light and dark mode. **Color scheme** only changes the band above them.

> **Phones and tablets stack the panels.** The row of panels is for computers. On tablets and phones the panels sit one under another.

> **Tall pictures work best.** Use a picture around 900 × 1400 px, taller than it is wide.

> **Auto-advance.** Set **Move to the next panel every** to 0 to turn it off. It pauses while the pointer or keyboard focus is inside the panels, and visitors who reduce motion never get auto-advance.

## Video

A video from your files, YouTube or Vimeo, introduced with a heading and text, that opens up as the shopper scrolls to it.
{: .lede}

- Add section › Video
- 3 looks
- No blocks
- Home page only
{: .facts}

### Looks

{% include looks.html folder="sections" file="video" name="Video" looks="Aperture,Screening,Mosaic" about="The video waits behind a narrow window that opens to full size as the page scrolls, with the heading above it.|A cinema screen that stands up as it arrives, with a glowing wall behind it and the heading above.|The cover picture assembled from tiles, with the heading and text beside it." %}

### Where to find it

1. In your Shopify admin, go to *Online Store > Themes* and select *Edit theme* next to this theme.
2. Open the home page in the editor.
3. Select *Add section* and choose **Video**.

This section is for the home page only. It is not offered on other pages.

### Settings

#### Layout

| Setting | What it changes |
| --- | --- |
| **Look** | **Aperture**: the video waits behind a narrow window that opens to full size as shoppers scroll to it. **Screening**: a cinema screen that stands up as it arrives, glowing on the wall behind it. **Mosaic**: the cover picture assembles from tiles as shoppers scroll, and breaks apart to reveal the video when played; the text sits beside it on computers. Default: **Aperture**. |
| **Width** | How wide the video is: within the page margins, or edge to edge. Options: **Page width** (default), **Full width**. Shows only when **Look** is not **Mosaic**. |
| **Video shape** | Adapt uses an uploaded video's own shape; YouTube and Vimeo videos use 16:9. Other shapes crop the cover picture to fit. Options: **Adapt to the video** (default), **16:9**, **4:3**, **Square**, **Portrait 9:16**. |
{: .settings}

#### Video

| Setting | What it changes |
| --- | --- |
| **Source** | Where the video comes from: a file you upload, or a YouTube or Vimeo link. Options: **Upload**, **YouTube or Vimeo link** (default). |
| **Video** | The video file to play when **Source** is **Upload**. Captions must be part of the video file itself. Shows only when **Source** is **Upload**. |
| **Video link** | The address of the YouTube or Vimeo video. Shows only when **Source** is **YouTube or Vimeo link**. |
| **Cover picture** | Shown until the video plays. Without one, an uploaded video shows its own first frame and a YouTube or Vimeo video shows a placeholder picture. 16:9 aspect ratio recommended, or the video shape chosen above. |
| **Start** | Whether the video waits for the play button, or loops as a silent preview while it is on screen, with a pause button. Options: **When the play button is pressed** (default), **As a silent preview**. Shows only when **Source** is **Upload**. |
| **Dim the page while playing** | Shoppers bring the page back by pausing, clicking outside the video, moving on with the keyboard or scrolling away. Escape works too, except while a YouTube or Vimeo player has the keyboard. On by default. Shows only when **Look** is **Screening**. |
{: .settings}

#### Content

| Setting | What it changes |
| --- | --- |
| **Subheading** | A small line above the heading. |
| **Heading** | The heading above or beside the video. |
| **Text** | A short paragraph under the heading. |
| **Button label** | The words on the button. The button shows only when it also has a link. |
| **Button link** | Where the button goes. |
{: .settings}

#### Style

| Setting | What it changes |
| --- | --- |
| **Color scheme** | Which of your color schemes the section uses for its background and text. You make schemes in Theme settings, under **Colors**. |
| **Scroll motion** | Whether the movement follows your scrolling in both directions, or plays once when the section arrives. Options: **Follow the scroll both ways** (default), **Play once on arrival**. |
| **Animation** | Whether the movement plays for visitors whose device is set to reduce motion. They normally see the finished layout without movement; **Always animate** plays it for everyone, including you if reduce motion is on for your own device. Options: **Off for visitors who reduce motion** (default), **Always animate**. |
{: .settings}

#### Padding

| Setting | What it changes |
| --- | --- |
| **Top padding** | The space above the section. Range 0 to 120 px, default 80 px. |
| **Bottom padding** | The space below the section. Range 0 to 120 px, default 80 px. |
{: .settings}

### Blocks

This section has no blocks. The video, heading and text are all settings.

### Tips and limits

> **Captions come with the video.** For an uploaded video, captions must be part of the video file. For a YouTube or Vimeo link, they come from YouTube or Vimeo.

> **Links load only when played.** A YouTube or Vimeo video is not loaded until a shopper presses play, so it does not slow the page down. Starting one video pauses any other on the page.

> **Silent preview.** **As a silent preview** loops an uploaded video without sound while it is on screen, with a pause button and a button to play it with sound.

> **Screening dims the page.** With **Dim the page while playing** on, the rest of the page goes dark while the video plays. It comes back when the video pauses or ends, or when you click outside it, press Escape or scroll away.

> **Cover picture.** Without a **Cover picture**, an uploaded video shows its own first frame and a YouTube or Vimeo link shows a placeholder, so add a cover for a better first impression.

## Image gallery

A gallery of pictures that glide, unroll or swipe as the shopper scrolls, with an optional full-screen view.
{: .lede}

- Add section › Image gallery
- 3 looks
- 1 block type
- Home page only
{: .facts}

### Looks

{% include looks.html folder="sections" file="image-gallery" name="Image gallery" looks="Drift,Reveal,Reel" about="Columns of pictures at different heights that glide at different speeds as the page scrolls.|A grid led by one large picture, each picture unrolling like a blind as it arrives.|One long row of large pictures that swipes sideways, with arrows on computers." %}

### Where to find it

1. In your Shopify admin, go to *Online Store > Themes* and select *Edit theme* next to this theme.
2. Open the home page in the editor.
3. Select *Add section* and choose **Image gallery**.

This section is for the home page only. It is not offered on other pages.

### Settings

#### Layout

| Setting | What it changes |
| --- | --- |
| **Look** | **Drift**: the columns glide at different speeds as shoppers scroll, so the pictures slide past each other. **Reveal**: a grid led by one large picture; each picture unrolls like a blind as it arrives. **Reel**: one long row that glides in, each picture turning to face the shopper, then swipes or moves with arrows. Default: **Reveal**. |
| **Columns on computers** | How many columns sit side by side on a computer. Tablets and phones show fewer. Range 2 to 5, default 4. Shows only when **Look** is not **Reel**. |
| **Picture shape** | The shape the pictures are shown in. **Adapt to picture** (the **Reel** look only) keeps each picture's own shape. Options: **Portrait** (default), **Square**, **Landscape**. Shows only when **Look** is not **Reel**. |
| **Picture shape** | The shape the pictures are shown in. **Adapt to picture** (the **Reel** look only) keeps each picture's own shape. Options: **Adapt to picture** (default), **Portrait**, **Square**, **Landscape**. Shows only when **Look** is **Reel**. |
| **Show captions** | Shows each picture's caption under it. On by default. |
| **Open pictures larger when pressed** | Shows the picture full screen, with arrows to move through the gallery. On by default. |
{: .settings}

#### Content

| Setting | What it changes |
| --- | --- |
| **Heading** | The heading above the gallery. |
| **Text** | A line of text under the heading. |
{: .settings}

#### Style

| Setting | What it changes |
| --- | --- |
| **Color scheme** | Which of your color schemes the section uses for its background and text. You make schemes in Theme settings, under **Colors**. |
| **Scroll motion** | Whether the movement follows your scrolling in both directions, or plays once when the section arrives. Options: **Follow the scroll both ways** (default), **Play once on arrival**. Shows only when **Look** is not **Drift**. |
| **Animation** | Whether the movement plays for visitors whose device is set to reduce motion. They normally see the finished layout without movement; **Always animate** plays it for everyone, including you if reduce motion is on for your own device. Options: **Off for visitors who reduce motion** (default), **Always animate**. |
{: .settings}

#### Padding

| Setting | What it changes |
| --- | --- |
| **Top padding** | The space above the section. Range 0 to 120 px, default 64 px. |
| **Bottom padding** | The space below the section. Range 0 to 120 px, default 64 px. |
{: .settings}

### Blocks

Each picture is a block. Add one per picture. You can add up to 24.

#### Picture block

One picture in the gallery.

| Setting | What it changes |
| --- | --- |
| **Picture** | The picture. |
| **Caption** | Shown under the picture and in the larger view. |
| **Link** | Pressing the picture opens this link instead of the larger view. |
{: .settings}

### Tips and limits

> **Pictures open larger.** With **Open pictures larger when pressed** on, pressing a picture shows it full screen with arrows to move through the gallery. Escape closes it. A picture that has a link opens the link instead.

> **Mixed shapes.** In **Reel**, choose **Adapt to picture** under **Picture shape** to keep each picture's own shape.

> **Arrows on bigger screens.** **Reel** shows arrow buttons on screens wider than 500 px; on phones you swipe.

> **Reduced motion.** Visitors who reduce motion on their device see the finished layout without movement. **Always animate** shows the movement to everyone.

## Logo list

The logos of brands you stock, press that featured you, or partners, shown in rows that slide, tiles that flip or a sweeping light.
{: .lede}

- Add section › Logo list
- 3 looks
- 1 block type
- Home page only
{: .facts}

### Looks

{% include looks.html folder="sections" file="logo-list" name="Logo list" looks="Drift,Flipboard,Spotlight" about="Two rows of logos that slide sideways as the page scrolls.|A grid of logo tiles that flip into place as the section arrives.|Logos lit by a soft light that sweeps across them." %}

### Where to find it

1. In your Shopify admin, go to *Online Store > Themes* and select *Edit theme* next to this theme.
2. Open the home page in the editor.
3. Select *Add section* and choose **Logo list**.

This section is for the home page only. It is not offered on other pages.

### Settings

#### Layout

| Setting | What it changes |
| --- | --- |
| **Look** | **Drift**: logos run in rows that slide sideways as shoppers scroll. **Flipboard**: a grid of tiles that flip into place as the section arrives. **Spotlight**: a soft light sweeps across the logos as the section arrives. Default: **Drift**. |
| **Rows** | How many rows of logos slide across. Three logos or fewer always use one row. Options: **One**, **Two** (default). Shows only when **Look** is **Drift**. |
| **Columns on computers** | The most logos in a row on a computer. Rows are kept even, so six logos at four columns show as two rows of three. Tablets and phones show fewer. Range 3 to 6, default 4. Shows only when **Look** is **Flipboard**. |
| **Logo size** | How large the logo is. Options: **Small**, **Medium** (default), **Large**. |
| **Logo color** | Text color redraws every logo in the color scheme's text color, so dark logos still show on dark backgrounds. It needs logos with a see-through background, such as .png or .svg. Options: **Original** (default), **Text color**. |
{: .settings}

#### Content

| Setting | What it changes |
| --- | --- |
| **Heading** | The heading above the logos. |
| **Text** | A line of text under the heading. |
{: .settings}

#### Style

| Setting | What it changes |
| --- | --- |
| **Color scheme** | Which of your color schemes the section uses for its background and text. You make schemes in Theme settings, under **Colors**. |
| **Scroll motion** | Whether the movement follows your scrolling in both directions, or plays once when the section arrives. Options: **Follow the scroll both ways** (default), **Play once on arrival**. Shows only when **Look** is not **Drift**. |
| **Animation** | Whether the movement plays for visitors whose device is set to reduce motion. They normally see the finished layout without movement; **Always animate** plays it for everyone, including you if reduce motion is on for your own device. Options: **Off for visitors who reduce motion** (default), **Always animate**. |
{: .settings}

#### Padding

| Setting | What it changes |
| --- | --- |
| **Top padding** | The space above the section. Range 0 to 120 px, default 64 px. |
| **Bottom padding** | The space below the section. Range 0 to 120 px, default 64 px. |
{: .settings}

### Blocks

Each logo is a block. Add one per brand. You can add up to 24.

#### Logo block

One brand logo.

| Setting | What it changes |
| --- | --- |
| **Logo** | The logo picture. Any shape works: wide and square logos are sized to look equally large. |
| **Brand name** | The brand's name. Screen readers read it when the logo has no alt text. |
| **Link** | Where the logo goes when pressed. Optional. |
{: .settings}

### Tips and limits

> **Text color needs see-through logos.** **Logo color** set to **Text color** redraws every logo in the scheme's text color. It needs logos with a see-through background, such as .png or .svg files; a .jpg turns into a solid block.

> **Dark logos on dark colors.** If your logos are black and the section is dark, set **Logo color** to **Text color** so they stay visible.

> **Any logo shape works.** Wide and square logos are sized to look equally large.

> **Nothing plays by itself.** The logos move only as you scroll, so there is nothing to pause. Visitors who reduce motion see the finished layout.

## Testimonials

Quotes from your customers, as cards that slide in from the sides or as chat messages beside each customer's photo.
{: .lede}

- Add section › Testimonials
- 2 looks
- 1 block type
- Home page only
{: .facts}

### Looks

{% include looks.html folder="sections" file="testimonials" name="Testimonials" looks="Crossing rows,Chat" about="Quote cards that slide in from the sides, each with stars, the customer's name and the product they bought.|Quotes as chat messages beside each customer's photo, with the name and the product they bought." %}

### Where to find it

1. In your Shopify admin, go to *Online Store > Themes* and select *Edit theme* next to this theme.
2. Open the home page in the editor.
3. Select *Add section* and choose **Testimonials**.

This section is for the home page only. It is not offered on other pages.

### Settings

#### Layout

| Setting | What it changes |
| --- | --- |
| **Look** | **Crossing rows** shows the quotes as cards that slide in from the sides. **Chat** shows them as messages beside each customer's photo. Default: **Crossing rows**. |
{: .settings}

#### Heading

| Setting | What it changes |
| --- | --- |
| **Heading** | The heading above the quotes. Leave empty to hide it. |
| **Text** | A line of text under the heading. |
{: .settings}

#### Motion

| Setting | What it changes |
| --- | --- |
| **Scroll animation** | Whether the movement plays for visitors whose device is set to reduce motion. They normally see the finished layout without movement; **Always animate** plays it for everyone, including you if reduce motion is on for your own device. Options: **Off for visitors who reduce motion** (default), **Always animate**. |
{: .settings}

#### Colors

| Setting | What it changes |
| --- | --- |
| **Section color scheme** | Which of your color schemes the section uses for its background and text. You make schemes in Theme settings, under **Colors**. |
| **Transparent background** | Lets the page background show through this section. When it is off, the section follows **Make all sections transparent** in Theme settings. Off by default. |
{: .settings}

#### Cards

Shows only when **Look** is **Crossing rows**.

| Setting | What it changes |
| --- | --- |
| **Border** | The thickness of the border around each card. 0 means no border. Its color comes from the color scheme. Range 0 to 8 px, default 1 px. |
| **Corner rounding** | How round the corners are. 0 gives square corners. Range 0 to 40 px, default 16 px. |
| **Elevation** | How strongly a shadow lifts it off the page. 0 means no shadow. Range 0 to 100%, default 60%. |
{: .settings}

#### Spacing

| Setting | What it changes |
| --- | --- |
| **Top padding** | The space above the section. Range 0 to 100 px, default 48 px. |
| **Bottom padding** | The space below the section. Range 0 to 100 px, default 48 px. |
{: .settings}

### Blocks

Each quote is a block. Add one per customer quote. You can add up to 10.

#### Quote block

One customer quote.

##### Content

| Setting | What it changes |
| --- | --- |
| **Quote** | The customer's words. |
| **Name** | The customer's name. |
| **Role or location** | A short line after the name, such as a city or a job. |
| **Photo** | Shown in a circle. Without one, the first letter of the name is shown. |
| **Star rating** | The stars shown with the quote. Use the rating this customer actually gave. Options: **No rating** (default), **1 star**, **2 stars**, **3 stars**, **4 stars**, **5 stars**. |
| **Product bought** | The product this customer bought. A link to it shows under the quote. |
{: .settings}

### Tips and limits

> **Use real quotes.** Use only quotes your customers really gave, with the star rating they actually chose. **Star rating** starts on **No rating** for that reason.

> **No photo needed.** A quote without a **Photo** shows the first letter of the name in a circle.

> **Chat has no card settings.** The **Cards** settings (border, rounding and shadow) only apply to **Crossing rows** and are hidden in **Chat**.

> **Movement follows your scroll.** The quotes slide in as you scroll down and back out as you scroll up. Visitors who reduce motion see them still.

## Trust badges

A band of short promises, such as delivery, returns or secure payment, each with an icon and a line of text.
{: .lede}

- Add section › Trust badges
- 1 block type
- Home page only
{: .facts}

### Looks

{% include looks.html folder="sections" file="trust-badges" name="Trust badges" looks="Trust badges" plain="true" about="A row of three badges, each with an icon, a short heading and one line of text underneath." %}

### Where to find it

1. In your Shopify admin, go to *Online Store > Themes* and select *Edit theme* next to this theme.
2. Open the home page in the editor.
3. Select *Add section* and choose **Trust badges**.

This section is for the home page only. It is not offered on other pages.

### Settings

#### Layout

| Setting | What it changes |
| --- | --- |
| **Icon size** | How large the icons are. Range 24 to 100 px, default 48 px. |
{: .settings}

#### Colors

| Setting | What it changes |
| --- | --- |
| **Band color scheme** | The full-width band behind the badges. |
| **Transparent background** | Lets the page background show through this section. When it is off, the section follows **Make all sections transparent** in Theme settings. Off by default. |
| **Icon color** | The color of the icon. Leave empty to follow the band color scheme. |
| **Heading color** | The color of the heading. Leave empty to follow the band color scheme. |
| **Text color** | The color of the text. Leave empty to follow the band color scheme. |
{: .settings}

#### Animation

| Setting | What it changes |
| --- | --- |
| **Animation** | How the badges arrive as they scroll into view. **Fade up, draw the icons, type the headings** also draws each icon and types each heading letter by letter. Visitors who reduce motion see the finished band straight away. Default: **Fade up, draw the icons, type the headings**. Options: **None**, **Fade up**. |
| **Typing speed** | The pause between one heading letter and the next. Higher is slower. Range 20 to 140 ms, default 70 ms. Shows only when **Animation** is **Fade up, draw the icons, type the headings**. |
{: .settings}

#### Padding

| Setting | What it changes |
| --- | --- |
| **Top padding** | The space above the section. Range 0 to 100 px, default 36 px. |
| **Bottom padding** | The space below the section. Range 0 to 100 px, default 36 px. |
{: .settings}

### Blocks

Each badge is a block. Add one per promise. You can add up to 8.

#### Badge block

One promise: an icon, a heading and a line of text.

##### Content

| Setting | What it changes |
| --- | --- |
| **Heading** | The short promise, such as the delivery or returns offer. |
| **Text** | A line of detail under the heading. |
{: .settings}

##### Icon

| Setting | What it changes |
| --- | --- |
| **Icon** | Automatic gives each badge in the row a different icon, so they do not all match on a new theme. Pick one to override it. Options: **Automatic — a different one in each place** (default), **Delivery van**, **Shield**, **Return arrow**, **Padlock**, **Headset**, **Award rosette**, **Clock**, **Gift box**, **Check in a circle**, **No icon**. |
| **Icon image** | Your own artwork, used instead of the icon above. It cannot draw itself when the animation is set to draw. |
| **SVG code** | Paste inline SVG. It replaces both the image and the icon above, and it is the only way to use your own artwork that still draws itself. |
{: .settings}

### Tips and limits

> **Promise only what you deliver.** Say what qualifies and how fast things arrive, in words a shopper can check. Do not claim a promise you cannot keep.

> **Automatic icons.** With **Icon** on **Automatic — a different one in each place**, every badge in the row gets a different icon, so a new section never shows a row of the same icon.

> **Your own artwork.** Use **Icon image** to replace the icon with a picture. Only **SVG code** can still draw itself when **Animation** draws the icons.

## Pricing

Plans side by side, for memberships, services or packages, with an optional monthly and yearly switch.
{: .lede}

- Add section › Pricing
- 5 looks
- 1 block type
- Home page only
{: .facts}

### Looks

{% include looks.html folder="sections" file="pricing" name="Pricing" looks="Tier cards,Comparison table,Plan rows,Spotlight,3D deck" about="Three plan cards side by side, with the highlighted plan raised and a billing switch above.|A table with a column for each plan and a row for each feature, with ticks and values in the cells.|Each plan as a wide row with its name on the left, features in the middle, and the price and button on the right.|A short list of plans on the left with the chosen plan shown large beside it.|Plan cards dealt out from a deck as the page scrolls, shown as they rest on a large screen." %}

The five looks are the five **Layout** options.

### Where to find it

1. In your Shopify admin, go to *Online Store > Themes* and select *Edit theme* next to this theme.
2. Open the home page in the editor.
3. Select *Add section* and choose **Pricing**.

This section is for the home page only. It is not offered on other pages.

### Settings

#### At the top

| Setting | What it changes |
| --- | --- |
| **Layout** | How the plans are arranged: **Tier cards**, **Comparison table**, **Plan rows**, **Spotlight** or **3D deck**. They are five arrangements of the same plans. The deck holds the screen while the cards deal out, and needs a large screen to do it. Default: **Tier cards**. |
| **Colors** | Which of your color schemes the section uses for its background and text. You make schemes in Theme settings, under **Colors**. |
{: .settings}

#### Heading

| Setting | What it changes |
| --- | --- |
| **Tagline** | The small line above the heading. Leave empty to hide it. |
| **Heading** | The section heading. |
| **Subheading** | A line of text under the heading. In **3D deck** it is hidden on a short screen, where the heading matters more. |
| **Heading alignment** | Whether the heading and subheading are on the left or in the center. Options: **Left**, **Center** (default). |
{: .settings}

#### Billing toggle

Shows a monthly and yearly switch. Each plan carries its own two prices, so nothing is calculated here.

| Setting | What it changes |
| --- | --- |
| **Show the billing toggle** | Adds a monthly and yearly switch. On by default. |
| **Monthly label** | The label on the monthly side of the switch. |
| **Yearly label** | The label on the yearly side of the switch. |
| **Saving badge** | A small badge beside the switch, such as the saving a yearly plan gives. Leave empty to hide it. |
| **Start on** | Which side of the switch is chosen when the page loads. Options: **Monthly label** (default), **Yearly label**. |
{: .settings}

#### Plans

Shows only when **Layout** is not **Comparison table**.

| Setting | What it changes |
| --- | --- |
| **Plans per row** | Desktop only. Below 1100 pixels the plans stack, and below 660 they take the full width. Range 2 to 4, default 3. Shows only when **Layout** is **Tier cards** or **3D deck**. |
| **Space between plans** | The gap between plan cards. Range 8 to 48 px, default 26 px. Shows only when **Layout** is **Tier cards** or **3D deck**. |
| **Highlighted plan tint** | How much of the accent washes into the highlighted plan. Zero leaves it the same color as the others. Range 0 to 20%, default 8%. |
{: .settings}

#### Motion

| Setting | What it changes |
| --- | --- |
| **Motion** | Whether the movement plays for visitors whose device is set to reduce motion. They normally see the finished layout without movement; **Always animate** plays it for everyone, including you if reduce motion is on for your own device. Options: **Off for visitors who reduce motion** (default), **Always animate**. |
| **Tilt toward the pointer** | Cards bank as the pointer moves across them. Never runs on a touch screen, where there is no way to un-hover. On by default. Shows only when **Layout** is not **Comparison table**. |
| **Scroll length** | How many screens of scrolling the deck scene costs. Below about two it has no room to play. Range 2 to 5, default 3. Shows only when **Layout** is **3D deck**. |
{: .settings}

#### Footnote

| Setting | What it changes |
| --- | --- |
| **Footnote** | A line under the plans, for tax or cancellation wording. |
{: .settings}

#### Padding

| Setting | What it changes |
| --- | --- |
| **Top padding** | The space above the section. Range 0 to 160 px, default 72 px. |
| **Bottom padding** | The space below the section. Range 0 to 160 px, default 72 px. |
{: .settings}

### Blocks

Each plan is a block. Add one per plan. You can add up to 3.

#### Plan block

One plan: a name, its prices, a list of features and a button.

##### At the top

| Setting | What it changes |
| --- | --- |
| **Name** | The plan's name. |
| **One-line description** | Who the plan is for. Leave empty to hide it. |
| **Highlight this plan** | Lifts it out of the row, tints it, and deals it last in the deck layout. Highlight one plan, not several. Off by default. |
| **Badge** | A small pill on the card, such as Most popular. Leave empty to hide it. Shows only when the section's **Layout** is neither **Plan rows** nor **Comparison table**. |
{: .settings}

##### Price

| Setting | What it changes |
| --- | --- |
| **Monthly price** | Type it exactly as it should read, including the currency. Leave empty for a plan with no price, such as one that asks people to get in touch. |
| **Monthly period** | The words after the monthly price, such as "/ month". |
| **Monthly note** | A small line under the monthly price, such as "Billed monthly". Shows only when the section's **Layout** is not **Comparison table**. |
| **Yearly price** | Shown when the billing toggle is on yearly. Leave empty to keep the monthly price, period and note. |
| **Yearly period** | The words after the yearly price, such as "/ month" or "/ year". |
| **Yearly note** | A small line under the yearly price, such as "Billed yearly". Shows only when the section's **Layout** is not **Comparison table**. |
| **Text instead of a price** | Shown only when the monthly price is empty. |
{: .settings}

##### Included features

| Setting | What it changes |
| --- | --- |
| **Features** | One per line. Begin a line with a hyphen to show it as not included. Write it as Name: value, such as Members-only pricing: 15%, and the comparison table turns it into one row with a value per plan instead of a separate row for each. |
{: .settings}

##### Button

| Setting | What it changes |
| --- | --- |
| **Button label** | The words on the button. The button shows only when it also has a link. |
| **Button link** | Where the button goes. |
| **Button style** | Whether the plan button is filled or outlined. Options: **Filled**, **Outlined** (default). |
{: .settings}

##### Colors

Leave these empty and the plan follows the section color scheme. Set one and it overrides the scheme for this plan only.

Shows only when the section's **Layout** is not **Comparison table**.

| Setting | What it changes |
| --- | --- |
| **Card background** | The background color of this plan's card. Leave empty to follow the section's color scheme. |
| **Card text** | The text color of this plan's card. Leave empty to follow the section's color scheme. |
| **Accent** | This plan's accent color, used for ticks and highlights. Leave empty to follow the section's color scheme. |
{: .settings}

### Tips and limits

> **Type prices exactly as they should read.** Prices are plain text, so write the currency and any "from" yourself. A plan with an empty monthly price can show **Text instead of a price**, such as "Let's talk".

> **Mark features in and out.** In **Features**, one feature per line. Start a line with a hyphen to show it as not included. Write *Name: value* to give each plan its own value on one row of the comparison table.

> **Highlight one plan.** **Highlight this plan** lifts a plan out of the row and tints it. Highlight one plan, not several.

> **Some settings hide per layout.** **Tilt toward the pointer** is hidden in **Comparison table**, which has no cards to tilt. **Plans per row** and **Space between plans** show only in **Tier cards** and **3D deck**, and **Scroll length** only in **3D deck**.

> **The 3D deck needs room.** It holds the screen only when the screen is tall enough to show the whole scene; on a short screen it shows the plain layout instead, and the editor preview does too.

> **Up to three plans.** The section takes three plans at most.

> **The button decides where it goes.** A plan button goes to its **Button link**, such as a product page. The section does not take payment itself.

## FAQ

Questions and answers that open on a click, optionally grouped by topic and with an optional picture beside them.
{: .lede}

- Add section › FAQ
- 3 looks
- 1 block type
- Home page only
{: .facts}

### Looks

{% include looks.html folder="sections" file="faq" name="FAQ" looks="Plain rows,Each question a card,All questions in one card" about="Questions as plain rows with thin lines between them and a picture beside them.|Each question in its own card, with a picture beside the cards.|All the questions inside one large card, with the picture on its right." %}

The three looks are the three **Row style** options.

### Where to find it

1. In your Shopify admin, go to *Online Store > Themes* and select *Edit theme* next to this theme.
2. Open the home page in the editor.
3. Select *Add section* and choose **FAQ**.

This section is for the home page only. It is not offered on other pages.

### Settings

#### Content

| Setting | What it changes |
| --- | --- |
| **Caption** | A short line above the heading. |
| **Heading** | The section heading. Leave empty to hide it; the section still carries a hidden heading for screen readers. |
| **Heading size** | How large the heading is. Options: **Small**, **Medium** (default), **Large**, **Extra large**. |
| **Content alignment** | Moves the heading, the topic buttons, the questions and the answers together. Options: **Left**, **Center** (default), **Right**. |
{: .settings}

#### Layout

| Setting | What it changes |
| --- | --- |
| **Row style** | How each question is framed. Options: **Plain rows** (default), **Each question a card**, **All questions in one card**. |
| **Open one answer at a time** | Opening an answer closes the previous one, so the page never grows endlessly long. Needs JavaScript; without it more than one answer can be open. On by default. |
| **Open the first answer** | Shows the first answer as soon as the page loads. Needs JavaScript. Off by default. |
{: .settings}

#### Topics

| Setting | What it changes |
| --- | --- |
| **Group questions into topics** | Uses the Topic field on each question. The buttons only appear once the questions use more than one topic, and they need JavaScript. Off by default. |
| **Label for the first button** | The label of the topic button that shows every question. Shows only when **Group questions into topics** is on. |
{: .settings}

#### Image

| Setting | What it changes |
| --- | --- |
| **Image** | Shown beside the questions on a computer, and above them on smaller screens. |
| **Image shape** | The shape of the picture. Options: **Automatic** (default), **Landscape**, **Portrait**. |
| **Image position** | Which side the picture sits on, on a computer. Phones and tablets show it above the questions. Options: **Down the left side**, **Down the right side** (default). |
{: .settings}

#### Colors

| Setting | What it changes |
| --- | --- |
| **Color scheme** | Which of your color schemes the section uses for its background and text. You make schemes in Theme settings, under **Colors**. |
| **Transparent background** | Lets the page background show through this section. When it is off, the section follows **Make all sections transparent** in Theme settings. Off by default. |
| **Card color scheme** | Used by the two card row styles. Shows only when **Row style** is not **Plain rows**. |
{: .settings}

#### Typography

| Setting | What it changes |
| --- | --- |
| **Heading weight** | How bold the heading is. **Theme default** keeps the weight the chosen font comes with. Options: **Theme default** (default), **Light (300)**, **Normal (400)**, **Medium (500)**, **Semi-bold (600)**, **Bold (700)**. |
| **Heading letter spacing** | The space between the letters of the heading. 0 keeps the design's own spacing. Range -2 to 8 px, default 0 px. |
| **Heading color** | The color of the heading. |
| **Caption size** | Makes the caption smaller or larger. 1× is the normal size, which stays responsive. Range 0.6 to 2×, default 1×. |
| **Caption color** | The color of the caption. Leave empty to use the accent color. |
| **Topic button size** | Makes the topic button smaller or larger. 1× is the normal size, which stays responsive. Range 0.6 to 2×, default 1×. |
| **Topic button color** | The color of the topic button. |
| **Question size** | Makes the question smaller or larger. 1× is the normal size, which stays responsive. Range 0.6 to 2×, default 1×. |
| **Question color** | The color of the question. |
| **Answer size** | Makes the answer smaller or larger. 1× is the normal size, which stays responsive. Range 0.6 to 2×, default 1×. |
| **Answer color** | The color of the answer. |
{: .settings}

#### Padding

| Setting | What it changes |
| --- | --- |
| **Top padding** | The space above the section. Range 0 to 100 px, default 36 px. |
| **Bottom padding** | The space below the section. Range 0 to 100 px, default 36 px. |
{: .settings}

### Blocks

Each question is a block. Add one per question. You can add up to 50.

#### Question block

One question with its answer.

##### At the top

| Setting | What it changes |
| --- | --- |
| **Question** | Leave empty to use the title of the page below. |
| **Answer** | The answer text. |
| **Answer from a page** | Shown after the answer above, so a question can use either or both. |
{: .settings}

##### Topics

| Setting | What it changes |
| --- | --- |
| **Topic** | Questions sharing a topic appear under the same button. Leave empty to keep a question out of the topics. |
{: .settings}

##### Icon

| Setting | What it changes |
| --- | --- |
| **Icon** | Drawn before the question. Options: 31 choices, such as **No icon** (default), **Question mark**, **Information**, **Chat bubble**. Open the list in the editor to see them all. |
{: .settings}

### Tips and limits

> **Start from a ready-made question.** The *Add block* list offers starter questions about delivery, returns, payment and products. They are generic, so edit the words to match your shop.

> **Topic buttons need two topics.** The topic buttons appear only when your questions use more than one **Topic**.

> **Reuse a page as an answer.** Pick **Answer from a page** to show a page you already wrote, such as a size guide or returns policy. It appears after the **Answer** text, so a question can use either or both.

> **One answer at a time.** With **Open one answer at a time** on, opening an answer closes the previous one, so the page never grows endlessly long.

## Email signup

A newsletter signup. People who sign up are added to your customers, ready for Shopify Email or another email app.
{: .lede}

- Add section › Email signup
- 6 looks
- No blocks
- Home page only
{: .facts}

### Looks

{% include looks.html folder="sections" file="email-signup" name="Email signup" looks="Centered band,Split — words beside the box~split,Inline strip,Image beside content,Card panel,Bordered rule" about="A centered band with a caption, the heading, an email box and button, and faint envelopes and paper planes drifting behind.|The caption, heading and words on the left with the email box and button on the right.|A slim strip with the heading on the left and the email box and button on the right.|A picture on the left with the caption, heading, email box and button beside it.|A card in the middle of the page holding the heading, email box and button, with faint drawings around it.|A thin line across the top with the heading on the left and the email box and button on the right." %}

The six looks are the six **Layout** options. **Split — words beside the box** is shown here as Split.

### Where to find it

1. In your Shopify admin, go to *Online Store > Themes* and select *Edit theme* next to this theme.
2. Open the home page in the editor.
3. Select *Add section* and choose **Email signup**.

This section is for the home page only. It is not offered on other pages.

### Settings

#### Layout

| Setting | What it changes |
| --- | --- |
| **Layout** | How the signup is arranged: **Centered band**, **Split — words beside the box**, **Inline strip**, **Image beside content**, **Card panel** or **Bordered rule**. **Image beside content** shows the picture above the words on a phone and tablet. Default: **Centered band**. |
| **Image** | The picture for the **Image beside content** layout. The other layouts do not use it. |
| **Content alignment** | Moves the whole section — heading, words, the email box and the line under it. Automatic keeps each layout's own alignment. Options: **Automatic — follows the layout** (default), **Left**, **Center**, **Right**. |
| **Email box height** | How tall the email box is. Range 44 to 64 px, default 54 px. |
| **Full-width button** | Stacks the button under the email box. Always on below 500px. Off by default. |
| **Full width** | Whether the colored band spans the whole screen. Off stops it at the page width. On by default. |
{: .settings}

#### Content

| Setting | What it changes |
| --- | --- |
| **Caption** | A short line above the heading. Leave empty to hide it. |
| **Heading** | Leave empty to hide it. |
| **Text below the heading** | A paragraph under the heading. |
| **Email box placeholder** | Leave empty to use the theme's own wording. |
| **Button label** | The words on the signup button. Leave empty to use the theme's own Subscribe wording. |
| **Reassurance line** | Shown under the email box. Leave empty to hide it. Not shown on the Inline strip layout. |
{: .settings}

#### Text style

| Setting | What it changes |
| --- | --- |
| **Heading size** | Makes the heading smaller or larger. 1× is the normal size, which stays responsive. Range 0.8 to 2×, default 1×. |
| **Heading weight** | How bold the heading is. **Theme default** keeps the weight the chosen font comes with. Options: **Theme default** (default), **Light (300)**, **Normal (400)**, **Medium (500)**, **Semi-bold (600)**, **Bold (700)**. |
| **Heading letter spacing** | The space between the letters of the heading. 0 keeps the design's own spacing. Range -2 to 8 px, default 0 px. |
| **Heading color** | The color of the heading. |
| **Caption size** | Makes the caption smaller or larger. 1× is the normal size, which stays responsive. Range 0.6 to 2×, default 1×. |
| **Caption color** | The color of the caption. |
| **Text size** | Makes the text smaller or larger. 1× is the normal size, which stays responsive. Range 0.6 to 2×, default 1×. |
| **Text color** | The color of the text. |
| **Reassurance line size** | Makes the reassurance line smaller or larger. 1× is the normal size, which stays responsive. Range 0.6 to 2×, default 1×. |
| **Reassurance line color** | The color of the reassurance line. |
{: .settings}

#### Colors

| Setting | What it changes |
| --- | --- |
| **Color scheme** | Which of your color schemes the section uses for its background and text. You make schemes in Theme settings, under **Colors**. |
| **Transparent background** | Lets the page background show through the band. Off by default. |
{: .settings}

#### Animation

| Setting | What it changes |
| --- | --- |
| **Scroll animation** | How the section moves as it scrolls into view. **Words and floating drawings**: the heading words rise one by one, the email box and button slide in together, and faint envelopes and paper planes drift behind on computers (with the **Centered band** and **Card panel** layouts and centered content). **Words only**: the same, without the drawings. **None**: no movement. Default: **Words and floating drawings**. |
| **Motion** | Whether the movement plays for visitors whose device is set to reduce motion. They normally see the finished layout without movement; **Always animate** plays it for everyone, including you if reduce motion is on for your own device. Options: **Off for visitors who reduce motion** (default), **Always animate**. Shows only when **Scroll animation** is not **None**. |
{: .settings}

#### Padding

| Setting | What it changes |
| --- | --- |
| **Top padding** | The space above the section. Range 0 to 100 px, default 40 px. |
| **Bottom padding** | The space below the section. Range 0 to 100 px, default 52 px. |
{: .settings}

### Blocks

This section has no blocks. Everything is a setting.

### Tips and limits

> **Signups become customers.** Each email address is added to your customers, ready for Shopify Email or another email app.

> **The drawings are for big screens.** The floating envelopes and paper planes show only on computers, with **Centered band** or **Card panel** and centered content.

> **The thank-you replaces the box.** After someone subscribes, the page shows a thank-you message where the box was, or an error message if the address was not accepted. Neither is animated, so people can read it at once.

> **Side-by-side layouts fold on small screens.** **Split — words beside the box** and **Image beside content** stack their parts on screens up to 1100 px wide.

## Blog posts

The latest posts from one blog, dealt out like cards or hung from a line that draws down the page.
{: .lede}

- Add section › Blog posts
- 2 looks
- No blocks
- Home page only
{: .facts}

### Looks

{% include looks.html folder="sections" file="blog-posts" name="Blog posts" looks="Fan,Thread" about="Post cards in a row, each with a picture, a date and author line, a heading, a short summary and a Read more link.|Posts hung off a vertical line that draws down the page, each with its picture, heading and summary." %}

### Where to find it

1. In your Shopify admin, go to *Online Store > Themes* and select *Edit theme* next to this theme.
2. Open the home page in the editor.
3. Select *Add section* and choose **Blog posts**.

This section is for the home page only. It is not offered on other pages.

### Settings

#### At the top

Shows the blog's latest posts. Card border, rounding, elevation, color scheme and alignment are set for every blog card in Theme settings, under Blog cards.

| Setting | What it changes |
| --- | --- |
| **Blog** | The blog whose latest posts are shown. |
| **Number of posts** | How many posts to show, newest first. Range 2 to 12, default 3. |
| **Look** | **Fan**: the posts arrive as a stacked deck and are dealt out into a grid. **Thread**: a line draws down through the posts and each one swings out from it. Phones get a swipeable row or a single column. Default: **Fan**. |
| **Columns on computers** | How many columns sit side by side on a computer. Tablets and phones show fewer. Range 2 to 4, default 3. Shows only when **Look** is **Fan**. |
{: .settings}

#### Content

| Setting | What it changes |
| --- | --- |
| **Heading** | The section heading. |
| **Show View all button** | Adds a button that goes to the whole blog. On by default. |
| **Button label** | The words on the View all button. Leave empty to use "View all". Shows only when **Show View all button** is on. |
{: .settings}

#### Style

| Setting | What it changes |
| --- | --- |
| **Color scheme** | Which of your color schemes the section uses for its background and text. You make schemes in Theme settings, under **Colors**. |
| **Scroll animation** | Whether the movement plays for visitors whose device is set to reduce motion. They normally see the finished layout without movement; **Always animate** plays it for everyone, including you if reduce motion is on for your own device. Options: **Off for visitors who reduce motion** (default), **Always animate**. |
{: .settings}

#### Padding

| Setting | What it changes |
| --- | --- |
| **Top padding** | The space above the section. Range 0 to 100 px, default 64 px. |
| **Bottom padding** | The space below the section. Range 0 to 100 px, default 64 px. |
{: .settings}

### Blocks

This section has no blocks. It fills itself from the blog you choose.

### Tips and limits

> **Card looks live in Theme settings.** How every blog card looks (border, rounding, shadow, color scheme and alignment) is set in Theme settings, under **Blog cards**, so the cards match the blog page.

> **Summaries are shortened.** Each card shows the date and author, and a summary that stops after three lines.

> **Phones get a row or a column.** On phones, **Fan** becomes a row you swipe and **Thread** a single column.

> **No posts, no section.** A blog with no posts shows nothing on your live store. In the editor you see sample cards so you can judge the look.

## Contact

A contact form with your phone, email, address and opening hours beside it. It also works on any page.
{: .lede}

- Add section › Contact
- 3 looks
- 2 block types
- Home page and pages
{: .facts}

### Looks

{% include looks.html folder="sections" file="contact" name="Contact" looks="Split,Letter,Steps" about="A message form with the ways to reach you in a panel beside it.|The whole form on one sheet of paper, with the ways to reach you in its letterhead.|One question at a time, in cards, with the ways to reach you in a panel beside them." %}

### Where to find it

1. In your Shopify admin, go to *Online Store > Themes* and select *Edit theme* next to this theme.
2. Open the home page, or a page such as Contact, in the editor.
3. Select *Add section* and choose **Contact**.

This section is for the home page and for pages, such as your Contact page. It is not offered on product, collection or other templates.

### Settings

#### Layout

| Setting | What it changes |
| --- | --- |
| **Look** | **Split** puts the ways to reach you in a panel beside the form. **Letter** sets the whole form on one sheet of paper, with those ways in its letterhead. **Steps** asks one question at a time. Default: **Split**. |
| **Scroll animation** | Whether the movement plays for visitors whose device is set to reduce motion. They normally see the finished layout without movement; **Always animate** plays it for everyone, including you if reduce motion is on for your own device. Options: **Off for visitors who reduce motion** (default), **Always animate**. |
{: .settings}

#### Content

| Setting | What it changes |
| --- | --- |
| **Caption** | A short line above the heading. |
| **Heading** | The section heading. Leave empty to hide it; the section still carries a hidden heading for screen readers. |
| **Text below the heading** | A paragraph under the heading. |
| **Content alignment** | Moves the heading, the inquiry types, the field labels, the button and the panel together. Options: **Left** (default), **Center**, **Right**. Shows only when **Look** is **Split**. |
{: .settings}

#### Form

| Setting | What it changes |
| --- | --- |
| **Question above the inquiry types** | The question shown above the inquiry types. It shows only once you have added an inquiry type. |
| **Ask how they prefer to be contacted** | Adds a dropdown asking how the visitor would like you to reach them. On by default. |
| **Label for that question** | The label of that dropdown. Shows only when **Ask how they prefer to be contacted** is on. |
| **Choices** | The options in that dropdown, separated by commas. Shows only when **Ask how they prefer to be contacted** is on. |
| **Hint inside the message box** | The faint hint shown in the empty message box. |
| **Button label** | The words on the send button. |
| **Full width button** | Stretches the send button across the form. Off by default. |
| **Reassurance under the button** | A short line under the button that says what happens to the person's details. Leave empty to hide it. |
| **Extra line on the thank-you message** | A sentence added to the thank-you message shown after a message is sent. |
{: .settings}

#### Panel beside the form

| Setting | What it changes |
| --- | --- |
| **Panel position** | Which side the panel sits on, on a computer. On smaller screens the panel sits above the form, because most people would rather tap a number than type into a form. Options: **Right** (default), **Left**. Shows only when **Look** is not **Letter**. |
| **Panel heading** | The heading of the panel. |
| **Panel intro line** | A short line under the panel heading. |
{: .settings}

#### WhatsApp button

| Setting | What it changes |
| --- | --- |
| **Show a WhatsApp button** | Needs a number below before it appears. Off by default. |
| **WhatsApp number** | Include the country code, for example +12025550100. Shows only when **Show a WhatsApp button** is on. |
| **Button label** | The words on the WhatsApp button. Shows only when **Show a WhatsApp button** is on. |
| **Line under the button** | A small line under the WhatsApp button, such as when you usually reply. Shows only when **Show a WhatsApp button** is on. |
| **Message already typed in for them** | Optional. Appears in their WhatsApp before they press send. Shows only when **Show a WhatsApp button** is on. |
{: .settings}

#### Map

| Setting | What it changes |
| --- | --- |
| **Map image** | A picture of where you are. Leave empty to hide the map. |
| **Opens when the map is tapped** | The link opened when the map is tapped. Paste your maps link. |
| **Label over the map** | The words shown over the map. They show only when the map has a link. |
{: .settings}

#### Colors

| Setting | What it changes |
| --- | --- |
| **Color scheme** | Which of your color schemes the section uses for its background and text. You make schemes in Theme settings, under **Colors**. |
| **Transparent background** | Lets the page background show through this section. When it is off, the section follows **Make all sections transparent** in Theme settings. Off by default. |
{: .settings}

#### Padding

| Setting | What it changes |
| --- | --- |
| **Padding top** | The space above the section. Range 0 to 100 px, default 52 px. |
| **Padding bottom** | The space below the section. Range 0 to 100 px, default 52 px. |
{: .settings}

### Blocks

Two kinds of block: **Inquiry type** for the kinds of question people ask, and **Way to reach you** for the details in the panel. You can add up to 16.

#### Inquiry type block

One kind of question, such as an order, a return or wholesale. The visitor picks one, and its extra questions appear.

| Setting | What it changes |
| --- | --- |
| **Name** | What the visitor picks, and what heads their answer in your email. |
| **Icon** | The icon on the type's button. Options: 15 choices, such as **No icon**, **Chat bubble** (default), **Question mark**, **Parcel**. Open the list in the editor to see them all. |
| **Extra questions** | One per line, shown only when this type is chosen. End a line with * to make it required. Add a colon and a comma-separated list to turn it into a dropdown, for example: Reason: Damaged, Faulty, Wrong item. |
{: .settings}

#### Way to reach you block

One way to reach you: a phone number, an email address, an address or opening hours.

| Setting | What it changes |
| --- | --- |
| **Icon** | The icon beside this detail. Options: **No icon**, **Phone** (default), **Envelope**, **Map pin**, **Clock**, **WhatsApp**, **Chat bubble**, **Headset**, **Globe**, **Delivery van**, **Calendar**, **Building**. |
| **Label** | The small title, such as Phone or Opening hours. |
| **Details** | Each new line shows on its own line. |
| **Link** | Optional. Use tel: for a phone number or mailto: for an email address. |
| **Small badge** | Optional, for example "Open now". Shown as a small pill with a green dot; the words take your text color so they stay easy to read in every color scheme, light and dark. |
{: .settings}

### Tips and limits

> **Messages go to your sender email.** Shopify sends every message to your store's sender email address, set in *Settings > Notifications*.

> **Extra questions per type.** In **Extra questions**, write one question per line. End a line with * to make it required. Add a colon and a comma-separated list, such as *Reason: Damaged, Faulty, Wrong item*, to turn it into a dropdown.

> **WhatsApp needs a number.** The WhatsApp button appears only when **Show a WhatsApp button** is on and **WhatsApp number** is filled in, with the country code.

> **The panel moves above the form on small screens.** On smaller screens the panel sits above the form, because most people would rather tap a number than type into a form.

> **A failed send keeps what was typed.** If Shopify cannot send the message, the form comes back with the visitor's words refilled and an error message.

## Custom section

Build your own layout from pieces: headings, text, buttons, pictures, feature grids, frames and your own code.
{: .lede}

- Add section › Custom section
- 3 looks
- 10 block types
- Home page only
{: .facts}

### Looks

{% include looks.html folder="sections" file="custom-section" name="Custom section" looks="One column,Picture beside the words,Words over the picture" about="The pieces stacked in one centered column.|A picture on one side with the pieces beside it.|The pieces laid over a darkened picture." %}

The three looks are the three **Layout** options. You can also start from a ready-made arrangement: in the *Add section* list, choose **Rich text**, **Banner**, **Picture and text**, **Three columns**, **Two columns** or **Call to action** instead of **Custom section**. **Rich text** is a heading and a text block in a narrow, centered column, ready for longer writing. Its starting words tell you what to type; replace them with your own.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/sections/custom-section-rich-text-desktop-light.webp' | relative_url }}" alt="A Rich text section as added: the heading Add a heading and one line of starting text, centered in a narrow column" width="1440" height="900" loading="lazy">
    <figcaption>Rich text on a computer</figcaption>
  </figure>
  <figure class="shot shot--phone">
    <img src="{{ '/assets/images/sections/custom-section-rich-text-phone-light.webp' | relative_url }}" alt="The same Rich text section on a phone" width="375" height="812" loading="lazy">
    <figcaption>On a phone</figcaption>
  </figure>
</div>

### Where to find it

1. In your Shopify admin, go to *Online Store > Themes* and select *Edit theme* next to this theme.
2. Open the home page in the editor.
3. Select *Add section* and choose **Custom section**.

This section is for the home page only. It is not offered on other pages.

### Settings

#### Layout

| Setting | What it changes |
| --- | --- |
| **Layout** | How the section is arranged: **One column**, **Picture beside the words** (a picture or video on one side and the pieces on the other) or **Words over the picture** (the pieces on top of a darkened picture or video). Default: **One column**. |
| **Picture side** | Which side the picture or video sits on. Options: **Left** (default), **Right**. Shows only when **Layout** is **Picture beside the words**. |
| **Content width** | How wide the pieces and frames may spread. Frame widths are shares of this. Full width uses the whole page, less its side margins. Options: **Narrow**, **Medium** (default), **Wide**, **Full width**. |
| **Alignment** | Whether the text lines up on the left, in the center or on the right. Options: **Left**, **Center** (default), **Right**. |
| **Height** | How tall the section is. **Fit the content** lets it be as tall as its pieces. Options: **Fit the content** (default), **Small**, **Medium**, **Large**, **Full screen**. |
| **Vertical position** | Where the pieces sit when the section is taller than they are: at the top, in the middle or at the bottom. Options: **Top**, **Middle** (default), **Bottom**. |
{: .settings}

#### Picture or video

Shows only when **Layout** is not **One column**.

| Setting | What it changes |
| --- | --- |
| **Picture** | The picture for the layouts that use one. It is used by **Picture beside the words** and **Words over the picture**. |
| **Video** | Plays muted on a loop, with a pause button. Shown instead of the picture when both are set. |
| **Darken the picture** | Keeps the words readable. Below 55%, a pale photograph can make them hard to read. Range 20 to 90%, default 55%. Shows only when **Layout** is **Words over the picture**. |
| **Corner rounding** | How round the corners are. 0 gives square corners. Range 0 to 40 px, default 12 px. Shows only when **Layout** is **Picture beside the words**. |
{: .settings}

#### Colors

| Setting | What it changes |
| --- | --- |
| **Color scheme** | Which of your color schemes the section uses for its background and text. You make schemes in Theme settings, under **Colors**. |
{: .settings}

#### Padding

| Setting | What it changes |
| --- | --- |
| **Top padding** | The space above the section. Range 0 to 160 px, default 64 px. |
| **Bottom padding** | The space below the section. Range 0 to 160 px, default 64 px. |
{: .settings}

### Blocks

The pieces of the layout are blocks. In the section, select *Add block* and choose a piece. The *Add block* list also offers *Apps*, for blocks from the apps you have installed.

#### Heading block

A heading, with an optional small caption above it.

##### At the top

| Setting | What it changes |
| --- | --- |
| **Caption** | A small line above the heading. |
| **Heading** | The heading text. |
| **Size** | How large the heading is. Options: **Small**, **Medium**, **Large** (default), **Extra large**. |
{: .settings}

##### Font and color

| Setting | What it changes |
| --- | --- |
| **Text color** | The color of the text. Leave empty to follow the color scheme. |
| **Font** | Which of the theme's two fonts to use: the heading font or the body font. Both are chosen in Theme settings, under **Typography**. Options: **Heading font** (default), **Body font**. |
| **Weight** | How bold the heading is. **Theme default** keeps the weight the chosen font comes with. Options: **Theme default** (default), **Regular**, **Medium**, **Bold**. |
| **Italic** | Sets the text in italics. Off by default. |
| **All capitals** | Sets the text in capital letters. Off by default. |
{: .settings}

#### Text block

A paragraph of text.

##### At the top

| Setting | What it changes |
| --- | --- |
| **Text** | The text. |
| **Size** | How large the text is. Options: **Small**, **Medium** (default), **Large**. |
{: .settings}

##### Font and color

| Setting | What it changes |
| --- | --- |
| **Text color** | The color of the text. Leave empty to follow the color scheme. |
| **Font** | Which of the theme's two fonts to use: the heading font or the body font. Both are chosen in Theme settings, under **Typography**. Options: **Heading font**, **Body font** (default). |
| **Weight** | How bold the text is. **Theme default** keeps the weight the chosen font comes with. Options: **Theme default** (default), **Regular**, **Medium**, **Bold**. |
| **Italic** | Sets the text in italics. Off by default. |
| **All capitals** | Sets the text in capital letters. Off by default. |
{: .settings}

#### Buttons block

One or two buttons side by side.

##### At the top

| Setting | What it changes |
| --- | --- |
| **Label** | The words on the button. |
| **Link** | Where the button goes. |
| **Style** | Whether the button is filled or outlined. Options: **Filled** (default), **Outlined**. |
{: .settings}

##### Second button

| Setting | What it changes |
| --- | --- |
| **Label** | The words on a second button. Leave empty for one button. It is always outlined. |
| **Link** | Where the second button goes. |
{: .settings}

#### Picture block

A picture.

| Setting | What it changes |
| --- | --- |
| **Picture** | The picture. |
| **Shape** | The shape the picture is cropped to. **As uploaded** keeps its own shape. Options: **As uploaded** (default), **Square**, **Portrait**, **Landscape**, **Wide**. |
| **Width** | How wide the picture is within the section. Options: **Small**, **Medium** (default), **Full width**. |
| **Corner rounding** | How round the corners are. 0 gives square corners. Range 0 to 40 px, default 12 px. |
{: .settings}

#### Feature grid block

A grid of features. Add **Feature** blocks inside it, each with an icon, a heading and a line of text.

| Setting | What it changes |
| --- | --- |
| **Columns on a computer** | How many features sit side by side on a computer. Tablets show two and phones one. Each column needs about 220 px, so a narrow section shows fewer. Range 2 to 4, default 3. |
| **Style** | Whether each feature sits in its own card or on the plain background. Options: **Plain**, **Cards** (default). |
{: .settings}

#### Feature block

One feature inside a **Feature grid**.

##### At the top

| Setting | What it changes |
| --- | --- |
| **Icon** | The icon shown with the feature. Options: 31 choices, such as **No icon**, **Question mark**, **Information**, **Chat bubble**. Open the list in the editor to see them all. |
| **Heading** | The feature's name. |
| **Text** | A line about it. |
{: .settings}

##### Font and color

| Setting | What it changes |
| --- | --- |
| **Heading color** | The color of the heading. Leave empty to follow the color scheme. |
| **Font** | Which of the theme's two fonts to use: the heading font or the body font. Both are chosen in Theme settings, under **Typography**. Options: **Heading font** (default), **Body font**. |
| **Weight** | How bold the text is. **Theme default** keeps the weight the chosen font comes with. Options: **Theme default** (default), **Regular**, **Medium**, **Bold**. |
| **Italic** | Sets the text in italics. Off by default. |
| **All capitals** | Sets the text in capital letters. Off by default. |
| **Text color** | The color of the text. Leave empty to follow the color scheme. |
{: .settings}

#### Spacer block

Empty space between pieces.

| Setting | What it changes |
| --- | --- |
| **Height** | How much empty space the spacer adds. Range 8 to 160 px, default 40 px. |
{: .settings}

#### Divider block

A thin line between pieces.

| Setting | What it changes |
| --- | --- |
| **Line style** | Whether the line is solid, dashed or dotted. Options: **Solid** (default), **Dashed**, **Dotted**. |
| **Width** | How wide the line is. Options: **Small**, **Medium**, **Full width** (default). |
| **Thickness** | How thick the line is. Range 1 to 8 px, default 1 px. |
| **Space above and below** | The space above and below the line. Range 0 to 80 px, default 16 px. |
| **Line color** | The color of the line. Leave empty to follow the color scheme. |
{: .settings}

#### Frame block

A frame groups pieces side by side or one under another, which is how you build columns. A frame can hold Heading, Text, Buttons, Picture, Feature grid, Spacer, Divider and Custom Liquid blocks, but not another frame.

| Setting | What it changes |
| --- | --- |
| **Width on a computer** | Frames sit side by side until a row is full. On tablets a frame is at least half, and on phones every frame is full width. Options: **A quarter**, **A third**, **Half** (default), **Two thirds**, **Three quarters**, **Full width**. |
| **Pieces inside** | Whether the pieces inside the frame stack one under another or sit side by side. Options: **One under another** (default), **Side by side**. |
| **Vertical position** | Where the pieces sit when the frame is taller than they are. Options: **Top** (default), **Middle**, **Bottom**. |
| **Style** | Whether the frame is plain or a card. Options: **Plain** (default), **Cards**. |
| **Inner spacing** | The space between the edge of the card and what is inside it. Range 0 to 64 px, default 28 px. Shows only when **Style** is **Cards**. |
{: .settings}

#### Custom Liquid block

A box for code from an app or a developer. It runs as written.

| Setting | What it changes |
| --- | --- |
| **Liquid or HTML** | For an embed or an app snippet. Runs as written, so test it on a preview first. |
{: .settings}

### Tips and limits

> **Frames build columns.** Set each **Frame** to a share of the row with **Width on a computer** and frames sit side by side until a row is full. On tablets a frame is at least half the width, and on phones every frame is full width.

> **App blocks stand on their own row.** A block from an installed app takes a full row of its own. It cannot go inside a frame, and a block wider than the row is cut off rather than scrolling the page.

> **Words over a picture turn white.** In **Words over the picture** the pieces are drawn in white over a darkened picture. **Darken the picture** below about 55% can make the words hard to read on a pale photo.

> **A video replaces the picture.** If you set both a **Picture** and a **Video**, the video is shown. It plays muted on a loop with a pause button.

> **Custom code is your own.** **Custom Liquid** runs as written. Test it on a duplicate of your theme first; custom code is not covered by support.

## Custom Liquid

A box for code an app or a developer gives you, such as an embed or a snippet. It runs as written.
{: .lede}

- Add section › Custom Liquid
- No blocks
- Any page
{: .facts}

### Where to find it

1. In your Shopify admin, go to *Online Store > Themes* and select *Edit theme* next to this theme.
2. Open the page you want to add it to in the editor.
3. Select *Add section* and choose **Custom Liquid**.

This section can be added to any page.

### Settings

#### At the top

| Setting | What it changes |
| --- | --- |
| **Liquid or HTML** | For an embed or an app snippet. Runs as written, so test it on a preview first. |
| **Color scheme** | Which of your color schemes the section uses for its background and text. You make schemes in Theme settings, under **Colors**. |
{: .settings}

#### Padding

| Setting | What it changes |
| --- | --- |
| **Top padding** | The space above the section. Range 0 to 100 px, default 36 px. |
| **Bottom padding** | The space below the section. Range 0 to 100 px, default 36 px. |
{: .settings}

### Blocks

This section has no blocks.

### Tips and limits

> **Test it on a copy first.** The code runs exactly as you paste it, so try it on a duplicate of your theme before you publish.

> **Not covered by support.** Custom code is not covered by theme support. If you need help with it, consider hiring a Shopify Partner.

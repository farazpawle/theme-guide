---
title: Footers
updated: 2026-10-21
---

# Footers

The part at the bottom of every page: links to your pages, contact details, social media icons, payment icons and the small print. {{ site.theme_name }} has three footer styles.
{: .lede}

- 3 footer styles
- Add section › Footer
- Footer area, shown on every page
- Link columns and pictures are blocks
{: .facts}

| On this page | What it covers |
| --- | --- |
| [Choosing and changing a footer](#choosing-and-changing-a-footer) | Where the footer lives and how to swap one style for another |
| [Curtain](#curtain), [Big link](#big-link), [Showcase](#showcase) | The three styles, one entry each, with their blocks |
| [Country and language pickers](#country-and-language-pickers) | When they show and how to turn on more countries and languages |
| [Footer extras](#footer-extras) | Social media icons, payment icons, Follow on Shop, email signup and "Powered by Shopify" |

## Choosing and changing a footer

Your footer is not a setting. It is a section in the *Footer* area at the bottom of the editor's section list, and you keep exactly one there. To change style you remove the current footer and add another.

1. In your Shopify admin, open *Online Store > Themes*.
2. Next to {{ site.theme_name }}, select *Edit theme*.
3. In the left bar, scroll to the *Footer* area at the bottom of the section list. Select the footer inside it to change its settings.
4. To change style, select the footer, then *Remove section*. In the *Footer* area, select *Add section* and pick a style from the *Footer* heading of the list.
5. Select *Save*.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/footers/editor-add-section-footer-desktop-light.webp' | relative_url }}" alt="The theme editor's left bar with the Add section picker open under Footer, listing the three footers: Big link, Curtain and Showcase" width="965" height="840" loading="lazy">
    <figcaption>The Add section picker under Footer lists the three footers</figcaption>
  </figure>
</div>

A footer you add starts with three link columns already filled in: a **Footer menu** column plus two columns of typed links. Settings you type into one footer are not carried over to the next, so write down anything you want to keep before you swap.

The footers follow the page's light and dark mode through their **Color scheme**. Pick a dark scheme to keep a footer dark in both modes. A color you set in a footer's own color settings stays the same in both modes.

The logo shown in the **Curtain** footer is set in Theme settings, under **Footer** (**Footer logo**). Leave it empty to reuse the header logo.

> *Every style has the same basics.* Each has a **Color scheme**, link columns, a bottom bar with a **Copyright line** (leave it empty for the current year and your store name) and the extras in [Footer extras](#footer-extras).

## Curtain

The page lifts away to uncover the footer, over a slow field of drifting dots, with your store name written large along the bottom.
{: .lede}

- Add section › Footer › Curtain
- 1 look, with a moving clip
- 1 block type: Link column (up to 4)
{: .facts}

### Looks

{% include looks.html folder="footers" file="curtain" name="Curtain footer" looks="Standard" plain="true" about="Link columns, brand and contact details above a bottom bar, over drifting dots, with the store name written large along the bottom." %}

### Where to find it

In the *Footer* area of the editor: select *Add section*, then **Curtain**. See [Choosing and changing a footer](#choosing-and-changing-a-footer) for the steps.

### Settings

Keep one footer in the footer area. To change style, remove this footer and add another.

#### Colors

| Setting | What it changes |
| --- | --- |
| **Color scheme** | The footer follows this scheme, so it follows light and dark mode with the rest of the page. Pick a dark scheme to keep the footer dark whatever the mode. |
| **Background** | Leave blank to follow the color scheme above. Setting a color here fixes it in both modes. With a background alone, the text turns white or near black to stay readable. |
| **Text and icons** | Every dimmed part of the footer is this color at a lower strength, so one change repaints the whole footer. |
{: .settings}

#### Motion

| Setting | What it changes |
| --- | --- |
| **Scroll animation** | Options: **Off for visitors who reduce motion** or **Always animate**. Visitors who turned on reduce motion on their device normally see a still footer. Choose **Always animate** to show the movement to everyone. |
| **Lift the page to uncover the footer** | The footer waits behind the page and is uncovered as the visitor reaches the bottom. It turns itself off when the footer is taller than the screen, and for visitors who ask for less animation. |
| **Show the drifting dot field** | A slow field of pale dots behind the footer. Dots near the cursor brighten and part around it. It pauses when the footer is off screen. |
{: .settings}

#### Small headings

| Setting | What it changes |
| --- | --- |
| **Size** | A multiplier for the small column headings, from 0.6 to 2. 1 is the designed size. |
| **Weight** | Options: **Default (bold)**, **Light**, **Regular**, **Medium**, **Semi bold** or **Bold**. |
| **Letter spacing** | Space between the letters of the headings, from 0 to 6px. |
{: .settings}

#### Brand

| Setting | What it changes |
| --- | --- |
| **Logo width** | How wide the footer logo is, from 60 to 260px. It applies to the logo from Theme settings, under **Footer**. |
| **Show the brand name beside the logo** | Turn it off when your logo already spells out the store name, or it reads twice. |
| **Brand name** | The name beside the logo, centered against it. Leave empty to use your store name. |
{: .settings}

#### Contact

| Setting | What it changes |
| --- | --- |
| **Phone** | Your phone number. Leave empty to hide it. |
| **Email** | Your email address. Leave empty to hide it. |
| **Address** | Your address. Leave empty to hide it. |
| **Opening hours** | Your opening hours. Leave empty to hide them. |
{: .settings}

#### Social media

| Setting | What it changes |
| --- | --- |
| **Show social media icons** | Shows your social media icons in the brand area. The links themselves are set in Theme settings, under **Social media**. |
{: .settings}

#### Certifications and badges

Up to four logos with links, such as memberships or awards.

| Setting | What it changes |
| --- | --- |
| **Small heading above the logos** | Optional. Something like Certified by, or Accredited. |
| **Logo 1** to **Logo 4** | The pictures. Each has a **Logo 1 link** (to **Logo 4 link**) to open when it is selected. |
| **Logo height** | How tall every logo is, from 20 to 80px. |
| **Alignment** | Options: **Left**, **Center** or **Right**. Moves the small heading and the row of logos together. |
{: .settings}

#### Bottom bar

| Setting | What it changes |
| --- | --- |
| **Copyright line** | Leave empty for the current year and your store name. |
| **Show "Powered by Shopify" link** | Shopify's own link, shown exactly as Shopify writes it. |
| **Show store policy links** | Links to your store policies. Only policies you have actually written appear. |
| **Show payment icons** | Shows the payment methods your store accepts. |
| **Show the back to top button** | A small arrow that scrolls the page back to the top. |
{: .settings}

#### Big name

| Setting | What it changes |
| --- | --- |
| **Show the big name** | Turns the large store name along the bottom on or off. |
| **Big name text** | Leave empty to use your store name. |
| **Big name size** | Options: **Small**, **Medium** or **Large**. A long name is made smaller where needed, so it is never cut off at the sides. |
{: .settings}

### Blocks

#### Link column

A column of links under a small heading. Add up to four. A new column starts on your *Footer menu*.

| Setting | What it changes |
| --- | --- |
| **Heading** | The column's heading. Leave empty to use the name of the menu chosen below. |
| **Footer menu** | The menu whose links fill the column. Leave empty to use the custom links below instead. See [Menus](headers.md#menus). |
{: .settings}

##### Custom links

| Setting | What it changes |
| --- | --- |
| **Link 1** to **Link 5** | Where each typed link goes. |
| **Label 1** to **Label 5** | The words shown for each typed link. A link with no web address is left out. |
{: .settings}

### Tips and limits

> *The page lifts only when the footer is last.* The uncovering effect works when the footer is the last thing on the page, and only while the footer is shorter than the screen. Taller footers simply appear at the bottom.

> *Set both colors together.* A **Background** alone makes the text black or white. Set **Text and icons** too when you want exact colors.

> *Long store names fit.* The big name shrinks to fit rather than being cut off.

> *Phones fold the columns.* On a phone each column's heading becomes a tap-to-open row, so a long footer stays short.

## Big link

A curved top edge, one large link inviting shoppers to shop, your columns of links and an information panel, with your store name drawn as a large outline.
{: .lede}

- Add section › Footer › Big link
- 1 look
- 1 block type: Link column (up to 8)
{: .facts}

### Looks

{% include looks.html folder="footers" file="big-link" name="Big link footer" looks="Standard" plain="true" about="A curved top edge, a large invitation link, link columns beside an information panel, and the store name drawn as a large outline." %}

### Where to find it

In the *Footer* area of the editor: select *Add section*, then **Big link**. See [Choosing and changing a footer](#choosing-and-changing-a-footer) for the steps.

### Settings

Keep one footer in the footer area. To change style, remove this footer and add another.

The frame of this footer is fixed. The curved top, the big link, the store name and the bottom bar are always there and cannot be removed. The row of columns is the one part you build yourself: add, remove and reorder as many columns as you need.

#### Footer frame

| Setting | What it changes |
| --- | --- |
| **Color scheme** | The footer follows this scheme, so it follows light and dark mode with the rest of the page. Pick a dark scheme to keep the footer dark whatever the mode. |
| **Background** | Leave blank to follow the color scheme above. Setting a color here fixes it in both modes. |
| **Text** | Almost every dimmed part of the footer is this color at a lower strength, so one change repaints the whole footer. |
| **Divider strength** | How strong the dividing lines are, from 0 to 100%. |
| **Transparent background** | On, the page background shows through this footer. Off, it follows the shop-wide setting for transparent sections. |
| **Curved top edge** | Curves the footer up over the section above it. |
| **Curve depth** | How deep the curve is, from 0 to 14. Shown while **Curved top edge** is on. |
| **Side padding** | Space at the left and right of the footer, from 2 to 12. |
{: .settings}

#### Big link

| Setting | What it changes |
| --- | --- |
| **Show the big link** | Turns the whole invitation line on or off. The four settings below show while it is on. |
| **Wording** | The words of the link. Leave empty for a general invitation to shop. |
| **Goes to** | Where the link goes. Leave empty to send shoppers to all products. |
| **Alignment** | Options: **Left**, **Center** or **Right**. |
| **Size** | A multiplier for the link's size, from 0.6 to 2. |
{: .settings}

#### Links and information

The row that holds your columns. Add, remove and reorder the columns themselves in the block list below. Each one sets its own width.

| Setting | What it changes |
| --- | --- |
| **Space above and below the columns** | Space above and below the row, from 0 to 80px. |
| **Column placement** | Options: **Left**, **Center**, **Right**, **Spread to the edges** or **Even space around each**. Moves an incomplete row of columns within the space before the information panel. Each column has its own text alignment. |
{: .settings}

#### Information panel

A fixed quarter on the right of the column row. It is part of the footer frame, not a block, so it cannot be moved or deleted. Empty every wording field to hide it, and the columns take the full width back.

| Setting | What it changes |
| --- | --- |
| **Show the information panel** | Turns the panel on or off. |
| **Heading** | The panel's heading. Leave empty to use the word Information. |
| **Label** | The small label above the detail, such as Phone. |
| **Wording** | The detail itself. Line breaks are kept, so an address can sit on two lines. |
| **Links to** | Optional. A web address, or tel: and mailto: to dial or open an email. |
{: .settings}

#### Store name

The name is drawn as a large outline along the bottom.

| Setting | What it changes |
| --- | --- |
| **Wording** | Leave empty to use your store name. Type here to show something else, such as a trading name or a short form. |
| **Letter spacing** | A share of the letter height, from -10 to 30%. Negative pulls the letters together. |
| **Width** | How much of the width the name fills, from 0.6 to 1. 1 fills the footer edge to edge. |
| **Alignment** | Options: **Left**, **Center** or **Right**. Takes effect when the name does not already fill the full width. |
| **Outline thickness** | How heavy the letters look, from 1 to 8. |
| **Color** | Leave empty to follow the text color above. |
| **Hover effect** | Options: **Fill with accent color** or **Slice distortion**. Slice tears the name into bands around the pointer. It needs a mouse: on phones and tablets, and for anyone who asked their device to reduce motion, the name stays still. |
| **Outline color on hover** | Leave empty and the outline matches the fill on hover. Not shown with **Slice distortion**. |
| **Fill color** | Fills the inside of the letters. Leave empty for hollow letters, which is what makes the drawing on scroll visible. |
{: .settings}

#### Bottom bar

| Setting | What it changes |
| --- | --- |
| **Copyright line** | Leave empty for the current year and your store name. |
| **Show "Powered by Shopify" link** | Shopify's own link, shown exactly as Shopify writes it. |
| **Link 1**, **Link 2**, **Link 3** | Where each small-print link goes, such as shipping, terms and privacy. |
| **Label 1**, **Label 2**, **Label 3** | The words for each small-print link. |
| **Size** | A multiplier for the bottom bar's text, from 0.6 to 2. |
{: .settings}

#### Motion

| Setting | What it changes |
| --- | --- |
| **Scroll animation** | Options: **Off for visitors who reduce motion** or **Always animate**. Visitors who turned on reduce motion normally see this footer standing still. The theme editor always shows the finished state. |
{: .settings}

### Blocks

#### Link column

A column of links under a heading. Add up to eight. Each sets its own width, so you can build rows of two, three, four or more.

##### Column box

| Setting | What it changes |
| --- | --- |
| **Column width** | Options: **One sixth**, **One fifth**, **One quarter**, **One third**, **One half**, **Two thirds**, **Three quarters** or **Full width**. A share of the row; the information panel keeps its own quarter. Columns wrap onto a new row once they no longer fit. |
| **Full width on tablet** | Columns sit two per row on a tablet unless this is on. |
| **Space above and below** | Space above and below the column, from 0 to 80px. |
| **Alignment** | Options: **Left**, **Center** or **Right**. Aligns the heading and the links inside this column. |
| **Background** | A fill behind the column. Leave empty for none. |
| **Border color** | The color of an outline around the column. |
| **Border thickness** | The outline's thickness, from 0 to 10px. |
| **Corner rounding** | How round the box's corners are, from 0 to 40px. |
| **Collapse on mobile** | On a phone the heading becomes a tap-to-open row, so a long footer stays short. |
{: .settings}

##### Heading

| Setting | What it changes |
| --- | --- |
| **Wording** | The column's heading. Leave empty to use the name of the menu chosen below. |
| **Size** | From 11 to 32px. |
| **Weight** | Options: **Normal (400)**, **Medium (500)**, **Semi-bold (600)** or **Bold (700)**. |
| **Style** | Options: **Theme default**, **Normal** or **Italic**. |
| **Capitalization** | Options: **As typed**, **UPPERCASE** or **Capitalize each word**. |
| **Heading alignment** | Options: **Follow the column**, **Left**, **Center** or **Right**. Set separately from the column, so a centered heading can sit over a left-aligned list. |
| **Space below heading** | From 0 to 48px. |
{: .settings}

##### Links

| Setting | What it changes |
| --- | --- |
| **Link source** | Options: **A navigation menu** or **Custom links below**. |
| **Footer menu** | The menu whose links fill the column. Used when a navigation menu is chosen above. See [Menus](headers.md#menus). |
| **Show sub-links** | Any link that has links under it becomes a small expander. Shown for a navigation menu. |
| **Spacing preset** | Options: **Clean, the footer's own look**, **Compact, tight spacing**, **Wide, airy spacing**, **Divided, a line between links**, **Underlined, a line per link**, **Uppercase, tracked capitals** or **Card, boxed**. |
| **Bullet** | Options: **None**, **Dot**, **Square**, **Dash**, **Arrow**, **Chevron** or **Check**. |
| **Size** | Link text size, from 11 to 24px. |
| **Weight** | Options: **Normal (400)**, **Medium (500)**, **Semi-bold (600)** or **Bold (700)**. |
| **Style** | Options: **Normal** or **Italic**. |
{: .settings}

##### Custom links

Only used when **Custom links below** is chosen above.

| Setting | What it changes |
| --- | --- |
| **Link 1** to **Link 8** | Where each typed link goes. |
| **Label 1** to **Label 8** | The words shown for each typed link. |
{: .settings}

### Tips and limits

> *Hide a column by removing it.* There is no show or hide switch on this column: remove the block to hide it.

> *The frame cannot be removed.* The curved top, the store name and the bottom bar are always there. Turn off **Show the big link** or **Show the information panel** to simplify it.

> *Choose your small print.* The bottom bar holds three typed links, so set the privacy policy, terms and shipping pages you want shown.

> *Colors you set are fixed.* A color you pick in this footer, such as **Text** or a column's **Background**, stays the same in dark mode, so check it in both modes.

## Showcase

A framed card with a statement strip on top, your brand and contact details, and a row of link columns and pictures.
{: .lede}

- Add section › Footer › Showcase
- 1 look
- 2 block types: Link column and Image (up to 6 in all)
{: .facts}

### Looks

{% include looks.html folder="footers" file="showcase" name="Showcase footer" looks="Standard" plain="true" about="A framed card with a statement strip, brand and contact details, and a row of link columns and pictures above a bottom bar." %}

### Where to find it

In the *Footer* area of the editor: select *Add section*, then **Showcase**. See [Choosing and changing a footer](#choosing-and-changing-a-footer) for the steps.

### Settings

Keep one footer in the footer area. To change style, remove this footer and add another.

The statement strip, the brand details, the contact information, the social media icons, the payment icons and the bottom bar all stay in fixed places. The row beside them is the part you build yourself: add, remove and reorder link columns and images.

#### Footer layout

| Setting | What it changes |
| --- | --- |
| **Maximum width** | The widest the card gets, from 900 to 1600px. |
| **Desktop padding** | Space inside the card on computers, from 24 to 96px. |
| **Mobile padding** | Space inside the card on phones, from 16 to 40px. |
{: .settings}

#### Footer card style

| Setting | What it changes |
| --- | --- |
| **Color scheme** | The footer follows this scheme, so it follows light and dark mode with the rest of the page. Pick a dark scheme to keep the footer dark whatever the mode. |
| **Area behind the card** | Leave blank to follow the color scheme. Setting a color here fixes it in both modes. |
| **Card background** | Leave blank to follow the color scheme. Setting a color here fixes it in both modes. |
| **Body text color** | The main text color. |
| **Supporting text color** | The color of dimmed text. |
| **Divider color** | The color of the lines between parts. |
{: .settings}

#### Statement strip

| Setting | What it changes |
| --- | --- |
| **Show statement strip** | The strip is only drawn when there is wording for it, so clearing both boxes below hides it. |
| **Small message** | A short line in small type. |
| **Heading** | The strip's main line. Basic formatting is allowed. |
| **Background** | The strip's background color. |
| **Small message color** | The color of the small message. |
| **Heading color** | The color of the heading. |
{: .settings}

#### Brand content

| Setting | What it changes |
| --- | --- |
| **Alignment** | Options: **Left**, **Center** or **Right**. Moves the logo, brand name and short description together. |
| **Logo** | Your logo for the card. |
| **Brand name** | Leave empty to use your store name. |
| **Short description** | One or two lines about your shop. |
| **Space above and below the brand** | From 0 to 80px. |
{: .settings}

#### Brand name typography

| Setting | What it changes |
| --- | --- |
| **Size** | From 12 to 40px. |
| **Weight** | Options: **Normal (400)**, **Medium (500)**, **Semi-bold (600)** or **Bold (700)**. |
| **Gradient color** | The brand name fades from this color to the footer's accent color. Leave empty for plain body text. |
{: .settings}

#### Short description typography

| Setting | What it changes |
| --- | --- |
| **Size** | From 11 to 28px. |
| **Weight** | Options: **Normal (400)**, **Medium (500)**, **Semi-bold (600)** or **Bold (700)**. |
| **Color** | Leave empty to follow the body text color. |
{: .settings}

#### Contact information

| Setting | What it changes |
| --- | --- |
| **Contact label** | The small heading above the contact details. Leave empty to show Contact. |
| **Address** | Leave empty to hide it. |
| **Phone** | Leave empty to hide it. |
| **Email** | Leave empty to hide it. |
{: .settings}

#### Bottom bar

| Setting | What it changes |
| --- | --- |
| **Copyright line** | Leave empty for the current year and a plain rights statement. |
| **Show "Powered by Shopify" link** | Shopify's own link, shown exactly as Shopify writes it. |
| **Show the back to top button** | A small arrow that scrolls the page back to the top. |
{: .settings}

#### Payment icons

| Setting | What it changes |
| --- | --- |
| **Show payment icons** | Shows the payment methods your store accepts. |
{: .settings}

#### Store policies

| Setting | What it changes |
| --- | --- |
| **Show store policy links** | Links to your store policies. Only policies you have actually written appear. |
{: .settings}

#### Footer page links

Choose the page each of these fixed links points at. A link with no page chosen stays hidden.

| Setting | What it changes |
| --- | --- |
| **Privacy policy** | The page behind the Privacy policy link. |
| **Terms and conditions** | The page behind the Terms and conditions link. |
| **Shipping and delivery** | The page behind the Shipping and delivery link. |
| **Returns and refunds** | The page behind the Returns and refunds link. |
| **Contact us** | The page behind the Contact us link. |
{: .settings}

### Blocks

Add up to six blocks in any mix of the two kinds.

#### Link column

| Setting | What it changes |
| --- | --- |
| **Spacing preset** | Options: **Clean, the footer's own look**, **Divided, a line between links**, **Underlined, a line per link**, **Uppercase, tracked capitals** or **Card, boxed**. |
| **Column width** | Options: **One sixth**, **One fifth**, **One quarter**, **One third**, **One half**, **Two thirds**, **Three quarters** or **Full width**. On a tablet a width up to a third takes one of three places, up to two thirds takes two, and anything larger takes the whole row. |
| **Full width on tablet** | Columns sit two per row on a tablet unless this is on. |
| **Alignment** | Options: **Left**, **Center** or **Right**. Aligns the heading and the links inside this column. |
| **Space above and below** | From 0 to 80px. |
{: .settings}

##### Show or hide this column

| Setting | What it changes |
| --- | --- |
| **Show on tablet and computer** | Turns the column on or off for tablets and computers. |
| **Show on mobile** | Turns the column on or off for phones. |
| **Collapse on mobile** | On a phone the heading becomes a tap-to-open row, so a long footer stays short. |
{: .settings}

##### Content

| Setting | What it changes |
| --- | --- |
| **Wording** | The column's heading. Leave empty to use the name of the menu chosen below. |
| **Link source** | Options: **A navigation menu** or **Custom links below**. |
| **Footer menu** | The menu whose links fill the column. Used when a navigation menu is chosen above. See [Menus](headers.md#menus). |
| **Show sub-links** | Any link that has links under it keeps its place, with those links listed indented below it. Shown for a navigation menu. |
| **Bullet** | Options: **None**, **Dot**, **Square**, **Dash**, **Arrow**, **Chevron** or **Check**. |
| **Space between links** | From 0 to 24px. |
{: .settings}

##### Heading style

| Setting | What it changes |
| --- | --- |
| **Size** | From 11 to 32px. |
| **Weight** | Options: **Normal (400)**, **Medium (500)**, **Semi-bold (600)** or **Bold (700)**. |
| **Color** | Leave empty to follow the footer's own heading color. |
| **Space below heading** | From 0 to 48px. |
{: .settings}

##### Link typography

| Setting | What it changes |
| --- | --- |
| **Size** | From 11 to 24px. |
| **Weight** | Options: **Normal (400)**, **Medium (500)**, **Semi-bold (600)** or **Bold (700)**. |
| **Color** | Leave empty to follow the footer's own link color. |
{: .settings}

##### Custom links

Only used when **Custom links below** is chosen above.

| Setting | What it changes |
| --- | --- |
| **Link 1** to **Link 8** | Where each typed link goes. |
| **Label 1** to **Label 8** | The words shown for each typed link. |
{: .settings}

#### Image

A picture in the row, such as a badge or a photo.

| Setting | What it changes |
| --- | --- |
| **Image** | The picture. |
| **Image link** | Optional. Opens this link when the image is selected. |
| **Image description** | Describes the image for visitors using a screen reader. Leave empty to use the image's own description. |
| **Cover a full row** | Off, the image takes the same width as one link column. On, it fills the whole row. |
{: .settings}

##### Image size and placement

| Setting | What it changes |
| --- | --- |
| **Limit image height** | Leave off to let the height follow the image. |
| **Maximum image height** | From 40 to 360px. Only used when the height limit is on. |
| **Image fit** | Options: **Show the complete image** or **Fill the chosen size (crops)**. Filling needs the height limit above, since there is nothing to crop to without it. |
| **Corner rounding** | From 0 to 40px. |
| **Space above and below** | From 0 to 80px. |
{: .settings}

### Tips and limits

> *Hide the strip by emptying it.* The statement strip shows only when it has wording, so clear **Small message** and **Heading** to hide it.

> *Add a description to every picture.* **Image description** is what a screen reader reads out for a badge or photo.

> *Phones fold the columns.* With **Collapse on mobile** on, each column's heading becomes a tap-to-open row on a phone.

## Country and language pickers

Two drop-downs in the footer that let a shopper choose where they are buying from and which language they read.
{: .lede}

- Shown in every footer style
- Appear only when your store offers a choice
- Set up in your Shopify admin
{: .facts}

### When they show

| Picker | Shows when |
| --- | --- |
| Country | **Show country/region selector** is on in Theme settings under **Currency format**, and your store sells to more than one country or region. |
| Language | Your store offers more than one language. There is no theme setting for it: Shopify decides. |
{: .settings}

With neither, nothing is shown and no gap is left. The country picker also sets the shopper's currency: each option names the currency it buys in, such as United States (USD $). The theme never converts a price itself. Prices follow the settings of each market in your Shopify admin.

Where it sits: first in the **Curtain** bottom bar, and at the left end of the row above the bottom bar in **Big link** and **Showcase**. It is a footer feature only: it is not in the header.

A shopper who picks with a mouse or a finger switches at once. A shopper using the keyboard sees an *Apply* button after changing a choice. The pickers also work with scripts blocked.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/footers/country-picker-desktop-light.webp' | relative_url }}" alt="The footer bottom area with the country drop-down showing United States (USD $), above the payment icons and legal links" width="1440" height="900" loading="lazy">
    <figcaption>The country picker in the footer bottom area</figcaption>
  </figure>
</div>

<div class="pair" style="margin-top:18px">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/footers/language-picker-desktop-light.webp' | relative_url }}" alt="The footer bottom area with the country drop-down showing United States (USD $) and, beside it, the language drop-down showing English, above the payment icons" width="1440" height="900" loading="lazy">
    <figcaption>The language picker beside the country picker</figcaption>
  </figure>
</div>


### Turning on more countries and languages

1. For countries: in your Shopify admin, open *Settings > Markets*. Add the countries or regions you want to sell to. Which currencies and payment methods you can use depends on your Shopify plan and payments setup.
2. For languages: open *Settings > Languages*. Add a language and publish it. Translate your content in the Translate & Adapt app: see [Theme settings](theme-settings.md#languages).
3. In the editor, open Theme settings, select **Currency format** and check that **Show country/region selector** is on.

### Tips and limits

> *Test as a visitor.* You will not see the pickers while only one country and one language are set up. Add a second one, then view your storefront.

> *Pickers are not in the header.* A centered header bar would use its width twice, so the pickers stay in the footer.

## Footer extras

The parts of a footer that come from elsewhere in your store.
{: .lede}

- Social media icons, payment icons and Follow on Shop appear by themselves
- Switches are in each footer's settings
- Email signup is off until you switch it on
{: .facts}

| Extra | Comes from | Curtain | Big link | Showcase |
| --- | --- | --- | --- | --- |
| Social media icons | Theme settings, **Social media** | Switch: **Show social media icons** | Always when a link is filled in | Always when a link is filled in |
| Payment icons | Your Shopify payment settings | Switch: **Show payment icons** | Always when there are any | Switch: **Show payment icons** |
| Follow on Shop | Your Shop setup | Bottom bar | Row above the bottom bar | Row above the bottom bar |
| Email signup | Your customer list | Switch: **Show email signup** | Switch: **Show email signup** | Switch: **Show email signup** |
| "Powered by Shopify" | Shopify | Switch: **Show "Powered by Shopify" link** | Switch: **Show "Powered by Shopify" link** | Switch: **Show "Powered by Shopify" link** |
{: .settings}

### Social media icons

Fill in your links in Theme settings, under **Social media**: see [Theme settings](theme-settings.md#social-media). Only platforms with a link appear, so there is nothing to add or reorder. In **Big link** they sit at the right end of the row above the bottom bar; in **Showcase** they sit in the contact column; in **Curtain** they sit in the brand area.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/footers/social-payment-icons-desktop-light.webp' | relative_url }}" alt="A footer with a Follow us row of four social media icons under the brand, and a row of payment icons in the bottom bar" width="1440" height="844" loading="lazy">
    <figcaption>Social media icons in the brand area and payment icons in the bottom bar</figcaption>
  </figure>
</div>

### Payment icons

The icons come from the payment methods your store accepts, set in your Shopify admin under *Settings > Payments*. You cannot add or remove an icon by hand, which keeps the footer honest about what checkout accepts.

### Follow on Shop

Shopify's own button that lets a shopper follow your store in the Shop app. It appears by itself when your store has Shop set up, and is left out otherwise, with no empty box. It has no setting and keeps Shopify's colors.

### Email signup

An email box in the footer. Visitors type their address, press the button and see a thank-you line. Every address joins your customer list with the tag *newsletter*, subscribed to email marketing (the email marketing tick is set), so you can reach them from Shopify Email or another email app. It is off until you switch it on.

| Setting | What it changes |
| --- | --- |
| **Show email signup** | Adds the email box to this footer. Off by default. |
| **Heading** | The line above the box. Leave empty to draw no heading. |
| **Text** | A short line under the heading, such as what subscribers get. Leave empty to draw none. |
{: .settings}

You find these in each footer's settings, under **Email signup**. The look is fixed for each footer, so there is nothing else to pick:

- In Curtain, the look is *On the rule*: a full-width row on the line above the bottom bar. The box unrolls out of a round button as the row arrives.
- In Big link, the look is *Outline line*: the heading is drawn as an outline that fills with color as it arrives, with a rounded box beside it.
- In Showcase, the look is *Brand card*: it sits under the short description in the card. The button is the brand's square badge: it turns into an arrow once the address looks complete, and into a tick after a successful send.

{% include looks.html folder="footers" file="signup-curtain" name="Curtain email signup" looks="On the rule" plain="true" about="The Curtain footer with the email box on the line above the bottom bar." %}

{% include looks.html folder="footers" file="signup-big-link" name="Big link email signup" looks="Outline line" plain="true" about="The Big link footer with an outlined heading and the rounded email box beside it." %}

{% include looks.html folder="footers" file="signup-showcase" name="Showcase email signup" looks="Brand card" plain="true" about="The Showcase footer with the email box in the brand card, its button a square badge." %}

After a send the page reloads and the footer shows the thank-you line. A repeat signup with an address already on your list shows the same thank-you line: Shopify does not say whether an address was already there, and it is on your list either way. A wrong address shows Shopify's own message instead. If you also use the **Email signup** section on your home page, each box shows only its own answer: see [Home page sections](sections.md#email-signup).

> *Switched off, nothing shows.* With **Show email signup** off, the footer draws no box and no empty gap.

### "Powered by Shopify"

Shopify's own link, shown beside the copyright line. Each footer has a **Show "Powered by Shopify" link** switch if you prefer to hide it.

### Tips and limits

> *Nothing shows without data.* Social icons need a link, payment icons need accepted payment methods and Follow on Shop needs Shop set up, so a new store may show none of them yet.

> *Policy links need policies.* **Show store policy links** lists only the policies you wrote in your Shopify admin under *Settings > Policies*.

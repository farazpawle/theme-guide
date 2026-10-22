---
title: Content pages
updated: 2026-10-22
---

# Content pages

The pages that carry your words: an about or policy page, your blog and its posts, the page shown for a broken link, the password page and the gift card page. Each is a page template with its own main section, and most have a choice of looks.
{: .lede}

- Page, Blog, Blog post, Page not found, Password page, Gift card page
- 3 looks for each of the first four, 1 for the last two
- Open each from the page selector at the top of the editor
{: .facts}

| On this page | What it covers |
| --- | --- |
| [Opening a page template in the editor](#opening-a-page-template-in-the-editor) | The steps that apply to every page below |
| [Page](#page) | An about, policy or any other page you write |
| [Blog](#blog) | The list of posts in a blog |
| [Blog post](#blog-post) | One post |
| [Page not found](#page-not-found) | The page shown for a broken link |
| [Password page](#password-page) | The page shown while your store is password protected |
| [Gift card page](#gift-card-page) | The page a customer opens from their gift card email |

## Opening a page template in the editor

These pages are not added from *Add section*. Each template already holds its main section; you open the template and change that section's settings.

1. In your Shopify admin, open *Online Store > Themes*.
2. Next to {{ site.theme_name }}, select *Edit theme*.
3. In the page selector at the top of the editor, choose the page. For a page, a blog or a blog post, choose the one you want to edit.
4. Select the page's section in the left bar to change its settings.
5. Select *Save*.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/pages/editor-page-selector-desktop-light.webp' | relative_url }}" alt="The editor's page selector scrolled down, listing Gift card, Pages, Blogs, Blog posts, Search, Password and 404 page" width="480" height="530" loading="lazy">
    <figcaption>The page selector, with Pages, Blogs, Blog posts, Password, 404 page and Gift card</figcaption>
  </figure>
</div>

Every one of these sections has a **Color scheme** (except the gift card page, which has no settings), and a scroll motion that follows your choice of **Off for visitors who reduce motion** or **Always animate**. See [Motion](getting-started.md#motion).

## Page

For your about page, policies and any other page you write in *Online Store > Pages*. The text comes from the page itself; this section decides how it is laid out. Choose from three looks.
{: .lede}

- Page selector › Pages
- 3 looks
- No blocks
{: .facts}

### Looks

{% include looks.html folder="pages" file="page" name="Page" looks="Folding band,Section drum,Written opening" about="A heading on a full-screen band that tilts away as the text rises over it.|A turning list of the page's headings beside the text, for long pages.|The first paragraph writes itself beside the heading, with an optional picture." %}

- **Folding band**: the heading sits on a full-screen band that tilts away as the text rises over it.
- **Section drum**: a turning list of the page's own headings stands beside the text, so a long page can be jumped through.
- **Written opening**: the page's first paragraph writes itself beside the heading, with an optional picture.

### Where to find it

Open the editor as in [Opening a page template in the editor](#opening-a-page-template-in-the-editor), choose a page from the page selector and select the **Page** section.

### Settings

#### At the top

| Setting | What it changes |
| --- | --- |
| **Look** | Options: **Folding band**, **Section drum**, **Written opening**. |
| **Text width** | How wide the lines of text are. Options: **Narrow**, **Medium**, **Wide**. |
{: .settings}

#### Content

| Setting | What it changes |
| --- | --- |
| **Text above heading** | A short line such as Our story. Leave empty for none. |
| **Picture** | Shown beside the opening paragraph. 4:5 aspect ratio recommended. Only for **Written opening**. |
{: .settings}

#### Style

| Setting | What it changes |
| --- | --- |
| **Color scheme** | The colors of the page. |
| **Scroll animation** | Options: **Off for visitors who reduce motion**, **Always animate**. |
{: .settings}

#### Padding

| Setting | What it changes |
| --- | --- |
| **Top padding** | Space above the section, from 0 to 100px. |
| **Bottom padding** | Space below the section, from 0 to 100px. |
{: .settings}

### Blocks

This section has no blocks. The words come from the page you write in *Online Store > Pages*.

### Tips and limits

> *Section drum needs headings.* The turning list is built from the page's *Heading 2* headings. With fewer than two, the list is left out and the page is a single column. On tablets and phones it becomes a one-line strip under the header.

> *Written opening lifts the first paragraph.* That paragraph is shown beside the heading, so it is not shown twice. If the first thing on the page is a picture, a video or an embedded frame, nothing is lifted. Links in it keep working.

> *The contact page is compact.* To make a contact page, add a page in *Online Store > Pages* and choose the *contact* template for it. It uses the **Section drum** look with no space below, so it reads as a heading above the form. See [Contact](sections.md#contact).

> *Moving looks stand still in the editor preview.* The editor's preview shows the finished still page. Check the movement on your live store or the theme preview.

## Blog

The list of posts in a blog. Choose from three looks.
{: .lede}

- Page selector › Blogs
- 3 looks
- No blocks
{: .facts}

### Looks

{% include looks.html folder="pages" file="blog" name="Blog" looks="Ring,Stack,Wave" about="Posts turning on a 3D ring as the page scrolls.|Each post a large panel that the next one slides over.|A grid of posts that rises into place row by row." %}

- **Ring**: the posts turn on a 3D ring as the page scrolls. On phones the ring becomes a swipeable row.
- **Stack**: each post is a large panel that the next one slides over. On phones the panels become a list.
- **Wave**: a grid that rises into place row by row.

### Where to find it

Open the editor as in [Opening a page template in the editor](#opening-a-page-template-in-the-editor), choose your blog from the page selector and select the **Blog** section.

### Settings

How each post card looks (border, rounding, shadow, color scheme and alignment) is set for every blog card in Theme settings, under **Blog cards**. See [Blog cards](theme-settings.md#blog-cards).

#### At the top

| Setting | What it changes |
| --- | --- |
| **Look** | Options: **Ring**, **Stack**, **Wave**. New blogs start on **Wave**. |
| **Posts per page** | How many posts show before the page links, from 3 to 12. |
| **Columns on computers** | How many posts sit side by side, from 2 to 4. Only for **Wave**. |
| **Picture shape** | The shape of each post's picture. Options: **Landscape**, **Square**, **Portrait**. Only for **Wave**. |
{: .settings}

#### Content

| Setting | What it changes |
| --- | --- |
| **Show date** | Shows the post's date on its card. |
| **Show author** | Shows the author's name on its card. |
| **Show comment count** | Shows how many comments a post has. Shown only when comments are turned on for the blog. |
{: .settings}

#### Style

| Setting | What it changes |
| --- | --- |
| **Color scheme** | The colors of the page. |
| **Scroll animation** | Options: **Off for visitors who reduce motion**, **Always animate**. |
{: .settings}

#### Padding

| Setting | What it changes |
| --- | --- |
| **Top padding** | Space above the section, from 0 to 100px. |
| **Bottom padding** | Space below the section, from 0 to 100px. |
{: .settings}

### Blocks

This section has no blocks. The posts come from the blog you write in *Online Store > Blog posts*.

### Tips and limits

> *The Blog cards setting decides the card.* The **Ring** and **Stack** looks always draw framed cards. The **Wave** look follows **Style** in **Blog cards**.

> *Few posts still look full.* With fewer than five posts, **Ring** repeats the cards so the ring has no gap.

> *Only the front card is reached by keyboard in Ring.* The previous and next buttons move to another post.

> *Turn comments on in your admin.* **Show comment count** shows nothing until comments are turned on for the blog, in *Online Store > Blog posts > Manage blogs*.

## Blog post

One post: its picture, heading, words and comments. Choose from three looks.
{: .lede}

- Page selector › Blog posts
- 3 looks
- No blocks
{: .facts}

### Looks

{% include looks.html folder="pages" file="blog-post" name="Blog post" looks="Cover,Plate,Split" about="The picture fills the screen, then shrinks into a frame as the heading rises beneath it.|The picture lies tilted back and stands up as it arrives.|The picture stays beside the text on computers." %}

- **Cover**: the picture fills the screen, then shrinks into a frame as the heading rises beneath it. On phones the picture is simply framed.
- **Plate**: the picture lies tilted back and stands up as it arrives.
- **Split**: the picture stays beside the text on computers.

### Where to find it

Open the editor as in [Opening a page template in the editor](#opening-a-page-template-in-the-editor), choose a blog post from the page selector and select the **Article** section.

### Settings

#### At the top

| Setting | What it changes |
| --- | --- |
| **Look** | Options: **Cover**, **Plate**, **Split**. New posts start on **Cover**. |
{: .settings}

#### Content

| Setting | What it changes |
| --- | --- |
| **Show the post's picture** | Shows the post's featured picture. |
| **Show date** | Shows the date the post was published. |
| **Show author** | Shows the author's name. |
| **Show reading time** | Shows how long the post takes to read. |
{: .settings}

#### Style

| Setting | What it changes |
| --- | --- |
| **Color scheme** | The colors of the page. |
| **Scroll animation** | Options: **Off for visitors who reduce motion**, **Always animate**. |
{: .settings}

#### Padding

| Setting | What it changes |
| --- | --- |
| **Top padding** | Space above the section, from 0 to 100px. |
| **Bottom padding** | Space below the section, from 0 to 100px. |
{: .settings}

### Blocks

This section has no blocks. The post's words and picture come from *Online Store > Blog posts*.

### Tips and limits

> *Cover needs a picture.* **Cover** only does its shrinking move when the post has a picture. Add a featured picture to the post in your admin.

> *Comments appear when they are turned on.* Turn them on for the blog in *Online Store > Blog posts > Manage blogs*. Shoppers who comment see a message that their comment was posted, or sent for approval when you moderate comments.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/pages/blog-post-comment-form-desktop-light.webp' | relative_url }}" alt="The Add a comment form at the foot of a blog post, with name, email and comment fields, a Post button and a note that comments are checked before they appear" width="1440" height="900" loading="lazy">
    <figcaption>The comment form at the foot of a post when comments are on</figcaption>
  </figure>
</div>

## Page not found

The page shown for a broken link. It tells the shopper the link has moved and offers a search and a way back. Choose from three looks.
{: .lede}

- Page selector › 404 page
- 3 looks
- No blocks
{: .facts}

### Looks

{% include looks.html folder="pages" file="page-not-found" name="Page not found" looks="Tumbling digits,Tunnel,Folding map" about="A 3D 404 that tumbles apart as the page scrolls.|Scrolling flies through a tunnel of frames.|A folded map that opens as the page scrolls." %}

- **Tumbling digits**: a 3D 404 that tumbles apart as the page scrolls.
- **Tunnel**: scrolling flies through a tunnel of frames. New stores start on this look.
- **Folding map**: a folded map that opens as the page scrolls.

### Where to find it

Open the editor as in [Opening a page template in the editor](#opening-a-page-template-in-the-editor), choose *404 page* from the page selector and select the **Page not found** section.

### Settings

The heading and message are not settings here. Edit them in *Online Store > Themes*: open the theme's *...* menu, select *Edit default theme content*, and search for *404*.

<div class="pair">
  <figure class="shot shot--desktop">
    <img src="{{ '/assets/images/pages/admin-edit-theme-content-404-desktop-light.webp' | relative_url }}" alt="The Theme content screen in the Shopify admin with 404 typed in the search box and the matching texts listed below it" width="1424" height="820" loading="lazy">
    <figcaption>Edit default theme content, searching for 404</figcaption>
  </figure>
</div>

#### At the top

| Setting | What it changes |
| --- | --- |
| **Look** | Options: **Tumbling digits**, **Tunnel**, **Folding map**. |
{: .settings}

#### Style

| Setting | What it changes |
| --- | --- |
| **Color scheme** | The colors of the page. |
| **Scroll animation** | Options: **Off for visitors who reduce motion**, **Always animate**. |
{: .settings}

#### Padding

| Setting | What it changes |
| --- | --- |
| **Top padding** | Space above the section, from 0 to 100px. |
| **Bottom padding** | Space below the section, from 0 to 100px. |
{: .settings}

### Blocks

This section has no blocks. The page offers a search box and links home and to all products.

### Tips and limits

> *The page shows no products.* It offers a search and links back to your home page and your products.

> *Tunnel and Folding map hold the screen on computers.* From 1101px wide and 600px tall, the page stays in place while the scroll plays the scene. On smaller screens it shows the finished page.

> *Test it with a made-up address.* Visit a link on your store that does not exist, such as your address followed by /nothing-here.

## Password page

The page shown to visitors while your store is password protected: a hanging sign with your message and an email signup, which turns over to a password form.
{: .lede}

- Page selector › Password
- 1 look
- No blocks
{: .facts}

### Looks

{% include looks.html folder="pages" file="password" name="Password page" looks="Standard" plain="true" about="A hanging sign carrying your message and an email signup, with a link to enter using the password." %}

The front of the sign shows your message, the signup and a link to enter using the password. The link turns the sign over to the password form. A wrong password turns it to the password side again with an error.

### Where to find it

Open the editor as in [Opening a page template in the editor](#opening-a-page-template-in-the-editor), choose *Password* from the page selector and select the **Password** section. You will not see the page on your live store while the password is off.

### Settings

Write the message in *Online Store > Preferences*, under *Password protection*. Edit the heading in *Online Store > Themes > Edit default theme content*, under *Password*.

#### At the top

| Setting | What it changes |
| --- | --- |
| **Show email signup** | Shows an email box. Visitors who sign up are added to your customers with the tags prospect and password page. |
{: .settings}

#### Style

| Setting | What it changes |
| --- | --- |
| **Color scheme** | The colors of the page. |
| **Animation** | The sign swings in and sways as the pointer passes. Options: **Off for visitors who reduce motion**, **Always animate**. |
{: .settings}

### Blocks

This section has no blocks.

### Tips and limits

> *Your logo shows here.* The page uses the **Logo** from Theme settings, under **Brand**; with none, your store name is shown. See [Brand](theme-settings.md#brand).

> *Preview the page without the password.* Open your store from the admin's *Preview store* link, or select *Password* in the editor's page selector.

> *The sign settles.* Every movement stops within a few seconds, and visitors who reduce motion see the sign still.

## Gift card page

The page a customer opens from their gift card email. It follows your colors and fonts and has no settings of its own.
{: .lede}

- Page selector › Gift card
- 1 look
- No settings and no blocks
{: .facts}

### Looks

{% include looks.html folder="pages" file="gift-card" name="Gift card page" looks="Standard" plain="true" about="A gift card showing its balance, code, expiry date and a QR code, with a button to copy the code." %}

The page shows the card with its balance, the code and the expiry date. A customer can copy the code, print the card, scan the QR code, or add it to Apple Wallet where that is offered. The card turns over as it arrives, and tilts as the pointer passes it on a computer.

### Where to find it

In the editor, choose *Gift card* from the page selector to preview it. The preview shows a sample card.

### Settings

This page has no settings of its own. It follows your theme's colors, fonts and light or dark mode, and shows your logo from Theme settings, under **Brand**.

### Blocks

This page has no blocks.

### Tips and limits

> *The sample card has no wallet button.* Apple Wallet appears only on real gift cards that offer it.

> *Expired and inactive cards say so.* An expired card shows Expired on its face and a line saying it has expired. A card that has been turned off shows Inactive. Both show the code struck through.

> *Customers get the link by email.* Shopify sends it when a gift card is bought or sent. To change the email's words, use *Settings > Notifications* in your admin.

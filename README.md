# Headline
CSS bugs are frustrating, Webflow has more buttons than my TV remote,  and Wordpress still sucks. Headline was built for people that want websites now. No code, no drag-and-drop. Just type your copy into our in-browser editor and have a fully responsive landing page up in minutes.

## Thinking in Headline
The Headline language is modular, meaning that websites are built in blocks. There are several types of blocks like `Header` and `Subheader`.  Each of these blocks have properties like `title` , `subtitle`, and `image`.

Headline's modular nature allows you to quickly rearrange your site with a simple copy and paste so you can focus more on amazing copy and less on fixing buggy code.


## Syntax
### Create a Block
To create a Block, begin with a `#` and choose from the types of blocks:
 - `Header`
 - `Subheader`
 - `Image`
### Add Properties
Properties allow you add text to your Blocks quickly. Each Block has a different set of Properties. As an example, let's make a `Header` block. A `Header` block has three properties: `[title]` , `[subtitle]`, `[image]`. Let's make a header about the greatest artist of all time.

    # Header
    [title] Kanye West...
    [subtitle] The Greatest Artist of All Time!
    [image] https://live.staticflickr.com/3229/3028703779_00a2fd41c2.jpg

That's it! With just a little bit of Headline, we just made a fully responsive `Header`.

## Blocks and their Properties
#### Header

    # Header
    [title] I am a title.
    [subtitle] I am a title.
    [image] http://www.google.com/img
    


#### Subheader
The following displays a `subheader` with an image on the right.  

    # Subheader
    [title] I am a title.
    [subtitle] I am a title.
    [image] http://www.google.com/img

Simply place `[image]` before the `[title]` property to place the image on the left.

    # Subheader
    [title] I am a title.
    [subtitle] I am a title.
    [image] http://www.google.com/img

#### Image

    # Image
    [image] http://www.google.com/img
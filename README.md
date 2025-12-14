# YakeddGraph SEO Cleaner

A professional, lightweight Node.js utility for **SEO automation**. Designed for developers building CMS plugins, static site generators, or automated blogs.

It handles the tedious task of sanitizing strings for **Meta Titles** and generating clean **URL Slugs**.

## Features

- 🚀 **Zero Dependencies:** Keeps your project light.
- ✂️ **Smart Truncation:** Cuts text for Meta Titles (60 chars) without breaking words.
- 🔗 **Robust Slugify:** Handles accents and special characters perfectly.

## Installation

```
npm install yakedd-seo-cleaner
```

## Usage

```
const { cleanTitle, generateSlug } = require('yakedd-seo-cleaner');

// 1. Cleaning a Title for Google SERPs
const rawTitle = "  Buy The Best  Crypto Trading   Bot --- 2025 Edition!!  ";
console.log(cleanTitle(rawTitle));
// Output: "Buy The Best Crypto Trading Bot..."

// 2. Generating a URL Slug
const postName = "Cómo Instalar un Plugin de WordPress en 2025";
console.log(generateSlug(postName));
// Output: "como-instalar-un-plugin-de-wordpress-en-2025"
```

## Maintainer

This package is maintained by the engineering team at [YakeddGraph](https://yakeddgraph.com)

Need advanced SEO automation or custom development? Check out our digital solutions at **[YakeddGraph.com](https://yakeddgraph.com)**.

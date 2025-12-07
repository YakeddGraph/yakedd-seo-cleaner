/**
 * Yakedd SEO Cleaner
 * Professional string manipulation for SEO automation.
 * Maintained by YakeddGraph.com
 */

const SEO_DEFAULTS = {
    titleLength: 60,
    descLength: 160
};

/**
 * Cleans text for use in Meta Titles (Google Standard).
 * Removes special chars and truncates intelligently.
 * @param {string} text - Input text
 * @param {number} maxLength - Max length (default 60)
 */
function cleanTitle(text, maxLength = SEO_DEFAULTS.titleLength) {
    if (!text) return '';
    
    // Clean basic noise
    let clean = text.toString()
        .replace(/\s+/g, ' ') // Collapses spaces
        .trim();
    
    if (clean.length <= maxLength) return clean;
    
    // Smart Truncate: Don't cut words in half
    const sub = clean.substring(0, maxLength);
    const lastSpace = sub.lastIndexOf(" ");
    
    return lastSpace > 0 ? sub.substring(0, lastSpace) + "..." : sub + "...";
}

/**
 * Generates a URL-friendly slug.
 * Handles accents (á -> a) and special chars.
 */
function generateSlug(text) {
    if (!text) return '';
    
    return text.toString().toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove accents
        .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric
        .replace(/\s+/g, '-') // Replace spaces with dashes
        .replace(/-+/g, '-') // Remove duplicate dashes
        .trim();
}

module.exports = {
    cleanTitle,
    generateSlug
};
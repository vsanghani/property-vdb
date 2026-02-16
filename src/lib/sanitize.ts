/**
 * Input sanitization utilities.
 * Used on both client (search-input) and server (search page) side.
 */

const MAX_QUERY_LENGTH = 100;

// Characters that have no valid use in a property search query
const DANGEROUS_CHARS = /[<>{}()|\\`$"]/g;

/**
 * Sanitize a search query string:
 * - Trim whitespace
 * - Cap length at 100 characters
 * - Strip dangerous/injection characters
 */
export function sanitizeSearchQuery(input: string): string {
    return input
        .trim()
        .slice(0, MAX_QUERY_LENGTH)
        .replace(DANGEROUS_CHARS, "");
}

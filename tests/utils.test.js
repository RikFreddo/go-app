/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import '../js/utils.js';

describe('Utility Functions', () => {
    describe('capitalize', () => {
        it('should capitalize the first letter of a string', () => {
            expect(window.capitalize('hello')).toBe('Hello');
            expect(window.capitalize('word')).toBe('Word');
        });
    });

    describe('getLangNameFull', () => {
        it('should return full language name and flag', () => {
            expect(window.getLangNameFull('zh')).toBe('🇨🇳 Chinese');
            expect(window.getLangNameFull('ja')).toBe('🇯🇵 Japanese');
            expect(window.getLangNameFull('ar')).toBe('🇸🇦 Arabic');
            expect(window.getLangNameFull('en')).toBe('en'); // fallback
        });
    });

    describe('shuffleArray', () => {
        it('should return an array of the same length', () => {
            const arr = [1, 2, 3, 4, 5];
            const shuffled = window.shuffleArray([...arr]);
            expect(shuffled.length).toBe(arr.length);
            // Elementi dovrebbero essere gli stessi, anche se mescolati
            arr.forEach(item => {
                expect(shuffled).toContain(item);
            });
        });
    });
});

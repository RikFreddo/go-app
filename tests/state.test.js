/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import '../js/state.js';

describe('Global State', () => {
    it('should initialize appMode to flashcards', () => {
        const state = window.getState();
        expect(state.appMode).toBe('flashcards');
    });

    it('should initialize empty arrays for decks', () => {
        const state = window.getState();
        expect(Array.isArray(state.playDeck)).toBe(true);
        expect(state.playDeck.length).toBe(0);
        expect(Array.isArray(state.deck)).toBe(true);
        expect(state.deck.length).toBe(0);
    });

    it('should initialize userProgress as empty object', () => {
        const state = window.getState();
        expect(typeof state.userProgress).toBe('object');
        expect(Object.keys(state.userProgress).length).toBe(0);
    });
});

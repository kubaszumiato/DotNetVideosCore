/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { oEmbedVimeo } from './oembed-vimeo';

describe('oEmbedVimeo object', () => {
    it('has provider name filled after creation', () => {
        const vimeo = new oEmbedVimeo();
        expect(vimeo.providerName).toBe('Vimeo');
    });
});

describe('URL validation', () => {
    const vimeo = new oEmbedVimeo();

    it ('refuses urls with domain different than vimeo.com', () => {
        expect(vimeo.matchProviderByUrl("https://vime0.com/1221")).toBe(false);
        expect(vimeo.matchProviderByUrl("https://vimo.com/1221")).toBe(false);
        expect(vimeo.matchProviderByUrl("https://vimeo.cm/1221")).toBe(false);
        expect(vimeo.matchProviderByUrl("https://vimeo.pl/1221")).toBe(false);
    });

    it('accepts proper urls for videos', () => {
        expect(vimeo.matchProviderByUrl("https://vimeo.com/211452489")).toBe(true);
        expect(vimeo.matchProviderByUrl("http://vimeo.com/211452489")).toBe(true);
        expect(vimeo.matchProviderByUrl("https://vimeo.com/110554082")).toBe(true);
        expect(vimeo.matchProviderByUrl("http://vimeo.com/110554082")).toBe(true);
    });

    it('accepts proper urls for albums', () => {
        //https://vimeo.com � Dream Film Studio � Videos
    });

    it('accepts proper urls for channels', () => {
        expect(vimeo.matchProviderByUrl("https://vimeo.com/channels/documentaryfilm")).toBe(false);
        expect(vimeo.matchProviderByUrl("https://vimeo.com/channels/documentaryfilm/120206922")).toBe(true);
    });

    it('accepts proper urls for groups', () => {
        expect(vimeo.matchProviderByUrl("https://vimeo.com/groups")).toBe(false);
        expect(vimeo.matchProviderByUrl("https://vimeo.com/groups/weekendchallenge")).toBe(false);
        expect(vimeo.matchProviderByUrl("https://vimeo.com/groups/weekendchallenge/videos/210534764")).toBe(true);
    });

    it('accepts proper urls for ondemand', () => {
        expect(vimeo.matchProviderByUrl("https://vimeo.com/ondemand/browse/")).toBe(false);
        expect(vimeo.matchProviderByUrl("https://vimeo.com/ondemand/browse/animation")).toBe(false);
        expect(vimeo.matchProviderByUrl("https://vimeo.com/ondemand/suddenly1954")).toBe(true);

        //https://vimeo.com/ondemand/suddenly1954
    });
});

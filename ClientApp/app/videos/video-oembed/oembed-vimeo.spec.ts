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

    });

    it('accepts proper urls for channels', () => {

    });

    it('accepts proper urls for groups', () => {

    });

    it('accepts proper urls for ondemand', () => {

    });
});

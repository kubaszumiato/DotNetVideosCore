namespace DotNetVideosCore.Interfaces.OEmbed
{
    public interface IOEmbedProvider
    {
        string BaseUrl { get; }
        string UrlRegexPattern { get; }
        string ProviderName { get; }

    }
}
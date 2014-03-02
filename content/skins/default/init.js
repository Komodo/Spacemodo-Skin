var schemeService = Cc['@activestate.com/koScintillaSchemeService;1'].getService();
var schemeName = "Spacemodo";

if (schemeService.getScheme(schemeName) != schemeName)
{
    var _url = "chrome://spacemodo/content/schemes/Spacemodo.ksf";
    schemeService.loadSchemeFromURI(_url, schemeName);
}

var oldScheme = schemeService.activateScheme(schemeName);
ko.open._notifyHowtoRestoreOldScheme(schemeService, oldScheme, schemeName);

ko.prefs.setBoolean("showFileIcons", true);

if (koSkin.shouldFlushCaches)
{
    ko.prefs.setStringPref(
        koSkin.PREF_CUSTOM_ICONS,
        "chrome://spacemodo/content/iconsets/default/chrome.manifest"
    );
}

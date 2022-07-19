class Defaults {
    static setDocumentTitle(title) {
        document.title = title + " · Stackofsugar";
    }

    static imageAsset(filename, extension) {
        return "/assets/imgs/" + filename + "." + extension;
    }
}

export default Defaults;

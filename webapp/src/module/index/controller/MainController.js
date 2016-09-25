function MainController(MainService) {
    var self = this;
    self.fastNews = null;

    // *********************************
    // Internal methods
    // *********************************
    MainService
        .loadFastNews()
        .then( function( fastNews ) {
            self.fastNews = fastNews;
        });
}

export default ["MainService",MainController];

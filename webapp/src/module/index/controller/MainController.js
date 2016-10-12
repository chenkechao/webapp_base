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

    self.prev = function() {
        alert("prev");
    }
}

export default ["MainService",MainController];

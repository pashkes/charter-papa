/**
 * pgwBrowser init
 */
var pgwBrowser = $.pgwBrowser(),
    isMobile = navigator.userAgent.match(/Mobile/i) == "Mobile",
    ajaxUrl = "/wp-admin/admin-ajax.php",
    site_cookie_domain = "."+document.location.hostname.replace("www.","");

/**
 * Document ready functions
 */
(function ($) {
    $(document).ready(function () {

        /**
         * Add os and browser classes for body
         */
        if(pgwBrowser.browser.group){
            $("body").addClass(pgwBrowser.browser.group.replace(" ","").toLowerCase());
        }
        if(pgwBrowser.os.group){
            $("body").addClass(pgwBrowser.os.group.replace(" ","").toLowerCase());
        }

    });
})(jQuery);
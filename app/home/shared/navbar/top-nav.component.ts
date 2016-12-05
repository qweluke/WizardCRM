import { Component, OnInit } from '@angular/core';
import { TooltipDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'top-nav',
    templateUrl: 'navbar.html',
    host: {
        '(window:resize)': 'onResize($event)'
    }
})

export class TopNavComponent implements OnInit {

    public notificationOpen:boolean = false;
    public profileOpen:boolean = false;

    private CURRENT_URL:any;
    private BODY:any;
    private SIDEBAR_MENU:any;
    private SIDEBAR_FOOTER:any;
    private LEFT_COL:any;
    private RIGHT_COL:any;
    private NAV_MENU:any;
    private FOOTER:any;

    ngOnInit() {

        this.CURRENT_URL = window.location.href.split('#')[0].split('?')[0];
        this.BODY = $(document.getElementsByTagName('body'));
        this.SIDEBAR_MENU = $(document.getElementById('sidebar-menu'));
        this.SIDEBAR_FOOTER = $(document.getElementsByClassName('sidebar-footer'));
        this.LEFT_COL = $(document.getElementsByClassName('left_col'));
        this.RIGHT_COL = $(document.getElementsByClassName('right_col'));
        this.NAV_MENU = $(document.getElementsByClassName('nav_menu'));
        this.FOOTER = $(document.getElementsByTagName('footer'));

        // check active menu
        this.SIDEBAR_MENU.find('a[href="' + this.CURRENT_URL + '"]').parent('li').addClass('current-page');

        this.SIDEBAR_MENU.find('a').filter(function () {
            return this.href == this.CURRENT_URL;
        }).parent('li').addClass('current-page').parents('ul').slideDown(function () {
            this.setContentHeight();
        }).parent().addClass('active');

        this.setContentHeight();


    }

    onResize(event:any){
        this.setContentHeight();
    }

    toggleSidebar() {

        if (this.BODY.hasClass('nav-md')) {
            this.SIDEBAR_MENU.find('li.active ul').hide();
            this.SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
        } else {
            this.SIDEBAR_MENU.find('li.active-sm ul').show();
            this.SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
        }

        this.BODY.toggleClass('nav-md nav-sm');

        this.setContentHeight();

    }

    setContentHeight() {
        // reset height
        this.RIGHT_COL.css('min-height', window.innerHeight);

        let bodyHeight = this.BODY.outerHeight(),
            footerHeight = this.BODY.hasClass('footer_fixed') ? -10 : this.FOOTER.height(),
            leftColHeight = this.LEFT_COL.eq(1).height() + this.SIDEBAR_FOOTER.height(),
            contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

        // normalize content
        contentHeight -=this.NAV_MENU.height() + footerHeight;

        this.RIGHT_COL.css('min-height', contentHeight);
    }

    sidebarMenu(ev:any) {
        let $li = $(this).parent();

        if ($li.is('.active')) {
            $li.removeClass('active active-sm');
            $('ul:first', $li).slideUp(function () {
                this.setContentHeight();
            });
        } else {
            // prevent closing menu if we are on child menu
            if (!$li.parent().is('.child_menu')) {
                this.SIDEBAR_MENU.find('li').removeClass('active active-sm');
                this.SIDEBAR_MENU.find('li ul').slideUp();
            }

            $li.addClass('active');

            $('ul:first', $li).slideDown(function () {
                this.setContentHeight();
            });
        }
    }
}

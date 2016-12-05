import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.html'
})

export class SidebarComponent {

    isActive = false;
    showMenu:string = '';

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element:string, event:any) {


        var $li = $(event.target).parent();

        if ($li.is('.active')) {
            $li.removeClass('active active-sm');
            $('ul:first', $li).slideUp(function() {
                setContentHeight();
            });
        } else {
            // prevent closing menu if we are on child menu
            if (!$li.parent().is('.child_menu')) {
                //document.getElementById('sidebar-menu').querySelector('li').classList.add('active')
                $(document.getElementById('sidebar-menu')).find('li').removeClass('active active-sm');
                $(document.getElementById('sidebar-menu')).find('li ul').slideUp();
            }

            $li.addClass('active');

            $('ul:first', $li).slideDown(function() {
                setContentHeight();
            });
        }

        console.log( event );
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}

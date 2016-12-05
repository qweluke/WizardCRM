import { Injectable } from '@angular/core';

@Injectable()
export class FunctionsService {

    xPanelToggle(panel:any) {
        var $BOX_PANEL = $(panel).closest('.x_panel'),
            $ICON = $(this).find('i'),
            $BOX_CONTENT = $BOX_PANEL.find('.x_content');

        // fix for some div with hardcoded fix class
        if ($BOX_PANEL.attr('style')) {
            $BOX_CONTENT.slideToggle(200, function(){
                $BOX_PANEL.removeAttr('style');
            });
        } else {
            $BOX_CONTENT.slideToggle(200);
            $BOX_PANEL.css('height', 'auto');
        }

        $ICON.toggleClass('fa-chevron-up fa-chevron-down');
    }

    xPanelRemove(panel:any) {
        var $BOX_PANEL = $(panel).closest('.x_panel');

        $BOX_PANEL.remove();
    }
}

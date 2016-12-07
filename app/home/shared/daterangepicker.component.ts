import { Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
    selector: 'daterangepicker',
    template: `
  <div class="pull-right"
    style="margin-top: 5px; background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #E6E9ED">
           <button #daterangepicker
                type="submit"
                style="background-color: white; padding: 0px; margin: 0px; border: 0px;"
                >
                    <i class="glyphicon glyphicon-calendar fa fa-calendar"></i>
                    <span></span>
                    <b class="caret"></b>
           </button>

 </div> 
`
})
export class DaterangepickerComponent implements OnInit {

    @Input() options:any = {};
    @Output() selected = new EventEmitter();
    @ViewChild('daterangepicker') button:ElementRef;

    public ngOnInit():void {
        $(this.button.nativeElement).daterangepicker(this.options, this.callback.bind(this));
    }

    private callback(start:any, end:any) {
        let obj = {
            start: start,
            end: end
        };

        this.updateLabel(obj);

        this.selected.emit(obj);
    }

    private updateLabel(obj:any) {

        this.button.nativeElement.querySelector('span').innerHTML = obj.start.format('LL') + ' - ' + obj.end.format('LL');
    }
}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [
        TooltipModule
    ],
    declarations: [TooltipModule],
    exports: [TooltipModule]
})

export class TopNavModule { }
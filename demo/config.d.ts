import { GettingStartedSection } from './components/getting-started/getting-started';
import { AccordionSection } from './components/accordion-section';
import { AlertSection } from './components/alert-section';
import { ButtonsSection } from './components/buttons-section';
import { CarouselSection } from './components/carousel-section';
import { CollapseSection } from './components/collapse-section';
import { DatepickerSection } from './components/datepicker-section';
import { DropdownSection } from './components/dropdown-section';
import { PaginationSection } from './components/pagination-section';
import { ProgressbarSection } from './components/progressbar-section';
import { RatingSection } from './components/rating-section';
import { TabsSection } from './components/tabs-section';
import { TimepickerSection } from './components/timepicker-section';
import { TooltipSection } from './components/tooltip-section';
import { TypeaheadSection } from './components/typeahead-section';
export declare module config {
    let routes: ({
        path: string;
        name: string;
        component: typeof GettingStartedSection;
        useAsDefault: boolean;
    } | {
        path: string;
        name: string;
        component: typeof AccordionSection;
    } | {
        path: string;
        name: string;
        component: typeof AlertSection;
    } | {
        path: string;
        name: string;
        component: typeof ButtonsSection;
    } | {
        path: string;
        name: string;
        component: typeof CarouselSection;
    } | {
        path: string;
        name: string;
        component: typeof CollapseSection;
    } | {
        path: string;
        name: string;
        component: typeof DatepickerSection;
    } | {
        path: string;
        name: string;
        component: typeof DropdownSection;
    } | {
        path: string;
        name: string;
        component: typeof PaginationSection;
    } | {
        path: string;
        name: string;
        component: typeof ProgressbarSection;
    } | {
        path: string;
        name: string;
        component: typeof RatingSection;
    } | {
        path: string;
        name: string;
        component: typeof TabsSection;
    } | {
        path: string;
        name: string;
        component: typeof TimepickerSection;
    } | {
        path: string;
        name: string;
        component: typeof TooltipSection;
    } | {
        path: string;
        name: string;
        component: typeof TypeaheadSection;
    })[];
}

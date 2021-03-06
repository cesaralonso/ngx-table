import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var PixelConverter = /** @class */ (function () {
    function PixelConverter() {
    }
    PixelConverter.prototype.transform = function (value, args) {
        if (args === void 0) { args = []; }
        if (value === undefined) {
            return;
        }
        if (typeof value === 'string') {
            return value;
        }
        if (typeof value === 'number') {
            return value + 'px';
        }
    };
    PixelConverter = __decorate([
        Pipe({
            name: 'px'
        })
    ], PixelConverter);
    return PixelConverter;
}());
export { PixelConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9wZXRlY2gvbmd4LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL3B4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtwRDtJQUFBO0lBWUEsQ0FBQztJQVhDLGtDQUFTLEdBQVQsVUFBVSxLQUFzQixFQUFFLElBQW1CO1FBQW5CLHFCQUFBLEVBQUEsU0FBbUI7UUFDbkQsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLE9BQU87U0FDUjtRQUNELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixPQUFPLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBWFUsY0FBYztRQUgxQixJQUFJLENBQUM7WUFDSixJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUM7T0FDVyxjQUFjLENBWTFCO0lBQUQscUJBQUM7Q0FBQSxBQVpELElBWUM7U0FaWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdweCdcbn0pXG5leHBvcnQgY2xhc3MgUGl4ZWxDb252ZXJ0ZXIgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIGFyZ3M6IHN0cmluZ1tdID0gW10pOiBhbnkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gdmFsdWUgKyAncHgnO1xuICAgIH1cbiAgfVxufVxuIl19
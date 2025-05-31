/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var printTeacher = function (firstName, lastName) {
    var firstLetter = firstName.charAt(0);
    return ("".concat(firstLetter, ". ").concat(lastName));
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return ("Currently working");
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWNBLElBQU0sWUFBWSxHQUFHLFVBQUMsU0FBaUIsRUFBRSxRQUFnQjtJQUNyRCxJQUFJLFdBQVcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLE9BQU0sQ0FBQyxVQUFHLFdBQVcsZUFBSyxRQUFRLENBQUUsQ0FBQztBQUN6QyxDQUFDO0FBZUQ7SUFHSSxzQkFBWSxTQUFpQixFQUFFLFFBQWdCO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUTtJQUM1QixDQUFDO0lBRUQscUNBQWMsR0FBZDtRQUNJLE9BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFRlYWNoZXIge1xuICAgIHJlYWRvbmx5IGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGxhc3ROYW1lOiBzdHJpbmc7XG4gICAgZnVsbFRpbWVFbXBsb3llZTogYm9vbGVhbjtcbiAgICB5ZWFyc09mRXhwZXJpZW5jZT86IG51bWJlcjtcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuXG5pbnRlcmZhY2UgRGlyZWN0b3JzIGV4dGVuZHMgVGVhY2hlciB7XG4gICAgbnVtYmVyT2ZSZXBvcnRzOiBudW1iZXI7XG59XG5cbmNvbnN0IHByaW50VGVhY2hlciA9IChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZykgPT4ge1xuICAgIGxldCBmaXJzdExldHRlciA9IGZpcnN0TmFtZS5jaGFyQXQoMCk7XG4gICAgcmV0dXJuKGAke2ZpcnN0TGV0dGVyfS4gJHtsYXN0TmFtZX1gKVxufVxuXG5pbnRlcmZhY2UgcHJpbnRUZWFjaGVyRnVuY3Rpb24ge1xuICAgIChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZzsgXG59XG5cbmludGVyZmFjZSBTdHVkZW50Q2xhc3NDb25zdHJ1Y3RvciB7XG4gICAgbmV3KGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogU3R1ZGVudENsYXNzSW50ZXJmYWNlO1xufVxuXG5pbnRlcmZhY2UgU3R1ZGVudENsYXNzSW50ZXJmYWNlIHtcbiAgICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmc7XG4gICAgZGlzcGxheU5hbWUoKTogc3RyaW5nO1xufVxuXG5jbGFzcyBTdHVkZW50Q2xhc3Mge1xuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIGxhc3ROYW1lOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZVxuICAgIH1cblxuICAgIHdvcmtPbkhvbWV3b3JrKCkge1xuICAgICAgICByZXR1cm4oXCJDdXJyZW50bHkgd29ya2luZ1wiKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlyc3ROYW1lO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
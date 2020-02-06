#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../src/index"));
const cac_1 = __importDefault(require("cac"));
const cli = cac_1.default();
cli.command('hello [name]', 'Enter your name').action(() => {
    index_1.default();
});
cli.help();
cli.parse();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLHlEQUFnQztBQUNoQyw4Q0FBcUI7QUFFckIsTUFBTSxHQUFHLEdBQUcsYUFBRyxFQUFFLENBQUE7QUFFakIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFO0lBQ3pELGVBQUssRUFBRSxDQUFBO0FBQ1QsQ0FBQyxDQUFDLENBQUE7QUFFRixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUE7QUFDVixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG5cbmltcG9ydCBpbmRleCBmcm9tICcuLi9zcmMvaW5kZXgnXG5pbXBvcnQgY2FjIGZyb20gJ2NhYydcblxuY29uc3QgY2xpID0gY2FjKClcblxuY2xpLmNvbW1hbmQoJ2hlbGxvIFtuYW1lXScsICdFbnRlciB5b3VyIG5hbWUnKS5hY3Rpb24oKCkgPT4ge1xuICBpbmRleCgpXG59KVxuXG5jbGkuaGVscCgpXG5jbGkucGFyc2UoKVxuIl19
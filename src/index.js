"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = require("readline");
exports.default = () => {
    const [, , firstArg] = process.argv;
    if (!firstArg) {
        console.error('Please pass one argument!!');
        process.exit(1);
    }
    const msg = `
    Hello!! ${firstArg} san.
    I am Ryosuke Izumi.
    GitHub: https://github.com/ryo-is
    Twitter: https://twitter.com/is_ryo
  `;
    console.log(msg);
    const rl = readline_1.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Please enter names for your project: ', (answer) => {
        console.log(`Thank you!! Let's start ${answer}`);
        rl.close();
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUEwQztBQUUxQyxrQkFBZSxHQUFTLEVBQUU7SUFDeEIsTUFBTSxDQUFDLEVBQUUsQUFBRCxFQUFHLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUE7SUFFbkMsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtRQUMzQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ2hCO0lBRUQsTUFBTSxHQUFHLEdBQUc7Y0FDQSxRQUFROzs7O0dBSW5CLENBQUE7SUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBRWhCLE1BQU0sRUFBRSxHQUFHLDBCQUFlLENBQUM7UUFDekIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1FBQ3BCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtLQUN2QixDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsUUFBUSxDQUFDLHVDQUF1QyxFQUFFLENBQUMsTUFBYyxFQUFFLEVBQUU7UUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsTUFBTSxFQUFFLENBQUMsQ0FBQTtRQUVoRCxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDWixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUludGVyZmFjZSB9IGZyb20gJ3JlYWRsaW5lJ1xuXG5leHBvcnQgZGVmYXVsdCAoKTogdm9pZCA9PiB7XG4gIGNvbnN0IFssICwgZmlyc3RBcmddID0gcHJvY2Vzcy5hcmd2XG5cbiAgaWYgKCFmaXJzdEFyZykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1BsZWFzZSBwYXNzIG9uZSBhcmd1bWVudCEhJylcbiAgICBwcm9jZXNzLmV4aXQoMSlcbiAgfVxuXG4gIGNvbnN0IG1zZyA9IGBcbiAgICBIZWxsbyEhICR7Zmlyc3RBcmd9IHNhbi5cbiAgICBJIGFtIFJ5b3N1a2UgSXp1bWkuXG4gICAgR2l0SHViOiBodHRwczovL2dpdGh1Yi5jb20vcnlvLWlzXG4gICAgVHdpdHRlcjogaHR0cHM6Ly90d2l0dGVyLmNvbS9pc19yeW9cbiAgYFxuXG4gIGNvbnNvbGUubG9nKG1zZylcblxuICBjb25zdCBybCA9IGNyZWF0ZUludGVyZmFjZSh7XG4gICAgaW5wdXQ6IHByb2Nlc3Muc3RkaW4sXG4gICAgb3V0cHV0OiBwcm9jZXNzLnN0ZG91dFxuICB9KVxuXG4gIHJsLnF1ZXN0aW9uKCdQbGVhc2UgZW50ZXIgbmFtZXMgZm9yIHlvdXIgcHJvamVjdDogJywgKGFuc3dlcjogc3RyaW5nKSA9PiB7XG4gICAgY29uc29sZS5sb2coYFRoYW5rIHlvdSEhIExldCdzIHN0YXJ0ICR7YW5zd2VyfWApXG5cbiAgICBybC5jbG9zZSgpXG4gIH0pXG59XG4iXX0=
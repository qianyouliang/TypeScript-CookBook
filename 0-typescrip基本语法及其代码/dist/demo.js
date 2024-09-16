"use strict";
// 定义一个类来表示用户
class UserService {
    constructor() {
        this.users = [];
    }
    // 添加用户
    addUser(user) {
        this.users.push(user);
    }
    // 获取所有用户
    getUsers() {
        return this.users;
    }
    // 根据ID查找用户
    findUserById(id) {
        return this.users.find(user => user.id === id);
    }
    // 删除用户
    deleteUser(id) {
        this.users = this.users.filter(user => user.id !== id);
    }
}
// 创建一个 UserService 实例
const userService = new UserService();
// 添加一些用户
userService.addUser({ id: 1, name: "Alice", email: "alice@example.com", isAdmin: true });
userService.addUser({ id: 2, name: "Bob", email: "bob@example.com", isAdmin: false });
// 获取所有用户并打印
console.log("All Users:", userService.getUsers());
// 查找并打印特定用户
const user = userService.findUserById(1);
console.log("Found User:", user);
// 删除用户并打印剩余用户
userService.deleteUser(1);
console.log("Remaining Users:", userService.getUsers());

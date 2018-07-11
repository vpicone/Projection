import { UserModel } from "./schema/User";
import { ProjectModel } from "./schema/Project";
const mockUsers = require("./mock_users.json");
const mockProjects = require("./mock_projects.json");

const getUsers = async () => {
  const Promises = mockUsers.map(user => {
    const newUser = new UserModel({
      email: user.email,
      sub: user.id,
      username: user.username,
    });
    return newUser.save();
  });
  const savedUsers = await Promise.all(Promises);
  return savedUsers;
};

const getProjects = async () => {
  const Promises = mockProjects.map(({ name, description, user }) => {
    const userCount = Math.floor(Math.random() * 4) + 1;
    const users = [];
    for (let i = 0; i < userCount; i++) {
      users.push(Math.floor(Math.random() * 125) + 1);
    }
    const newProject = new ProjectModel({
      creator: user,
      description,
      name,
      users,
    });
    return newProject.save();
  });

  const savedProjects = await Promise.all(Promises);
  return savedProjects;
};

const loadData = async () => {
  await Promise.all([getUsers(), getProjects()]);
};

module.exports = loadData;

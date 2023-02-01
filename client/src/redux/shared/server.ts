import { setupServer } from "msw/node";
import { rest } from "msw";
import { Task } from "../../types/common";

// Initiate API
let taskList: Task[] = [{
    id: "1",
    name: "Do something",
    color: "blue",
    description: "My description",
}]

const handler = [
    rest.get("localhost:4000/api/v1/tasks", (req,res,ctx) => {
        return res(ctx.json(taskList));
    })
]

const server = setupServer(...handler);
export default server;
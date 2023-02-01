import { fetchAllTasks, taskReducer } from "../reducers/taskReducer";
import server from "../shared/server";
import { store } from "../store";

beforeAll(() => server.listen());
afterAll(() => server.close());

describe("TaskSlice", () => {
    test("Initiatal State", () => {
        expect(store.getState().taskReducer.allTasks.length).toBe(0);
    });

    test("Should fetch all teks", async () => {
        await store.dispatch(fetchAllTasks("abcid"));
        console.log("reducer", store.getState().taskReducer);
        expect(store.getState().taskReducer.allTasks.length).toBe(1);
        
    })
})
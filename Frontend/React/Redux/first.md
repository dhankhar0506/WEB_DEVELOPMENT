## What is Redux?
-> Redux is a state management library used to manage shared/global state in a centralized store. Components can access the required state from the store and dispatch actions to update it.
-> Redux is a predictable state-management library used to manage shared/global application state in a centralized store.
-> In React, state refers to data owned/managed by a component that can change over time and can affect the UI.
            Redux Store
        (Global State)
            /    |    \
        ↓     ↓     ↓
        Navbar  Cart  Profile

<!-- ## Steps of Redux
> create Store -> configureStroe({})
> Redux Provider -> <Provider store ={store}> </Provider>
> create Slice -> {name,intial State , reducer function -> (actions,state)} -> action payload -> 
> we register that reducer in store   {reducer : }
> use selector 
> useDispatch
> async thunk  -->

## Working of Redux 
> Suppose you're building a college portal.
    College Application

    Student Profile
    Faculty Profile
    Courses
    Attendance
    Notifications

    Navbar        → Student name + photo
    Profile       → Complete student details
    Dashboard     → Name + registration number
    Attendance    → Student ID
    Results       → Student ID

-> Without Redux, you may call the same API repeatedly or pass data through many components.
-> With Redux, we can fetch the data, store shared state centrally, and let components read the pieces they need.

## What is Redux Store?
-> Store is the central place where Redux keeps the application's shared state/data
    Redux Store
        │
        ├── studentSlice
        │    ├── name
        │    ├── rollNo
        │    ├── registrationNo
        │    └── course
        │
        ├── facultySlice
        │    ├── name
        │    ├── facultyId
        │    └── department
        │
        └── courseSlice
            ├── courseName
            └── courseId
    
    -> configureStore() basically creates/configures our Redux store.
    
    import { configureStore } from "@reduxjs/toolkit";
        export const store = configureStore({
            reducer: {
                student: studentReducer
            }
        });

## What is redux-toolkit? 
-> Redux Toolkit is the recommended modern way to write Redux logic. It simplifies Redux by providing APIs like configureStore, createSlice, and createAsyncThunk and reduces boilerplate.

## what is Slice?
-> A slice is a feature-specific part of the Redux Store that contains its state and the logic to update that state

## what are reducers in redux slice ?
->Reducers contain the logic for updating the state.

## what is reducer?
->A reducer is a function that determines how state should change. It receives the current state and an action. The action contains a type and can contain a payload with data required for the update.

## What is Redux Store?
Store is the central place where Redux keeps the application's shared/global state.
                  Redux Store
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
     student         faculty        courses
        │
        ├── name
        ├── rollNo
        └── course

->Components read the required data using: useSelector()
->equest updates using: useDispatch()
-> The Redux store is the central container that holds Redux application state. We use it to manage shared state in one place so multiple components can access it using useSelector and update it by dispatching actions. The store is created using configureStore, where we register the reducers for different slices.


> Install Redux Toolkit
 npm install @reduxjs/toolkit react-redux
    
    @reduxjs/toolkit
        → Store, Slice, Reducers, Thunk etc.

    react-redux
        → Connect Redux with React
        → Provider, useSelector, useDispatch    

> Folder Structure
    src/
    │
    ├── redux/
    │   ├── store.js
    │   └── counterSlice.js
    │
    ├── App.jsx
    └── main.jsx

> Create Counter Slice
    : counterSlice.js
    
    import { createSlice } from "@reduxjs/toolkit";

        const counterSlice = createSlice({

            // This is the name/identity of our slice.
            name: "counter",

            // This is the starting state of our counter.
            initialState: {count: 1},

            // -> How this slice's state can change.
            reducers: { 
                increment: (state) => {
                    if (state.count < 20) {
                        state.count += 1;
                    }
                },

                decrement: (state) => {
                    if (state.count > 1) {
                        state.count -= 1;
                    }
                },

                incrementByValue: (state, action) => {
                    const newCount = state.count + action.payload;
                    if (newCount <= 20) {
                        state.count = newCount;
                    }
                }
            }
        });


        export const { increment,  decrement,  incrementByValue} = counterSlice.actions;    
        
        export default counterSlice.reducer;

> Create Store
    - configureStore() creates and configures the Redux store.
    - 

        import { configureStore } from "@reduxjs/toolkit";
        import counterReducer from "./counterSlice";

        export const store = configureStore({

            reducer: {

                counter: counterReducer

            }

        });

> Provider
    - Provider makes the Redux store available to React components inside it.
    - main.js 
    -  import { StrictMode } from "react";

        import { createRoot } from "react-dom/client";
        import { Provider } from "react-redux";
        import { store } from "./redux/store";
        import App from "./App";


        createRoot(document.getElementById("root")).render(

        <StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </StrictMode>

);

> Now Build Counter Component
    - App.jsx
    - import { useState } from "react";

        import {useDispatch,useSelector } from "react-redux";
        import {increment, decrement,incrementByValue } from "./redux/counterSlice";

        function App() {
            // 1. Read count from Redux Store
            - State =>  state represents the complete Redux store state.
            const count = useSelector(state => state.counter.count );
            
            // 2. Get dispatch function
            const dispatch = useDispatch();
            
            const [value, setValue] = useState(1);


        return (
            <div>

                <h1>
                    Count: {count}
                </h1>


                <button onClick={() => dispatch(increment())}>
                    Add
                </button>


                <button onClick={() => dispatch(decrement())}>
                    Subtract
                </button>


                <input
                    type="number"
                    value={value}
                    onChange={(e) =>
                    setValue(Number(e.target.value))}
                />


            <button onClick={() =>dispatch(incrementByValue(value))}>
                    Add Value
            </button>

            </div>
        );
        }


        export default App;



## Redux Toolkit + API

-> src/
    │
    ├── redux/
    │   ├── store.js
    │   └── courseSlice.js
    │
    ├── Courses.jsx
    ├── App.jsx
    └── main.jsx


## Create Slice + API Call

> "course/getCourses" =>It's an action type prefix that we choose.
    -> "sliceName/actionName"

        course/getCourses
        ↑        ↑
        slice     operation

> Redux Toolkit uses it to generate:

    -> course/getCourses/pending
    -> course/getCourses/fulfilled
    -> course/getCourses/rejected

> extraReducers
    -> extraReducers is commonly used to handle state changes for async operations, such as the pending, fulfilled, and rejected actions generated by createAsyncThunk.

    import {
    createSlice,
    createAsyncThunk
    } from "@reduxjs/toolkit";


// 1. Define API call
    export const getCourses = createAsyncThunk(

    "course/getCourses",

    async () => {

        const response = await fetch("/api/courses");

        const data = await response.json();

        return data;
    }
    );


// 2. Create Slice
    const courseSlice = createSlice({

    name: "course",

    initialState: {
        courses: [],
        loading: false,
        error: null
    },

    reducers: {},


// 3. Handle API states
    extraReducers: (builder) => {

        builder

        .addCase(getCourses.pending, (state) => {

            state.loading = true;
            state.error = null;

        })


        .addCase(
            getCourses.fulfilled,
            (state, action) => {

            state.loading = false;

            state.courses = action.payload;

            }
        )


        .addCase(
            getCourses.rejected,
            (state, action) => {

            state.loading = false;

            state.error = action.error.message;

            }
        );

    }

});


// 4. Export reducer
export default courseSlice.reducer;
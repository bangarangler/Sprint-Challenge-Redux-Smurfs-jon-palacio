1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
filter, map, reduce.  Object.create()
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions are the thing that you want to do. reducers are the intermediate between
what you want to do and since the recucer is always in sync with the store it is
able to allow or not allow the action that you are wanting to do.  store is like
the central vault that holds your state.  if you go to the bank you don't go
into the vault. you have something you want to do (the action), you take that to
the teller (reducer) who then decides what to do with it and gets what you need
and only what you are allowed from the vault.  single source as you want all of
your crucial state for the app in your store instead of say on the app where you
have to pass it all down through props.  if it's all in the store then you can
{connect} to it from where ever you need. but since it's in the store its
relativly safe from side effects when done correctly.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
application state is what you want in the store. it's all the vital data your
app needs.  component state would be like a form controlled input. you probably
want to have that state on the component because only that component really
cares about the data being changed in that component.
1.  What is middleware?
middleware is like a middle man. it catches things between dispatch and reducer
and can forward it on or alter it of log it. what every you decide to do with it
once you catch it with your middleware.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux thunk is a way to run things like promises that are synchrinous.  by
default javascript is async and you need a way to split things up and wait for
actions before the code continues to run.  thunk allows you to do just that. you
intercept the dispatched action and can send it through or stop it or reply with
something else and wait for something to get back before you allow it to
continue through
1.  Which `react-redux` method links up our `components` with our `redux store`?
you have to connect the store. so { connect } will be needed on any component
you want to have access to the store created with redux

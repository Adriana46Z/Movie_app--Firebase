# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useUpsertUser, useAddFavoritedMovie, useDeleteFavoritedMovie, useAddReview, useDeleteReview, useListMovies, useGetMovieById, useGetActorById, useGetCurrentUser, useGetIfFavoritedMovie } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useUpsertUser(upsertUserVars);

const { data, isPending, isSuccess, isError, error } = useAddFavoritedMovie(addFavoritedMovieVars);

const { data, isPending, isSuccess, isError, error } = useDeleteFavoritedMovie(deleteFavoritedMovieVars);

const { data, isPending, isSuccess, isError, error } = useAddReview(addReviewVars);

const { data, isPending, isSuccess, isError, error } = useDeleteReview(deleteReviewVars);

const { data, isPending, isSuccess, isError, error } = useListMovies(listMoviesVars);

const { data, isPending, isSuccess, isError, error } = useGetMovieById(getMovieByIdVars);

const { data, isPending, isSuccess, isError, error } = useGetActorById(getActorByIdVars);

const { data, isPending, isSuccess, isError, error } = useGetCurrentUser();

const { data, isPending, isSuccess, isError, error } = useGetIfFavoritedMovie(getIfFavoritedMovieVars);

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { upsertUser, addFavoritedMovie, deleteFavoritedMovie, addReview, deleteReview, listMovies, getMovieById, getActorById, getCurrentUser, getIfFavoritedMovie } from '@dataconnect/generated';


// Operation UpsertUser:  For variables, look at type UpsertUserVars in ../index.d.ts
const { data } = await UpsertUser(dataConnect, upsertUserVars);

// Operation AddFavoritedMovie:  For variables, look at type AddFavoritedMovieVars in ../index.d.ts
const { data } = await AddFavoritedMovie(dataConnect, addFavoritedMovieVars);

// Operation DeleteFavoritedMovie:  For variables, look at type DeleteFavoritedMovieVars in ../index.d.ts
const { data } = await DeleteFavoritedMovie(dataConnect, deleteFavoritedMovieVars);

// Operation AddReview:  For variables, look at type AddReviewVars in ../index.d.ts
const { data } = await AddReview(dataConnect, addReviewVars);

// Operation DeleteReview:  For variables, look at type DeleteReviewVars in ../index.d.ts
const { data } = await DeleteReview(dataConnect, deleteReviewVars);

// Operation ListMovies:  For variables, look at type ListMoviesVars in ../index.d.ts
const { data } = await ListMovies(dataConnect, listMoviesVars);

// Operation GetMovieById:  For variables, look at type GetMovieByIdVars in ../index.d.ts
const { data } = await GetMovieById(dataConnect, getMovieByIdVars);

// Operation GetActorById:  For variables, look at type GetActorByIdVars in ../index.d.ts
const { data } = await GetActorById(dataConnect, getActorByIdVars);

// Operation GetCurrentUser: 
const { data } = await GetCurrentUser(dataConnect);

// Operation GetIfFavoritedMovie:  For variables, look at type GetIfFavoritedMovieVars in ../index.d.ts
const { data } = await GetIfFavoritedMovie(dataConnect, getIfFavoritedMovieVars);


```
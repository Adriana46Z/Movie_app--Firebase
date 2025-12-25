import { UpsertUserData, UpsertUserVariables, AddFavoritedMovieData, AddFavoritedMovieVariables, DeleteFavoritedMovieData, DeleteFavoritedMovieVariables, AddReviewData, AddReviewVariables, DeleteReviewData, DeleteReviewVariables, ListMoviesData, ListMoviesVariables, GetMovieByIdData, GetMovieByIdVariables, GetActorByIdData, GetActorByIdVariables, GetCurrentUserData, GetIfFavoritedMovieData, GetIfFavoritedMovieVariables, SearchAllData, SearchAllVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useUpsertUser(options?: useDataConnectMutationOptions<UpsertUserData, FirebaseError, UpsertUserVariables>): UseDataConnectMutationResult<UpsertUserData, UpsertUserVariables>;
export function useUpsertUser(dc: DataConnect, options?: useDataConnectMutationOptions<UpsertUserData, FirebaseError, UpsertUserVariables>): UseDataConnectMutationResult<UpsertUserData, UpsertUserVariables>;

export function useAddFavoritedMovie(options?: useDataConnectMutationOptions<AddFavoritedMovieData, FirebaseError, AddFavoritedMovieVariables>): UseDataConnectMutationResult<AddFavoritedMovieData, AddFavoritedMovieVariables>;
export function useAddFavoritedMovie(dc: DataConnect, options?: useDataConnectMutationOptions<AddFavoritedMovieData, FirebaseError, AddFavoritedMovieVariables>): UseDataConnectMutationResult<AddFavoritedMovieData, AddFavoritedMovieVariables>;

export function useDeleteFavoritedMovie(options?: useDataConnectMutationOptions<DeleteFavoritedMovieData, FirebaseError, DeleteFavoritedMovieVariables>): UseDataConnectMutationResult<DeleteFavoritedMovieData, DeleteFavoritedMovieVariables>;
export function useDeleteFavoritedMovie(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteFavoritedMovieData, FirebaseError, DeleteFavoritedMovieVariables>): UseDataConnectMutationResult<DeleteFavoritedMovieData, DeleteFavoritedMovieVariables>;

export function useAddReview(options?: useDataConnectMutationOptions<AddReviewData, FirebaseError, AddReviewVariables>): UseDataConnectMutationResult<AddReviewData, AddReviewVariables>;
export function useAddReview(dc: DataConnect, options?: useDataConnectMutationOptions<AddReviewData, FirebaseError, AddReviewVariables>): UseDataConnectMutationResult<AddReviewData, AddReviewVariables>;

export function useDeleteReview(options?: useDataConnectMutationOptions<DeleteReviewData, FirebaseError, DeleteReviewVariables>): UseDataConnectMutationResult<DeleteReviewData, DeleteReviewVariables>;
export function useDeleteReview(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteReviewData, FirebaseError, DeleteReviewVariables>): UseDataConnectMutationResult<DeleteReviewData, DeleteReviewVariables>;

export function useListMovies(vars?: ListMoviesVariables, options?: useDataConnectQueryOptions<ListMoviesData>): UseDataConnectQueryResult<ListMoviesData, ListMoviesVariables>;
export function useListMovies(dc: DataConnect, vars?: ListMoviesVariables, options?: useDataConnectQueryOptions<ListMoviesData>): UseDataConnectQueryResult<ListMoviesData, ListMoviesVariables>;

export function useGetMovieById(vars: GetMovieByIdVariables, options?: useDataConnectQueryOptions<GetMovieByIdData>): UseDataConnectQueryResult<GetMovieByIdData, GetMovieByIdVariables>;
export function useGetMovieById(dc: DataConnect, vars: GetMovieByIdVariables, options?: useDataConnectQueryOptions<GetMovieByIdData>): UseDataConnectQueryResult<GetMovieByIdData, GetMovieByIdVariables>;

export function useGetActorById(vars: GetActorByIdVariables, options?: useDataConnectQueryOptions<GetActorByIdData>): UseDataConnectQueryResult<GetActorByIdData, GetActorByIdVariables>;
export function useGetActorById(dc: DataConnect, vars: GetActorByIdVariables, options?: useDataConnectQueryOptions<GetActorByIdData>): UseDataConnectQueryResult<GetActorByIdData, GetActorByIdVariables>;

export function useGetCurrentUser(options?: useDataConnectQueryOptions<GetCurrentUserData>): UseDataConnectQueryResult<GetCurrentUserData, undefined>;
export function useGetCurrentUser(dc: DataConnect, options?: useDataConnectQueryOptions<GetCurrentUserData>): UseDataConnectQueryResult<GetCurrentUserData, undefined>;

export function useGetIfFavoritedMovie(vars: GetIfFavoritedMovieVariables, options?: useDataConnectQueryOptions<GetIfFavoritedMovieData>): UseDataConnectQueryResult<GetIfFavoritedMovieData, GetIfFavoritedMovieVariables>;
export function useGetIfFavoritedMovie(dc: DataConnect, vars: GetIfFavoritedMovieVariables, options?: useDataConnectQueryOptions<GetIfFavoritedMovieData>): UseDataConnectQueryResult<GetIfFavoritedMovieData, GetIfFavoritedMovieVariables>;

export function useSearchAll(vars: SearchAllVariables, options?: useDataConnectQueryOptions<SearchAllData>): UseDataConnectQueryResult<SearchAllData, SearchAllVariables>;
export function useSearchAll(dc: DataConnect, vars: SearchAllVariables, options?: useDataConnectQueryOptions<SearchAllData>): UseDataConnectQueryResult<SearchAllData, SearchAllVariables>;

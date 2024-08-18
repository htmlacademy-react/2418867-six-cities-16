import { createAction, PrepareAction } from '@reduxjs/toolkit';
import { StatusCodes } from 'http-status-codes';
import { AppRoute, SortType } from '../const';
import { CityEntity } from '../types';

export const setCurrentCity = createAction<PrepareAction<CityEntity>>(
  'setCurrentCity',
  (city: CityEntity) => ({ payload: city })
);

export const clearFavoritesOffers = createAction('clearFavoritesOffers');

export const setCurrentSort = createAction<PrepareAction<SortType>>(
  'setCurrentSort',
  (sort: SortType) => ({ payload: sort })
);

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

export const setResponseStatus = createAction<StatusCodes>('setResponseStatus');

export const ADD_IMAGE_CACHE = 'cache/ADD_IMAGE_CACHE';
export const CLEAR_CACHE = 'cache/CLEAR_CACHE';

interface addImageCacheAction {
  type: typeof ADD_IMAGE_CACHE;
  key: string;
  value: string;
}

interface clearCacheAction {
  type: typeof CLEAR_CACHE;
}

export type actionTypes = addImageCacheAction | clearCacheAction;

export const addImageCache = (key: string, value: string) => ({
  type: ADD_IMAGE_CACHE,
  key,
  value,
});

export const clearCache = () => {
  console.log('[CLEAR_CACHE]');

  return {
    type: CLEAR_CACHE,
  };
};

export const cacheActionCreators = {
  addImageCache,
  clearCache,
};

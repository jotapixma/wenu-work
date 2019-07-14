const BASE_URL = 'https://rickandmortyapi.com/api/character/';

const objectToUrlParams = (obj = {}) => {
  const keys = Object.keys(obj);

  return keys.length > 0 ? 
    `?${keys.map((key) => `${key}=${obj[key]}`).join('&')}` : 
    
    '';
}

export const callAPi = (params) => fetch(`${BASE_URL}${params && objectToUrlParams(params) || ''}`)
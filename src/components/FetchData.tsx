export interface FetchOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: Record<string, string>;
    body?: any;
}

async function fetchData<T>(url: string, options?: FetchOptions): Promise<T>{

    

    const { method = 'GET', headers = {}, body } = options || {};
    const fetchOptions: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
    };

    try {
      const response = await fetch(url, fetchOptions);
  
      if (!response.ok) {
        throw new Error('Błąd podczas pobierania danych.');
      }
  
      const data: T = await response.json();
  
      return data;
    } catch (error) {
        if(process.env.NODE_ENV === 'development'){
            throw new Error(`Błąd: ${(error as Error).message}`);
        }
        else
        {
            throw new Error(`Błąd: Wystąpił nieznany błąd.`);
        }
    }
};

export default fetchData;
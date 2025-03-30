

const API_KEY:string = "Hy28GIGoPd6IMlpaz3PXyA==JV0XQTL4NCnFGRfl"
export let FLAG_URL:any = null

export async function GetCountryFlag(CountryISO: string) {
    const url = `https://api.api-ninjas.com/v1/countryflag?country=${CountryISO}`;
    
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': API_KEY,
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json(); 
      FLAG_URL =  data
      return data.length > 0 ? data[0] : null;

    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }
  



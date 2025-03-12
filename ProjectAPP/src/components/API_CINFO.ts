

const API_KEY:string = "Hy28GIGoPd6IMlpaz3PXyA==JV0XQTL4NCnFGRfl"


export async function getCountryInfo(countryName: string) {
    const url = `https://api.api-ninjas.com/v1/country?name=${countryName}`;
    
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': API_KEY,
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();  // TypeScript will infer the type here.
      return data.length > 0 ? data[0] : null;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }
  
  // Usage


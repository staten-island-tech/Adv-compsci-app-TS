

const API_KEY:string = "Hy28GIGoPd6IMlpaz3PXyA==JV0XQTL4NCnFGRfl"
export let outputvalues:any = null

export async function paramcountry(input:string) {
    const url = `https://api.api-ninjas.com/v1/country?limit=30&${input}`; // & symbol to add more quesrys in the search
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': API_KEY,
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json(); 
      outputvalues = data
      return data.length > 0 ? data[0] : null;

    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }
  


  // Usage


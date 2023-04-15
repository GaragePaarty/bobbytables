export class ChatGPTClient {
    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async getCompletion(prompt: string) {
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{"role": "user", "content": prompt}], 
            max_tokens: 50,
            n: 1,
            temperature: 0.7,
            top_p: 1,
          }),
        };
      
        const response = await fetch('https://api.openai.com/v1/chat/completions', requestOptions);
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
      
        const result = await response.json();
        
        if (!result.choices || !result.choices[0] || !result.choices[0].message) {
          throw new Error('Unexpected API response format');
        }
      
        return result.choices[0];
      }
      
}

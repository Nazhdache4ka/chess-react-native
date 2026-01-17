import { IChatSession, ChatSession } from '@/shared';
import OpenAI from 'openai';

const MODEL = 'gpt-4o-mini';

export class OpenAiSession implements IChatSession {
  private messages: ChatSession = [];
  private client: OpenAI | null = null;
  private systemPrompt: string = '';

  public initialize(apiKey: string, systemPrompt: string): void {
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not set');
    }
    this.client = new OpenAI({ apiKey });
    this.systemPrompt = systemPrompt;
    this.messages = [{ role: 'system', content: systemPrompt }];
  }

  public async sendMove(move: string): Promise<string> {
    if (!this.client) {
      throw new Error('Session not initialized. Call initialize() first.');
    }

    this.messages.push({ role: 'user', content: move });

    const response = await this.client.chat.completions.create({
      model: MODEL,
      messages: this.messages,
    });

    if (!response.choices[0].message.content) {
      throw new Error('No response from OpenAI');
    }

    const aiResponse = response.choices[0].message.content;
    this.messages.push({ role: 'assistant', content: aiResponse });

    return aiResponse;
  }

  public reset(): void {
    this.messages = [{ role: 'system', content: this.systemPrompt }];
  }
}
